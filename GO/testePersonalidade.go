package main

import (
	"fmt"
)

func main() {
	fmt.Println("Teste de Personalidade\n")

	afirmacoes := make(map[string]string)
	afirmacoes["passivo"] = "Digo muitas vezes SIM, quando, no fundo, quero dizer NÃO."
	afirmacoes["assertivo"] = "Defendo os meus direitos sem atentar contra os direitos dos outros."
	afirmacoes["manipulador"] = "Quando não conheço bem uma pessoa, prefiro dissimular aquilo que penso ou sinto."
	afirmacoes["agressivo"] = "Sou, na maior parte das vezes, autoritário/a e decidido/a."
	afirmacoes["manipulador"] = "Geralmente, é mais fácil e mais engenhoso, atuar por interposta pessoa do que fazê-lo directamente."
	afirmacoes["agressivo"] = "Não receio criticar os outros e dizer-lhes aquilo que penso."
	afirmacoes["passivo"] = "Não ouso recusar certas tarefas que não fazem parte das minhas atribuições."
	afirmacoes["assertivo"] = "Não tenho receio de manifestar a minha opinião, mesmo em face de interlocutores hostis."
	afirmacoes["manipulador"] = "Quando há um debate, prefiro retrair-me e \"ver o que é que a coisa dá\"."
	afirmacoes["agressivo"] = "Várias vezes censuram-me por ter espirito de contradição."
	afirmacoes["agressivo"] = "Tenho dificuldade em escutar os outros."
	afirmacoes["manipulador"] = "Faço tudo o que posso para ficar no \"segredo dos deuses\" e tenho-me dado bem com isso."
	afirmacoes["manipulador"] = "Consideram-me, em geral, bastante \"manhoso/a\" e hábil na relação com os outros."
	afirmacoes["assertivo"] = "Mantenho com os outros relações mais fundadas sobre a confiança do que sobre a dominação ou o calculismo."
	afirmacoes["passivo"] = "Prefiro nunca pedir ajuda a um colega. Ele poderá pensar que eu não sou competente."
	afirmacoes["passivo"] = "Sou tímido/a e tenho grandes bloqueios quando tenho que realizar uma acção pouco habitual."
	afirmacoes["passivo"] = "Chamam-me \"sopinhas de leite\", fico enervado/a e isso faz rir os outros."
	afirmacoes["assertivo"] = "Sinto-me bastante \"à vontade\" nas relações face a face."
	afirmacoes["manipulador"] = "Faço \"fitas\" muitas vezes; é a melhor maneira de conseguir o que quero."
	afirmacoes["agressivo"] = "Sou um \"fala-barato\" e corto a palavra aos outros sem me dar conta disso."
	afirmacoes["agressivo"] = "Sou ambicioso/a e estou pronto/a a fazer o que for necessário para realizar os meus objectivos."
	afirmacoes["manipulador"] = "Em geral, sei o que é preciso fazer, isso é importante para ser bem sucedido/a."
	afirmacoes["assertivo"] = "Em caso de desacordo procuro os compromissos realistas assentes na base dos interesses mútuos."
	afirmacoes["assertivo"] = "Prefiro \"por as cartas na mesa\"."
	afirmacoes["passivo"] = "Tenho tendência para deixar para mais tarde as coisas que tenho para fazer."
	afirmacoes["passivo"] = "Deixo, muitas vezes, um trabalho a meio sem o acabar."
	afirmacoes["assertivo"] = "Em geral, mostro aquilo que sou, sem dissimular os meus sentimentos."
	afirmacoes["agressivo"] = "É preciso fazerem muita coisa para me intimidarem."
	afirmacoes["agressivo"] = "Meter medo aos outros pode ser um bom meio para garantir o poder."
	afirmacoes["agressivo"] = "Quando \"me levam à certa\" uma vez, vingo-me na próxima."
	afirmacoes["manipulador"] = "Quando se critica alguém, é muito eficaz censurar-lhe o facto de ele não seguir os seus próprios princípios. Forçamo-lo, assim, a estar de acordo."
	afirmacoes["manipulador"] = "Sei tirar partido do \"sistema\", sou \"desenrascado/a\"."
	afirmacoes["assertivo"] = "Sou capaz de ser eu próprio, continuando a ser aceite socialmente."
	afirmacoes["assertivo"] = "Quando não estou de acordo, sei dizê-lo desapaixonadamente e com clareza."
	afirmacoes["passivo"] = "Tenho a preocupação de não incomodar os outros."
	afirmacoes["passivo"] = "Tenho sérias dificuldades em fazer opções."
	afirmacoes["passivo"] = "Não gosto de ser a última pessoa dentro de um grupo a pensar de determinada maneira. Nesse caso prefiro não fazer afirmações."
	afirmacoes["assertivo"] = "Não tenho receio de falar em público."
	afirmacoes["agressivo"] = "A vida é uma \"selva\"."
	afirmacoes["agressivo"] = "Não tenho receio de enfrentar os desafios perigosos e arriscados."
	afirmacoes["manipulador"] = "Criar conflitos pode ser mais eficaz do que reduzir as tensões."
	afirmacoes["manipulador"] = "A fraqueza é a melhor maneira de ganharmos confiança nas nossas relações com os outros."
	afirmacoes["assertivo"] = "Sei escutar e não corto a palavra aos outros."
	afirmacoes["assertivo"] = "Levo até ao fim aquilo que decidi fazer."
	afirmacoes["assertivo"] = "Não tenho medo de exprimir os meus sentimentos, tal qual os sinto."
	afirmacoes["manipulador"] = "Tenho geito \"para levar as pessoas\" e fazer impor as minhas ideias."
	afirmacoes["manipulador"] = "O elogio ainda é um bom meio de se obter o que se pretende."
	afirmacoes["agressivo"] = "Tenho dificuldade em controlar o tempo em que estou no uso da palavra."
	afirmacoes["agressivo"] = "Sei manejar bem a ironia mordaz."
	afirmacoes["passivo"] = "Sou servil e tenho uma vida simples, ás vezes até me deixo explorar um pouco."
	afirmacoes["passivo"] = "Gosto mais de observar do que participar."
	afirmacoes["passivo"] = "Gosto mais de estar na \"geral\" do que na primeira fila."
	afirmacoes["assertivo"] = "Não penso que a manipulação seja uma solução eficaz."
	afirmacoes["manipulador"] = "Não é necessário anunciar depressa demais as nossas intenções, isso pode causar-nos dissabores."
	afirmacoes["agressivo"] = "Choco muitas vezes as pessoas com as minhas atitudes."
	afirmacoes["agressivo"] = "Prefiro ser \"lobo\" a ser \"cordeiro\"."
	afirmacoes["manipulador"] = "A manipulação dos outros é muitas vezes a única maneira prática para obtermos o que queremos."
	afirmacoes["assertivo"] = "Sei, em geral, protestar com eficácia, sem agressividade excessiva."
	afirmacoes["passivo"] = "Penso que os problemas não podem ser realmente resolvidos sem procurarmos as suas causas profundas."
	afirmacoes["passivo"] = "Não gosto de ser mal visto."

	var passivo int
	var agressivo int
	var assertivo int
	var manipulador int
	var resposta int

	for value, key := range afirmacoes {
		fmt.Println("Afirmação: ", key)
		fmt.Println("Concordas com a afirmação? Escreve 0 se não te identificas com a afirmação ou 1 caso te identifiques.")
		fmt.Scan(&resposta)
		if value == "passivo" && resposta == 1 {
			passivo++
		} else if value == "agressivo" && resposta == 1 {
			agressivo++
		} else if value == "assertivo" && resposta == 1 {
			assertivo++
		} else if value == "manipulador" && resposta == 1 {
			manipulador++
		}
	}
	fmt.Println("O teu resultado no grupo \"Passivo\" foi de: ", passivo)
	fmt.Println("O teu resultado no grupo \"Agressivo\" foi de: ", agressivo)
	fmt.Println("O teu resultado no grupo \"Manipulador\" foi de: ", manipulador)
	fmt.Println("O teu resultado no grupo \"Assertivo\" foi de: ", assertivo)
	fmt.Println("\nEntre 0 e 5 a intensidade no grupo de personalidade respectivo é considerada baixa, entre 5 e 10 média e de 10 a 15 é alta!")
	fmt.Println("Fonte do teste: Chalvin, Dominique, \"L´affirmation de soi(5ªed.), Les Editions E.S.F.,Paris\"\n")
}
