// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyAZpkqBg14EHsEnyIu2mnwCdaZ6c2JD7UY",
  authDomain: "project-95-1c048.firebaseapp.com",
  projectId: "project-95-1c048",
  storageBucket: "project-95-1c048.appspot.com",
  messagingSenderId: "951089630803",
  appId: "1:951089630803:web:ad235cb24f7cb3228500a6"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function logout() {
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location = "index.html";
}

function addRoom() {
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose: "addingf room name"
  });

  localStorage.setItem("room_name", room_name);

  window / .location = "Chat_page.html";
}

Jayageetha

function getData() {
  firebase.database().ref("/").on('value', function (snapshot) {
    document.getElementById("output").innerHTML = "";
    snapshot.forEach(function (childSnapshot) {
      childKey = childSnapshot.key;
      Room_names = childKey;
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();

function redirectToRoomName(name) {
  console.log(name);
  localStorage.setItem("room_name", name);
  window.location = "Chat_page.html";
}