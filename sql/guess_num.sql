-- phpMyAdmin SQL Dump
-- version 3.5.1
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Nov 04, 2012 at 08:35 AM
-- Server version: 5.5.24-log
-- PHP Version: 5.4.3

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `guess_num`
--

-- --------------------------------------------------------

--
-- Table structure for table `rank`
--

CREATE TABLE IF NOT EXISTS `rank` (
  `id` int(30) NOT NULL AUTO_INCREMENT,
  `user` varchar(14) NOT NULL,
  `timeMin` int(6) NOT NULL,
  `timeSec` int(6) NOT NULL,
  `round` int(6) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=84 ;

--
-- Dumping data for table `rank`
--

INSERT INTO `rank` (`id`, `user`, `timeMin`, `timeSec`, `round`) VALUES
(1, 'a', 2, 0, 0),
(2, 'ww', 3, 0, 0),
(3, 'UYU', 2, 5, 1),
(4, 'ttt', 4, 26, 8),
(5, 'dfsd', 12, 26, 16),
(6, 'tttff', 6, 26, 6),
(7, '6758', 0, 8, 1),
(8, 'atr', 0, 3, 1),
(9, 'aqrtrh', 0, 43, 14),
(10, 'aqrtrh', 0, 43, 14),
(11, 'aqrtrh', 0, 43, 14),
(12, 'aqrtrh', 0, 43, 14),
(13, 'aqrtrh', 0, 43, 14),
(14, 'aqrtrh', 0, 43, 14),
(15, 'auyt', 0, 27, 5),
(16, 'auyt', 0, 27, 5),
(17, 'kghj', 8, 127, 4),
(18, 'jh', 0, 7, 1),
(19, 'jh', 0, 2, 1),
(20, 'jh', 0, 2, 1),
(21, 'jh', 0, 2, 1),
(22, 'jh', 0, 6, 1),
(23, 'jh', 0, 2, 1),
(24, 'jh', 0, 3, 1),
(25, 'jh', 0, 2, 1),
(26, 'jhr', 0, 2, 1),
(27, 'jhr', 0, 4, 1),
(28, 'jhr', 0, 2, 1),
(29, 'jhr', 0, 3, 1),
(30, 'jhr', 0, 3, 1),
(31, 'defsdf', 0, 10, 1),
(32, 'qqqqqqqqqq', 0, 57, 1),
(33, 'fasf', 0, 15, 1),
(34, 'fd', 0, 8, 1),
(35, 'ghgh', 0, 18, 2),
(36, '', 0, 0, 0),
(37, 'qe', 0, 0, 0),
(38, 'qe', 0, 0, 0),
(39, 'qe', 0, 0, 0),
(40, 'qe', 0, 0, 0),
(41, 'qe', 0, 0, 0),
(42, 'qe', 0, 0, 0),
(43, 'qe', 0, 0, 0),
(44, 'qe', 0, 0, 0),
(45, 'aa', 0, 0, 0),
(46, 'aa', 0, 0, 0),
(47, 'aa', 0, 0, 0),
(48, '', 0, 0, 0),
(49, 'aa', 0, 5, 1),
(50, 'aa', 122, 122, 0),
(51, 'aa', 127, 127, 0),
(52, 'aa', 0, 18, 1),
(53, 'aa', 2, 127, 1),
(54, '', 0, 127, 1),
(55, '', -10, 127, 1),
(56, '', -10, 127, 1),
(57, '', -10, 20, 5),
(58, '', 10, 20, 5),
(59, 'kk', -10, 30, 5),
(60, 'kk', 10, 30, 5),
(61, 'kk', 10, 20, 5),
(62, 'kk', 10, 20, 5),
(63, 'kk', 10, 20, 5),
(64, 'kk', -10, 20, 5),
(65, 'tdd', 0, 9, 1),
(66, 'tdd', 0, 5, 1),
(67, 'tdd', 0, 10, 1),
(68, 'kk', 10, 20, 5),
(69, 'kk', 68359, 6713720, 657945),
(70, 'tdd', 0, 3, 1),
(71, 'kk', 10, 20, 5),
(72, 'tdd', 0, 3, 1),
(73, 'tdd', 0, 3, 1),
(74, 'kk', 10, 20, 6),
(75, 'kk', 10, 50, 6),
(76, 'kk', 10, 50, 6),
(77, 'kk', 10, 30, 6),
(78, 'kk', 10, 0, 6),
(79, 'tdd', 6, 24, 1),
(80, 'kk', 0, 0, 6),
(81, 'll', 0, 10, 1),
(82, 'dfvfsv', 0, 14, 1),
(83, 'dvcscv', 1, 0, 1);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
