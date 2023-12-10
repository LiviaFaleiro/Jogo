function esconderBotaoPerfil() {
    document.getElementById("perfilButton").style.display =
    "none";
}

function mostrarPerfil() {
    document.getElementById("perfil").style.display = "block";
    document.getElementById("nomePerfil").innerText = "Nome: " + nomePersonagem;
    document.getElementById("generoPerfil").innerText =
    "Gênero: " + generoPersonagem;
    esconderBotaoPerfil();

    document.getElementById("fecharPerfilButton").style.display = "inline";
    }
   
    function fecharPerfil() {
        document.getElementById("perfil").style.display = "none";
        document.getElementById("fecharPerfilButton").style.display = "none";
        document.getElementById("perfilButton").style.display =
        "inline";
}

function esconderPerfil() {
    document.getElementById("perfil").style.display = "none";
    }

    function voltar(){

        document.getElementById("cidade").style.display = "block";
        document.getElementById("telaP").style.display = "none";
        document.getElementById("nomeg").style.display = "none";
        document.getElementById("lugarComida").style.display = "none";
        document.getElementById("quar").style.display = "none";
        document.getElementById("festar").style.display = "none";
        document.getElementById("market").style.display = "none";
        document.getElementById("ban").style.display = "none";
        document.getElementById("geladeira").style.display = "none";
    
    }