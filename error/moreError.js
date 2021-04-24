/*
try{
   //vai tentar executar
}catch(error){
   // vai tratar o erro
}finally{
  // vai sempre ser executado independente do erro
}  */

//criando uma pequena função para tratar erro.
//finaly sempre e executado dentro do try / catch

const data = new Date();

function toHour(data) {
    if (!(data instanceof Date)) throw new TypeError("Estamos aguardando instancia de Date")


    return data.toLocaleTimeString('pt-Br', {
        hour12: false,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'

    })

}

// oque desejo executar precisa estar dentro do catch
// variavel data não pretendo executar e apenas uma variavel global para gerar
// minhas ações.
try {
    const hours = toHour(1);
    console.log(hours)
} catch (error) {
    console.log(error)
}
finally {
    console.log("Eu sou sempre executado")
}




