function Cadastrar(){
    var nome = input_Nome.value;
    var email = input_Email.value;
    var senha = input_Senha.value;
    var confirmaSenha = input_ConfirmarSenha.value
    if (nome == '' || email == '' || senha == ''){
        alert("preencha todos os campos")
    }
    if(senha != confirmaSenha){
    alert(`os campos "senha" e "confirmação de senha" precisam ser iguais. Tente novamente`);
    }else{
        div_Cadastro.innerHTML += `Usuário ${nome} cadastrado com sucesso`;
        window.location.href = "/home/aluno/Downloads/F-Site-Naruto---Projeto-Pessoal-SPTech-School/logado.html";
    }
    
}