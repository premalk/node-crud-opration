-- phpMyAdmin SQL Dump
-- version 4.1.14
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: May 01, 2019 at 09:22 AM
-- Server version: 5.6.17
-- PHP Version: 5.5.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `test_database`
--

-- --------------------------------------------------------

--
-- Table structure for table `tbl_movie`
--

CREATE TABLE IF NOT EXISTS `tbl_movie` (
  `auto_id` int(11) NOT NULL AUTO_INCREMENT,
  `movie_id` varchar(15) DEFAULT NULL,
  `movie_title` varchar(30) NOT NULL,
  `movie_category` varchar(30) NOT NULL,
  `movie_year` varchar(10) NOT NULL,
  `movie_summary` varchar(250) NOT NULL,
  `user_id` varchar(20) NOT NULL,
  `user_name` varchar(20) NOT NULL,
  PRIMARY KEY (`auto_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=6 ;

--
-- Dumping data for table `tbl_movie`
--

INSERT INTO `tbl_movie` (`auto_id`, `movie_id`, `movie_title`, `movie_category`, `movie_year`, `movie_summary`, `user_id`, `user_name`) VALUES
(4, '847855', 'Sonu k ', 'comedy', '2019', 'Comedy full', '10060513', 'Premal'),
(5, '847855', 'Sonu k ', 'comedy', '2019', 'Comedy full', '10060513', 'Premal');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
