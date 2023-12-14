const NPC = function () {
    this.nomeN = "nome";
    this.falas = [];
    this.especial = [];
}

let karen = new NPC(); // aparece no mercado
karen.nomeN = "karen a Chata";
karen.falas = ["Preciso achar o café no mercado. Sabe onde está?", "Sai da minha frente, não está vendo que está atrapalhando?", "Pobres, Sempre atrapalhando tudo"];
karen.especial = ["Pelo amor de Deus que roupas estranhas(CARA DE JULGAMENTO)", "Sério, esse mercado já foi mais bem frequentado"];

let colega1 = new NPC(); // aparece no trabalho laboratório biologia
colega1.nomeN = "colega de trabalho paleontologo";
colega1.falas = ["Você está errada, está fazendo seu trabalho errado", "Poderia me ajudar?",];
colega1.especial = ["Parece que não dormiu hoje."];

let colega2 = new NPC(); // aparece no laboratório de informática
colega2.nomeN = "colega de trabalho programador";
colega2.falas = ["Nossa que cara horrivel, aceita café?", "Minha div não centraliza, pode me ajudar?"];
colega2.especial = ["Nossa, que cara de quem dormiu e sonhou com JavaScript com orientação ao objeto!! Que pesadelo.", "Eu deveria ser Canonizado, não acha?", "cara de quem dormiu e sonhou que criava uma sacola com JS"]

let colega3 = new NPC(); // aparece no estudio
colega3.nomeN = "colega de trabalho Atriz";
colega3.falas = ["Corta!! Você está fazendo a cena de forma errada", "Finalmente uma atuação boa saiu de ti"];
colega3.especial = ["Você deveria parar de atuar, não vai chegar a lugar algum com essa falta de talento", "Perfeito! vamos para a próxima cena."];

let colega4 = new NPC(); // aparece na cozinha
colega4.nomeN = "colega de trabalho cozinheiro";
colega4.falas = ["Mesa 7 pediu Carne MAL PASSADA", "Ajude a lavar a louça!", "Estás muito lenta, seja mais rápida"];
colega4.especial = ["Não se fazem cozinheiros bons como antigamente..", "Eu deveria parar de contratar funcionários ruins"];

let bebado = new NPC(); // aparece na festa
bebado.nomeN = "Cara Louco na Festa"
bebado.falas = ["Quer dançar", "Eai, acetia uma bebida? (Cara de apaixonado)", "Nunca mais bebo na minha vida"];
bebado.especial = ["Quer se sentar um pouco? Nessa idade não deveria estar em festas e sim tricotando"];

let cliente = new NPC(); // aparece no trabalho vendas
cliente.nomeN = "Cleo a cliente"
cliente.falas = ["Eu sempre tenho razão", "Você poderia me dar um desconto(Cara de pedinte)", "Minha amiga faria bem mais barato..."];
cliente.especial = ["Não aguenta trabalhar com vendas? Se demite"];

let gato = new NPC(); // aparece no quarto
gato.nomeN = "Gatucho";
gato.falas = ["miau miau miau miau (pedindo comida)", "miau miau miau miau (quer sair para brincar)"];
gato.especial = ["miau miau miau (amo minha dona, por favor faça carinho em mim)"]



function FALA(npc) {
    const indiceFala = Math.floor(Math.random() * npc.falas.length);
    const falaAleatoria = npc.falas[indiceFala];

    // Corrigindo o nome do array para 'especial'
    const indiceFalaEspecial = Math.floor(Math.random() * npc.especial.length);
    const falaEspecial = npc.especial[indiceFalaEspecial];

    if (personagemSelecionado) {
        if (personagemSelecionado.felicidade <= 50) {
            alert(falaEspecial);
        } else {
            alert(falaAleatoria);
        }
    }
}

       