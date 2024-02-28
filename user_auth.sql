-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 27, 2024 at 04:04 PM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `user_auth`
--

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `fullname` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `role` enum('admin','student','professor') NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `fullname`, `email`, `password`, `role`) VALUES
(1, 'Admin One', 'admin1@example.com', '$2a$10$l14eu9M4jO516XpavRi84eTG.rO0HF1LTCXWfybOEVk7Got7X/.7O', 'admin'),
(2, 'Student One', 'student1@example.com', 'hashedpassword', 'student'),
(3, 'Student Two', 'student2@example.com', 'hashedpassword', 'student'),
(4, 'Professor One', 'professor1@example.com', 'hashedpassword', 'professor'),
(5, 'Professor Two', 'professor2@example.com', 'hashedpassword', 'professor'),
(6, 'Professor Three', 'professorthree@gmail.com', '$2b$10$3yIH2KYrHX047D8Muuk8tOJxr25ToxJxvEh/PGMJtFDkUSwKYGzd.', 'professor'),
(7, 'Student Three', 'studentthree@gmail.com', '$2b$10$UPCDV3Ru7459Yg5DEnj11uMgGFeo6EJlUKzwkqVaXtcK9Hm51.QLa', 'student'),
(8, 'Student Four', 'studentfour@gmail.com', '$2b$10$Rtmxut/lsoRnq6KqZ7haueDFxE04MrA.TFgFnbcEZkmkJEYk3qW1C', 'student'),
(9, 'Student Five', 'studentfive@gmail.com', '$2b$10$9wo3GucSpLGbTLLhQ1/FOOQZ2DrNThUDfVtgZ8j7W0yG6E42ULTYy', 'student');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
