let tempoInicial = new Date().getTime(); // Obtém o tempo inicial em milissegundos

function atualizarTempoJogo() {
    const tempoAtual = new Date().getTime();
    const diferenca = tempoAtual - tempoInicial;
    const segundos = Math.floor((diferenca / 1000) % 60);
    const minutos = Math.floor((diferenca / (1000 * 60)) % 60);
    const horas = Math.floor((diferenca / (1000 * 60 * 60)) % 24);

    const tempoFormatado = `${horas.toString().padStart(2, '0')}:${minutos.toString().padStart(2, '0')}:${segundos.toString().padStart(2, '0')}`;
    document.getElementById('tempo-jogo').textContent = tempoFormatado;
}

setInterval(atualizarTempoJogo, 1000); // Atualiza o relógio a cada segundo
