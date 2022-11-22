function clickShowPassword() {
  var x = document.querySelector("#input_password");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}
