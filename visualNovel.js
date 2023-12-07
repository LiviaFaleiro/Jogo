const Personagem = function(){
	this.nome = "Nome padrão"
	this.vida =  0 ;
	this.alegria = 0 ;
	this.disposicao  = 0
	this.imagem = "assets/p1.png"

	
}
let amelia = new Personagem();
amelia.nome = "Amélia"
amelia.alegria = 6
amelia.vida = 7
amelia.disposicao = 4
amelia.imagem = 'assets/margarida.png'

let luana = new Personagem();

luana.nome = "Luana"
luana.alegria = 5
luana.vida = 8
luana.disposicao = 9
luana.imagem = 'assets/marina.png'



let helena = new Personagem();

helena.nome = "Helena"
helena.alegria = 7
helena.vida = 9
helena.disposicao = 8
helena.imagem = 'assetS/helena.png'

let morgana = new Personagem();

morgana.nome = "Morgana"
morgana.alegria = 4
morgana.vida = 10
morgana.disposicao = 2
morgana.imagem = 'assets/lucia.png'


function mostrar(Personagem){
	document.getElementById("foto").src = Personagem.imagem;
	document.getElementById("nome").innerHTML = Personagem.nome;
	document.getElementById("alegria").innerHTML = Personagem.alegria;
	document.getElementById("vida").innerHTML = Personagem.vida;
	document.getElementById("disposicao").innerHTML = Personagem.disposicao;



}

function iniciarOJogo(personagem){
			  
	//manipulacao de css    
	document.getElementById("telaJogo1").style ="display:block;"
	document.getElementById("telaJogo1").style += "background-image: url('assets/biblioteca.jpeg')"
	document.getElementById("telaPersonagem").style="display:none;"

	//innerHTML Conteúdo de tag
	let html = `
		<p> O nome do personagem é ${personagem.nome} </p>
	`;
	html ='<p class="classeP"> O nome do personagem é' + personagem.nome + "</p>"
}
