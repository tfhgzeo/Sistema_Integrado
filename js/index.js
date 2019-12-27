function login() {
    var user = document.getElementById("user").value.toLowerCase();
    var pass = document.getElementById("passwd").value;

    if (user == "" || pass == ""){
        alert("Os campos não podem estar vazios") 
    } 
    else if(user == "gmoreira" && pass == "FeGu3112") {
        alert("Login realizado com sucesso")
        window.location.href = "menu.html";
    }
    else {
        alert("Login falhou, Tente novamente.")
    }
}

function enter(e) {
    if (e.keyCode == 13) {
        login();
    }
}
