// Criando Classe Estado
class Estado {

    constructor(sigla, nome, capital, regiao){
        this.sigla = sigla
        this.nome = nome
        this.capital = capital
        this.regiao = regiao
    }
    
}


/////////////////////////////////////////////////////////////////


// Como não foi utilizado um banco de dados, todos os estados são cadastrados no inicio da execução
let estados = new Array;
    estados[0] = new Estado("AC", "Acre", "Rio Branco", "Norte")
    estados[1] = new Estado("AL", "Alagoas", "Maceió", "Nordeste")
    estados[2] = new Estado("AP", "Amapá", "Macapa", "Norte")
    estados[3] = new Estado("AM", "Amazonas", "Manaus", "Norte")
    estados[4] = new Estado("BA", "Bahia", "Salvador", "Nordeste")
    estados[5] = new Estado("CE", "Ceará", "Fortaleza", "Nordeste")
    estados[6] = new Estado("ES", "Espírito Santo", "Vitória", "Sudeste")
    estados[7] = new Estado("GO", "Goiás", "Goiânia", "Centro-Oeste")
    estados[8] = new Estado("MA", "Maranhão", "São Luís", "Nordeste")
    estados[9] = new Estado("MT", "Mato Grosso", "Cuiabá", "Centro-Oeste")
    estados[10] = new Estado("MS", "Mato Grosso do Sul", "Campo Grande", "Centro-Oeste")
    estados[11] = new Estado("MG", "Minas Gerais", "Belo Horizonte", "Sudeste")
    estados[12] = new Estado("PA", "Pará", "Belém", "Norte")
    estados[13] = new Estado("PB", "Paraíba", "João Pessoa", "Nordeste")
    estados[14] = new Estado("PR", "Paraná", "Curitiba", "Sul")
    estados[15] = new Estado("PE", "Pernambuco", "Recife", "Nordeste")
    estados[16] = new Estado("PI", "Piauí", "Teresina", "Nordeste")
    estados[17] = new Estado("RJ", "Rio de Janeiro", "Rio de Janeiro", "Sudeste")
    estados[18] = new Estado("RN", "Rio Grande do Norte", "Natal", "Nordeste")
    estados[19] = new Estado("RS", "Rio Grande do Sul", "Porto Alegre", "Sul")
    estados[20] = new Estado("RO", "Rondônia", "Porto Velho", "Norte")
    estados[21] = new Estado("RR", "Roraima", "Boa Vista", "Norte")
    estados[22] = new Estado("SC", "Santa Catarina", "Florianópolis", "Sul")
    estados[23] = new Estado("SP", "São Paulo", "São Paulo", "Sudeste")
    estados[24] = new Estado("SE", "Sergipe", "Aracaju", "Nordeste")
    estados[25] = new Estado("TO", "Tocantins", "Palmas", "Norte")
    estados[26] = new Estado("DF", "Distrito Federal", "Brasília", "Centro-Oeste")


function pesquisar(){
    // Torna div 'resposta' invisível
    document.getElementsByName("resposta")[0].className = "invisible";
    // Esconde o alerta de erro
    $(".collapse").collapse("hide");
    let barraBusca = document.getElementsByName("pesquisa")[0].value;
    if(barraBusca == ""){}
    else{
        // Retira os acentos do estado buscado para depois ser comparado
        let buscaSemAcento = removeAcento(barraBusca);
        let tabDados = document.getElementsByClassName("dados");
        let bandeira = document.getElementById("bandeira");
        let achou = false
        estados.forEach(estado => {
            if(buscaSemAcento == removeAcento(estado.nome)){
                // adiciona os dados na tabela
                tabDados[0].innerHTML = estado.sigla;
                tabDados[1].innerHTML = estado.nome;
                tabDados[2].innerHTML = estado.capital;
                tabDados[3].innerHTML = estado.regiao;
                bandeira.src= "./Bandeiras/" + estado.nome + ".png";
                achou = true
                // torna resposta visível
                document.getElementsByName("resposta")[0].className = "visible";
            }
        });

        if(!achou){
            // caso nao encontre o estado, mostra alerta de erro
            $(".collapse").collapse('show');
        }      
    }
  
    
}


function removeAcento (text)
{       
    text = text.toLowerCase();                                                         
    text = text.replace(new RegExp('[ÁÀÂÃ]','gi'), 'a');
    text = text.replace(new RegExp('[ÉÈÊ]','gi'), 'e');
    text = text.replace(new RegExp('[ÍÌÎ]','gi'), 'i');
    text = text.replace(new RegExp('[ÓÒÔÕ]','gi'), 'o');
    text = text.replace(new RegExp('[ÚÙÛ]','gi'), 'u');
    text = text.replace(new RegExp('[Ç]','gi'), 'c');
    return text;                 
}

// desabilitando a tecla Enter
$(document).keypress(
    function(event){
      if (event.which == '13') {
        event.preventDefault();
      }
  })