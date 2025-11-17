import { Pessoa } from "./classe/Pessoa.js";
let caixa = document.getElementById("forma");
let txtN = ``;
caixa.innerHTML = txtN;

for(let i =0; i<5; i++){
    txtN +=`
        <label for="txtN${i}">Nome ${i + 1} </label>
        <input type="text" id="txtN${i}" placeholder="Caixa ${i + 1}">
        `;
}
let res = document.getElementById("r");
let r2 = document.getElementById("r2");
let label = ``;
caixa.innerHTML = txtN;
let botao = document.getElementById("btnInserir");
botao.addEventListener(`click`,()=>{
    let valor = document.getElementById("txtN0").value;
    let pessoa1 = new Pessoa(valor);
    res.innerHTML = pessoa1.exibirNome();
    r2.textContent=nome;
});

caixa.innerHTML = txtN;
caixa.style.display= "flex";
caixa.style.flexFlow= "column wrap";
caixa.style.alignContent= "center";
caixa.style.gap= "3px"; // Adiciona um espaçamento entre cada div

