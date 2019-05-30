CREATE DATABASE  IF NOT EXISTS `testepersonalidade` /*!40100 DEFAULT CHARACTER SET utf8 */;
USE `testepersonalidade`;
-- MySQL dump 10.13  Distrib 5.7.24, for Win64 (x86_64)
--
-- Host: localhost    Database: testepersonalidade
-- ------------------------------------------------------
-- Server version	5.7.24

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `perguntas`
--

DROP TABLE IF EXISTS `perguntas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `perguntas` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `pergunta` text,
  `grupoPersonalidade` enum('agressivo','manipulador','passivo','assertivo') DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=61 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `perguntas`
--

LOCK TABLES `perguntas` WRITE;
/*!40000 ALTER TABLE `perguntas` DISABLE KEYS */;
INSERT INTO `perguntas` VALUES (1,'Digo muitas vezes SIM, quando, no fundo, quero dizer NÃO.','passivo'),(2,'Defendo os meus direitos sem atentar contra os direitos dos outros.','assertivo'),(3,'Quando não conheço bem uma pessoa, prefiro dissimular aquilo que penso ou sinto.','manipulador'),(4,'Sou, na maior parte das vezes, autoritário/a e decidido/a.','agressivo'),(5,'Geralmente, é mais fácil e mais engenhoso, atuar por interposta pessoa do que fazê-lo directamente.','manipulador'),(6,'Não receio criticar os outros e dizer-lhes aquilo que penso.','agressivo'),(7,'Não ouso recusar certas tarefas que não fazem parte das minhas atribuições.','passivo'),(8,'Não tenho receio de manifestar a minha opinião, mesmo em face de interlocutores hostis.','assertivo'),(9,'Quando há um debate, prefiro retrair-me e \"ver o que é que a coisa dá\".','manipulador'),(10,'Várias vezes censuram-me por ter espirito de contradição.','agressivo'),(11,'Tenho dificuldade em escutar os outros.','agressivo'),(12,'Faço tudo o que posso para ficar no \"segredo dos deuses\" e tenho-me dado bem com isso.','manipulador'),(13,'Consideram-me, em geral, bastante \"manhoso/a\" e hábil na relação com os outros.','manipulador'),(14,'Mantenho com os outros relações mais fundadas sobre a confiança do que sobre a dominação ou o calculismo.','assertivo'),(15,'Prefiro nunca pedir ajuda a um colega. Ele poderá pensar que eu não sou competente.','passivo'),(16,'Sou tímido/a e tenho grandes bloqueios quando tenho que realizar uma acção pouco habitual.','passivo'),(17,'Chamam-me \"sopinhas de leite\", fico enervado/a e isso faz rir os outros.','passivo'),(18,'Sinto-me bastante \"à vontade\" nas relações face a face.','assertivo'),(19,'Faço \"fitas\" muitas vezes; é a melhor maneira de conseguir o que quero.','manipulador'),(20,'Sou um \"fala-barato\" e corto a palavra aos outros sem me dar conta disso.','agressivo'),(21,'Sou ambicioso/a e estou pronto/a a fazer o que for necessário para realizar os meus objectivos.','agressivo'),(22,'Em geral, sei o que é preciso fazer, isso é importante para ser bem sucedido/a.','manipulador'),(23,'Em caso de desacordo procuro os compromissos realistas assentes na base dos interesses mútuos.','assertivo'),(24,'Prefiro \"por as cartas na mesa\".','assertivo'),(25,'Tenho tendência para deixar para mais tarde as coisas que tenho para fazer.','passivo'),(26,'Deixo,muitas vezes, um trabalho a meio sem o acabar.','passivo'),(27,'Em geral, mostro aquilo que sou, sem dissimular os meus sentimentos.','assertivo'),(28,'É preciso fazerem muita coisa para me intimidarem.','agressivo'),(29,'Meter medo aos outros pode ser um bom meio para garantir o poder.','agressivo'),(30,'Quando \"me levam à certa\" uma vez, vingo-me na próxima.','agressivo'),(31,'Quando se critica alguém, é muito eficaz censurar-lhe o facto de ele não seguir os seus próprios princípios. Forçamo-lo, assim, a estar de acordo.','manipulador'),(32,'Sei tirar partido do \"sistema\", sou \"desenrascado/a\".','manipulador'),(33,'Sou capaz de ser eu próprio, continuando a ser aceite socialmente.','assertivo'),(34,'Quando não estou de acordo, sei dizê-lo desapaixonadamente e com clareza.','assertivo'),(35,'Tenho a preocupação de não incomodar os outros.','passivo'),(36,'Tenho sérias dificuldades em fazer opções.','passivo'),(37,'Não gosto de ser a última pessoa dentro de um grupo a pensar de determinada maneira. Nesse caso prefiro não fazer afirmações.','passivo'),(38,'Não tenho receio de falar em público.','assertivo'),(39,'A vida é uma \"selva\".','agressivo'),(40,'Não tenho receio de enfrentar os desafios perigosos e arriscados.','agressivo'),(41,'Criar conflitos pode ser mais eficaz do que reduzir as tensões.','manipulador'),(42,'A fraqueza é a melhor maneira de ganharmos confiança nas nossas relações com os outros.','manipulador'),(43,'Sei escutar e não corto a palavra aos outros.','assertivo'),(44,'Levo até ao fim aquilo que decidi fazer.','assertivo'),(45,'Não tenho medo de exprimir os meus sentimentos, tal qual os sinto.','assertivo'),(46,'Tenho geito \"para levar as pessoas\" e fazer impor as minhas ideias.','manipulador'),(47,'O elogio ainda é um bom meio de se obter o que se pretende.','manipulador'),(48,'Tenho dificuldade em controlar o tempo em que estou no uso da palavra.','agressivo'),(49,'Sei manejar bem a ironia mordaz.','agressivo'),(50,'Sou servil e tenho uma vida simples, ás vezes até me deixo explorar um pouco.','passivo'),(51,'Gosto mais de observar do que participar.','passivo'),(52,'Gosto mais de estar na \"geral\" do que na primeira fila.','passivo'),(53,'Não penso que a manipulação seja uma solução eficaz.','assertivo'),(54,'Não é necessário anunciar depressa demais as nossas intenções, isso pode causar-nos dissabores.','manipulador'),(55,'Choco muitas vezes as pessoas com as minhas atitudes.','agressivo'),(56,'Prefiro ser \"lobo\" a ser \"cordeiro\".','agressivo'),(57,'A manipulação dos outros é muitas vezes a única maneira prática para obtermos o que queremos.','manipulador'),(58,'Sei, em geral, protestar com eficácia, sem agressividade excessiva.','assertivo'),(59,'Penso que os problemas não podem ser realmente resolvidos sem procurarmos as suas causas profundas.','passivo'),(60,'Não gosto de ser mal visto.','passivo');
/*!40000 ALTER TABLE `perguntas` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-02-20 14:41:45
