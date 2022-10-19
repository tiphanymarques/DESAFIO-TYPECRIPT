// fetch
class Informacao{
    nome : string;
    data: Date;
    descricao: string;
    status: boolean;
    id:number;

    constructor(_nome:string,  _descricao:string, _data:Date, _status:boolean, _id:number){
         this.nome= _nome
         this.data = _data
         this.descricao=_descricao
         this.status= _status
         this.id = _id

    }
} 
 
let guardarinformacao: Array<Informacao> = []

fetch('https://62361b7feb166c26eb2f488a.mockapi.io/pacotes',{
    method: 'GET',
    headers: {'Content-Type' : "aplication/json"}
})

.then(response => response.json())
.then(api => {
    for (let index = 0; index < api.length; index++){
        let informacao: Informacao = new Informacao (api[index].nome, api[index].descricao, api[index].data, api[index].id, api[index].status)
        guardarinformacao.push(informacao)
    }
    console.log(guardarinformacao);
    
})


//listar


