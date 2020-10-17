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
$(function () {

  db.collection("movies").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      if (doc.data().title == "Alita: Battle Ange") {
        const result1 =
          `
          <img src="${doc.data().wellpaperURL}">
        `
        $("#wallpaper1").append(result1)
      } else if (doc.data().title == "Secret Life of Pets 2") {
        const result1 =
          `
          <img src="${doc.data().wellpaperURL}">
        `
        $("#wallpaper2").append(result1)
      } else if (doc.data().title == "The Invisible Man") {
        const result1 =
          `
          <img src="${doc.data().wellpaperURL}">
        `
        $("#wallpaper3").append(result1)
      }
    });
  });





  db.collection("movies").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      if (doc.data().rating > 7) {
        const result1 =
          `<ons-carousel-item modifier="nodivider" id="${doc.data().title}" onclick="openMovieDetails(this.id)">
          <img src="${doc.data().posterURL}">
        </ons-carousel-item>`
        $("#list-movie-hit").append(result1)
      }
    });
  });


  db.collection("movies").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {

      const result =
        `<ons-carousel-item modifier="nodivider" id="${doc.data().title}" onclick="openMovieDetails(this.id)">
          <img src="${doc.data().posterURL}">
        </ons-carousel-item>`
      if (doc.data().type == "comedy") {
        $("#list-movie-comedy").append(result)
      } else if (doc.data().type == "romantic") {
        $("#list-movie-romance").append(result)
      } else if (doc.data().type == "horror") {
        $("#list-movie-horror").append(result)
      } else if (doc.data().type == "action") {
        $("#list-movie-action").append(result)
      }
    });
  });

})



document.addEventListener('init', function (event) {
  var page = event.target;


});

function openMovieDetails(id) {
  db.collection("movies").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      if (doc.data().title == id) {
        const wallpaper =
          `
          <ons-icon icon="fa-play-circle"></ons-icon>
          <img src="${doc.data().wellpaperURL}">
        
          `
        $(".trailer").append(wallpaper)


        const show_pic =
          `
          <img src="${doc.data().posterURL}"alt="" width="60%">
       
        `
        $("#show_pic").append(show_pic)

        $("#movie_title").append(doc.data().title)
        $("#movie_year").append(doc.data().year)
        $(".movie_synopsis").append(doc.data().shortstory)
        $(".movie_cast").append(doc.data().cast)
        var s = doc.data().rating;
        if (s < 5) {
          const star = ` 
         <ons-icon style="color: red" icon="fa-star"></ons-icon>
          <ons-icon style="color: red" icon="fa-star"></ons-icon>
          <ons-icon style="color: gray" icon="fa-star"></ons-icon>
          <ons-icon style="color: gray" icon="fa-star"></ons-icon>
          <ons-icon style="color: gray" icon="fa-star"></ons-icon>
          ${s / 2}`
          $(".stars").append(star)
        } else if (5 < s && s < 7) {
          const star = ` 
         <ons-icon style="color: red" icon="fa-star"></ons-icon>
          <ons-icon style="color: red" icon="fa-star"></ons-icon>
          <ons-icon style="color: red" icon="fa-star"></ons-icon>
          <ons-icon style="color: gray" icon="fa-star"></ons-icon>
          <ons-icon style="color: gray" icon="fa-star"></ons-icon>
          ${s / 2}`
          $(".stars").append(star)
        } else if (7 < s && s < 9) {
          const star = ` 
         <ons-icon style="color: red" icon="fa-star"></ons-icon>
          <ons-icon style="color: red" icon="fa-star"></ons-icon>
          <ons-icon style="color: red" icon="fa-star"></ons-icon>
          <ons-icon style="color: red" icon="fa-star"></ons-icon>
          <ons-icon style="color: gray" icon="fa-star"></ons-icon>
          ${s / 2}`
          $(".stars").append(star)
        } else if (9 < s && s < 10) {
          const star = ` 
         <ons-icon style="color: red" icon="fa-star"></ons-icon>
          <ons-icon style="color: red" icon="fa-star"></ons-icon>
          <ons-icon style="color: red" icon="fa-star"></ons-icon>
          <ons-icon style="color: red" icon="fa-star"></ons-icon>
          <ons-icon style="color: red" icon="fa-star"></ons-icon>
          ${s / 2}`
          $(".stars").append(star)
        }
        $("#movie_time").append(doc.data().runtime)

        db.collection("movies").get().then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            const result5 =
              `<ons-carousel-item modifier="nodivider" id="${doc.data().title}" >
                <img src="${doc.data().posterURL}">
              </ons-carousel-item>`
      
              $("#list-movie-similar").append(result5)
            
          });
        });

      }


    });
  });
  document.querySelector('#myNavigator').pushPage('views/movie_details.html');
}

function goBack() {

  document.querySelector('#myNavigator').popPage()

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


