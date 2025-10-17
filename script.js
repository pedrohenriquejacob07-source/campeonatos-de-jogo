function login() {
  const user = document.getElementById("user").value;
  const pass = document.getElementById("pass").value;

  if (user && pass) {
    localStorage.setItem("usuario", user);
    window.location.href = "login.html";
    return false;
  } else {
    alert("Preencha todos os campos!");
    return false;
  }
}
