$(function () {
    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        // User is signed in.
        console.log(user);
  
        window.location.href = "namemove.html";
      }
    });
  
    $("#signingoogle").click(function () {
      console.log(`signingoogle`);
      
      var provider = new firebase.auth.GoogleAuthProvider();
  
      provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
      firebase.auth().signInWithRedirect(provider);
      firebase.auth().getRedirectResult().then(function(result) {
        console.log(`result`,result);
        
          if (result.credential) {
            // This gives you a Google Access Token. You can use it to access the Google API.
            var token = result.credential.accessToken;
            console.log(`token=${tokenB}`);
            
            // ...
          }
          // The signed-in user info.
          var user = result.user;
        }).catch(function(error) {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          console.log(`errorCode`,errorCode);
          $("#error").text(errorMessage);
        });
   
  
      
    });
  
    $("#signinemail").click(function () {
      var email = $("#email").val();
      var password = $("#password").val();
      firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .catch(function (error) {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          console.log(errorCode);
          $("#error").text(errorMessage);
        });
    });
  });
  