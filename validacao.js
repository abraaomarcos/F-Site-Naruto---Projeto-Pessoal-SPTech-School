function Cadastrar(){
    var nome = input_Nome.value;
    var email = input_Email.value;
    var senha = input_Senha.value;
    var confirmaSenha = input_confirmarSenha.value
    if (nome != null && nome != undefined){
        // alert("preencha todos os campos")
    }else{
        alert("preencha seu nome")
    };
    if(senha != confirmaSenha){
    alert(`os campos "senha" e "confirmação de senha" precisam ser iguais. Tente novamente`);
    }else{
        div_Cadastro.innerHTML = `Usuário ${nome} cadastrado com sucesso`;
    }
    
}