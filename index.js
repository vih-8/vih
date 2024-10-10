// Banco de dados fictício de abrigos temporários (inicialmente vazio)
let abrigos = [];

// Função para exibir o menu
function mostrarMenu() {
    return prompt(
        "Menu:\n" +
        "1. Cadastrar abrigo\n" +
        "2. Listar abrigos\n" +
        "3. Procurar abrigo\n" +
        "4. Sair\n" +
        "Escolha uma opção:"
    );
}

// Função para cadastrar um novo abrigo
function cadastrarAbrigo() {
    let nome = prompt("Informe o nome do abrigo:");
    let endereco = prompt("Informe o endereço do abrigo:");
    let cidade = prompt("Informe a cidade do abrigo:");
    let telefone = prompt("Informe o telefone do abrigo:");
    let capacidade = prompt("Informe a capacidade de lotação do abrigo:");
   
    let abrigo = {
        nome: nome,
        endereco: endereco,
        cidade: cidade,
        telefone: telefone,
        capacidade: capacidade
    };
   
    abrigos.push(abrigo);
    console.log("Abrigo cadastrado com sucesso!");
}

// Função para listar todos os abrigos
function listarAbrigos() {
    if (abrigos.length === 0) {
        console.log("Nenhum abrigo cadastrado.");
    } else {
        console.log("Lista de abrigos:");
        abrigos.forEach((abrigo, index) => {
            console.log(`${index + 1}. Nome: ${abrigo.nome}, Cidade: ${abrigo.cidade}, Endereço: ${abrigo.endereco}, Telefone: ${abrigo.telefone}, Capacidade: ${abrigo.capacidade}`);
        });
    }
}

// Função para procurar abrigos por cidade
function procurarAbrigo() {
    let cidadeBusca = prompt("Informe a cidade para procurar um abrigo:");
    let encontrados = abrigos.filter(abrigo => abrigo.cidade.toLowerCase() === cidadeBusca.toLowerCase());

    if (encontrados.length === 0) {
        console.log("Nenhum abrigo encontrado na cidade especificada.");
    } else {
        console.log(`Abrigos encontrados na cidade ${cidadeBusca}:`);
        encontrados.forEach((abrigo, index) => {
            console.log(`${index + 1}. Nome: ${abrigo.nome}, Endereço: ${abrigo.endereco}, Telefone: ${abrigo.telefone}, Capacidade: ${abrigo.capacidade}`);
        });
    }
}

// Função principal que gerencia o menu
function main() {
    let opcao = '';
    while (opcao !== '4') {
        opcao = mostrarMenu();

        switch (opcao) {
            case '1':
                cadastrarAbrigo();
                break;
            case '2':
                listarAbrigos();
                break;
            case '3':
                procurarAbrigo();
                break;
            case '4':
                console.log("Saindo do sistema.");
                break;
            default:
                console.log("Opção inválida. Tente novamente.");
        }
    }
}

// Inicia o programa
main();

