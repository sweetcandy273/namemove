$(function () {
  $(function () {
    firebase.auth().onAuthStateChanged(function (user) {
      

      if (user) {
        // User is signed in.
        displayName = user.displayName;
        email = user.email;
        photoUrl = user.photoURL;
        $("#username").text(email);
        $("#displayname").text(displayName);
        
      } else {
        console.log(`signin`);

        window.location.href = "signin.html";
      }
    });
    $("#signout").click(function () {
      firebase
        .auth()
        .signOut()
        .then(function () {
          // Sign-out successful.
          console.log(`success logout`);
        })
        .catch(function (error) {
          // An error happened.
          console.log(`error`, error);
        });
    });
  });

  //
 

  
  
});





function gosignin() {
  console.log(`gpsignin`);
  firebase
    .auth()
    .signOut()
    .then(() => {
      // Sign-out successful.
      console.log(`success logout`);
    })
    .catch((error) => {
      // An error happened.
      console.log(`error`, error);
    });
}

// `<h3>${doc.data().title}</h3>`

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
      if (doc.data().title == "Secret Life of Pets 2") {
        const result1 =
          `

          <video id="videoBG" autoplay muted loop width="100%">
            <source src="${doc.data().wallpapervideo}" style="width: 100%"> </video>
        `
        $(".wallpaper1").append(result1)
      } else if (doc.data().title == "X men dark phoenix") {
 const result1 =
          `

          <video id="videoBG" autoplay muted loop width="100%">
            <source src="${doc.data().wallpapervideo}" style="width: 100%"> </video>
        `
        $(".wallpaper2").append(result1)
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


// movie_details.html
function openMovieDetails(id) {
  db.collection("movies").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      if (doc.data().title == id) {
        const wallpaper =
          `
          <video
          id="my-video"
          class="video-js"
          controls
          preload="auto"
          width="640"
          height="264"
          
          data-setup="{}"
        >
          <source src ="${doc.data().video}" type="video/mp4" />

        </video>

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


//  search


function search(){
  const searchValue = $("#search_input").val();
  $("#search_show").empty();
  const searchVal = searchValue.toLowerCase().replace(/ /g, "")
    db.collection("movies").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      const titleforcheck = doc.data().title
        const titleforcheck2 = titleforcheck.toLowerCase().replace(/ /g, "");
        var yearforcheck = `${doc.data().year}`;
        // console.log(yearforcheck);

        var regexNumber = /\d/;
        var regexLetter = /[a-zA-z]/;

        if (regexLetter.test(searchVal)) {


          if (titleforcheck2.indexOf(searchVal) != -1) {
            if (`${doc.data().star}` > 4) {
              var star = ` 
    <ons-icon style="color: red" icon="fa-star"></ons-icon>
    <ons-icon style="color: red" icon="fa-star"></ons-icon>
    <ons-icon style="color: red" icon="fa-star"></ons-icon>
    <ons-icon style="color: red" icon="fa-star"></ons-icon>
    <ons-icon style="color: red" icon="fa-star"></ons-icon>`

            } else if (`${doc.data().star}` > 3) {
              var star = ` 
    <ons-icon style="color: red" icon="fa-star"></ons-icon>
    <ons-icon style="color: red" icon="fa-star"></ons-icon>
    <ons-icon style="color: red" icon="fa-star"></ons-icon>
    <ons-icon style="color: red" icon="fa-star"></ons-icon>
    <ons-icon style="color: gray" icon="fa-star"></ons-icon>`

            } else if (`${doc.data().star}` > 2) {
              var star = ` 
    <ons-icon style="color: red" icon="fa-star"></ons-icon>
    <ons-icon style="color: red" icon="fa-star"></ons-icon>
    <ons-icon style="color: red" icon="fa-star"></ons-icon>
    <ons-icon style="color: gray" icon="fa-star"></ons-icon>
    <ons-icon style="color: gray" icon="fa-star"></ons-icon>`

            } else if (`${doc.data().star}` > 1) {
              var star = ` 
    <ons-icon style="color: red" icon="fa-star"></ons-icon>
    <ons-icon style="color: red" icon="fa-star"></ons-icon>
    <ons-icon style="color: gray" icon="fa-star"></ons-icon>
    <ons-icon style="color: gray" icon="fa-star"></ons-icon>
    <ons-icon style="color: gray" icon="fa-star"></ons-icon>`

            } else {
              var star = ` 
    <ons-icon style="color: gray" icon="fa-star"></ons-icon>
    <ons-icon style="color: gray" icon="fa-star"></ons-icon>
    <ons-icon style="color: gray" icon="fa-star"></ons-icon>
    <ons-icon style="color: gray" icon="fa-star"></ons-icon>
    <ons-icon style="color: gray" icon="fa-star"></ons-icon>`

            }
            var row = `
          <ons-row style="margin: 5px;" id="${doc.data().title}" >
          <ons-col class="text-center">
          <img src="${doc.data().posterURL}" width="50%" style="margin: 5px 5px;" alt="">
          </ons-col>
  
          <ons-col>
          <p style="font-size:10px" class="text-center">${doc.data().title} (${doc.data().year})</p>

          <p style="font-size:10px" class="text-center">`+ star + `(${doc.data().star})</p>
       
          </ons-col>
        
          </ons-row>`


          }


        } else if (regexNumber.test(searchVal)) {

          if (searchVal == yearforcheck) {
            var row = `
          <ons-row style="margin: 5px;" id="${doc.data().title}">
          <ons-col class="text-center">
          <img src="${doc.data().posterURL}" width="50%" style="margin: 5px 5px;" alt="">
          </ons-col>
  
          <ons-col>
          <p style="font-size:10px" class="text-center">${doc.data().title} (${doc.data().year})</p>

          <p style="font-size:10px" class="text-center">`+ star + `(${doc.data().star})</p>
       
          </ons-col>
        
          </ons-row>`

          }
          // else{
          //     $("#search_show").empty();
          //     $("#search_show").append("ไม่พบหนังในที่ค้นหา ลองค้นหาใหม่อีกครั้ง");

          // }

        } else {
          $("#search_show").empty();

          var alert_search = `<p style="margin-left: 20px;">ใส่ข้อมูลเป็น ตัวอักษร หรือ ตัวเลข เท่านั้น!!</p>`;

          $("#search_show").append(alert_search);

        }

        $("#search_show").append(row);

    });
  });
}







//category




function showmovie_type(id) {


  $("#show_movie_category").empty();

  db.collection("movies").get().then((querySnapshot) => {

    querySnapshot.forEach((doc) => {

      if (doc.data().type == id) {

        if (`${doc.data().star}` > 4) {
          var star = ` 
  <ons-icon style="color: red" icon="fa-star"></ons-icon>
  <ons-icon style="color: red" icon="fa-star"></ons-icon>
  <ons-icon style="color: red" icon="fa-star"></ons-icon>
  <ons-icon style="color: red" icon="fa-star"></ons-icon>
  <ons-icon style="color: red" icon="fa-star"></ons-icon>`

        } else if (`${doc.data().star}` > 3) {
          var star = ` 
  <ons-icon style="color: red" icon="fa-star"></ons-icon>
  <ons-icon style="color: red" icon="fa-star"></ons-icon>
  <ons-icon style="color: red" icon="fa-star"></ons-icon>
  <ons-icon style="color: red" icon="fa-star"></ons-icon>
  <ons-icon style="color: gray" icon="fa-star"></ons-icon>`

        } else if (`${doc.data().star}` > 2) {
          var star = ` 
  <ons-icon style="color: red" icon="fa-star"></ons-icon>
  <ons-icon style="color: red" icon="fa-star"></ons-icon>
  <ons-icon style="color: red" icon="fa-star"></ons-icon>
  <ons-icon style="color: gray" icon="fa-star"></ons-icon>
  <ons-icon style="color: gray" icon="fa-star"></ons-icon>`

        } else if (`${doc.data().star}` > 1) {
          var star = ` 
  <ons-icon style="color: red" icon="fa-star"></ons-icon>
  <ons-icon style="color: red" icon="fa-star"></ons-icon>
  <ons-icon style="color: gray" icon="fa-star"></ons-icon>
  <ons-icon style="color: gray" icon="fa-star"></ons-icon>
  <ons-icon style="color: gray" icon="fa-star"></ons-icon>`

        } else {
          var star = ` 
  <ons-icon style="color: gray" icon="fa-star"></ons-icon>
  <ons-icon style="color: gray" icon="fa-star"></ons-icon>
  <ons-icon style="color: gray" icon="fa-star"></ons-icon>
  <ons-icon style="color: gray" icon="fa-star"></ons-icon>
  <ons-icon style="color: gray" icon="fa-star"></ons-icon>`

        }

        row = `
        <img src="${doc.data().posterURL}" width="30%" style="" alt="" id="${doc.data().title}">`


        $("#show_movie_category").append(row);

      }
    })

  })

}