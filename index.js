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
