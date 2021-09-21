function Travolta() {}

Object.assign( Travolta.prototype, {

    init: function() {
        
        /*---------------------- Animações iniciais --------------------------*/

        let torsoTween = new TWEEN.Tween( {x:0} )
            .to( { x:0.05 }, 250)
            .onUpdate(function(){
                let torso =  robot.getObjectByName("torso");

                torso.matrix.makeShear(this._object.x, 0, 0)

                torso.updateMatrixWorld(true);

                stats.update();
                renderer.render(scene, camera);    
            })

        /*----------------------------- ARM ----------------------------------*/
    
        let rightUpperArmTween = new TWEEN.Tween( {theta:0, x:2.6, y:0} )
            .to( {theta:3*Math.PI/4, x:3, y:3}, 250)
            .onUpdate(function(){

                let right_upper_arm =  robot.getObjectByName("right_upper_arm");

                right_upper_arm.matrix.makeRotationZ(this._object.theta).premultiply( new THREE.Matrix4().makeTranslation(this._object.x, this._object.y, 0.05 ) );

                right_upper_arm.updateMatrixWorld(true);

                stats.update();
                renderer.render(scene, camera);    
            })

       
        let leftUpperArmTween = new TWEEN.Tween( {theta:0, x:-2.6, y:0} )
            .to( {theta:-Math.PI/4, x:-3, y:1}, 250)
            .onUpdate(function(){

                let left_upper_arm =  robot.getObjectByName("left_upper_arm");

                left_upper_arm.matrix.makeRotationZ(this._object.theta).premultiply( new THREE.Matrix4().makeTranslation(this._object.x, this._object.y, 0.05 ) );

                left_upper_arm.updateMatrixWorld(true);

                stats.update();
                renderer.render(scene, camera);    
            })

        
        let leftLowerArmTween = new TWEEN.Tween( {theta:0, x:0, y:-3} )
            .to( {theta:Math.PI/2, x:1.5, y:-1.5} , 250)
            .onUpdate(function(){
                let left_upper_arm  = robot.getObjectByName("left_upper_arm");
                let left_lower_arm = left_upper_arm.getObjectByName("lower_arm");

                left_lower_arm.matrix.makeRotationZ(this._object.theta).premultiply( new THREE.Matrix4().makeTranslation( this._object.x, this._object.y, 0.05 ) );

                left_lower_arm.updateMatrixWorld(true);

                stats.update();
                renderer.render(scene, camera); 
            })

        /*----------------------------- LEG ----------------------------------*/

        let rightUpperLegTween = new TWEEN.Tween( {theta:0, x:1, y:-5} )
            .to( {theta:Math.PI/20, x:1.4, y:-4.8}, 250)
            .onUpdate(function(){

                let right_upper_leg =  robot.getObjectByName("right_upper_leg");

                right_upper_leg.matrix.makeRotationZ(this._object.theta).premultiply( new THREE.Matrix4().makeTranslation(this._object.x, this._object.y, 0.05 ) );
        
                right_upper_leg.updateMatrixWorld(true);
                
                stats.update();
                renderer.render(scene, camera);    
            })

        let leftUpperLegTween = new TWEEN.Tween( {theta:0, x:-1, y:-5} )
            .to( {theta:-Math.PI/14, x:-1.4, y:-4.8}, 250)
            .onUpdate(function(){

                let left_upper_leg =  robot.getObjectByName("left_upper_leg");

                left_upper_leg.matrix.makeRotationZ(this._object.theta).premultiply( new THREE.Matrix4().makeTranslation(this._object.x, this._object.y, 0.05 ) );

                left_upper_leg.updateMatrixWorld(true);
                
                stats.update();
                renderer.render(scene, camera);    
            })

        /*---------------------- Animações de repetição  -------------------*/
        
        let torso2Tween = new TWEEN.Tween( {x:0.05} )
            .to( { x:-0.05 }, 250)
            .repeat(10)
            .yoyo(true)
            .delay(250)
            .onUpdate(function(){
                let torso =  robot.getObjectByName("torso");

                torso.matrix.makeShear(this._object.x, 0, 0)

                torso.updateMatrixWorld(true);

                stats.update();
                renderer.render(scene, camera);    
            })

        /*----------------------------- ARM ----------------------------------*/

        let leftUpperArm2Tween = new TWEEN.Tween( {theta:-Math.PI/4, x:-3, y:1} )
            .to( {theta:-3*Math.PI/4, x:-3, y:3}, 250)
            .repeat(10)
            .yoyo(true)
            .delay(250)
            .onUpdate(function(){

                let left_upper_arm =  robot.getObjectByName("left_upper_arm");

                left_upper_arm.matrix.makeRotationZ(this._object.theta).premultiply( new THREE.Matrix4().makeTranslation(this._object.x, this._object.y, 0.05 ) );

                left_upper_arm.updateMatrixWorld(true);

                stats.update();
                renderer.render(scene, camera);    
            })

        let leftLowerArm2Tween = new TWEEN.Tween( {theta:Math.PI/2, x:1.5, y:-1.5} )
            .to( {theta:0, x:0, y:-3} , 250)
            .repeat(10)
            .yoyo(true)
            .delay(250)
            .onUpdate(function(){
                let left_upper_arm  = robot.getObjectByName("left_upper_arm");
                let left_lower_arm = left_upper_arm.getObjectByName("lower_arm");

                left_lower_arm.matrix.makeRotationZ(this._object.theta).premultiply( new THREE.Matrix4().makeTranslation( this._object.x, this._object.y, 0.05 ) );

                left_lower_arm.updateMatrixWorld(true);

                stats.update();
                renderer.render(scene, camera); 
            })

        let rightUpperArm2Tween = new TWEEN.Tween( {theta:3*Math.PI/4, x:3, y:3} )
            .to( {theta:Math.PI/4, x:3, y:1}, 250)
            .repeat(10)
            .yoyo(true)
            .delay(250)
            .onUpdate(function(){

                let right_upper_arm =  robot.getObjectByName("right_upper_arm");

                right_upper_arm.matrix.makeRotationZ(this._object.theta).premultiply( new THREE.Matrix4().makeTranslation(this._object.x, this._object.y, 0.05 ) );

                right_upper_arm.updateMatrixWorld(true);

                stats.update();
                renderer.render(scene, camera);    
            })

        let rightLowerArm2Tween = new TWEEN.Tween( {theta:0, x:0, y:-3} )
            .to( {theta:-Math.PI/2, x:-1.5, y:-1.5} , 250)
            .repeat(10)
            .yoyo(true)
            .delay(250)
            .onUpdate(function(){
                let right_upper_arm  = robot.getObjectByName("right_upper_arm");
                let right_lower_arm = right_upper_arm.getObjectByName("lower_arm");

                right_lower_arm.matrix.makeRotationZ(this._object.theta).premultiply( new THREE.Matrix4().makeTranslation( this._object.x, this._object.y, 0.05 ) );

                right_lower_arm.updateMatrixWorld(true);

                stats.update();
                renderer.render(scene, camera); 
            })

        /*----------------------------- LEG ----------------------------------*/

        let rightUpperLeg2Tween = new TWEEN.Tween( {theta:Math.PI/20, x:1.4, y:-4.8, s:0} )
            .to( {theta:Math.PI/14, x:1.4, y:-4.8}, 250)
            .repeat(10)
            .yoyo(true)
            .delay(250)
            .onUpdate(function(){

                let right_upper_leg =  robot.getObjectByName("right_upper_leg");

                right_upper_leg.matrix.makeRotationZ(this._object.theta).premultiply( new THREE.Matrix4().makeTranslation(this._object.x, this._object.y, 0.05 ) );
                
                right_upper_leg.updateMatrixWorld(true);
                
                stats.update();
                renderer.render(scene, camera);    
            })

        var audio = new Audio('stayin_alive.mp3');

        let leftUpperLeg2Tween = new TWEEN.Tween( {theta:-Math.PI/14, x:-1.4, y:-4.8, s: 0} )
            .to( {theta:-Math.PI/20, x:-1.4, y:-4.8}, 250)
            .repeat(10)
            .yoyo(true)
            .delay(250)
            .onUpdate(function(){

                let left_upper_leg =  robot.getObjectByName("left_upper_leg");

                left_upper_leg.matrix.makeRotationZ(this._object.theta).premultiply( new THREE.Matrix4().makeTranslation(this._object.x, this._object.y, 0.05 ) );
                
                left_upper_leg.updateMatrixWorld(true);
                
                stats.update();
                renderer.render(scene, camera);    
            })
            .onStart(function(){
                //Toca o áudio assim que iniciar a animação

                audio.volume = 0.1;
                audio.play();
            })
            .onComplete( function() {
                //Ao completar a animação, retorna todas as anteriores ao estado inicial

                torsoReturnTween.start();
                leftLowerArmReturnTween.start();
                leftUpperArmReturnTween.start();
                rightUpperArmReturnTween.start();
                rightLowerArmReturnTween.start();
                rightUpperLegReturnTween.start();
                leftUpperLegReturnTween.start();
                audio.pause();
            })

        /* ------- Animações de retorno ao estado inicial do robô ----------- */

        let torsoReturnTween = new TWEEN.Tween( {x:0.05} )
            .to( { x:0 }, 250)
            .onUpdate(function(){
                let torso =  robot.getObjectByName("torso");

                torso.matrix.makeShear(this._object.x, 0, 0)

                torso.updateMatrixWorld(true);

                stats.update();
                renderer.render(scene, camera);    
            })

        /*----------------------------- ARM ----------------------------------*/

        let rightUpperArmReturnTween = new TWEEN.Tween( {theta:3*Math.PI/4, x:3, y:3} )
            .to( {theta:0, x:2.6, y:0}, 250)
            .onUpdate(function(){

                let right_upper_arm =  robot.getObjectByName("right_upper_arm");

                right_upper_arm.matrix.makeRotationZ(this._object.theta).premultiply( new THREE.Matrix4().makeTranslation(this._object.x, this._object.y, 0.05 ) );

                right_upper_arm.updateMatrixWorld(true);

                stats.update();
                renderer.render(scene, camera);    
            })

        let rightLowerArmReturnTween = new TWEEN.Tween( {theta:-Math.PI/2, x:-1.5, y:-1.5} )
            .to( {theta:0, x:0, y:-3} , 250)
            .onUpdate(function(){
                let right_upper_arm  = robot.getObjectByName("right_upper_arm");
                let right_lower_arm = right_upper_arm.getObjectByName("lower_arm");

                right_lower_arm.matrix.makeRotationZ(this._object.theta).premultiply( new THREE.Matrix4().makeTranslation( this._object.x, this._object.y, 0.05 ) );

                right_lower_arm.updateMatrixWorld(true);

                stats.update();
                renderer.render(scene, camera); 
            })

        
        let leftUpperArmReturnTween = new TWEEN.Tween( {theta:-Math.PI/4, x:-3, y:1} )
            .to( {theta:0, x:-2.6, y:0}, 250)
            .onUpdate(function(){

                let left_upper_arm =  robot.getObjectByName("left_upper_arm");

                left_upper_arm.matrix.makeRotationZ(this._object.theta).premultiply( new THREE.Matrix4().makeTranslation(this._object.x, this._object.y, 0.05 ) );

                left_upper_arm.updateMatrixWorld(true);

                stats.update();
                renderer.render(scene, camera);    
            })


        let leftLowerArmReturnTween = new TWEEN.Tween( {theta:Math.PI/2, x:1.5, y:-1.5} )
            .to( {theta:0, x:0, y:-3} , 250)
            .onUpdate(function(){
                let left_upper_arm  = robot.getObjectByName("left_upper_arm");
                let left_lower_arm = left_upper_arm.getObjectByName("lower_arm");

                left_lower_arm.matrix.makeRotationZ(this._object.theta).premultiply( new THREE.Matrix4().makeTranslation( this._object.x, this._object.y, 0.05 ) );

                left_lower_arm.updateMatrixWorld(true);

                stats.update();
                renderer.render(scene, camera); 
            })

        /*----------------------------- LEG ----------------------------------*/
        
        let rightUpperLegReturnTween = new TWEEN.Tween( {theta:Math.PI/20, x:1.4, y:-4.8, s:0} )
        .to( {theta:0, x:1, y:-5}, 250)
        .onUpdate(function(){

            let right_upper_leg =  robot.getObjectByName("right_upper_leg");

            right_upper_leg.matrix.makeRotationZ(this._object.theta).premultiply( new THREE.Matrix4().makeTranslation(this._object.x, this._object.y, 0.05 ) );
            
            right_upper_leg.updateMatrixWorld(true);
            
            stats.update();
            renderer.render(scene, camera);    
        })


        let leftUpperLegReturnTween = new TWEEN.Tween( {theta:-Math.PI/14, x:-1.4, y:-4.8, s: 0} )
        .to( {theta:0, x:-1, y:-5}, 250)
        .onUpdate(function(){

            let left_upper_leg =  robot.getObjectByName("left_upper_leg");

            left_upper_leg.matrix.makeRotationZ(this._object.theta).premultiply( new THREE.Matrix4().makeTranslation(this._object.x, this._object.y, 0.05 ) );
            
            left_upper_leg.updateMatrixWorld(true);
            
            stats.update();
            renderer.render(scene, camera);    
        })
        

        torsoTween.chain(torso2Tween);
        rightUpperArmTween.chain(rightUpperArm2Tween, rightLowerArm2Tween);
        leftUpperArmTween.chain(leftUpperArm2Tween, leftLowerArm2Tween);
        rightUpperLegTween.chain(rightUpperLeg2Tween);
        leftUpperLegTween.chain(leftUpperLeg2Tween);

        torsoTween.start();
        rightUpperArmTween.start();
        leftUpperArmTween.start();
        leftLowerArmTween.start();
        rightUpperLegTween.start();
        leftUpperLegTween.start();

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
