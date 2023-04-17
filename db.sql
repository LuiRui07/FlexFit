-- MySQL dump 10.13  Distrib 8.0.30, for macos12 (x86_64)
--
-- Host: 127.0.0.1    Database: flexfit
-- ------------------------------------------------------
-- Server version	8.0.32

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `bodypart`
--

DROP TABLE IF EXISTS `bodypart`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `bodypart` (
  `idBodyPart` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  `subpart` varchar(45) DEFAULT NULL,
  `createdAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`idBodyPart`),
  UNIQUE KEY `idBodyPart_UNIQUE` (`idBodyPart`)
) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `bodypart`
--

LOCK TABLES `bodypart` WRITE;
/*!40000 ALTER TABLE `bodypart` DISABLE KEYS */;
INSERT INTO `bodypart` VALUES (3,'Pecho',NULL,'2023-04-14 01:21:09','2023-04-14 01:21:09'),(4,'Espalda',NULL,'2023-04-14 01:21:09','2023-04-14 01:21:09'),(5,'Brazo','Bíceps','2023-04-14 01:21:09','2023-04-14 01:21:09'),(6,'Brazo','Tríceps','2023-04-14 01:21:09','2023-04-14 01:21:09'),(7,'Hombro',NULL,'2023-04-14 01:21:09','2023-04-14 01:21:09'),(8,'Abdominal',NULL,'2023-04-14 01:21:09','2023-04-14 01:21:09'),(19,'Pierna','Glúteo','2023-04-14 01:25:49','2023-04-14 01:25:49'),(20,'Pierna','Femoral','2023-04-14 01:25:49','2023-04-14 01:25:49'),(21,'Pierna','Gemelos','2023-04-14 01:25:49','2023-04-14 01:25:49'),(22,'Pierna','Cuádriceps','2023-04-14 01:25:49','2023-04-14 01:25:49'),(23,'Pierna','Abductor','2023-04-14 01:25:49','2023-04-14 01:25:49');
/*!40000 ALTER TABLE `bodypart` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `dayexercise`
--

DROP TABLE IF EXISTS `dayexercise`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `dayexercise` (
  `idExercise` int NOT NULL AUTO_INCREMENT,
  `workoutday` int NOT NULL,
  `exerciseId` int NOT NULL,
  `reps` int NOT NULL DEFAULT '0',
  `weight` int NOT NULL DEFAULT '0',
  PRIMARY KEY (`idExercise`),
  UNIQUE KEY `idExercise_UNIQUE` (`idExercise`),
  KEY `exerciseID_idx` (`exerciseId`),
  KEY `workoutDay_idx` (`workoutday`),
  CONSTRAINT `exerciseID` FOREIGN KEY (`exerciseId`) REFERENCES `exercise` (`id`),
  CONSTRAINT `workoutDay` FOREIGN KEY (`workoutday`) REFERENCES `workout_day` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `dayexercise`
--

LOCK TABLES `dayexercise` WRITE;
/*!40000 ALTER TABLE `dayexercise` DISABLE KEYS */;
INSERT INTO `dayexercise` VALUES (1,1,6,8,30);
/*!40000 ALTER TABLE `dayexercise` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `exercise`
--

DROP TABLE IF EXISTS `exercise`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `exercise` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  `description` varchar(150) DEFAULT NULL,
  `image` varchar(255) NOT NULL,
  `bodyPart` int NOT NULL,
  `createdAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`),
  KEY `bodyPart_idx` (`bodyPart`),
  CONSTRAINT `bodyPart` FOREIGN KEY (`bodyPart`) REFERENCES `bodypart` (`idBodyPart`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `exercise`
--

LOCK TABLES `exercise` WRITE;
/*!40000 ALTER TABLE `exercise` DISABLE KEYS */;
INSERT INTO `exercise` VALUES (3,'Press Banca','Ejecicio a realizar con barra y pesas libres.','https://us.123rf.com/450wm/volyk/volyk1709/volyk170900096/85501646-hombre-levantando-m%C3%BAsculos-en-press-de-banca.jpg',3,'2023-04-14 01:45:25','2023-04-14 01:45:25'),(4,'Press Militar','Ejecicio a realizar con barra y pesas libres o mancuernas.','https://us.123rf.com/450wm/lioputra/lioputra2206/lioputra220600144/187453581-man-doing-seated-barbell-shoulder-press-exercise-flat-vector-illustration-isolated-on-white.jpg?ver=6',7,'2023-04-14 01:45:25','2023-04-14 01:45:25'),(5,'Elevaciones Laterales','Ejecicio a realizar con mancuernas.','https://media.istockphoto.com/id/1408272073/vector/man-doing-cable-one-arm-lateral-raise-exercise-flat-vector-illustration-isolated-on-white.jpg?s=612x612&w=0&k=20&c=fA1FTtVr2SympFlEzbT435amoVGadDeeFMh5UfAHm3I=',7,'2023-04-14 01:45:25','2023-04-14 01:45:25'),(6,'Sentadilla','Ejecicio a realizar con barra y pesas libres.','https://us.123rf.com/450wm/lioputra/lioputra2112/lioputra211200477/179216722-man-doing-front-barbell-squat-exercise-flat-vector-illustration-isolated-on-white-background.jpg',19,'2023-04-14 01:45:25','2023-04-14 01:45:25'),(7,'Sentadilla Búlgara','Ejecicio a realizar con mancuernas.','https://images.assetsdelivery.com/compings_v2/lioputra/lioputra2107/lioputra210700063.jpg',19,'2023-04-14 01:45:25','2023-04-14 01:45:25'),(8,'Remo en T','Ejecicio a realizar con barra y pesas libres.','https://images.assetsdelivery.com/compings_v2/lioputra/lioputra2107/lioputra210700113.jpg',4,'2023-04-14 01:45:25','2023-04-14 01:45:25'),(9,'Remo con Barra','Ejecicio a realizar con barra y pesas libres.','https://images.assetsdelivery.com/compings_v2/lioputra/lioputra2010/lioputra201000078.jpg',4,'2023-04-14 01:45:25','2023-04-14 01:45:25'),(10,'Triceps en polea alta','Ejecicio a realizar en polea y cuerda.','https://cdn.vectorstock.com/i/preview-2x/49/69/man-doing-cable-tricep-pull-down-exercise-vector-35544969.webp',6,'2023-04-14 01:45:25','2023-04-14 01:45:25'),(11,'Prensa ','Ejercicio a realizar en una prensa ','https://media.istockphoto.com/id/1457851161/vector/woman-doing-leg-press-exercise-on-machine-flat-vector-illustration-isolated-on-white.jpg?s=612x612&w=0&k=20&c=oftC0zmGlO9TJ29KOhPNtI8xzsMh2E7F6LcxrelBGVo=',19,'2023-04-17 16:48:15','2023-04-17 16:48:15'),(12,'Extension Cuadriceps','Ejercicio a realizar en maquina','https://static.vecteezy.com/system/resources/previews/015/708/451/original/man-doing-single-leg-extension-exercise-flat-illustration-isolated-on-white-background-vector.jpg',19,'2023-04-17 16:49:36','2023-04-17 16:49:36'),(13,'Elevacion de Gemelos','Ejercicio a realizar en maquina ','https://media.istockphoto.com/id/1407642610/vector/man-doing-standing-dumbbell-calf-raises-exercise-flat-vector-illustration-isolated-on-white.jpg?s=612x612&w=0&k=20&c=u_MB3nAV7Mfa9qcyQp7Thz3AZUF9nfG6K8PY0GG4mNQ=',21,'2023-04-17 16:55:54','2023-04-17 16:55:54'),(14,'Extension de Femoral','Ejercicio a realizar en maquina','https://us.123rf.com/450wm/lioputra/lioputra2111/lioputra211100003/176576496-man-doing-lying-leg-curls-exercise-flat-vector-illustration-isolated-on-white-background.jpg',20,'2023-04-17 17:04:37','2023-04-17 17:04:37'),(15,'Remo con mancuernas tumbado','Ejercicio a realizar con mancuernas','https://static.vecteezy.com/system/resources/previews/006/417/756/original/man-character-doing-dumbbell-incline-bench-rows-exercise-flat-illustration-isolated-on-different-layers-free-vector.jpg',21,'2023-04-17 17:18:30','2023-04-17 17:18:30');
/*!40000 ALTER TABLE `exercise` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(45) NOT NULL,
  `password` varchar(45) NOT NULL,
  `nombre` varchar(45) NOT NULL,
  `apellido1` varchar(45) NOT NULL,
  `apellido2` varchar(45) DEFAULT NULL,
  `edad` int NOT NULL,
  `peso` double NOT NULL,
  `sexo` char(1) NOT NULL,
  `altura` int NOT NULL,
  `createdAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`),
  UNIQUE KEY `username_UNIQUE` (`username`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (5,'pepe','pepote','Jose Luis','Lopez','Ruiz',20,76,'H',170,'2023-04-14 01:59:28','2023-04-14 01:59:28'),(6,'lui','lui','Luis','Ruiz','Nuñez',20,90,'H',190,'2023-04-16 20:37:26','2023-04-16 20:37:26'),(8,'rafa','rafa','Rafael','Ceballos','Martinez',43,43,'H',175,'2023-04-16 21:20:47','2023-04-16 21:20:47'),(9,'pablo','gp','Pablo','Garcia','Platero',20,12,'H',176,'2023-04-17 17:29:44','2023-04-17 17:29:44'),(10,'alba ','ocean ','Alba ','de la Torre','Segato',20,60,'F',170,'2023-04-17 17:30:34','2023-04-17 17:30:34');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `workout`
--

DROP TABLE IF EXISTS `workout`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `workout` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  `description` varchar(150) NOT NULL,
  `last_time` datetime DEFAULT NULL,
  `private` int NOT NULL DEFAULT '1',
  `favorite` int NOT NULL DEFAULT '0',
  `difficulty` varchar(45) NOT NULL DEFAULT 'EASY',
  `user_id` int NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`),
  KEY `fk_workout_user1_idx` (`user_id`),
  CONSTRAINT `fk_workout_user1` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `workout`
