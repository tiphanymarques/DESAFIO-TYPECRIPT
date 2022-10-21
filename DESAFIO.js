"use strict";
// fetch
class Informacao {
    constructor(_nome, _descricao, _data, _status, _id) {
        this.nome = _nome;
        this.data = _data;
        this.descricao = _descricao;
        this.status = _status;
        this.id = _id;
    }
}
let guardarinformacao = [];
fetch('https://62361b7feb166c26eb2f488a.mockapi.io/pacotes', {
    method: 'GET',
    headers: { 'Content-Type': "aplication/json" }
})
    .then(response => response.json())
    .then(api => {
    for (let index = 0; index < api.length; index++) {
        let informacao = new Informacao(api[index].nome, api[index].descricao, api[index].data, api[index].id, api[index].status);
        guardarinformacao.push(informacao);
    }
    console.log(guardarinformacao);
    lista();
});
//cadastrar
let data_ = document.querySelector(".data_da_viagem");
let pacote_ = document.querySelector(".pacote");
let descricao_ = document.querySelector(".descricao");
let button = document.querySelector(".botao");
const Cadastrar = () => {
    let data = new Date(data_.value);
    let pacote = pacote_.value;
    let descricao = descricao_;
    let cadastro = new Informacao(pacote, descricao, data, false, guardarinformacao.length + 1);
    guardarinformacao.push(cadastro);
    lista();
};
//listar
let div = document.querySelector(".lista_pacote");
const lista = () => {
    div.innerHTML = "";
    for (let index = 0; index < guardarinformacao.length; index++) {
        div.innerHTML += `
         <div class= "pacoteX"><h3>${guardarinformacao[index].nome}</h3><br><br><p>${guardarinformacao[index].descricao}</p> <p>data da viagem:${guardarinformacao[index].data} </p>
   <br><br>
   <div class="botoes"> <button onclick ='editar("${guardarinformacao[index].nome}" ,"${guardarinformacao[index].data}", "${guardarinformacao[index].descricao}","${guardarinformacao[index].id}","${guardarinformacao[index].status}")')
   class="botao_editar">editar</button> <br> <br> <button onclick ="excluir(${index})"class="botao_excluir">excluir</button> </div> </div>
   
`;
    }
};
//excluir
const excluir = (index) => {
    // splice = remover
    guardarinformacao.splice(index, 1);
    lista();
};
//armazena nos inputs e em variáveis
let pacote = document.querySelector(".quadra_do_numero");
let data_da_viagem = document.querySelector(".data");
let descricao = document.querySelector("#descricao");
let guardar_id;
let guardar_status;
//EDITAR
// Primeira função pega os dados do objeto a ser editado
const editar = (_nome, _data, _descricao, _status, _id) => {
    console.log(_nome, _descricao, _data, _id, _status);
    //armazena nos inputs e em variáveis
    // = : recebe
    pacote.value = _nome;
    data_da_viagem.value = _data;
    descricao.value = _descricao;
    guardar_id = _id;
    guardar_status = _status;
    button.innerHTML = "<button onclick ='parte_dois()' class='botao_editar'>editar</button>";
};
const parte_dois = () => {
    let editado = new Informacao(pacote.value, descricao.value, new Date(data_.value), false, guardar_id);
    guardarinformacao.splice(guardar_id - 1, 1, editado);
    lista();
    button.innerHTML = "<button onclick ='Cadastrar()'class='botao'>cadastrar</button>";
};
