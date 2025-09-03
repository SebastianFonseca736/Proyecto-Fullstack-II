//validacion de formularios

window.onload=function(){
    document.getElementById("datos").addEventListener("submit", function(event){
    let mensajeError="";

    const nombre= document.getElementById('nom').value.trim();
    const email= document.getElementById('correo').value.trim();
        
    if(nombre==='')
      {
        mensajeError+="El nombre no puede quedar vacío <br>";
      }

    const regex=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email===''){
        mensajeError+="El correo no puede quedar vacío <br>";
        } else if(!regex.test(email)){
            mensajeError+="El correo no tiene el formato solicitado <br>";
        }

        if (mensajeError!==""){
            document.getElementById('errores').innerHTML=mensajeError;
            event.preventDefault(); 
        }else{
            document.getElementById('errores').innerHTML='';
        }
    });
}