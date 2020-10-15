
$(function () {

  var firebaseConfig = {
    apiKey: "AIzaSyACZWyH6CUeqZuv7bM9ZcDzluXkXQz6cH4",
    authDomain: "namemove-ad05c.firebaseapp.com",
    databaseURL: "https://namemove-ad05c.firebaseio.com",
    projectId: "namemove-ad05c",
    storageBucket: "namemove-ad05c.appspot.com",
    messagingSenderId: "612382199116",
    appId: "1:612382199116:web:c56c4e1d3ceb81da9b93e9",
    measurementId: "G-F2J8PYKL22"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  var db = firebase.firestore();

  db.collection("movies").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {

      const result = 
      `<ons-carousel-item modifier="nodivider" id="${doc.data().title}" onclick="openMovieDetails(this.id)">
        <img src="img/pic1.jpg">
      </ons-carousel-item>`
      $("#list-movie").append(result)
    });
  });
  // firebase.auth().onAuthStateChanged(function(user) {
  //     if (user) {
  //       // User is signed in.
  //      var email = user.email;
  //      console.log(`User with email ${email} signed in`);
  //       window.location.href = "index.html"
  //     } else {
  //       // User is signed out.
  //       window.location.href = "signin.html"
  //     }
  //   });



})

document.addEventListener('init', function (event) {
  var page = event.target;


});

function openMovieDetails(id) {
  document.querySelector('#myNavigator').pushPage('views/movie_details.html', { data: { title: id } });
}

function goBack() {
  document.querySelector('#menu').close().then(function () {
    document.querySelector('#myNavigator').popPage()
  });
}

function openHome() {
  document.querySelector('#myNavigator').pushPage('views/home_splitter.html');
}

// function goaction() {
//   document.querySelector('#myNavigator').pushPage('views/action_splitter.html');
// }
// function gocomedy() {
//   document.querySelector('#myNavigator').pushPage('views/comedy.html');
// }
// function gohorror() {
//   document.querySelector('#myNavigator').pushPage('views/horror.html');
// }
// function romance() {
//   document.querySelector('#myNavigator').pushPage('views/romance.html');
// }
// // `<h3>${doc.data().title}</h3>`

