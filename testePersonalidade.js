var questionario = ["Digo muitas vezes SIM, quando, no fundo, quero dizer NÃO.",
"Defendo os meus direitos sem atentar contra os direitos dos outros.",
"Quando não conheço bem uma pessoa, prefiro dissimular aquilo que penso ou sinto.",
"Sou, na maior parte das vezes, autoritário/a e decidido/a.",
"Geralmente, é mais fácil e mais engenhoso, atuar por interposta pessoa do que fazê-lo directamente.",
"Não receio criticar os outros e dizer-lhes aquilo que penso.",
"Não ouso recusar certas tarefas que não fazem parte das minhas atribuições.",
"Não tenho receio de manifestar a minha opinião, mesmo em face de interlocutores hostis.",
"Quando há um debate, prefiro retrair-me e \"ver o que é que a coisa dá\".",
"Várias vezes censuram-me por ter espirito de contradição.",
"Tenho dificuldade em escutar os outros.",
"Faço tudo o que posso para ficar no \"segredo dos deuses\" e tenho-me dado bem com isso.",
"Consideram-me, em geral, bastante \"manhoso/a\" e hábil na relação com os outros.",
"Mantenho com os outros relações mais fundadas sobre a confiança do que sobre a dominação ou o calculismo.",
"Prefiro nunca pedir ajuda a um colega. Ele poderá pensar que eu não sou competente.",
"Sou tímido/a e tenho grandes bloqueios quando tenho que realizar uma acção pouco habitual.",
"Chamam-me \"sopinhas de leite\", fico enervado/a e isso faz rir os outros.",
"Sinto-me bastante \"à vontade\" nas relações face a face.",
"Faço \"fitas\" muitas vezes; é a melhor maneira de conseguir o que quero.",
"Sou um \"fala-barato\" e corto a palavra aos outros sem me dar conta disso.",
"Sou ambicioso/a e estou pronto/a a fazer o que for necessário para realizar os meus objectivos.",
"Em geral, sei o que é preciso fazer, isso é importante para ser bem sucedido/a.",
"Em caso de desacordo procuro os compromissos realistas assentes na base dos interesses mútuos.",
"Prefiro \"por as cartas na mesa\".",
"Tenho tendência para deixar para mais tarde as coisas que tenho para fazer.",
"Deixo, muitas vezes, um trabalho a meio sem o acabar.",
"Em geral, mostro aquilo que sou, sem dissimular os meus sentimentos.",
"É preciso fazerem muita coisa para me intimidarem.",
"Meter medo aos outros pode ser um bom meio para garantir o poder.",
"Quando \"me levam à certa\" uma vez, vingo-me na próxima.",
"Quando se critica alguém, é muito eficaz censurar-lhe o facto de ele não seguir os seus próprios princípios. Forçamo-lo, assim, a estar de acordo.",
"Sei tirar partido do \"sistema\", sou \"desenrascado/a\".",
"Sou capaz de ser eu próprio, continuando a ser aceite socialmente.",
"Quando não estou de acordo, sei dizê-lo desapaixonadamente e com clareza.",
"Tenho a preocupação de não incomodar os outros.",
"Tenho sérias dificuldades em fazer opções.",
"Não gosto de ser a última pessoa dentro de um grupo a pensar de determinada maneira. Nesse caso prefiro não fazer afirmações.",
"Não tenho receio de falar em público.",
"A vida é uma \"selva\".",
"Não tenho receio de enfrentar os desafios perigosos e arriscados.",
"Criar conflitos pode ser mais eficaz do que reduzir as tensões.",
"A fraqueza é a melhor maneira de ganharmos confiança nas nossas relações com os outros.",
"Sei escutar e não corto a palavra aos outros.",
"Levo até ao fim aquilo que decidi fazer.",
"Não tenho medo de exprimir os meus sentimentos, tal qual os sinto.",
"Tenho geito \"para levar as pessoas\" e fazer impor as minhas ideias.",
"O elogio ainda é um bom meio de se obter o que se pretende.",
"Tenho dificuldade em controlar o tempo em que estou no uso da palavra.",
"Sei manejar bem a ironia mordaz.",
"Sou servil e tenho uma vida simples, ás vezes até me deixo explorar um pouco.",
"Gosto mais de observar do que participar.",
"Gosto mais de estar na \"geral\" do que na primeira fila.",
"Não penso que a manipulação seja uma solução eficaz.",
"Não é necessário anunciar depressa demais as nossas intenções, isso pode causar-nos dissabores.",
"Choco muitas vezes as pessoas com as minhas atitudes.",
"Prefiro ser \"lobo\" a ser \"cordeiro\".",
"A manipulação dos outros é muitas vezes a única maneira prática para obtermos o que queremos.",
"Sei, em geral, protestar com eficácia, sem agressividade excessiva.",
"Penso que os problemas não podem ser realmente resolvidos sem procurarmos as suas causas profundas.",
"Não gosto de ser mal visto.", 
"FIM DO TESTE"   ];
    
