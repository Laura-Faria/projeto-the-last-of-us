/* 
OBJETIVO - ao clicar no botão, mostrar a imagem de fundo correspondente

1- pegar o elemento html dos botões

2- identificar o clique do usuário no botão

3- desmarcar o botão selecionado anterior

4- marcar o botão clicado como selecionado

5- esconder a imagem ativa anterior

6- mostrar a imagem correspondente ao botão clicado
*/

// passo 1 - pegar o elemento html dos botoes
const botoesCarrossel = document.querySelectorAll('.botao');
const imagens = document.querySelectorAll('.imagem');
// passo 2 - identificar o clique do usuário no botão
botoesCarrossel.forEach((botao, indice) => {
    botao.addEventListener('click', () => {
        
        desativarBotaoSelecionado();
       
        selecionarBotaoCarrossel(botao);

        esconderImagemAtiva();

        mostrarImagemDeFundo(indice);
    })
});

function selecionarBotaoCarrossel(botao) {
    botao.classList.add('selecionado');
}

function mostrarImagemDeFundo(indice) {
    imagens[indice].classList.add('ativa');
}

function esconderImagemAtiva() {
    const imagemAtiva = document.querySelector('.ativa');
    imagemAtiva.classList.remove('ativa');
}

function desativarBotaoSelecionado() {
    const botaoSelecionado = document.querySelector('.selecionado');
    botaoSelecionado.classList.remove('selecionado');
}

