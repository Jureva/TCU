// Mobile menu bar
function menuFunction() {
  document.getElementById("demo").classList.toggle("w3-show");
}
// Check sub email not blank
function validateSub() {
    var x = document.forms["myForm"]["fname"].value;
    if (x == null || x == "") {
        document.getElementById('message').innerHTML="Please enter a valid email!";
        return false;
    }
}

function validateForm() {

// Check name not blank
  var x = document.forms["contactForm"]["name"].value;
  if (x == null || x == "") {
      document.getElementById("name_error").innerHTML="Name must be filled out!";
  }

// Check email not blank
  var y = document.forms["contactForm"]["email"].value;
  if (y == null || y == "") {
      document.getElementById("email_error").innerHTML="Email is required!";
  }

// Check message not blank
  var z = document.forms["contactForm"]["message"].value;
  if (z == null || z == "") {
      document.getElementById("message_error").innerHTML="Please enter a valid message!";
      return false;
  }

}

function validateLogin() {

  var x, y;

    // Get the value of the input field with id="username" and id="password"
    x = document.getElementById("username").value;
    y = document.getElementById("password").value;

    // If x blank print error
    if (x == null || x == "") {
        document.getElementById("username_error").innerHTML="Enter your email to login!";
    }

    // If y blank print error
    if (y == null || y == "") {
        document.getElementById("password_error").innerHTML="Please enter a valid password!";
        return false;
    }



}

       // function initMap() {
        //var uluru = {lat: 53.2882802, lng: -6.3649524};
        //var map = new google.maps.Map(document.getElementById('map'), {
        //  zoom: 15,
        //  center: uluru
       // });
        //var marker = new google.maps.Marker({
         // position: uluru,
        //  map: map
       // });
      //}



   



