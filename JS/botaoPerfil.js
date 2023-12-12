function esconderBotaoPerfil() {
    document.getElementById("perfilButton").style.display = "none";
}

function mostrarPerfil() {
    document.getElementById("perfil").style.display = "block";
    document.getElementById("nomePerfil").innerText = "Nome: " + nomePersonagem;
    document.getElementById("generoPerfil").innerText = "Gênero: " + generoPersonagem;
    esconderBotaoPerfil();

    document.getElementById("fecharPerfilButton").style.display = "inline";
    }
   
    function fecharPerfil() {
        document.getElementById("perfil").style.display = "none";
        document.getElementById("fecharPerfilButton").style.display = "none";
        document.getElementById("perfilButton").style.display = "inline";
}

function esconderPerfil() {
    document.getElementById("perfil").style.display = "none";
}
    