--

LOCK TABLES `workout` WRITE;
/*!40000 ALTER TABLE `workout` DISABLE KEYS */;
INSERT INTO `workout` VALUES (1,'Principiante','Para aquellos que estan empezando a entrenar y quieren aprender y adaptarse.',NULL,1,0,'FÁCIL',5),(2,'Intermedio','Para aquellos que llevan un tiempo entrenando y saben moverse dentro de un gimnasio.',NULL,2,1,'INTERMEDIA',5),(3,'Avanzado','Para aquellos que tienen amplia experiencia y quieren superar sus límites',NULL,3,0,'DIFÍCIL',5);
/*!40000 ALTER TABLE `workout` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `workout_day`
--

DROP TABLE IF EXISTS `workout_day`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `workout_day` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  `workout_id` int NOT NULL,
  `createdAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`),
  KEY `fk_workout_day_workout1_idx` (`workout_id`),
  CONSTRAINT `fk_workout_day_workout1` FOREIGN KEY (`workout_id`) REFERENCES `workout` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `workout_day`
--

LOCK TABLES `workout_day` WRITE;
/*!40000 ALTER TABLE `workout_day` DISABLE KEYS */;
INSERT INTO `workout_day` VALUES (1,'dia 1',1,'2023-04-16 03:03:44','2023-04-16 03:03:44'),(2,'dia 1',2,'2023-04-16 03:03:44','2023-04-16 03:03:44'),(3,'dia 2',2,'2023-04-17 16:13:58','2023-04-17 16:13:58'),(4,'dia 3',2,'2023-04-17 16:13:58','2023-04-17 16:13:58'),(5,'dia 4',2,'2023-04-17 16:13:58','2023-04-17 16:13:58'),(6,'dia 5',2,'2023-04-17 16:14:35','2023-04-17 16:14:35'),(7,'dia 1',3,'2023-04-17 16:31:35','2023-04-17 16:31:35'),(8,'dia 2',3,'2023-04-17 16:32:45','2023-04-17 16:32:45'),(9,'dia 3',3,'2023-04-17 16:32:45','2023-04-17 16:32:45'),(10,'dia 4',3,'2023-04-17 16:32:45','2023-04-17 16:32:45'),(11,'dia 5',3,'2023-04-17 16:32:45','2023-04-17 16:32:45'),(12,'dia 6',3,'2023-04-17 16:32:45','2023-04-17 16:32:45'),(13,'dia 2',1,'2023-04-17 16:33:32','2023-04-17 16:33:32'),(14,'dia 3',1,'2023-04-17 16:33:32','2023-04-17 16:33:32');
/*!40000 ALTER TABLE `workout_day` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-04-17 17:39:27
