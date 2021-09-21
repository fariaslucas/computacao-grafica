function WaveAnimation() {}

Object.assign( WaveAnimation.prototype, {

    init: function() {

        // ------------------ Animações

        let rightUpperArmTween = new TWEEN.Tween( {theta:0, y:0} )
            .to( {theta:Math.PI/2, y:2} , 500)
            .onUpdate(function(){
                // This is an example of rotation of the right_upper_arm 
                // Notice that the transform is M = T * R 
                let right_upper_arm =  robot.getObjectByName("right_upper_arm");
                
                right_upper_arm.matrix.makeRotationZ(this._object.theta).premultiply( new THREE.Matrix4().makeTranslation( 2.6, this._object.y, 0 ) );

                // Updating final world matrix (with parent transforms) - mandatory
                right_upper_arm.updateMatrixWorld(true);
    
                // Updating screen
                stats.update();
                renderer.render(scene, camera);
            })

    
        let rightLowerArmTween = new TWEEN.Tween( {theta:0, x:0, y:-3} )
            .to( {theta:Math.PI/2, x:1.5, y:-2} , 500)
            .onUpdate(function(){
                let right_upper_arm  = robot.getObjectByName("right_upper_arm");

                let right_lower_arm = right_upper_arm.getObjectByName("lower_arm");
                right_lower_arm.matrix.makeRotationZ(this._object.theta).premultiply( new THREE.Matrix4().makeTranslation( this._object.x, this._object.y, 0 ) );

                right_lower_arm.updateMatrixWorld(true);

                stats.update();
                renderer.render(scene, camera); 
            })


        let rightHandTween = new TWEEN.Tween( {theta:Math.PI/-6} )
            .to( {theta:Math.PI/6} , 500)
            .repeat(5)
            .yoyo(true)
            .onUpdate(function(){
                let right_upper_arm  = robot.getObjectByName("right_upper_arm");

                let right_lower_arm = right_upper_arm.getObjectByName("lower_arm");
                
                let right_hand = right_lower_arm.getObjectByName("hand");
                right_hand.matrix.makeRotationZ(this._object.theta).premultiply( new THREE.Matrix4().makeTranslation( 0, -1.5, 0 ) );

                right_hand.updateMatrixWorld(true);

                stats.update();
                renderer.render(scene, camera); 
            })
            .onComplete( function() {
                //Ao completar a animação, retorna todas as anteriores ao estado inicial
                
                leftLowerArmReturnTween.start();
                leftHandReturnTween.start();
                headReturnTween.start();
                rightLowerArmReturnTween.start();
                rightUpperArmReturnTween.start();
                rightHandReturnTween.start();
            })


        let leftLowerArmTween = new TWEEN.Tween( {theta:0, x:0} )
            .to( {theta:Math.PI/-25, x:-0.25} , 500)
            .onUpdate(function(){
                let left_upper_arm  = robot.getObjectByName("left_upper_arm");

                let left_lower_arm = left_upper_arm.getObjectByName("lower_arm");
                left_lower_arm.matrix.makeRotationZ(this._object.theta).premultiply( new THREE.Matrix4().makeTranslation( this._object.x, -3, 0 ) );

                left_lower_arm.updateMatrixWorld(true);

                stats.update();
                renderer.render(scene, camera); 
            })


        let headTween = new TWEEN.Tween( {x:0, y:4.8} )
            .to( {x:-0.25, y:5 }, 500)
            .onUpdate(function(){
                let head =  robot.getObjectByName("head");
                head.matrix.makeTranslation( this._object.x, this._object.y, -0.05 );
                
                head.updateMatrixWorld(true);
            
                stats.update();
                renderer.render(scene, camera);
            })

        let leftHandTween = new TWEEN.Tween( {theta:0} )
            .to( {theta:Math.PI/-10} , 500)
            .onUpdate(function(){
                let left_upper_arm  = robot.getObjectByName("left_upper_arm");

                let left_lower_arm = left_upper_arm.getObjectByName("lower_arm");
                
                let left_hand = left_lower_arm.getObjectByName("hand");
                left_hand.matrix.makeRotationZ(this._object.theta).premultiply( new THREE.Matrix4().makeTranslation( 0, -1.5, 0 ) );

                left_hand.updateMatrixWorld(true);

                stats.update();
                renderer.render(scene, camera); 
            })

        // ------------------ Animações de retorno ao estado inicial do robô

        let rightUpperArmReturnTween = new TWEEN.Tween( {theta:Math.PI/2, y:2} )
            .to( {theta:0, y:0} , 500)
            .onUpdate(function(){
            
                let right_upper_arm =  robot.getObjectByName("right_upper_arm");
                
                right_upper_arm.matrix.makeRotationZ(this._object.theta).premultiply( new THREE.Matrix4().makeTranslation( 2.6, this._object.y, 0 ) );

                
                right_upper_arm.updateMatrixWorld(true);
    
                stats.update();
                renderer.render(scene, camera);
            })

        let rightLowerArmReturnTween = new TWEEN.Tween( {theta:Math.PI/2, x:1.5, y:-2} )
            .to( {theta:0, x:0, y:-3} , 500)
            .onUpdate(function(){
                let right_upper_arm  = robot.getObjectByName("right_upper_arm");

                let right_lower_arm = right_upper_arm.getObjectByName("lower_arm");
                right_lower_arm.matrix.makeRotationZ(this._object.theta).premultiply( new THREE.Matrix4().makeTranslation( this._object.x, this._object.y, 0 ) );

                right_lower_arm.updateMatrixWorld(true);

                stats.update();
                renderer.render(scene, camera); 
            })

        let rightHandReturnTween = new TWEEN.Tween( {theta:Math.PI/-6} )
            .to( {theta:0} , 500)
            .onUpdate(function(){
                let right_upper_arm  = robot.getObjectByName("right_upper_arm");

                let right_lower_arm = right_upper_arm.getObjectByName("lower_arm");
                
                let right_hand = right_lower_arm.getObjectByName("hand");
                right_hand.matrix.makeRotationZ(this._object.theta).premultiply( new THREE.Matrix4().makeTranslation( 0, -1.5, 0 ) );

                right_hand.updateMatrixWorld(true);

                stats.update();
                renderer.render(scene, camera); 
            })

        let leftLowerArmReturnTween = new TWEEN.Tween( {theta:Math.PI/-25, x:-0.25} )
            .to( {theta:0, x:0} , 500)
            .onUpdate(function(){
                let left_upper_arm  = robot.getObjectByName("left_upper_arm");

                let left_lower_arm = left_upper_arm.getObjectByName("lower_arm");
                left_lower_arm.matrix.makeRotationZ(this._object.theta).premultiply( new THREE.Matrix4().makeTranslation( this._object.x, -3, 0 ) );

                left_lower_arm.updateMatrixWorld(true);

                stats.update();
                renderer.render(scene, camera); 
            })

        let headReturnTween = new TWEEN.Tween( {x:-0.25, y:5} )
            .to( {x:0,  y:4.8 }, 500)
            .onUpdate(function(){
                let head =  robot.getObjectByName("head");
                head.matrix.makeTranslation( this._object.x, this._object.y, -0.05 );
                
                head.updateMatrixWorld(true);

                stats.update();
                renderer.render(scene, camera);
            })

        let leftHandReturnTween = new TWEEN.Tween( {theta:Math.PI/-10} )
            .to( {theta:0} , 500)
            .onUpdate(function(){
                let left_upper_arm  = robot.getObjectByName("left_upper_arm");

                let left_lower_arm = left_upper_arm.getObjectByName("lower_arm");
                
                let left_hand = left_lower_arm.getObjectByName("hand");
                left_hand.matrix.makeRotationZ(this._object.theta).premultiply( new THREE.Matrix4().makeTranslation( 0, -1.5, 0 ) );

                left_hand.updateMatrixWorld(true);

                stats.update();
                renderer.render(scene, camera); 
            })


        //  upperArmTween.chain( ... ); this allows other related Tween animations occur at the same time
        rightUpperArmTween.chain(rightHandTween);

        
        rightUpperArmTween.start();
        rightLowerArmTween.start();
        leftLowerArmTween.start();
        leftHandTween.start();
        headTween.start();

    },
    animate: function(time) {
        window.requestAnimationFrame(this.animate.bind(this));
        TWEEN.update(time);
    },
    run: function() {
        this.init();
        this.animate(0);
    }
});




