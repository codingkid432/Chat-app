var firebaseConfig = {
    apiKey: "AIzaSyAip6A8lK7Unzna-BV1DVkeAbcQ2Lsk4rc",
    authDomain: "chat-app-c2e6b.firebaseapp.com",
    projectId: "chat-app-c2e6b",
    storageBucket: "chat-app-c2e6b.appspot.com",
    messagingSenderId: "213894158443",
    appId: "1:213894158443:web:be0b476fdd84726392f92e"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  document.getElementById("user_name").innerHTML = "Welcome " + username_text + "!";

  function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

    localStorage.setItem("room_name", room_name);
    
    window.location = "kwitter_page.html";
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
    Room_names = childKey;
    console.log("Room Name - " + Room_names);
   row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
   document.getElementById("output").innerHTML += row;
 });
});

}

getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}