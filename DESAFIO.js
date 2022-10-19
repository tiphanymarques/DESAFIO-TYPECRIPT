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
});
//listar
