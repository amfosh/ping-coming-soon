function validateForm() {
    var x = document.forms["subscribe"]["email"].value;
    if (x == "") {
      alert("Email must be filled out");
      return false;
    }
  }