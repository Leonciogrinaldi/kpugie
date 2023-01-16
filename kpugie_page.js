//TUS ANLACES DE FIREBASE
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

function getData() { firebase.database().ref("/"+nombre_de_sala).on('value', function(snapshot) { document.getElementById("mostrar_mensaje").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Inica código
console.log(firebase_message_id);
console.log(message_data);
names=message_data['nombre'];
mensajes=message_data['mensaje'];
mostrar_n="<h4>"+names+"<img src='enviado.png'></h4>";
mostrar_m="<h4>"+mensajes+"</h4>";
juntar=mostrar_n+mostrar_m;
document.getElementById("mostrar_mensaje").innerHTML=juntar;
//Termina código
      } });  }); }
getData();
function salir() {
      localStorage.removeItem("sala");
      localStorage.removeItem("nombre");
      window.location="index.html";
}

var nombre_de_sala=localStorage.getItem("sala");
    var nombre_del_usuario=localStorage.getItem("nombre");

function enviar(){
      guardar_mensaje=document.getElementById("mensaje").value;
      firebase.database().ref(nombre_de_sala).push({
            nombre:nombre_del_usuario,
            mensaje:guardar_mensaje
      });
      document.getElementById("mensaje").value="";
}