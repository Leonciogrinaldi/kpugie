
//AÑADE TUS ENLACES DE FIREBASE
// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyDgouGLre7oOvLQ5O8HWWxGZyI2hsXGAh4",
      authDomain: "pugie-81faf.firebaseapp.com",
      databaseURL: "https://pugie-81faf-default-rtdb.firebaseio.com",
      projectId: "pugie-81faf",
      storageBucket: "pugie-81faf.appspot.com",
      messagingSenderId: "1096153648351",
      appId: "1:1096153648351:web:a32392ed4790a83557ed6a"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    var nombre_de_sala=localStorage.getItem("sala");
    var nombre_del_usuario=localStorage.getItem("nombre");
    document.getElementById("mostrar_nombre").innerHTML="Bienvenido "+nombre_del_usuario;

    function entrar(){
      var nombre_sala=document.getElementById("room_name").value;
      firebase.database().ref("/").child(nombre_sala).update({
            proposito:"nueva sala"
      });
      localStorage.setItem("sala",nombre_sala);
      window.location.replace("kpugie_page.html");
    }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("salas").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Inicio del código
      console.log("nombre de la sala "+Room_names);
      var mostrar_salas="<div class='room_name' id =' "+Room_names+" ' onclick='kpugie(this.id)'>#"+Room_names+"</div>";
      document.getElementById("salas").innerHTML+=mostrar_salas;
      //Final del código
      });});}
getData();

function kpugie(nombre){
      console.log(nombre);
      localStorage.setItem("sala", nombre);
      window.location="kpugie_page.html";
}

function salir() {
      localStorage.removeItem("sala");
      localStorage.removeItem("nombre");
      window.location="index.html";
}