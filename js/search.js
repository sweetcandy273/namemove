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


function page_search() {
    $("#sug_show").empty();
    $("#search_show").empty();
  
  
            var alert_search = `<p style="text-center">รายการแนะนำ</p>`;
  
            $("#sug_show").append(alert_search);
  
    db.collection("movies").get().then((querySnapshot) => {
  
      querySnapshot.forEach((doc) => {
  
        if (`${doc.data().star}` > 4.5) {
          var star = ` 
  <ons-icon style="color: red" icon="fa-star"></ons-icon>
  <ons-icon style="color: red" icon="fa-star"></ons-icon>
  <ons-icon style="color: red" icon="fa-star"></ons-icon>
  <ons-icon style="color: red" icon="fa-star"></ons-icon>
  <ons-icon style="color: red" icon="fa-star"></ons-icon>`
  
        } else if (`${doc.data().star}` > 3.5) {
          var star = ` 
  <ons-icon style="color: red" icon="fa-star"></ons-icon>
  <ons-icon style="color: red" icon="fa-star"></ons-icon>
  <ons-icon style="color: red" icon="fa-star"></ons-icon>
  <ons-icon style="color: red" icon="fa-star"></ons-icon>
  <ons-icon style="color: gray" icon="fa-star"></ons-icon>`
  
        } else if (`${doc.data().star}` > 2.5) {
          var star = ` 
  <ons-icon style="color: red" icon="fa-star"></ons-icon>
  <ons-icon style="color: red" icon="fa-star"></ons-icon>
  <ons-icon style="color: red" icon="fa-star"></ons-icon>
  <ons-icon style="color: gray" icon="fa-star"></ons-icon>
  <ons-icon style="color: gray" icon="fa-star"></ons-icon>`
  
        } else if (`${doc.data().star}` > 1.5) {
          var star = ` 
  <ons-icon style="color: red" icon="fa-star"></ons-icon>
  <ons-icon style="color: red" icon="fa-star"></ons-icon>
  <ons-icon style="color: gray" icon="fa-star"></ons-icon>
  <ons-icon style="color: gray" icon="fa-star"></ons-icon>
  <ons-icon style="color: gray" icon="fa-star"></ons-icon>`
  
        } else {
          var star = ` 
  <ons-icon style="color: red" icon="fa-star"></ons-icon>
  <ons-icon style="color: gray" icon="fa-star"></ons-icon>
  <ons-icon style="color: gray" icon="fa-star"></ons-icon>
  <ons-icon style="color: gray" icon="fa-star"></ons-icon>
  <ons-icon style="color: gray" icon="fa-star"></ons-icon>`
  
        }
  
  
        var row = `
        <ons-row style="margin: 5px;" id="${doc.data().title}">
        <ons-col class="text-center">
        <img src="${doc.data().posterURL}" width="50%" style="margin: 5px 5px;" alt="">
        </ons-col>
  
        <ons-col>
        <p style="font-size:10px" class="text-center">${doc.data().title} (${doc.data().year})</p>
  
        <p style="font-size:10px" class="text-center">`+ star + ` (${doc.data().star})</p>
     
        </ons-col>
      
        </ons-row>`
  
        $("#search_show").append(row);
      });
    });
  
  
  
    $("#search").click(function () {
  
      $("#search_show").empty();
      $("#sug_show").empty();
      $("#search_show").append("ผลลัพธ์การค้นหา:");
      var search_input = document.getElementById("search_input").value;
      console.log(search_input);
  
      db.collection("movies").get().then((querySnapshot) => {
  
        querySnapshot.forEach((doc) => {
  
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
  
          var titleforcheck = `${doc.data().title}`;
          // console.log(titleforcheck);
          var yearforcheck = `${doc.data().year}`;
          // console.log(yearforcheck);
  
          var regexNumber = /\d/;
          var regexLetter = /[a-zA-z]/;
  
          if (regexLetter.test(search_input)) {
            
    
            if (titleforcheck.toLowerCase().indexOf(search_input.toLowerCase())!=-1) {
  
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
  
  
          } else if (regexNumber.test(search_input)) {
  
            if (search_input == yearforcheck) {
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
  
  
      
    });
  
    
    
  }
  
  