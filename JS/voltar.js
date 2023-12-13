
function voltar(){
    document.body.style.backgroundImage = "url(/assets/cenario/telaLogin.jpg)"
    document.getElementById("town").style.display = "flex";
    document.getElementById("telaP").style.display = "none";
    document.getElementById("nomeUsuario").style.display = "none";
    document.getElementById("trabalho").style.display = "none";
    document.getElementById("festar").style.display = "none";
    document.getElementById("market").style.display = "none";
    document.getElementById("dentroCasa").style.display = "none";
    document.getElementById("tempo-jogo").style.display="block";
    document.getElementById("Sacola-Abrir").style.display = "none";
}

function voltarCasa(){
   
    document.getElementById("tempo-jogo").style.display="block";
    document.getElementById("dentroCasa").style.display = "flex";
    document.getElementById("quartinho").style.display = "none";
    document.getElementById("Banheiroo").style.display = "none";

}

function voltarMenuFesta(){

    document.getElementById("festar").style.display="flex"
    document.getElementById("bebidas").style.display="none"

}