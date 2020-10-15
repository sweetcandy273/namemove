
$(function(){

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
      // Initialize Firebase
      firebase.initializeApp(firebaseConfig);
      firebase.analytics();
      var db = firebase.firestore();
    
        db.collection("movies").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
         
          // var row = `
          // <ons-carousel-item modifier="nodivider" id="${doc.data().title}" onclick="openMovieDetails(this.id)">
          //   <img src="${doc.data().posterURL}" >
          // </ons-carousel-item>
      
          // `
        
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
    document.querySelector('#myNavigator').pushPage('views/movie_details.html', {data: {title: id}});
  }
  
  function openHome() {
    document.querySelector('#myNavigator').pushPage('views/home_splitter.html');
  }
  function goBack() {
    document.querySelector('#menu').close().then(function() {
      document.querySelector('#myNavigator').popPage()
    });
  }
  function goaction() {
    document.querySelector('#myNavigator').pushPage('views/action.html');
  }
  function gocomedy() {
    document.querySelector('#myNavigator').pushPage('views/comedy.html');
  }
  function gohorror() {
    document.querySelector('#myNavigator').pushPage('views/horror.html');
  }
  function romance() {
    document.querySelector('#myNavigator').pushPage('views/romance.html');
  }
// `<h3>${doc.data().title}</h3>`
 

