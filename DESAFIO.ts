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
    lista()
    
})


//cadastrar
let data_ = document.querySelector(".data_da_viagem") as HTMLInputElement;
let pacote_ = document.querySelector(".pacote") as HTMLInputElement;
let descricao_ = document.querySelector(".descricao") as HTMLInputElement;
let button = document.querySelector(".botao")!


const Cadastrar = () => {

    let data: Date = new Date (data_.value);
    let pacote: string = pacote_.value;
    let descricao: string = descricao_.value;

    let cadastro: Informacao = new Informacao(pacote, descricao, data, false, guardarinformacao.length+1)

    guardarinformacao.push(cadastro)
    lista()
}
 

//listar
let div= document.querySelector(".lista_pacote")!;
const lista = () => {
    div.innerHTML = "";
    for (let index = 0; index < guardarinformacao.length; index++)
     {
         div.innerHTML += `
         <div class= "pacoteX"><h3>${guardarinformacao[index].nome}</h3><br><br><p>${guardarinformacao[index].descricao}</p> <p>data da viagem:${guardarinformacao[index].data} </p>
   <br><br>
   <div class="botoes"> <button onclick ='editar("${guardarinformacao[index].nome}" ,"${guardarinformacao[index].data}", "${guardarinformacao[index].descricao}","${guardarinformacao[index].id}","${guardarinformacao[index].status}")')
   class="botao_editar">editar</button> <br> <br> <button onclick ="excluir(${index})"class="botao_excluir">excluir</button> </div> </div>
   
`
    }
}

//excluir
const excluir = (index: number) =>{
    // splice = remover
    guardarinformacao.splice(index,1)
    lista()
}




//armazena nos inputs e em variáveis
let pacote = document.querySelector (".quadra_do_numero") as HTMLInputElement
let data_da_viagem = document.querySelector (".data") as  HTMLInputElement
let descricao = document.querySelector ("#descricao") as  HTMLInputElement
let guardar_id : number;
let guardar_status : boolean;


//EDITAR
// Primeira função pega os dados do objeto a ser editado
const editar= (_nome : string,  _data: string, _descricao: string, _status: boolean, _id:number) =>{
    console.log(_nome,_descricao, _data, _id, _status )

    //armazena nos inputs e em variáveis
    // = : recebe
    pacote.value = _nome
    data_da_viagem.value= _data
    descricao.value = _descricao
    guardar_id = _id
    guardar_status = _status

    button.innerHTML = "<button onclick ='parte_dois()' class='botao_editar'>editar</button>"
}
   
    const parte_dois = () => {
        let editado = new Informacao (pacote.value, descricao.value, new Date(data_.value), false, guardar_id)
        guardarinformacao.splice(guardar_id -1, 1, editado)
        lista()
        button.innerHTML = "<button onclick ='Cadastrar()'class='botao'>cadastrar</button>"
    }





    