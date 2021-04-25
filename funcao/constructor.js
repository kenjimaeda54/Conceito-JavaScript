//Função fabrica e construtora são bem parecidas
//Função fabrica -> constroi os objetos mas retorna  manuail
//Função construtora -> constroi os objetos e retornam automatico
//Função construtora -> utiliza o new para referenciar

function People(nome, sobrenome) {
    //so vai estar no escopo da função não e acessado fora
    const ID = 15415151,
    const mod = function () {

    }


    //São acessados fora do escopo da função
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.metodo = function () {
        console.log(`Ola ${nome} ${sobrenome} eu sou apenas um metodo`)
    }

}

const data1 = new People('Luiz', "Amaral");
const data2 = new People('Ricardo', "Amaral");
data1.metodo();
data2.metodo();


