const Personagem = function(){

	this.vida = 100;
	this.felicidade = 100;
	this.fome = 100;
	this.saude = 100;
	this.inteligencia = 0;
	this.energia = 100;
	this.dinheiro = 10000;

	this.descricao = "Alguma coisa";

}

let Programadora = new Personagem();

Programadora.vida = 100;
Programadora.felicidade = 100;
Programadora.fome = 100;
Programadora.saude = 100;
Programadora.inteligencia = 0;
Programadora.energia = 100;
Programadora.dinheiro = 50;
Programadora.descricao = "Tem mais dinheiro mas menos (MUITO MENOS) felicidade";

let Atriz = new Personagem();
Atriz.vida = 100;
Atriz.felicidade = 10;
Atriz.fome = 100;
Atriz.saude = 100;
Atriz.inteligencia = 0;
Atriz.energia = 100;
Atriz.dinheiro = 50;
Atriz.descricao = "Tem pouco dinheiro mas mais disposição";

let Cozinheira = new Personagem();
Cozinheira.vida = 100;
Cozinheira.felicidade = 100;
Cozinheira.fome = 100;
Cozinheira.saude = 100;
Cozinheira.inteligencia = 0;
Cozinheira.energia = 100;
Cozinheira.dinheiro = 50;
Cozinheira.descricao = "Ganha mais pontos de fome ao comer e tem mais fome";

let Paleontologa = new Personagem();
Paleontologa.vida = 2;
Paleontologa.felicidade = 100;
Paleontologa.fome = 100;
Paleontologa.saude = 49;
Paleontologa.inteligencia = 10;
Paleontologa.energia = 100;
Paleontologa.dinheiro = 30;
Paleontologa.descricao = "Mais sujo porém possui mais energia";


function telaP(Personagem) {

	document.getElementById("vida").innerHTML = Personagem.vida;
	document.getElementById("felicidade").innerHTML = Personagem.felicidade;
	document.getElementById("fome").innerHTML = Personagem.fome;
	document.getElementById("saude").innerHTML = Personagem.saude;
	document.getElementById("inteligencia").innerHTML = Personagem.inteligencia;
	document.getElementById("energia").innerHTML = Personagem.energia;
	document.getElementById("descricao").innerHTML = Personagem.descricao;
	document.getElementById("perfilVida").innerText = "Vida: " + Personagem.vida;

	document.getElementById("perfilEnergia").innerText = "Energia: " + Personagem.energia;
	document.getElementById("perfilFelicidade").innerText = "Felicidade: " + Personagem.felicidade;
	document.getElementById("perfilFome").innerText = "Fome: " + Personagem.fome;
	document.getElementById("perfilSaude").innerText = "Saúde:" + Personagem.saude;
	document.getElementById("perfilInteligencia").innerText = "Inteligência: " + Personagem.inteligencia;
	document.getElementById("perfilDinheiro").innerText = "Dinheiro: " + Personagem.dinheiro;


	PersonagemSelecionado = Personagem;

}

function nome(){
	document.getElementById("nomeg").style.display = "block";
	document.getElementById("telaP").style.display = "none";
	}
	//---------------------------------------------------------------------
	function casa(genero) {

			nomePersonagem = document.getElementById("nomeG").value;
			generoPersonagem = genero;
			document.getElementById("cidade").style.display = "block";
			document.getElementById("telaP").style.display = "none";
			document.getElementById("nomeg").style.display = "none";
			document.getElementById("perfilButton").style.display = "inline";

	}

	function trabalhar() {


			
		if(PersonagemSelecionado.energia> 0 && PersonagemSelecionado.saude>0){

			 
			

						if(PersonagemSelecionado == Programadora){
                         

							alert('Você trabalhou por horas e ganhou 20 reais, mas perdeu 5 pontos de energia e 1 ponto de saude')
                            PersonagemSelecionado.dinheiro+=20
							PersonagemSelecionado.energia-=5

					}

						else if(PersonagemSelecionado == Atriz){


							alert("Você está trabalhando em um espetáculo, ganhou 15 reais e perdeu 8 de energia mas ficou muito feliz! e ganhou 5 pontos de Felicidade")
							PersonagemSelecionado.felicidade+=5
							PersonagemSelecionado.energia-=8
							PersonagemSelecionado.dinheiro+=15

						}

						else if(PersonagemSelecionado == Cozinheira){


							alert('Após passar 6 horas dentro de uma cozinha de um restaurante, ganhou 6 de fome, perdeu 5 de energia e ganhou 18 reais')
							PersonagemSelecionado.fome+=10
							PersonagemSelecionado.energia-=5
							PersonagemSelecionado.dinheiro+=18


						}

						else if(PersonagemSelecionado == Paleontologa){

							alert('Você passou horas dentro do seu laboratório trabalhando com seus colegas, você ganhou 25 reais,ganhou 10 pontos de sujeira e perdeu 3 de energia')
							PersonagemSelecionado.dinheiro+=25
							PersonagemSelecionado.sujo+=10
							PersonagemSelecionado.energia-=3
						}
		
						}	
						else if(PersonagemSelecionado.energia> 0 && PersonagemSelecionado.saude<=0){
                                           

						}
		 atualizarPerfil(PersonagemSelecionado)

		 //Funcionando
	}

				function mostrarPerfil() {
					document.getElementById("perfil").style.display = "block";
					document.getElementById("nomePerfil").innerText = "Nome: "
					+ nomePersonagem;
					document.getElementById("generoPerfil").innerText =
					"Gênero: " + generoPersonagem;
					esconderBotaoPerfil();
					document.getElementById("fecharPerfilButton").style.display
					= "inline";
				
					}

					function atualizarPerfil(personagem) {
						document.getElementById("perfilVida").innerText = "Vida: "
						+ personagem.vida;
						document.getElementById("perfilEnergia").innerText = "Energia: " + personagem.energia;
						document.getElementById("perfilFelicidade").innerText =
						"Felicidade: " + personagem.felicidade;
						document.getElementById("perfilFome").innerText = "Fome: " + personagem.fome;
						document.getElementById("perfilSaude").innerText = "Saúde: " + personagem.saude;
						document.getElementById("perfilInteligencia").innerText =
						"Inteligência: " + personagem.inteligencia;
						document.getElementById("perfilDinheiro").innerText = "Dinheiro: " + personagem.dinheiro;
						document.getElementById("perfilSaude").innerText = "Saude: " + personagem.saude;
						document.getElementById("perfilSujo").innerText = "Sujo: "+ personagem.sujo; }
						//---------------------------------------------------------------------
						
						function esconderBotaoPerfil() {
						document.getElementById("perfilButton").style.display =
						"none";
						}

						function fecharPerfil() {
							document.getElementById("perfil").style.display = "none";
							document.getElementById("fecharPerfilButton").style.display
							= "none";
							document.getElementById("perfilButton").style.display =
							"inline";
						}
                        function cozinha(){
							document.getElementById("cozinha").style.display = "block";
							document.getElementById("geladeira").style.display = "none";
							document.getElementById("barraco").style.display = "none";
							document.getElementById("telaP").style.display = "none";
							document.getElementById("nomeg").style.display = "none";
							}
						
