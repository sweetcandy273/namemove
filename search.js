$(function () {

  var firebaseConfig = {
    apiKey: "AIzaSyDOCAbC123dEf456GhI789jKl01-MnO",
    authDomain: "myapp-project-123.firebaseapp.com",
    databaseURL: "https://myapp-project-123.firebaseio.com",
    projectId: "myapp-project-123",
    storageBucket: "myapp-project-123.appspot.com",
    messagingSenderId: "65211879809",
    appId: "1:65211879909:web:3ae38ef1cdcb2e01fe5f0c",
    measurementId: "G-8GSGZQ44ST"
  };
  firebase.initializeApp(firebaseConfig);

  var db = firebase.firestore();
console.log("test log");
$("#search_show").append("test #search_show");


//   db.collection("movies").get().then((querySnapshot) => {
//     var sug = `<p style="text-align: center;">รายการแนะนำ</p>`
//     $("#sug_show").append(sug);


//     querySnapshot.forEach((doc) => {
//       var row = `

//         <v-ons-card>

// <p style="text-align: left;">

//   <img src="${doc.data().posterURL}" width="40%" style="float: left; margin: 5px 10px;" alt="">
// <h5>${doc.data().title} (${doc.data().year})</h5>
// <p style="font-size: 5px;">${doc.data().shortstory}</p>

// </p>

// </v-ons-card>`

//       $("#search_show").append(row);
//     });
//   });



});

function gosearch() {
  document.querySelector('#myNavigator').pushPage('search.html');
}