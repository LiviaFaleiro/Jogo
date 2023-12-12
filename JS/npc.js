const NPC = function(){
    this.nomeN = "nome";
    this.falas = [];
    this.especial= [];
    }
    let karen = new NPC(); //aparece no mercado
    karen.nomeN = "karen a Chata";
    karen.falas = ["Preciso achar o café no mercado. Sabe onde está?", "Sai da minha frente, não está vendo que está atrapalhando?", "Pobres, Sempre atrapalhando tudo"];
    karen.especial = ["Pelo amor de Deus que roupas estranhas(CARA DE JULGAMENTO)","Sério, esse mercado já foi mais bem frequentado"];
    
    let colega = new NPC(); //aparece no trabalho laboratório
    colega.nomeN = "colega de trabalho";
    colega.falas = ["Você está errada, está fazendo seu trabalo errado","Poderia me ajudar?",];
    colega.especial = ["Parece que não dormiu hoje."];
    
    let bebado = new NPC(); // aparece na festa
    bebado.nomeN = "Cara Louco na Festa"
    bebado.falas = ["Quer dançar","Eai, acetia uma bebida? (Cara de apaixonado)","Nunca mais bebo na minha vida"];
    bebado.especial = ["Quer se sentar um pouco? Nessa idade não deveria estar em festas e sim tricotando"];
    
    let cliente = new NPC(); //aparece no trabalho vendas
    cliente.nomeN = "Cleo a cliente"
    cliente.falas = ["Eu sempre tenho razão","Você poderia me dar um desconto(Cara de pedinte)","Minha amiga faria bem mais barato..."];
    cliente.especial = ["Não aguenta trabalhar com vendas? Se demite"];

    let gato = new NPC(); //aparece no quarto
    gato.nomeN = "Gatucho";
    gato.falas = ["miau miau miau miau (pedindo comida)", "miau miau miau miau (quer sair para brincar)"];
    gato.especial = ["miau miau miau (amo minha dona, por favor faça carinho em mim)"]

  
    function FALA(npc) {
        const indiceFala = Math.floor(Math.random() * npc.falas.length);
        const falaAleatoria = npc.falas[indiceFala];
        const indiceFalaEspecial = Math.floor(Math.random()*npc.falasespecias.length);
        const falaes = npc.falasespecias[indiceFalaEspecial]
        if(personagemSelecionado.energia <=30){
        alert(falaes);
        }
        else{
        alert(falaAleatoria);
        }
        }