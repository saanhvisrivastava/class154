AFRAME.registerComponent('flyingbird',{
    init:function(){
        for(i=1;i<=20;i++){
            var id=`bird${i}`
        var posX=(Math.random()*3000+(-1000));
        var posY=(Math.random()*2+(-1));
        var posZ=(Math.random()*3000+(-1000));
        var position={x:posX ,y:posY, z:posZ}

        this.createbirds(id,position)
        }

    },

    createbirds:(id,position)=>{
        var birde1=document.createElement('a-entity');
        var terraine1=document.querySelector('#terrain')
        birde1.setAttribute('id',id)
        birde1.setAttribute('position',position)
        birde1.setAttribute('scale',{x:500,y:500,z:500})
        birde1.setAttribute('animation-mixer',{})
        birde1.setAttribute('gltf-model','C:\class153-main\assets\models\flying_bird\scene.gltf')
        
        terraine1.appendChild(birde1)


    }
})