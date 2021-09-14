// passando os elementos do DOM para variaveis
// para poder interagir dinamicamente com eles
const botaoAdicionar = document.querySelector("#botao-adicionar");
const container = document.querySelector(".container");
const legendaForm = document.querySelector("#legenda");
const dataForm = document.querySelector("#data");
const descricaoForm = document.querySelector("#descricao");
const urlImgForm = document.querySelector("#url-img");

// adicionando o evento de clique ao botao adicionar do
// formulario principal, para inserir novas imagens
botaoAdicionar.addEventListener('click', (event) => {
    // evitando que a pagina seja recarrecada ao clicar no botao
    event.preventDefault();
    
    // criando a div do novo card e adicionando a classe child
    const novoCard = document.createElement('div');
    novoCard.classList.add('child');

    // criando a imagem do card e adicionando os atributos
    const imagem = document.createElement('img');
    imagem.setAttribute('src', urlImgForm.value);
    imagem.classList.add('img-child');
    imagem.setAttribute('alt', descricaoForm.value);

    // criando o paragrafo que exibira a data da imagem
    const data =  document.createElement('p');
    data.classList.add('data-child');
    data.textContent = dataForm.value.replaceAll('-', '/');

    // criando o paragrafo que exibira a legenda do card
    const legenda =  document.createElement('p');
    legenda.classList.add('legenda-child');
    legenda.textContent = legendaForm.value;

    // adicionando todos os elementos ao DOM de forma ordenada
    novoCard.appendChild(imagem);
    novoCard.appendChild(data);
    novoCard.appendChild(legenda);
    container.appendChild(novoCard);
});




// passando os elementos do DOM para variaveis
// para poder interagir dinamicamente com eles
const botaoFormContato = document.querySelector('#botao-contato');
const formularioContato = document.querySelector('#formulario-contato');
const nomeContato = document.querySelector('#nome-contato');
const emailContato = document.querySelector('#email-contato');
const celularContato = document.querySelector('#celular-contato');
const mensagemContato = document.querySelector('#mensagem-contato');
const botaoEnviarContato = document.querySelector('#enviar-contato');

// adicionanddo o evento de clique ao botao que exibe o formulario
botaoFormContato.addEventListener('click', (event) => {
    // o botao muda o display do formulario para exibi-lo ou esconde-lo
    if(formularioContato.style.display == 'block'){
        formularioContato.style.display = 'none';
    } else{
        formularioContato.style.display = 'block';
    }
});

// adicionando o evento de clique ao botao de submit do
// formulario de contato
botaoEnviarContato.addEventListener('click', (event) => {
    // evitando que a pagina seja recarregada
    event.preventDefault();

    // criando um json com as informacoes do formulario
    const mensagem = {
        "nome": nomeContato.value,
        "email": emailContato.value,
        "celular": celularContato.value,
        "mensagem": mensagemContato.value
    };

    // exibindo o json no console representando o envio da mensagem
    console.log(mensagem);
});