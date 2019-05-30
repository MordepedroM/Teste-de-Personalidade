print('\n\nFONTE: Chalvin, Dominique, "L´affirmation de soi(5ªed.), Les Editions E.S.F.,Paris')
print('\n\nSeja honesto e responda às perguntas colocadas.\nAs respostas consistem apenas em [V] \"verdadeiro\" (identifico-me) ou [F] \"falso\" (não me identifico).')

perguntas =["Digo muitas vezes SIM, quando, no fundo, quero dizer NÃO.",
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
            "Não gosto de ser mal visto."]
a = 1

#Atitude de auto afirmação [ASSERTIVO]   Respostas: 2,8,14,18,23,24,27,33,34,38,43,44,45,53,58
#Atitude de fuga           [PASSIVO]     Respostas: 1,7,15,16,17,25,26,35,36,37,50,51,52,59,60
#Atitude de manipulação    [MANIPULADOR] Respostas: 3,5,9,12,13,19,22,31,32,41,42,46,47,54,57
#Atitude autoritária       [AGRESSIVO]   Respostas: 4,6,10,11,20,21,28,29,30,39,40,48,49,55,56

passivoScore = 0
agressivoScore = 0
manipuladorScore = 0
assertivoScore = 0

for x in perguntas:
    print("\n",a,"\\ 60 - " ,x)
    resposta = input("\nVERDADEIRO [V] ou FALSO [F]\nInsira a sua resposta:")
    while resposta != "v" or resposta != "V" or resposta != "f" or resposta != "F":
        if resposta == "f" or resposta == "F":
            break
        if (resposta == "v" or resposta =="V") and (a == 1 or a == 7 or a == 15 or a == 16 or a == 17 or a == 25 or a == 26 or a == 35 or a == 36 or a == 37 or a == 50 or a == 51 or a == 52 or a == 59 or a == 60):
            passivoScore = passivoScore + 1
            break
        if (resposta == "v" or resposta =="V") and (a == 4 or a == 6 or a == 10 or a == 11 or a == 20 or a == 21 or a == 28 or a == 29 or a == 30 or a == 39 or a == 40 or a == 48 or a == 49 or a == 55 or a == 56):
            agressivoScore = agressivoScore + 1
            break
        if (resposta == "v" or resposta =="V") and (a == 3 or a == 5 or a == 9 or a == 12 or a == 13 or a == 19 or a == 22 or a == 31 or a == 32 or a == 41 or a == 42 or a == 46 or a == 47 or a == 54 or a == 57):
            manipuladorScore = manipuladorScore + 1
            break
        if (resposta == "v" or resposta =="V") and (a == 2 or a == 8 or a == 14 or a == 18 or a == 23 or a == 24 or a == 27 or a == 33 or a == 34 or a == 38 or a == 43 or a == 44 or a == 45 or a == 53 or a == 58):
            assertivoScore = assertivoScore + 1
            break
        print("\nERRO: Só é possivel introduzir [V] (verdadeiro) ou [F] (falso) em maiúsculas ou minúsculas.\n")
        print("\n",a,"\\ 60 - " ,x)
        resposta = input("\nVERDADEIRO [V] ou FALSO [F]\nInsira a sua resposta:") 
    a = a + 1

print("\n\nResultados do teste:\n\n ")

if passivoScore <= 5:
    print('Atitude Passiva / Atitude de fuga: ',int(float(100*passivoScore/15)),'% muito baixa\n',passivoScore,'in',15)
elif passivoScore >=6 and passivoScore <= 10:
     print('Atitude Passiva / Atitude de fuga: ',int(float(100*passivoScore/15)),'% média\n',passivoScore,'in',15)
else:
     print('Atitude Passiva / Atitude de fuga: ',int(float(100*passivoScore/15)),'% alta\n',passivoScore,'in',15)

if agressivoScore <= 5:
    print('Atitude Agressiva / Atitude autoritária: ',int(float(100*agressivoScore/15)),'% muito baixa\n',agressivoScore,'in',15)
elif agressivoScore >=6 and agressivoScore <= 10:
     print('Atitude Agressiva / Atitude autoritária: ',int(float(100*agressivoScore/15)),'% média\n',agressivoScore,'in',15)
else:
     print('Atitude Agressiva / Atitude autoritária: ',int(float(100*agressivoScore/15)),'% alta\n',agressivoScore,'in',15)

if manipuladorScore <= 5:
    print('Atitude de Manipulador / Atitude de manipulação: ',int(float(100*manipuladorScore/15)),'% muito baixa\n',manipuladorScore,'in',15)
elif manipuladorScore >=6 and manipuladorScore <= 10:
     print('Atitude Manipulador / Atitude de manipulação: ',int(float(100*manipuladorScore/15)),'% média\n',manipuladorScore,'in',15)
else:
     print('Atitude Manipulador / Atitude de manipulação: ',int(float(100*manipuladorScore/15)),'% alta\n',manipuladorScore,'in',15)

if assertivoScore <= 5:
    print('Atitude Assertiva / Atitude de auto afirmação: ',int(float(100*assertivoScore/15)),'% muito baixa\n',assertivoScore,'in',15)
elif assertivoScore >=6 and assertivoScore <= 10:
     print('Atitude Assertiva / Atitude de auto afirmação: ',int(float(100*assertivoScore/15)),'% média\n',assertivoScore,'in',15)
else:
     print('Atitude Assertiva / Atitude de auto afirmação: ',int(float(100*assertivoScore/15)),'%alta\n',assertivoScore,'in',15)

print("\n\nEspero que tenha gostado do teste.\n\nCumprimentos\n\n\n")
