function GangnamStyle() {}

Object.assign( GangnamStyle.prototype, {

    init: function() {

        /*---------------------- Animações iniciais --------------------------*/

        /*----------------------------- ARM ----------------------------------*/

        let rightUpperArmTween = new TWEEN.Tween( {theta:0, x:2.6, y:0} )
            .to( {theta:Math.PI/6, x:2.6, y:1}, 300)
            .onUpdate(function(){

                let right_upper_arm =  robot.getObjectByName("right_upper_arm");

                right_upper_arm.matrix.makeRotationZ(this._object.theta).premultiply( new THREE.Matrix4().makeTranslation(this._object.x, this._object.y, 0.05 ) );

                
                right_upper_arm.updateMatrixWorld(true);
                
                stats.update();
                renderer.render(scene, camera);    
            })

        let rightLowerArmTween = new TWEEN.Tween( {theta:0, x:0, y:-3} )
            .to( {theta:-Math.PI/2, x:-1.5, y:-1.5} , 300)
            .onUpdate(function(){
    
                let right_upper_arm =  robot.getObjectByName("right_upper_arm");

                let right_lower_arm = right_upper_arm.getObjectByName("lower_arm");
                
                right_lower_arm.matrix.makeRotationZ(this._object.theta).premultiply( new THREE.Matrix4().makeTranslation( this._object.x, this._object.y, 0 ) );
 
                right_lower_arm.updateMatrixWorld(true);
    
                stats.update();
                renderer.render(scene, camera);    
            })

        let leftUpperArmTween = new TWEEN.Tween( {theta:0, x:-2.6, y:0} )
            .to( {theta:-Math.PI/1.75, x:-3.5, y:2.5}, 300)
            .onUpdate(function(){

                let left_upper_arm =  robot.getObjectByName("left_upper_arm");

                left_upper_arm.matrix.makeRotationZ(this._object.theta).premultiply( new THREE.Matrix4().makeTranslation(this._object.x, this._object.y, 0.05 ) );

                
                left_upper_arm.updateMatrixWorld(true);
                
                stats.update();
                renderer.render(scene, camera);    
            })

        let leftLowerArmTween = new TWEEN.Tween( {theta:0, x:0, y:-3} )
            .to( {theta:-Math.PI/1.5, x:-1.4, y:-1.3} , 300)
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
            .to( {theta:Math.PI/6, x:2, y:-4}, 300)
            .onUpdate(function(){

                let right_upper_leg =  robot.getObjectByName("right_upper_leg");

                right_upper_leg.matrix.makeRotationZ(this._object.theta).premultiply( new THREE.Matrix4().makeTranslation(this._object.x, this._object.y, 0.05 ) );

                
                right_upper_leg.updateMatrixWorld(true);
                
                stats.update();
                renderer.render(scene, camera);    
            })

        let rightLowerLegTween = new TWEEN.Tween( {theta:0, x:0, y:-3} )
            .to( {theta:-Math.PI/5, x:-1, y:-2.7} , 300)
            .onUpdate(function(){
                let right_upper_leg  = robot.getObjectByName("right_upper_leg");
                let right_lower_leg = right_upper_leg.getObjectByName("lower_leg");

                right_lower_leg.matrix.makeRotationZ(this._object.theta).premultiply( new THREE.Matrix4().makeTranslation( this._object.x, this._object.y, 0.05 ) );

                right_lower_leg.updateMatrixWorld(true);

                stats.update();
                renderer.render(scene, camera); 
            })

        let leftUpperLegTween = new TWEEN.Tween( {theta:0, x:-1, y:-5} )
            .to( {theta:-Math.PI/14, x:-1.4, y:-4.8}, 300)
            .onUpdate(function(){

                let left_upper_leg =  robot.getObjectByName("left_upper_leg");

                left_upper_leg.matrix.makeRotationZ(this._object.theta).premultiply( new THREE.Matrix4().makeTranslation(this._object.x, this._object.y, 0.05 ) );

                
                left_upper_leg.updateMatrixWorld(true);
                
                stats.update();
                renderer.render(scene, camera);    
            })

        /*---------------------- Animações de repetição  -------------------*/

        var audio = new Audio('gangnam_style.mp3');

        let torso2Tween = new TWEEN.Tween( {y:0} )
            .to( {y:1}, 300)
            .repeat(17)
            .yoyo(true)
            .onUpdate(function(){
                let torso =  robot.getObjectByName("torso");

                torso.matrix.makeTranslation(0, this._object.y, 0)

                torso.updateMatrixWorld(true);

                stats.update();
                renderer.render(scene, camera);    
            })
            .onStart(function(){
                //Toca o áudio assim que iniciar a animação

                audio.volume = 0.1;
                audio.play();
            })
            .onComplete(function(){
                //Ao completar a animação, retorna todas as anteriores ao estado inicial

                rightUpperArmReturnTween.start();
                rightLowerArmReturnTween.start();
                rightUpperLegReturnTween.start();
                rightLowerLegReturnTween.start();
                leftUpperLegReturnTween.start();
                leftLowerLegReturnTween.start();
                leftUpperArmReturnTween.start();
                leftLowerArmReturnTween.start();
                audio.pause();
            })

        /*----------------------------- ARM ----------------------------------*/

        let rightLowerArm2Tween = new TWEEN.Tween( {theta:-Math.PI/2, x:-1.5, y:-1.5} )
            .to( {theta:-2*Math.PI/3, x:-1.5, y:-1} , 300)
            .repeat(17)
            .yoyo(true)
            .onUpdate(function(){
                
                let right_upper_arm =  robot.getObjectByName("right_upper_arm");

                let right_lower_arm = right_upper_arm.getObjectByName("lower_arm");
                
                right_lower_arm.matrix.makeRotationZ(this._object.theta).premultiply( new THREE.Matrix4().makeTranslation( this._object.x, this._object.y, 0 ) );

                
                right_lower_arm.updateMatrixWorld(true);
    
                
                stats.update();
                renderer.render(scene, camera);    
            })

        let leftUpperArm2Tween = new TWEEN.Tween( {theta:-Math.PI/1.75, x:-3.5, y:2.5} )
            .to( {theta:-Math.PI/2.25, x:-3.5, y:1.75}, 300)
            .repeat(17)
            .yoyo(true)
            .onUpdate(function(){

                let left_upper_arm =  robot.getObjectByName("left_upper_arm");

                left_upper_arm.matrix.makeRotationZ(this._object.theta).premultiply( new THREE.Matrix4().makeTranslation(this._object.x, this._object.y, 0.05 ) );

                
                left_upper_arm.updateMatrixWorld(true);
                
                stats.update();
                renderer.render(scene, camera);    
            })


        let leftLowerArm2Tween = new TWEEN.Tween( {theta:-Math.PI/1.5, x:-1.4, y:-1.3} )
            .to( {theta:-Math.PI/4, x:-1.2, y:-3} , 300)
            .repeat(17)
            .yoyo(true)
            .onUpdate(function(){
                let left_upper_arm  = robot.getObjectByName("left_upper_arm");
                let left_lower_arm = left_upper_arm.getObjectByName("lower_arm");

                left_lower_arm.matrix.makeRotationZ(this._object.theta).premultiply( new THREE.Matrix4().makeTranslation( this._object.x, this._object.y, 0.05 ) );

                left_lower_arm.updateMatrixWorld(true);

                stats.update();
                renderer.render(scene, camera); 
            })

        /*----------------------------- LEG ----------------------------------*/

        let rightUpperLeg2Tween = new TWEEN.Tween( {theta:Math.PI/6, x:2, y:-4} )
            .to( {theta:Math.PI/20, x:1.4, y:-4.8}, 300)
            .repeat(17)
            .yoyo(true)
            .onUpdate(function(){

                let right_upper_leg =  robot.getObjectByName("right_upper_leg");

                right_upper_leg.matrix.makeRotationZ(this._object.theta).premultiply( new THREE.Matrix4().makeTranslation(this._object.x, this._object.y, 0.05 ) );

                
                right_upper_leg.updateMatrixWorld(true);
                
                stats.update();
                renderer.render(scene, camera);    
            })


        let rightLowerLeg2Tween = new TWEEN.Tween( {theta:-Math.PI/5, x:-1, y:-2.7} )
            .to( {theta:0, x:0, y:-3} , 300)
            .repeat(17)
            .yoyo(true)
            .onUpdate(function(){
                let right_upper_leg  = robot.getObjectByName("right_upper_leg");
                let right_lower_leg = right_upper_leg.getObjectByName("lower_leg");

                right_lower_leg.matrix.makeRotationZ(this._object.theta).premultiply( new THREE.Matrix4().makeTranslation( this._object.x, this._object.y, 0.05 ) );

                right_lower_leg.updateMatrixWorld(true);

                stats.update();
                renderer.render(scene, camera); 
            })


        let leftUpperLeg2Tween = new TWEEN.Tween( {theta:-Math.PI/14, x:-1.4, y:-4.8} )
            .to( {theta:-Math.PI/6, x:-2, y:-4} , 300)
            .repeat(17)
            .yoyo(true)
            .onUpdate(function(){
                let left_upper_leg  = robot.getObjectByName("left_upper_leg");

                left_upper_leg.matrix.makeRotationZ(this._object.theta).premultiply( new THREE.Matrix4().makeTranslation( this._object.x, this._object.y, 0.05 ) );

                left_upper_leg.updateMatrixWorld(true);

                stats.update();
                renderer.render(scene, camera); 
            })

    
        let leftLowerLeg2Tween = new TWEEN.Tween( {theta:0, x:0, y:-3} )
            .to( {theta:Math.PI/5, x:1, y:-2.7} , 300)
            .repeat(17)
            .yoyo(true)
            .onUpdate(function(){

                let left_upper_leg  = robot.getObjectByName("left_upper_leg");
                let left_lower_leg = left_upper_leg.getObjectByName("lower_leg");

                left_lower_leg.matrix.makeRotationZ(this._object.theta).premultiply( new THREE.Matrix4().makeTranslation( this._object.x, this._object.y, 0.05 ) );
                
                left_lower_leg.updateMatrixWorld(true);

                stats.update();
                renderer.render(scene, camera); 
            })

        /* ------- Animações de retorno ao estado inicial do robô ----------- */

        /*----------------------------- ARM ----------------------------------*/

        let rightUpperArmReturnTween = new TWEEN.Tween( {theta:Math.PI/6, x:2.6, y:1} )
            .to( {theta:0, x:2.6, y:0} , 300)
            .onUpdate(function(){

                let right_upper_arm =  robot.getObjectByName("right_upper_arm");

                right_upper_arm.matrix.makeRotationZ(this._object.theta).premultiply( new THREE.Matrix4().makeTranslation(this._object.x, this._object.y, 0.05 ) );

                
                right_upper_arm.updateMatrixWorld(true);
                
                stats.update();
                renderer.render(scene, camera);    
            })
            
        let rightLowerArmReturnTween = new TWEEN.Tween( {theta:-Math.PI/2, x:-1.5, y:-1.5} )
            .to( {theta:0, x:0, y:-3} , 300)
            .onUpdate(function(){
    
                let right_upper_arm =  robot.getObjectByName("right_upper_arm");

                let right_lower_arm = right_upper_arm.getObjectByName("lower_arm");
                
                right_lower_arm.matrix.makeRotationZ(this._object.theta).premultiply( new THREE.Matrix4().makeTranslation( this._object.x, this._object.y, 0 ) );

                
                right_lower_arm.updateMatrixWorld(true);
    
                
                stats.update();
                renderer.render(scene, camera);    
            })

        let leftUpperArmReturnTween = new TWEEN.Tween( {theta:-Math.PI/1.75, x:-3.5, y:2.5} )
            .to( {theta:0, x:-2.6, y:0}, 300)
            .onUpdate(function(){

                let left_upper_arm =  robot.getObjectByName("left_upper_arm");

                left_upper_arm.matrix.makeRotationZ(this._object.theta).premultiply( new THREE.Matrix4().makeTranslation(this._object.x, this._object.y, 0.05 ) );

                
                left_upper_arm.updateMatrixWorld(true);
                
                stats.update();
                renderer.render(scene, camera);    
            })

        let leftLowerArmReturnTween = new TWEEN.Tween( {theta:-Math.PI/1.5, x:-1.4, y:-1.3} )
            .to( {theta:0, x:0, y:-3} , 300)
            .onUpdate(function(){
                let left_upper_arm  = robot.getObjectByName("left_upper_arm");
                let left_lower_arm = left_upper_arm.getObjectByName("lower_arm");

                left_lower_arm.matrix.makeRotationZ(this._object.theta).premultiply( new THREE.Matrix4().makeTranslation( this._object.x, this._object.y, 0.05 ) );

                left_lower_arm.updateMatrixWorld(true);

                stats.update();
                renderer.render(scene, camera); 
            })

        /*----------------------------- LEG ----------------------------------*/
        
        let rightUpperLegReturnTween = new TWEEN.Tween( {theta:Math.PI/20, x:1.4, y:-4.8} ) 
            .to( {theta:0, x:1, y:-5}, 300)
            .onUpdate(function(){

                let right_upper_leg =  robot.getObjectByName("right_upper_leg");

                right_upper_leg.matrix.makeRotationZ(this._object.theta).premultiply( new THREE.Matrix4().makeTranslation(this._object.x, this._object.y, 0.05 ) );

                
                right_upper_leg.updateMatrixWorld(true);
                
                stats.update();
                renderer.render(scene, camera);    
            })

        let rightLowerLegReturnTween = new TWEEN.Tween( {theta:-Math.PI/5, x:-1, y:-2.7} )
            .to( {theta:0, x:0, y:-3} , 300)
            .onUpdate(function(){
                let right_upper_leg  = robot.getObjectByName("right_upper_leg");
                let right_lower_leg = right_upper_leg.getObjectByName("lower_leg");

                right_lower_leg.matrix.makeRotationZ(this._object.theta).premultiply( new THREE.Matrix4().makeTranslation( this._object.x, this._object.y, 0.05 ) );

                right_lower_leg.updateMatrixWorld(true);

                stats.update();
                renderer.render(scene, camera); 
            })

        let leftUpperLegReturnTween = new TWEEN.Tween( {theta:-Math.PI/6, x:-2, y:-4} ) 
            .to( {theta:0, x:-1, y:-5}, 300)
            .onUpdate(function(){

                let left_upper_leg  = robot.getObjectByName("left_upper_leg");

                left_upper_leg.matrix.makeRotationZ(this._object.theta).premultiply( new THREE.Matrix4().makeTranslation( this._object.x, this._object.y, 0.05 ) );

                left_upper_leg.updateMatrixWorld(true);

                stats.update();
                renderer.render(scene, camera);  
            })

        let leftLowerLegReturnTween = new TWEEN.Tween( {theta:Math.PI/5, x:1, y:-2.7} )
            .to( {theta:0, x:0, y:-3} , 300)
            .onUpdate(function(){
                let left_upper_leg  = robot.getObjectByName("left_upper_leg");
                let left_lower_leg = left_upper_leg.getObjectByName("lower_leg");

                left_lower_leg.matrix.makeRotationZ(this._object.theta).premultiply( new THREE.Matrix4().makeTranslation( this._object.x, this._object.y, 0.05 ) );
                
                left_lower_leg.updateMatrixWorld(true);

                stats.update();
                renderer.render(scene, camera); 
            })


        rightLowerArmTween.chain(rightLowerArm2Tween);
        leftUpperLegTween.chain(leftUpperLeg2Tween, leftLowerLeg2Tween);
        leftUpperArmTween.chain(leftUpperArm2Tween, leftLowerArm2Tween);
        rightUpperLegTween.chain(rightUpperLeg2Tween, rightLowerLeg2Tween);

        torso2Tween.start();
        rightUpperArmTween.start();
        rightLowerArmTween.start();
        leftUpperArmTween.start();
        leftLowerArmTween.start();
        rightUpperLegTween.start();
        rightLowerLegTween.start();
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
