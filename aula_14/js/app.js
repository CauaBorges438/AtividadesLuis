const txtEmail = document.getElementById("id-txt-login");
const txtSenha = document.getElementById("id-txt-senha");
txtSenha.placeholder = "Digite sua senha";
txtEmail.placeholder = "email@gmail.com";

const API = "https://localhost:3000/cadastro";

document.getElementById("id-frm-login").addEventListener("submit", async (e) => {
    e.preventDefault();
});

async function enviar() {
    const novoEmail = document.getElementById("id-txt-login").value
}
    const test = await fetch(API, {
        body: JSON.stringify(novoEmail),
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        }
    });