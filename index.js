
$(function(){

    var firebaseConfig = {
        apiKey: "AIzaSyDd0Q94GXPFZAT6nuZp3az_49EpF4FkcxA",
        authDomain: "namemove.firebaseapp.com",
        databaseURL: "https://namemove.firebaseio.com",
        projectId: "namemove",
        storageBucket: "namemove.appspot.com",
        messagingSenderId: "609490634873",
        appId: "1:609490634873:web:08bcdcb56d230c2b6a2ca8",
        measurementId: "G-ZP7LRG3WWE"
      };
      // Initialize Firebase
      firebase.initializeApp(firebaseConfig);
      firebase.analytics();
      var db = firebase.firestore();
    
      db.collection("movies").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            var row = `<div class="card">
            <img class="card-img-top" src="${doc.data().posterURL}" alt="">
            <div class="card-body">
            <h4 class="card-title">
                ${doc.data().title}(${doc.data().year})
            </h4>
            <p class="card-text">  ${doc.data().shortstory}       </p>
         </div>

            `
           
            $("#list").append(row);
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

document.addEventListener('init', function(event) {
    var page = event.target;
    
    if (page.id === 'home') {
      page.querySelector('#menu_button').onclick = function() {
        document.querySelector('#menu').open();
      };
  
      //The postchange event listener is used for changing the dots when the carousel is changed
  
      page.querySelector('#carousel').addEventListener("postchange", function() {
        page.querySelector('#dot0').classList.remove("circle_current");
        page.querySelector('#dot1').classList.remove("circle_current");
        page.querySelector('#dot2').classList.remove("circle_current");
  
        page.querySelector('#dot' + page.querySelector('#carousel').getActiveIndex()).classList.add("circle_current");
  
      });
    }
     else if (page.id === 'movie_details') {
      page.querySelector('#movie_title').innerHTML = page.data.title;
    }
   
  });
  
  
  



  function openMovieDetails(id) {
    document.querySelector('#myNavigator').pushPage('movie_details.html', {data: {title: id}});
  }
  
  function openHome() {
    document.querySelector('#myNavigator').pushPage('home_splitter.html');
  }
  function goBack() {
    document.querySelector('#menu').close().then(function() {
      document.querySelector('#myNavigator').popPage()
    });
  }
  function goaction() {
    document.querySelector('#myNavigator').pushPage('action.html');
  }
  function gocomedy() {
    document.querySelector('#myNavigator').pushPage('comedy.html');
  }

// `<h3>${doc.data().title}</h3>`
 