var agressividade = 0;
var manipulacao = 0;
var passividade = 0;
var assertividade = 0;

var a = 0; 

function proximaPergunta() {
    
    document.getElementById('sim').style.display = 'inline';
    document.getElementById('nao').style.display = 'inline';
    document.getElementById('repetir').style.display = 'inline';
    
    var x = document.createElement("li");
    var textnode = document.createTextNode(questionario[a]);
    x.appendChild(textnode);

    var item = document.getElementById("x");
    item.replaceChild(x, item.childNodes[0]);

    document.getElementById("bPrincipal").innerHTML = "Próxima pergunta";
    document.getElementById("contador").innerHTML = "1 / 60";
    
if(document.getElementById('sim').checked == true || document.getElementById('nao').checked == true){
        if(document.getElementById('sim').checked && (a == 1 || a == 7 || a == 15 || a == 16 || a == 17 || a == 25 || a == 26 || a == 35 || a == 36 || a == 37 || a == 50 || a == 51 || a == 52 || a == 59)){
            a++;
            passividade++;
            document.getElementById("contador").innerHTML = a + " / 60";
        }else if (document.getElementById('sim').checked && (a == 3 || a == 5 || a == 9 || a == 12 || a == 13 || a == 19 || a == 22 || a == 31 || a == 32 || a == 41 || a == 42 || a == 46 || a == 47 || a == 54 || a == 57) ) {
            a++;
            manipulacao++;
            document.getElementById("contador").innerHTML = a +  " / 60";
        }else if(document.getElementById('sim').checked && (a == 4 || a == 6 || a == 10 || a == 11 || a == 20 || a == 21 || a == 28 || a == 29 || a == 30 || a == 39 || a == 40 || a == 48 || a == 49 || a == 55 || a == 56) ){
            a++;
            agressividade++;
            document.getElementById("contador").innerHTML = a +  " / 60";
        }else if(document.getElementById('sim').checked && (a == 2 || a == 8 || a == 14 || a == 18 || a == 23 || a == 24 || a == 27 || a == 33 || a == 34 || a == 38 || a == 43 || a == 44 || a == 45 || a == 53 || a == 58) ){
            a++;
            assertividade++;
            document.getElementById("contador").innerHTML = a +  " / 60";
        }else if(document.getElementById('sim').checked && a == 60){            
            passividade++;
            document.getElementById("contador").innerHTML = "";        
            document.getElementById("resultadoAssertividade").innerHTML = "<b>Atitude assertiva ou de auto-afirmação:</b>  " + assertividade;
            document.getElementById("resultadoAgressividade").innerHTML = "<b>Atitude autoritária ou agressiva:</b>  " + agressividade;
            document.getElementById("resultadoManipulacao").innerHTML = "<b>Atitude de manipulação:</b>  " + manipulacao;
            document.getElementById("resultadoPassividade").innerHTML = "<b>Atitude passiva ou de fuga:</b>  " + passividade;
            document.getElementById("bPrincipal").style.display = 'none';
            document.getElementById("sim").style.display = 'none';
            document.getElementById("nao").style.display = 'none';
            document.getElementById("ou").style.display = 'none';
            document.getElementById("info").style.display = 'none';  
            document.getElementById("lbls").style.display = 'none';
            document.getElementById("lbln").style.display = 'none';        
        }else if(document.getElementById('nao').checked && a == 60){
            document.getElementById("contador").innerHTML = "";        
            document.getElementById("resultadoAssertividade").innerHTML = "Atitude assertiva ou de auto-afirmação: " + assertividade;
            document.getElementById("resultadoAgressividade").innerHTML = "Atitude autoritária ou agressiva: " + agressividade;
            document.getElementById("resultadoManipulacao").innerHTML = "Atitude de manipulação: " + manipulacao;
            document.getElementById("resultadoPassividade").innerHTML = "Atitude passiva ou de fuga: " + passividade;
            document.getElementById("bPrincipal").style.display = 'none';
            document.getElementById("sim").style.display = 'none';
            document.getElementById("nao").style.display = 'none';
            document.getElementById("ou").style.display = 'none';
            document.getElementById("info").style.display = 'none';
            document.getElementById("lbls").style.display = 'none';
            document.getElementById("lbln").style.display = 'none';
        }else{
            a++;
            document.getElementById("contador").innerHTML = a +  " / 60";
        }
}          
}

var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {       
       console.log(xhttp.responseText);
    }
};
xhttp.open("GET", "testePersonalidade.json", true);
xhttp.send();
