function agregar_usuario(){
    var nombre=document.getElementById("usuario").value;
    localStorage.setItem("nombre",nombre);
    window.location="kpugie_room.html";
}