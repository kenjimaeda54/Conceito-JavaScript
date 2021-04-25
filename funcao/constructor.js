//Função fabrica e construtora são bem parecidas
//Função fabrica -> constroi os objetos mas retorna  manuail
//Função construtora -> constroi os objetos e retornam automatico
//Função construtora -> utiliza o new para referenciar

function People(nome, sobrenome) {
    //so vai estar no escopo da função não e acessado fora
    const ID = 123232,
    const intern = function () {
    }

    //São acessados fora do escopo da função
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.metodo = function () {
        console.log(` Ola ${this.nome} ${this.sobrenome}, Eu sou um metodo`);
        return;
    };
}

const peoples = new People("Luiz", "Carlos");
const peoples1 = new People("Joao", "Carlos");
peoples.metodo();
peoples1.metodo();


