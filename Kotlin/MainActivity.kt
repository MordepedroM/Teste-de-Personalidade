package pt.antro.testedepersonalidade

import android.support.v7.app.AppCompatActivity
import android.os.Bundle
import android.view.View
import android.widget.Button
import android.widget.RadioButton
import android.widget.TextView

class MainActivity : AppCompatActivity() {

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)


         val novoTeste = findViewById<Button>(R.id.novoTeste)
         val proximaPergunta = findViewById<Button>(R.id.proximaPergunta)
         var afirmacao = findViewById<TextView>(R.id.afirmacao)
         var info = findViewById<TextView>(R.id.info)
         var sim = findViewById<RadioButton>(R.id.sim)
         var nao = findViewById<RadioButton>(R.id.nao)
         var contagem = findViewById<TextView>(R.id.contagem)


         var agressividade = 0
         var passividade = 0
         var manipulacao = 0
         var acertividade = 0

         val perguntas = arrayOf(
             "Digo muitas vezes SIM, quando, no fundo, quero dizer NÃO.",
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
             "Não gosto de ser mal visto."
         )

         var x = 0
         var y = 1

         afirmacao.text = perguntas[0]


         novoTeste.setOnClickListener {
             x = 0
             y = 1
             passividade = 0
             agressividade = 0
             manipulacao = 0
             acertividade = 0
             afirmacao.text = perguntas[0]
             contagem.text = "$y / 60"
             sim.visibility = View.VISIBLE
             nao.visibility = View.VISIBLE
             proximaPergunta.visibility = View.VISIBLE
             info.visibility = View.VISIBLE
         }

         proximaPergunta.setOnClickListener {
             if (sim.isChecked && (x == 0 || x == 6 || x == 14 || x == 15 || x == 16 || x == 24 || x == 25 || x == 34 || x == 35 || x == 36 || x == 49 || x == 50 || x == 51 || x == 58)) {
                 passividade++
                 x++
                 y++
                 contagem.text = "$y / 60"
                 afirmacao.text = perguntas[x]
             } else if (sim.isChecked && (x == 3 || x == 5 || x == 9 || x == 10 || x == 19 || x == 20 || x == 27 || x == 28 || x == 29 || x == 38 || x == 39 || x == 47 || x == 48 || x == 54 || x == 55)) {
                 agressividade++
                 x++
                 y++
                 contagem.text = "$y / 60"
                 afirmacao.text = perguntas[x]
             } else if (sim.isChecked && (x == 2 || x == 4 || x == 8 || x == 11 || x == 12 || x == 18 || x == 21 || x == 30 || x == 31 || x == 40 || x == 41 || x == 45 || x == 46 || x == 53 || x == 56)) {
                 manipulacao++
                 x++
                 y++
                 contagem.text = "$y / 60"
                 afirmacao.text = perguntas[x]
             } else if (sim.isChecked && (x == 1 || x == 7 || x == 13 || x == 17 || x == 22 || x == 23 || x == 26 || x == 32 || x == 33 || x == 37 || x == 42 || x == 43 || x == 44 || x == 52 || x == 57)) {
                 acertividade++
                 x++
                 y++
                 contagem.text = "$y / 60"
                 afirmacao.text = perguntas[x]
             } else if (sim.isChecked && x == 59) {
                 passividade++
                 contagem.text = "Resultados"
                 sim.visibility = View.INVISIBLE
                 nao.visibility = View.INVISIBLE
                 proximaPergunta.visibility = View.INVISIBLE
                 info.visibility = View.INVISIBLE
                 afirmacao.text =
                     "Passividade: $passividade / 15 \nAgressividade: $agressividade / 15 \nManipulação: $manipulacao / 15 \nAssertividade: $acertividade / 15"
                 x = 0
                 y = 1
                 passividade = 0
                 agressividade = 0
                 manipulacao = 0
                 acertividade = 0
             } else if (nao.isChecked && x == 59) {
                 contagem.text = "Resultados"
                 sim.visibility = View.INVISIBLE
                 nao.visibility = View.INVISIBLE
                 proximaPergunta.visibility = View.INVISIBLE
                 info.visibility = View.INVISIBLE
                 afirmacao.text =
                     "Passividade: $passividade / 15 \nAgressividade: $agressividade / 15 \nManipulação: $manipulacao / 15 \nAssertividade: $acertividade / 15"
                 x = 0
                 y = 1
                 passividade = 0
                 agressividade = 0
                 manipulacao = 0
                 acertividade = 0
             } else if (nao.isChecked) {
                 x++
                 y++
                 contagem.text = "$y / 60"
                 afirmacao.text = perguntas[x]
                    }
                }
            }
        }
