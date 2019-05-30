#include <iostream>
#include <string>
#include <locale.h>

int main()
{
	setlocale(LC_ALL, "portuguese");

	std::cout << "\n\nFONTE: Chalvin, Dominique, L´affirmation de soi(5ªed.), Les Editions E.S.F.,Paris"; 
	std::cout << "\n\nSeja honesto e responda às perguntas colocadas.\nAs respostas consistem apenas em [V] \"verdadeiro\" (identifico-me) ou [F] \"falso\" (não me identifico)." << std::endl;


	std::string perguntas[60] = { "Digo muitas vezes SIM, quando, no fundo, quero dizer NÃO.",
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
		"Não gosto de ser mal visto." };

	int passivoScore = 0;
	int agressivoScore = 0;
	int manipuladorScore = 0;
	int assertivoScore = 0;

	int a = 1;
	std::string resposta;

	for (int x = 0; x < 60; x = x + 1) {
		std::cout << a << " / 60  -" << perguntas[x] << "\n\nInsira a sua resposta: ";
		std::cin >> resposta;
		while (resposta != "v" or resposta != "V" or resposta != "f" or resposta != "F") {
			if (resposta == "f" or resposta == "F") {
				break;
			}
			if ((resposta == "v" or resposta == "V") and (a == 1 or a == 7 or a == 15 or a == 16 or a == 17 or a == 25 or a == 26 or a == 35 or a == 36 or a == 37 or a == 50 or a == 51 or a == 52 or a == 59 or a == 60)) {
				passivoScore = passivoScore + 1;
				break;
			}
			if ((resposta == "v" or resposta == "V") and (a == 4 or a == 6 or a == 10 or a == 11 or a == 20 or a == 21 or a == 28 or a == 29 or a == 30 or a == 39 or a == 40 or a == 48 or a == 49 or a == 55 or a == 56)) {
				agressivoScore = agressivoScore + 1;
				break;
			}
			if ((resposta == "v" or resposta == "V") and (a == 3 or a == 5 or a == 9 or a == 12 or a == 13 or a == 19 or a == 22 or a == 31 or a == 32 or a == 41 or a == 42 or a == 46 or a == 47 or a == 54 or a == 57)) {
				manipuladorScore = manipuladorScore + 1;
				break;
			}
			if ((resposta == "v" or resposta == "V") and (a == 2 or a == 8 or a == 14 or a == 18 or a == 23 or a == 24 or a == 27 or a == 33 or a == 34 or a == 38 or a == 43 or a == 44 or a == 45 or a == 53 or a == 58)){
				assertivoScore = assertivoScore + 1;
				break;
			}
			std::cout << "\nERRO: Só é possivel introduzir [V] (verdadeiro) ou [F] (falso) em maiúsculas ou minúsculas.\n";
			std::cout << a << " / 60  -" << perguntas[x] << "\n\nInsira a sua resposta: ";
			std::cin >> resposta;
		}
		a = a + 1;
	}
		std::cout << "\n\nResultados do teste\n\nPerfil de personalidade:\n";

		if (passivoScore <= 5) {
			std::cout << "Passividade baixa " << passivoScore << " em 15.\n";
		}
		else if (passivoScore >= 6) {
			std::cout << "Passividade média " << passivoScore << " em 15.\n";
		}
		else {
			std::cout << "Passividade alta " << passivoScore << " em 15.\n";
		}

		if (agressivoScore <= 5) {
			std::cout << "Agressividade baixa " << agressivoScore << " em 15.\n";
		}
		else if (agressivoScore >= 6) {
			std::cout << "Agressividade média " << agressivoScore << " em 15.\n";
		}
		else {
			std::cout << "Agressividade alta " << agressivoScore << " em 15.\n";
		}

		if (manipuladorScore <= 5) {
			std::cout << "Manipulação baixa " << manipuladorScore << " em 15.\n";
		}
		else if (manipuladorScore >= 6) {
			std::cout << "Manipulação média " << manipuladorScore << " em 15.\n";
		}
		else {
			std::cout << "Manipulação alta " << manipuladorScore << " em 15.\n";
		}

		if (assertivoScore <= 5) {
			std::cout << "Assertividade baixa " << assertivoScore << " em 15.\n";
		}
		else if (assertivoScore >= 6) {
			std::cout << "Acertividade média " << assertivoScore << " em 15.\n";
		}
		else {
			std::cout << "Acertividade alta " << assertivoScore << " em 15.\n";
		}

		std::cout << "\n\nEspero que tenha gostado do teste\n\n";

	}
