(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
	typeof define === 'function' && define.amd ? define(['exports'], factory) :
	(global = global || self, factory(global.BasicRenderer = {}));
}(this, (function (exports) { 'use strict';


        /* ------------------------------------------------------------ */


        
    function inside( x, y, primitive  ) {

        // Só continua para o teste da primitiva se passar no teste da bounding box
        if (!insideBoundingBox(x, y, primitive.bounding_box))
            return false;

        for (var i = 0; i < primitive.vertices.length; i++) {

            if (i == primitive.vertices.length-1) 
                var j = 0;
            else
                var j = i+1;

            var P0 = primitive.vertices[i];
            var P1 = primitive.vertices[j];

            // Teste de interseção para cada lado do triângulo/polígono
            var L = -(x-P0[0])*(P1[1]-P0[1]) + (y-P0[1])*(P1[0]-P0[0]);

            if (L < 0)
                return false;

        }

        return true;
    }

    function insideBoundingBox( x, y, bounding_box ) {
        // Realiza um teste de intersenção para retângulos
        // Verifica se x está entre o menor e o maior valor da base e se y está entre a menor e maior altura

        if (x >= bounding_box[0][0] && x <= bounding_box[0][1] && y >= bounding_box[1][0] && y <= bounding_box[1][1]) 
            return true;
        
        return false;
    }

    function transformation( primitive ) {
        // Aplica a tranformação na primitiva atual

            var new_vertices = [];

            for (var vertice of primitive.vertices) {
                for (var matrix of primitive.xform) {
                    // Aqui é realizada a multiplicação da matriz da tranformação com cada vértice da primitiva e os valores são adicionados em uma nova lista
                    var v = vertice[0]*matrix[0] + vertice[1]*matrix[1] + matrix[2];
                    new_vertices.push(v);
                }
            }

            // Aqui os vértices antes da tranformação são desconsiderados e trocados pelos vértices após a aplicação da transformação
            primitive.vertices = [];
            for (var i = 0; i < new_vertices.length; i+=3) {
                primitive.vertices.push([new_vertices[i],new_vertices[i+1]]);
            }

    }

    function triangulation( primitive ) {
        // Realiza a triangulação do círculo

        var cx = primitive.center[0];
        var cy = primitive.center[1];
        var r = primitive.radius;
        var vertices = [];

        // Cria pontos no círculo até completar uma volta completa partindo do PI. 
        // O número de pontos é definido pelo número de passos. Nesse caso, número de pontos = 32*2 + 1 = 65.
        for(var i = Math.PI; i <= 3*Math.PI; i += Math.PI/32){

            var x1 = r * Math.cos(i) + cx;
            var x2 = r * Math.sin(i) + cy;
            vertices.push([x1, x2]);

        }

        primitive["vertices"] = vertices;

    }
        
    
    function Screen( width, height, scene ) {
        this.width = width;
        this.height = height;
        this.scene = this.preprocess(scene);   
        this.createImage(); 
    }

    Object.assign( Screen.prototype, {

            preprocess: function(scene) {
                
                var preprop_scene = [];

                for( var primitive of scene ) {  

                    // Se a primitiva for um círculo, é realizado o processo de triangulação
                    if (primitive.shape=="circle")
                        triangulation(primitive);
                    
                    // Verifica se existe uma transformação para ser aplicada
                    if (primitive.hasOwnProperty('xform'))
                        transformation(primitive);

                    // Cria uma bounding_box para cada primitiva
                    var max_width = 0;
                    var min_width = Number.MAX_VALUE;
                    var max_height = 0;
                    var min_height = Number.MAX_VALUE;

                    for (var vertice of primitive.vertices) {
                        max_width = Math.max(max_width,vertice[0]);
                        min_width = Math.min(min_width,vertice[0]);
                        max_height = Math.max(max_height,vertice[1]);
                        min_height = Math.min(min_height,vertice[1]);
                    }  

                    // A bounding box é criada como um array com os valores da base no primeiro elemento e os valores da altura no segundo elemento
                    primitive["bounding_box"] = [ [min_width, max_width], [min_height, max_height] ];
                    

                    preprop_scene.push( primitive );
                    
                }

                
                return preprop_scene;
            },

            createImage: function() {
                this.image = nj.ones([this.height, this.width, 3]).multiply(255);
            },

            rasterize: function() {
                var color;
         
                // In this loop, the image attribute must be updated after the rasterization procedure.
                for( var primitive of this.scene ) {
                
                    // Loop through all pixels
                    for (var i = 0; i < this.width; i++) {
                        var x = i + 0.5;
                        for( var j = 0; j < this.height; j++) {
                            var y = j + 0.5;

                            // First, we check if the pixel center is inside the primitive 
                            if ( inside( x, y, primitive ) ) {
                                // only solid colors for now
                                color = nj.array(primitive.color);
                                this.set_pixel( i, this.height - (j + 1), color );
                            }
                            
                        }
                    }
                }
                
               
              
            },

            set_pixel: function( i, j, colorarr ) {
                // We assume that every shape has solid color
         
                this.image.set(j, i, 0,    colorarr.get(0));
                this.image.set(j, i, 1,    colorarr.get(1));
                this.image.set(j, i, 2,    colorarr.get(2));
            },

            update: function () {
                // Loading HTML element
                var $image = document.getElementById('raster_image');
                $image.width = this.width; $image.height = this.height;

                // Saving the image
                nj.images.save( this.image, $image );
            }
        }
    );

    exports.Screen = Screen;
    
})));

