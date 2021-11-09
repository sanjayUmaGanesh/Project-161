AFRAME.registerComponent("bullets",{
    init:function(){
        this.shootBullet();
    },
    shootBullet:function(){
        window.addEventListener("keydown", (e) =>{
            if(e.key === "e"){
                var bullet = document.createElement("a-entity");
                bullet.setAttribute("geometry",{
                    primitive: "sphere",
                    radius: 0.4
                })
                bullet.setAttribute("material", "color", "black")
                var cam = document.querySelector("#camera");
                var g = document.querySelector("#ground")
                var camera = document.querySelector("#camera").object3D;
                var direction = new THREE.Vector3();
                camera.getWorldDirection(direction)

                pos = cam.getAttribute("position");
                pos2 = g.getAttribute("position")
                bullet.setAttribute("position",{
                    x: pos.x,
                    y: pos2.y,
                    z: pos.z
                })
                bullet.setAttribute("velocity",direction.multiplyScalar(-10))
        

                var scene = document.querySelector("#scene")
                scene.appendChild(bullet)
            }
        })
    }
})