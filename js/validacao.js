function cadastrar() {
   
    var nomeVar = input_Nome.value;
    var emailVar = input_Email.value;
    var senhaVar = input_Senha.value;
    var confirmacaoSenhaVar = input_ConfirmarSenha.value;

    if (nomeVar == "" || emailVar == "" || senhaVar == "" || confirmacaoSenhaVar == "") {
        alert("Preencha todos os campos")
    }
    if(senhaVar != confirmacaoSenhaVar){
        alert("A confirmação da senha precisa ser igual à senha")

    }
   

    // Enviando o valor da nova input
    fetch("https://localhost:7289/Usuarios/Create", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            // crie um atributo que recebe o valor recuperado aqui
            // Agora vá para o arquivo routes/usuario.js
            id: 1,
            nome: nomeVar,
            email: emailVar,
            senha: senhaVar
        })
    }).then(function (resposta) {

        console.log("resposta: ", resposta);

        if (resposta.ok) {
           
            setTimeout(() => {
                window.location = "logado.html";
            }, "2000")
        } else {
            throw ("Houve um erro ao tentar realizar o cadastro!");
        }
    }).catch(function (resposta) {
        console.log(`#ERRO: ${resposta}`);
    });

    return false;
}

// function Cadastrar(){
//     var nome = input_Nome.value;
//     var email = input_Email.value;
//     var senha = input_Senha.value;
//     var confirmaSenha = input_ConfirmarSenha.value
//     if (nome == '' || email == '' || senha == ''){
//         alert("preencha todos os campos")
//     }
//     if(senha != confirmaSenha){
//     alert(`os campos "senha" e "confirmação de senha" precisam ser iguais. Tente novamente`);
//     }else{
//         div_Cadastro.innerHTML += `Usuário ${nome} cadastrado com sucesso`;
//         window.location.href = "/home/aluno/Downloads/F-Site-Naruto---Projeto-Pessoal-SPTech-School/logado.html";
//     }
    
// }

//https://localhost:7289/