AFRAME.registerComponent('targetring',{
   init:function(){
       for(var i=1;i<=20;i++){
        var id=`ring${i}`
        var posX=(Math.random()*3000+(-1000));
        var posY=(Math.random()*2+(-1));
        var posZ=(Math.random()*3000+(-1000));
        var position={x:posX ,y:posY, z:posZ}

        this.createrings(id,position)
       }

   },

   createrings:function(id,position){
       var ringe1=document.createElement('a-entity')
       ringe1.setAttribute('id',id)
       ringe1.setAttribute('position',position)
       var terraine1=document.querySelector('#terrain')
       ringe1.setAttribute('material','color','#ffffff');
       ringe1.setAttribute('geometry',{
           primitive:'torus',
           radius:8
       })

       terraine1.appendChild(ringe1)

   }

})