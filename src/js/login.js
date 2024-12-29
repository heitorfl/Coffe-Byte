function login() {
    //pega o valor dos input
    let email = document.getElementById("email").value;
    let senha = document.getElementById("password").value;

    // pega os dados em forma de array que estao no local storage
    let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

    //verifica se a senha tem mais de 8 caracteres
    if (senha.length < 8) {
        document.getElementById("erro").style.display = "block";
        document.getElementById("erro").innerText = "A senha deve ter pelo menos 8 caracteres.";
        return;
    }

    //verifica se email e senha correspodem ao usuario
    let usuarioEncontrado = usuarios.find(usuario => usuario.email === email && usuario.senha === senha)

    if (usuarioEncontrado) {
        //redireciona o usuario a pagina home
        window.location.href = "index.html"
    }
    else{
        // exibe msg de erro
        document.getElementById("erro").style.display = "block";
        document.getElementById("erro").innerText = "Email ou senha incorretos.";
    }
}

 //permite o usuario apagar a senha se ela for menor que 8
 document.getElementById("password").addEventListener("input", () => {
let erro = document.getElementById("erro");
    erro.style.display = "none";
 });