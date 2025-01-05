function criarConta(){
    //pegar os inputs pelo id
    let email = document.getElementById("email").value;
    let senha = document.getElementById("password").value;
    
    //verificar se a senha possui mais de 8 caracteres
    if(senha.length > 8){
        //recupera os usuarios existentes no local storage
        let usuarios = JSON.parse(localStorage.getItem("usuarios")) || []

        //verifica se o usuario já foi cadastrado
        let usuarioExistente = usuarios.find(usuario => usuario.email === email)
        
        if(usuarioExistente){
            document.getElementById("erro").style.display = "block";
            document.getElementById("erro").innerText = "Este email já foi cadastrado.";
        }
        else{
            //cria um novo objeto de usuario
            let novoUsuario = {
                email: email,
                senha: senha
            };

            //coloca o novo usuario do array
            usuarios.push(novoUsuario);

            //armazena os usuarios atualizados no local storage
            localStorage.setItem("usuarios", JSON.stringify(usuarios));

        // xxibir a mensagem de conta criada    
        let contaCriada = document.getElementById("conta-criada");
        contaCriada.style.display = "block";
        }
    }
        //exibe msg de erro
    else{
        document.getElementById("erro").style.display = "block";
        document.getElementById("erro").innerText = "A senha deve ter pelo menos 8 caracteres.";
    }

}
// permite o usuario apagar se errar a senha
document.getElementById("password").addEventListener("input", () => {
    let erro = document.getElementById("erro");
    erro.style.display = "none";
    });