const efetuarLogin = async (usuario, senha) =>{
    const cabecalho = {
        method:"post",
        body:JSON.stringify({
            userName: usuario,
            password: senha
        }),
        headers:{
            "content-type" : "application/json"
        }
    }
    const resposta = await fetch("http://192.168.15.163:3030/users/login", cabecalho);
    if(resposta.ok){
        //logado com sucesso...
        return resposta.headers.get("x-access-token");
    }else{
        throw new Error("Não foi possivel logar...");
    }
    console.warn(resposta);
}

export default efetuarLogin