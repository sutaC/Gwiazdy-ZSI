-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Paź 17, 2023 at 12:59 PM
-- Wersja serwera: 10.4.28-MariaDB
-- Wersja PHP: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `gwiazdy-zsi`
--

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `images`
--

CREATE TABLE `images` (
  `id` int(11) NOT NULL,
  `src` text DEFAULT NULL,
  `local` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `images`
--

INSERT INTO `images` (`id`, `src`, `local`) VALUES
(326, 'https://www.zsi.kielce.pl/wp-content/uploads/photo-gallery/2015pilecki/DSC_0113.JPG', NULL),
(327, 'https://www.zsi.kielce.pl/wp-content/uploads/photo-gallery/2015gielda/IMG_3734%20(Small).JPG', NULL),
(328, 'https://www.zsi.kielce.pl/wp-content/uploads/photo-gallery/2015gielda/IMG_3696%20(Small).JPG', NULL),
(329, 'https://www.zsi.kielce.pl/wp-content/uploads/photo-gallery/2016%20studniowka/12647172_468133136707293_5452053648601032195_n.jpg', NULL),
(330, 'https://www.zsi.kielce.pl/wp-content/uploads/photo-gallery/2016%20studniowka/12647016_468133353373938_2610962868594866453_n.jpg', NULL),
(331, 'https://www.zsi.kielce.pl/wp-content/uploads/photo-gallery/2016%20studniowka/12592197_468133286707278_1885169365132598641_n.jpg', NULL),
(332, 'https://www.zsi.kielce.pl/wp-content/uploads/photo-gallery/20151kwietnia/DSC_0298.JPG', NULL),
(333, 'https://www.zsi.kielce.pl/wp-content/uploads/photo-gallery/20151kwietnia/DSC_0297.JPG', NULL),
(334, 'https://www.zsi.kielce.pl/wp-content/uploads/photo-gallery/20151kwietnia/DSC_0288.JPG', NULL),
(335, 'https://www.zsi.kielce.pl/wp-content/uploads/photo-gallery/20151kwietnia/DSC_0283.JPG', NULL),
(336, 'https://www.zsi.kielce.pl/wp-content/uploads/photo-gallery/20151kwietnia/DSC_0281.JPG', NULL),
(337, 'https://www.zsi.kielce.pl/wp-content/uploads/photo-gallery/20151kwietnia/DSC_0269.JPG', NULL),
(338, 'https://www.zsi.kielce.pl/wp-content/uploads/photo-gallery/20151kwietnia/DSC_0084.JPG', NULL),
(339, 'https://www.zsi.kielce.pl/wp-content/uploads/photo-gallery/20151kwietnia/DSC_0040.JPG', NULL),
(340, 'https://www.zsi.kielce.pl/wp-content/uploads/photo-gallery/2016Kolorowydzien/DSC_0102.JPG', NULL),
(341, 'https://www.zsi.kielce.pl/wp-content/uploads/photo-gallery/2016QuizHistoryczny/DSC_0177.JPG', NULL),
(342, 'https://www.zsi.kielce.pl/wp-content/uploads/photo-gallery/2016QuizHistoryczny/DSC_0162.JPG', NULL),
(343, 'https://www.zsi.kielce.pl/wp-content/uploads/2016/04/Bez-tytu%C5%82u.jpg', NULL),
(344, 'https://www.zsi.kielce.pl/wp-content/uploads/photo-gallery/0000/2016/DzienOtwarty/DSC_0263.JPG', NULL),
(345, 'https://www.zsi.kielce.pl/wp-content/uploads/photo-gallery/0000/2016/DzienOtwarty/DSC_0192.JPG', NULL),
(346, 'https://www.zsi.kielce.pl/wp-content/uploads/photo-gallery/2016%20maturzysci/13124931_1126546674076018_1486855230127395506_n.jpg', NULL),
(347, 'https://www.zsi.kielce.pl/wp-content/uploads/photo-gallery/2016%20maturzysci/13095932_1126546714076014_6550664041446613376_n.jpg', NULL),
(348, 'https://www.zsi.kielce.pl/wp-content/uploads/photo-gallery/2016%20maturzysci/13055514_1126546917409327_8273264732252904494_n.jpg', NULL),
(349, 'https://www.zsi.kielce.pl/wp-content/uploads/photo-gallery/2016%20maturzysci/13102786_1126545747409444_7801736816288144809_n.jpg', NULL),
(350, 'https://www.zsi.kielce.pl/wp-content/uploads/photo-gallery/2016%20maturzysci/13083322_1126545930742759_5988536457950063305_n.jpg', NULL),
(351, 'https://www.zsi.kielce.pl/wp-content/uploads/photo-gallery/2016%20maturzysci/13118997_1126545314076154_8610353995274124875_n.jpg', NULL),
(352, 'https://www.zsi.kielce.pl/wp-content/uploads/photo-gallery/2016%20maturzysci/13087590_1126545097409509_5078828153277865815_n.jpg', NULL),
(353, 'https://www.zsi.kielce.pl/wp-content/uploads/photo-gallery/0000/2016/DzienSportu/IMG_6683.JPG', NULL),
(354, 'https://www.zsi.kielce.pl/wp-content/uploads/photo-gallery/0000/2016/DzienSportu/IMG_6677.JPG', NULL),
(355, 'https://www.zsi.kielce.pl/wp-content/uploads/photo-gallery/0000/2016/DzienSportu/IMG_5613.JPG', NULL),
(356, 'https://www.zsi.kielce.pl/wp-content/uploads/photo-gallery/0000/2016/DzienSportu/IMG_5562.JPG', NULL),
(357, 'https://www.zsi.kielce.pl/wp-content/uploads/2016/09/1.jpg', NULL),
(359, 'https://www.zsi.kielce.pl/wp-content/uploads/photo-gallery/0000/2016/rozpoczecierokuszkolnego/2.JPG', NULL),
(360, 'https://www.zsi.kielce.pl/wp-content/uploads/photo-gallery/0000/2016/rozpoczecierokuszkolnego/3.JPG', NULL),
(361, 'https://www.zsi.kielce.pl/wp-content/uploads/photo-gallery/0000/2016/rozpoczecierokuszkolnego/7.JPG', NULL),
(362, 'https://www.zsi.kielce.pl/wp-content/uploads/photo-gallery/0000/2016/rozpoczecierokuszkolnego/12.JPG', NULL),
(363, 'https://www.zsi.kielce.pl/wp-content/uploads/photo-gallery/0000/2016/rozpoczecierokuszkolnego/13.jpg', NULL),
(364, 'https://www.zsi.kielce.pl/wp-content/uploads/photo-gallery/0000/2016/pierwszekroki/DSC_0135.JPG', NULL),
(365, 'https://www.zsi.kielce.pl/wp-content/uploads/2016/09/DSC_0025.jpg', NULL),
(367, 'https://www.zsi.kielce.pl/wp-content/uploads/photo-gallery/0000/2016/Gramiejska/DSC_0054.JPG', NULL),
(368, 'https://www.zsi.kielce.pl/wp-content/uploads/photo-gallery/0000/2016/Gramiejska/DSC_0091.JPG', NULL),
(369, 'https://www.zsi.kielce.pl/wp-content/uploads/photo-gallery/0000/2016/slubowanie/DSC_0011.JPG', NULL),
(370, 'https://www.zsi.kielce.pl/wp-content/uploads/photo-gallery/0000/2016/slubowanie/DSC_0020.JPG', NULL),
(371, 'https://www.zsi.kielce.pl/wp-content/uploads/photo-gallery/0000/2016/slubowanie/DSC_0033.JPG', NULL),
(372, 'https://www.zsi.kielce.pl/wp-content/uploads/photo-gallery/0000/2016/slubowanie/DSC_0105.JPG', NULL),
(373, 'https://www.zsi.kielce.pl/wp-content/uploads/photo-gallery/0000/2016/slubowanie/DSC_0130.JPG', NULL),
(374, 'https://www.zsi.kielce.pl/wp-content/uploads/photo-gallery/0000/2016/slubowanie/DSC_0134.JPG', NULL),
(375, 'https://www.zsi.kielce.pl/wp-content/uploads/photo-gallery/0000/2016/slubowanie/DSC_0138.JPG', NULL),
(376, 'https://www.zsi.kielce.pl/wp-content/uploads/photo-gallery/0000/2016/slubowanie/DSC_0145.JPG', NULL),
(377, 'https://www.zsi.kielce.pl/wp-content/uploads/2016/10/dyrektor.png', NULL),
(378, 'https://www.zsi.kielce.pl/wp-content/uploads/2016/10/20161020_091748-2.jpg', NULL),
(379, 'https://www.zsi.kielce.pl/wp-content/uploads/2016/12/IMG_1217.jpg', NULL),
(380, 'https://www.zsi.kielce.pl/wp-content/uploads/2017/01/IMG_20170127_112258.jpg', NULL),
(381, 'https://www.zsi.kielce.pl/wp-content/uploads/2017/01/IMG_20170127_112421-768x512.jpg', NULL),
(382, 'https://www.zsi.kielce.pl/wp-content/uploads/2017/01/IMG_20170127_112759-768x527.jpg', NULL),
(383, 'https://www.zsi.kielce.pl/wp-content/uploads/2017/02/IMG_9443.jpg', NULL),
(384, 'https://www.zsi.kielce.pl/wp-content/uploads/photo-gallery/0000/2017/Studniowka/DSC01733.jpg', NULL),
(385, 'https://www.zsi.kielce.pl/wp-content/uploads/photo-gallery/0000/2017/Studniowka/IMG_9423.JPG', NULL),
(386, 'https://www.zsi.kielce.pl/wp-content/uploads/photo-gallery/0000/2017/Studniowka/IMG_9443.JPG', NULL),
(387, 'https://www.zsi.kielce.pl/wp-content/uploads/photo-gallery/0000/2017/Studniowka/IMG_9472.JPG', NULL),
(388, 'https://www.zsi.kielce.pl/wp-content/uploads/2017/02/1-1.jpg', NULL),
(389, 'https://www.zsi.kielce.pl/wp-content/uploads/2017/03/DSC_0102.jpg', NULL),
(390, 'https://www.zsi.kielce.pl/wp-content/uploads/2017/03/7.jpg', NULL),
(391, 'https://www.zsi.kielce.pl/wp-content/uploads/2017/03/10.jpg', NULL),
(392, 'https://www.zsi.kielce.pl/wp-content/uploads/2017/03/DSC3132.jpg', NULL),
(393, 'https://www.zsi.kielce.pl/wp-content/uploads/photo-gallery/0000/2017/anglomania/_DSC3114.JPG', NULL),
(394, 'https://www.zsi.kielce.pl/wp-content/uploads/photo-gallery/0000/2017/anglomania/_DSC3135.JPG', NULL),
(395, 'https://www.zsi.kielce.pl/wp-content/uploads/photo-gallery/0000/2017/anglomania/_DSC3126.JPG', NULL),
(396, 'https://www.zsi.kielce.pl/wp-content/uploads/photo-gallery/0000/2017/anglomania/_DSC3132.JPG', NULL),
(397, 'https://www.zsi.kielce.pl/wp-content/uploads/2017/04/2.jpeg', NULL),
(398, 'https://www.zsi.kielce.pl/wp-content/uploads/photo-gallery/0000/2017/pozegnanieklas4/DSC04231.JPG', NULL),
(399, 'https://www.zsi.kielce.pl/wp-content/uploads/photo-gallery/0000/2017/pozegnanieklas4/DSC04229.JPG', NULL),
(400, 'https://www.zsi.kielce.pl/wp-content/uploads/photo-gallery/0000/2017/pozegnanieklas4/DSC04257.JPG', NULL),
(401, 'https://www.zsi.kielce.pl/wp-content/uploads/photo-gallery/0000/2017/pozegnanieklas4/DSC04401.JPG', NULL),
(402, 'https://www.zsi.kielce.pl/wp-content/uploads/photo-gallery/0000/2017/pozegnanieklas4/DSC04404.JPG', NULL),
(403, 'https://www.zsi.kielce.pl/wp-content/uploads/2017/05/1-1.jpg', NULL),
(405, 'https://www.zsi.kielce.pl/wp-content/uploads/photo-gallery/0000/2017/otwarty/2.JPG', NULL),
(406, 'https://www.zsi.kielce.pl/wp-content/uploads/photo-gallery/0000/2017/otwarty/4.JPG', NULL),
(407, 'https://www.zsi.kielce.pl/wp-content/uploads/photo-gallery/0000/2017/otwarty/3.JPG', NULL),
(408, 'https://www.zsi.kielce.pl/wp-content/uploads/photo-gallery/0000/2017/otwarty/5a.JPG', NULL),
(409, 'https://www.zsi.kielce.pl/wp-content/uploads/photo-gallery/0000/2017/Profesjonalni/FullSizeRender_5.jpg', NULL),
(410, 'https://www.zsi.kielce.pl/wp-content/uploads/photo-gallery/0000/2017/Profesjonalni/FullSizeRender_7.jpg', NULL),
(411, 'https://www.zsi.kielce.pl/wp-content/uploads/photo-gallery/0000/2017/Profesjonalni/FullSizeRender_10.jpg', NULL),
(412, 'https://www.zsi.kielce.pl/wp-content/uploads/photo-gallery/0000/2017/Profesjonalni/FullSizeRender_15.jpg', NULL),
(413, 'https://www.zsi.kielce.pl/wp-content/uploads/photo-gallery/0000/2017/DzienSportu/IMG_3333.JPG', NULL),
(414, 'https://www.zsi.kielce.pl/wp-content/uploads/photo-gallery/0000/2017/DzienSportu/IMG_3335.JPG', NULL),
(415, 'https://www.zsi.kielce.pl/wp-content/uploads/photo-gallery/0000/2017/DzienSportu/IMG_3406.JPG', NULL),
(416, 'https://www.zsi.kielce.pl/wp-content/uploads/photo-gallery/0000/2017/DzienSportu/IMG_3407.JPG', NULL),
(417, 'https://www.zsi.kielce.pl/wp-content/uploads/photo-gallery/0000/2017/DzienSportu/IMG_3419.JPG', NULL),
(418, 'https://www.zsi.kielce.pl/wp-content/uploads/photo-gallery/0000/2017/DzienSportu/IMG_3420.JPG', NULL),
(419, 'https://www.zsi.kielce.pl/wp-content/uploads/photo-gallery/0000/2017/DzienSportu/IMG_3422.JPG', NULL),
(420, 'https://www.zsi.kielce.pl/wp-content/uploads/photo-gallery/0000/2017/DzienSportu/IMG_3427.JPG', NULL),
(421, 'https://www.zsi.kielce.pl/wp-content/uploads/photo-gallery/0000/2017/DzienSportu/IMG_3434.JPG', NULL),
(422, 'https://www.zsi.kielce.pl/wp-content/uploads/photo-gallery/0000/2017/DzienSportu/IMG_3433.JPG', NULL),
(423, 'https://www.zsi.kielce.pl/wp-content/uploads/photo-gallery/0000/2017/DzienSportu/IMG_3445.JPG', NULL),
(424, 'https://www.zsi.kielce.pl/wp-content/uploads/2017/05/1a.jpg', NULL),
(425, 'https://www.zsi.kielce.pl/wp-content/uploads/2017/06/DSCN4119.jpg', NULL),
(426, 'https://www.zsi.kielce.pl/wp-content/uploads/photo-gallery/0000/2017/KoniecRoku/IMG_3120.JPG', NULL),
(427, 'https://www.zsi.kielce.pl/wp-content/uploads/photo-gallery/0000/2017/KoniecRoku/IMG_3132.JPG', NULL),
(428, 'https://www.zsi.kielce.pl/wp-content/uploads/photo-gallery/0000/2017/KoniecRoku/IMG_3161.JPG', NULL),
(429, 'https://www.zsi.kielce.pl/wp-content/uploads/photo-gallery/0000/2017/KoniecRoku/IMG_3160.JPG', NULL),
(430, 'https://www.zsi.kielce.pl/wp-content/uploads/photo-gallery/0000/2017/KoniecRoku/IMG_3116.JPG', NULL),
(431, 'https://www.zsi.kielce.pl/wp-content/uploads/photo-gallery/0000/2017/KoniecRoku/IMG_3162.JPG', NULL),
(432, 'https://www.zsi.kielce.pl/wp-content/uploads/photo-gallery/0000/2017/KoniecRoku/IMG_3133.JPG', NULL),
(433, 'https://www.zsi.kielce.pl/wp-content/uploads/photo-gallery/0000/2017/KoniecRoku/DSCN4121.JPG', NULL),
(434, 'https://www.zsi.kielce.pl/wp-content/uploads/photo-gallery/0000/2017/KoniecRoku/DSCN4119.JPG', NULL),
(435, 'https://www.zsi.kielce.pl/wp-content/uploads/photo-gallery/0000/2017/KoniecRoku/DSCN4131.JPG', NULL),
(436, 'https://www.zsi.kielce.pl/wp-content/uploads/photo-gallery/0000/2017/KoniecRoku/DSCN4128.JPG', NULL),
(437, 'https://www.zsi.kielce.pl/wp-content/uploads/photo-gallery/0000/2017/KoniecRoku/DSCN4130.JPG', NULL),
(438, 'https://www.zsi.kielce.pl/wp-content/uploads/photo-gallery/0000/2017/KoniecRoku/DSCN4133.JPG', NULL),
(439, 'https://www.zsi.kielce.pl/wp-content/uploads/photo-gallery/0000/2017/rozpoczecierokuszkolnego/DSC05138.JPG', NULL),
(440, 'https://www.zsi.kielce.pl/wp-content/uploads/photo-gallery/0000/2017/rozpoczecierokuszkolnego/DSC05141.JPG', NULL),
(442, 'https://www.zsi.kielce.pl/wp-content/uploads/photo-gallery/0000/2017/pierwszekroki/DSC05315.JPG', NULL),
(443, 'https://www.zsi.kielce.pl/wp-content/uploads/photo-gallery/0000/2017/pierwszekroki/DSC05316.JPG', NULL),
(444, 'https://www.zsi.kielce.pl/wp-content/uploads/photo-gallery/0000/2017/pierwszekroki/DSC05329.JPG', NULL),
(445, 'https://www.zsi.kielce.pl/wp-content/uploads/photo-gallery/0000/2017/pierwszekroki/DSC05328.JPG', NULL),
(446, 'https://www.zsi.kielce.pl/wp-content/uploads/photo-gallery/0000/2017/pierwszekroki/DSC05325.JPG', NULL),
(447, 'https://www.zsi.kielce.pl/wp-content/uploads/photo-gallery/0000/2017/pierwszekroki/DSC05331.JPG', NULL),
(448, 'https://www.zsi.kielce.pl/wp-content/uploads/photo-gallery/0000/2017/pierwszekroki/DSC05330.JPG', NULL),
(449, 'https://www.zsi.kielce.pl/wp-content/uploads/photo-gallery/0000/2017/pierwszekroki/DSC05333.JPG', NULL),
(450, 'https://www.zsi.kielce.pl/wp-content/uploads/photo-gallery/0000/2017/pierwszekroki/DSC05332.JPG', NULL),
(451, 'https://www.zsi.kielce.pl/wp-content/uploads/photo-gallery/0000/2017/pierwszekroki/DSC05336.JPG', NULL),
(452, 'https://www.zsi.kielce.pl/wp-content/uploads/photo-gallery/0000/2017/pierwszekroki/DSC05334.JPG', NULL),
(453, 'https://www.zsi.kielce.pl/wp-content/uploads/photo-gallery/0000/2017/pierwszekroki/DSC05344.JPG', NULL),
(454, 'https://www.zsi.kielce.pl/wp-content/uploads/2017/09/IMG_20170920_093244567-1.jpg', NULL),
(455, 'https://www.zsi.kielce.pl/wp-content/uploads/2017/09/IMG_3241.jpg', NULL),
(457, 'https://www.zsi.kielce.pl/wp-content/uploads/photo-gallery/0000/2017/gramiejskawyniki/image1_(2).jpeg', NULL),
(458, 'https://www.zsi.kielce.pl/wp-content/uploads/photo-gallery/0000/2017/gramiejskawyniki/image1_(3).jpeg', NULL),
(459, 'https://www.zsi.kielce.pl/wp-content/uploads/photo-gallery/0000/2017/gramiejskawyniki/image1_(1).jpeg', NULL),
(460, 'https://www.zsi.kielce.pl/wp-content/uploads/photo-gallery/0000/2017/gramiejskawyniki/image4.jpeg', NULL),
(461, 'https://www.zsi.kielce.pl/wp-content/uploads/photo-gallery/0000/2017/gramiejskawyniki/image3.jpeg', NULL),
(462, 'https://www.zsi.kielce.pl/wp-content/uploads/photo-gallery/0000/2017/gramiejskawyniki/image7.jpeg', NULL),
(463, 'https://www.zsi.kielce.pl/wp-content/uploads/photo-gallery/0000/2017/gramiejskawyniki/image8.jpeg', NULL),
(464, 'https://www.zsi.kielce.pl/wp-content/uploads/photo-gallery/0000/2017/gramiejskawyniki/image5.jpeg', NULL),
(465, 'https://www.zsi.kielce.pl/wp-content/uploads/photo-gallery/0000/2017/gramiejskawyniki/image6.jpeg', NULL),
(466, 'https://www.zsi.kielce.pl/wp-content/uploads/photo-gallery/0000/2017/gramiejskawyniki/image9.jpeg', NULL),
(467, 'https://www.zsi.kielce.pl/wp-content/uploads/photo-gallery/0000/2017/gramiejskawyniki/image10.jpeg', NULL),
(468, 'https://www.zsi.kielce.pl/wp-content/uploads/2017/11/DSC06995.jpg', NULL),
(469, 'https://www.zsi.kielce.pl/wp-content/uploads/2017/12/01.jpg', NULL),
(470, 'https://www.zsi.kielce.pl/wp-content/uploads/2018/02/IMG_3033-1.jpg', NULL),
(471, 'https://www.zsi.kielce.pl/wp-content/uploads/2018/03/IMG_3479.jpg', NULL),
(472, 'https://www.zsi.kielce.pl/wp-content/uploads/2018/03/IMG_3466-300x200.jpg', NULL),
(473, 'https://www.zsi.kielce.pl/wp-content/uploads/2018/03/IMG_20180323_201226034.jpg', NULL),
(474, 'https://www.zsi.kielce.pl/wp-content/uploads/2018/04/na-stron%C4%99.jpg', NULL),
(475, 'https://www.zsi.kielce.pl/wp-content/uploads/photo-gallery/0000/2018/HACKATHON/IMG_1377.JPG', NULL),
(476, 'https://www.zsi.kielce.pl/wp-content/uploads/photo-gallery/0000/2018/HACKATHON/IMG_1388.JPG', NULL),
(477, 'https://www.zsi.kielce.pl/wp-content/uploads/photo-gallery/0000/2018/HACKATHON/IMG_1404.JPG', NULL),
(478, 'https://www.zsi.kielce.pl/wp-content/uploads/photo-gallery/0000/2018/HACKATHON/IMG_1401.JPG', NULL),
(479, 'https://www.zsi.kielce.pl/wp-content/uploads/2018/05/IMG_4053-2.jpg', NULL),
(480, 'https://www.zsi.kielce.pl/wp-content/uploads/photo-gallery/0000/2018/slawomir/IMG_4037.JPG', NULL),
(481, 'https://www.zsi.kielce.pl/wp-content/uploads/photo-gallery/0000/2018/slawomir/IMG_4053.JPG', NULL),
(482, 'https://www.zsi.kielce.pl/wp-content/uploads/photo-gallery/0000/2018/slawomir/IMG_4032.JPG', NULL),
(483, 'https://www.zsi.kielce.pl/wp-content/uploads/photo-gallery/0000/2018/slawomir/IMG_4058.JPG', NULL),
(484, 'https://www.zsi.kielce.pl/wp-content/uploads/photo-gallery/0000/2018/slawomir/IMG_4059.JPG', NULL),
(485, 'https://www.zsi.kielce.pl/wp-content/uploads/2018/06/DSC03029.jpg', NULL),
(488, 'https://www.zsi.kielce.pl/wp-content/uploads/photo-gallery/0000/2018/dziensportu/DSC03007.JPG', NULL),
(489, 'https://www.zsi.kielce.pl/wp-content/uploads/photo-gallery/0000/2018/dziensportu/DSC03024.JPG', NULL),
(490, 'https://www.zsi.kielce.pl/wp-content/uploads/photo-gallery/0000/2018/dziensportu/DSC03020.JPG', NULL),
(491, 'https://www.zsi.kielce.pl/wp-content/uploads/photo-gallery/0000/2018/dziensportu/DSC03023.JPG', NULL),
(492, 'https://www.zsi.kielce.pl/wp-content/uploads/photo-gallery/0000/2018/dziensportu/DSC03023.JPG', NULL),
(493, 'https://www.zsi.kielce.pl/wp-content/uploads/photo-gallery/0000/2018/dziensportu/DSC03022.JPG', NULL),
(494, 'https://www.zsi.kielce.pl/wp-content/uploads/photo-gallery/0000/2018/dziensportu/DSC03017.JPG', NULL),
(495, 'https://www.zsi.kielce.pl/wp-content/uploads/photo-gallery/0000/2018/dziensportu/DSC03019.JPG', NULL),
(496, 'https://www.zsi.kielce.pl/wp-content/uploads/photo-gallery/0000/2018/dziensportu/DSC02988.JPG', NULL),
(497, 'https://www.zsi.kielce.pl/wp-content/uploads/2018/06/35525267_1289105027888376_3189425345161854976_n.jpg', NULL),
(498, 'https://www.zsi.kielce.pl/wp-content/uploads/2018/06/IMG_1414-200x300.jpg', NULL),
(499, 'https://www.zsi.kielce.pl/wp-content/uploads/2018/06/IMG_1416-200x300.jpg', NULL),
(500, 'https://www.zsi.kielce.pl/wp-content/uploads/2018/09/IMG_4706-wybrane.jpg', NULL),
(501, 'https://www.zsi.kielce.pl/wp-content/uploads/2018/09/IMG_4699-wybrane.jpg', NULL),
(502, 'https://www.zsi.kielce.pl/wp-content/uploads/2018/09/42872918_2060594764004533_8615376371943735296_n-300x225.jpg', NULL),
(503, 'https://www.zsi.kielce.pl/wp-content/uploads/2018/10/43161265_2069027766494566_5263501795845472256_n.jpg', NULL),
(504, 'https://www.zsi.kielce.pl/wp-content/uploads/2018/10/43169815_2069028259827850_7090681377208664064_n-300x225.jpg', NULL),
(505, 'https://www.zsi.kielce.pl/wp-content/uploads/2018/10/43193448_2069028023161207_3261952980420657152_n-300x225.jpg', NULL),
(506, 'https://www.zsi.kielce.pl/wp-content/uploads/2018/10/43169815_2069028259827850_7090681377208664064_n-300x225.jpg', NULL),
(507, 'https://www.zsi.kielce.pl/wp-content/uploads/2018/10/43127792_2069028156494527_4269394794431643648_n-300x225.jpg', NULL),
(508, 'https://www.zsi.kielce.pl/wp-content/uploads/2018/10/43123993_2069027936494549_8109077007091892224_n-300x225.jpg', NULL),
(509, 'https://www.zsi.kielce.pl/wp-content/uploads/2018/10/IMG_6247-ma%C5%82e.jpg', NULL),
(510, 'https://www.zsi.kielce.pl/wp-content/uploads/2018/10/IMG_6241-ma%C5%82e-300x200.jpg', NULL),
(511, 'https://www.zsi.kielce.pl/wp-content/uploads/2018/11/DsXEIJ4XoAABLGI.jpg', NULL),
(512, 'https://www.zsi.kielce.pl/wp-content/uploads/2018/11/DsXEKnEXcAEn6Nm-150x150.jpg', NULL),
(513, 'https://www.zsi.kielce.pl/wp-content/uploads/2018/12/to.jpg', NULL),
(514, 'https://www.zsi.kielce.pl/wp-content/uploads/2018/12/DSC_0465-300x200.jpg', NULL),
(515, 'https://www.zsi.kielce.pl/wp-content/uploads/2018/12/DSC_0512-300x200.jpg', NULL),
(516, 'https://www.zsi.kielce.pl/wp-content/uploads/2018/12/DSC_0294-300x200.jpg', NULL),
(517, 'https://www.zsi.kielce.pl/wp-content/uploads/2019/01/IMG_6475.jpg', NULL),
(518, 'https://www.zsi.kielce.pl/wp-content/uploads/2019/01/IMG_6478-300x200.jpg', NULL),
(519, 'https://www.zsi.kielce.pl/wp-content/uploads/2019/01/IMG_6479-300x200.jpg', NULL),
(520, 'https://www.zsi.kielce.pl/wp-content/uploads/2019/01/IMG_6482-300x200.jpg', NULL),
(521, 'https://www.zsi.kielce.pl/wp-content/uploads/2019/01/IMG_6488-300x200.jpg', NULL),
(522, 'https://www.zsi.kielce.pl/wp-content/uploads/2019/01/IMG_6499-300x200.jpg', NULL),
(523, 'https://www.zsi.kielce.pl/wp-content/uploads/2019/03/53567271_2286845194712821_1770933656022417408_n-300x225.jpg', NULL),
(524, 'https://www.zsi.kielce.pl/wp-content/uploads/2019/04/IMG_6985.jpg', NULL),
(525, 'https://www.zsi.kielce.pl/wp-content/uploads/2019/04/IMG_6888-300x200.jpg', NULL),
(526, 'https://www.zsi.kielce.pl/wp-content/uploads/2019/04/IMG_6902-300x200.jpg', NULL),
(528, 'https://www.zsi.kielce.pl/wp-content/uploads/2019/04/IMG_6921-300x200.jpg', NULL),
(529, 'https://www.zsi.kielce.pl/wp-content/uploads/2019/04/IMG_6929-300x200.jpg', NULL),
(530, 'https://www.zsi.kielce.pl/wp-content/uploads/photo-gallery/0000/2019/sport/IMG_7327.JPG', NULL),
(531, 'https://www.zsi.kielce.pl/wp-content/uploads/photo-gallery/0000/2019/sport/IMG_7328.JPG', NULL),
(532, 'https://www.zsi.kielce.pl/wp-content/uploads/photo-gallery/0000/2019/sport/IMG_7330.JPG	', NULL),
(533, 'https://www.zsi.kielce.pl/wp-content/uploads/photo-gallery/0000/2019/sport/IMG_7335.JPG', NULL),
(534, 'https://www.zsi.kielce.pl/wp-content/uploads/photo-gallery/0000/2019/sport/IMG_7338.JPG', NULL),
(535, 'https://www.zsi.kielce.pl/wp-content/uploads/photo-gallery/0000/2019/dzien_otwarty/IMG_1984.JPG', NULL),
(536, 'https://www.zsi.kielce.pl/wp-content/uploads/photo-gallery/0000/2019/dzien_otwarty/IMG_2042.JPG', NULL),
(537, 'https://www.zsi.kielce.pl/wp-content/uploads/photo-gallery/0000/2019/dzien_otwarty/IMG_2054.JPG', NULL),
(538, 'https://www.zsi.kielce.pl/wp-content/uploads/photo-gallery/0000/2019/dzien_otwarty/IMG_1984.JPG', NULL),
(539, 'https://www.zsi.kielce.pl/wp-content/uploads/2019/09/18r.jpg', NULL),
(541, 'https://www.zsi.kielce.pl/wp-content/uploads/photo-gallery/0000/2019/rozpoczecieroku/17r.jpg', NULL),
(542, 'https://www.zsi.kielce.pl/wp-content/uploads/2019/09/IMG_8236-300x200.jpg', NULL),
(544, 'https://www.zsi.kielce.pl/wp-content/uploads/2019/09/IMG_8242-300x200.jpg', NULL),
(545, 'https://www.zsi.kielce.pl/wp-content/uploads/2019/09/IMG_8247-300x200.jpg', NULL),
(546, 'https://www.zsi.kielce.pl/wp-content/uploads/photo-gallery/0000/2019/ets/1569677214317.JPEG', NULL),
(547, 'https://www.zsi.kielce.pl/wp-content/uploads/photo-gallery/0000/2019/ets/1569677216637.JPEG', NULL),
(548, 'https://www.zsi.kielce.pl/wp-content/uploads/photo-gallery/0000/2019/ets/1569677211231.JPEG', NULL),
(549, 'https://www.zsi.kielce.pl/wp-content/uploads/photo-gallery/0000/2019/ets/1569677213092.JPEG', NULL),
(550, 'https://www.zsi.kielce.pl/wp-content/uploads/photo-gallery/0000/2019/ets/1569677214945.JPEG', NULL),
(551, 'https://www.zsi.kielce.pl/wp-content/uploads/photo-gallery/0000/2019/ets/1569677803578.JPEG', NULL),
(552, 'https://www.zsi.kielce.pl/wp-content/uploads/photo-gallery/0000/2019/ets/1569678161111.JPEG', NULL),
(553, 'https://www.zsi.kielce.pl/wp-content/uploads/2019/10/IMG-20191007-WA0003-300x225.jpg', NULL),
(554, 'https://www.zsi.kielce.pl/wp-content/uploads/2019/10/IMG-20191007-WA0002-300x225.jpg', NULL),
(555, 'https://www.zsi.kielce.pl/wp-content/uploads/2019/10/MG_9205.jpg', NULL),
(556, 'https://www.zsi.kielce.pl/wp-content/uploads/2019/10/MG_9157-300x200.jpg', NULL),
(557, 'https://www.zsi.kielce.pl/wp-content/uploads/2019/10/MG_9160-300x200.jpg', NULL),
(558, 'https://www.zsi.kielce.pl/wp-content/uploads/2019/10/MG_9197-300x200.jpg', NULL),
(559, 'https://www.zsi.kielce.pl/wp-content/uploads/2019/10/MG_9198-300x200.jpg', NULL),
(560, 'https://www.zsi.kielce.pl/wp-content/uploads/2019/10/MG_9199-300x200.jpg', NULL),
(561, 'https://www.zsi.kielce.pl/wp-content/uploads/2019/10/MG_9204-300x200.jpg', NULL),
(562, 'https://www.zsi.kielce.pl/wp-content/uploads/2019/10/MG_9205.jpg', NULL),
(563, 'https://www.zsi.kielce.pl/wp-content/uploads/2019/10/MG_9207-300x200.jpg', NULL),
(564, 'https://www.zsi.kielce.pl/wp-content/uploads/2019/11/IMG_8849-300x200.jpg', NULL),
(565, 'https://www.zsi.kielce.pl/wp-content/uploads/2019/11/IMG_8944-300x200.jpg', NULL),
(566, 'https://www.zsi.kielce.pl/wp-content/uploads/2019/12/DSC_0851-300x200.jpg', NULL),
(567, 'https://www.zsi.kielce.pl/wp-content/uploads/2019/12/DSC_0888-300x200.jpg', NULL),
(568, 'https://www.zsi.kielce.pl/wp-content/uploads/2019/12/IMG_9008-300x200.jpg', NULL),
(569, 'https://www.zsi.kielce.pl/wp-content/uploads/2019/12/IMG_9056-300x200.jpg', NULL),
(570, 'https://www.zsi.kielce.pl/wp-content/uploads/2020/01/a.jpg', NULL),
(571, 'https://www.zsi.kielce.pl/wp-content/uploads/2020/04/powodzenia-team-zsi-informatyk.jpg', NULL),
(572, 'https://www.zsi.kielce.pl/wp-content/uploads/2020/11/Tydzie%C5%84-przedsi%C4%99biorczo%C5%9Bci-2020.png', NULL),
(573, 'https://www.zsi.kielce.pl/wp-content/uploads/2021/01/IMG_20210126_101149_1.jpg', NULL),
(574, 'https://www.zsi.kielce.pl/wp-content/uploads/2021/06/131319714_4286648871399100_361883471830696030_n.jpg', NULL),
(575, 'https://www.zsi.kielce.pl/wp-content/uploads/2021/09/DSC7537.jpg', NULL),
(576, 'https://www.zsi.kielce.pl/wp-content/uploads/2021/10/247329818_944339302960370_5553214305243822110_n.jpg', NULL),
(577, 'https://www.zsi.kielce.pl/wp-content/uploads/2022/02/273049030_5060024857394827_7383638104945346502_n.jpg', NULL),
(578, 'https://www.zsi.kielce.pl/wp-content/uploads/2022/04/2.jpg', NULL),
(579, 'https://www.zsi.kielce.pl/wp-content/uploads/2022/04/3.jpg', NULL),
(580, 'https://www.zsi.kielce.pl/wp-content/uploads/2022/04/IMG_1375.jpg', NULL),
(581, 'https://www.zsi.kielce.pl/wp-content/uploads/2022/04/IMG_1388.jpg', NULL),
(582, 'https://www.zsi.kielce.pl/wp-content/uploads/2022/04/IMG_1389.jpg', NULL),
(583, 'https://www.zsi.kielce.pl/wp-content/uploads/2022/04/IMG_1394.jpg', NULL),
(584, 'https://www.zsi.kielce.pl/wp-content/uploads/2022/04/IMG_1412.jpg', NULL),
(585, 'https://www.zsi.kielce.pl/wp-content/uploads/2022/04/IMG_1414.jpg', NULL),
(586, 'https://www.zsi.kielce.pl/wp-content/uploads/2022/04/IMG_1416.jpg', NULL),
(587, 'https://www.zsi.kielce.pl/wp-content/uploads/2022/04/IMG_1418.jpg', NULL),
(588, 'https://www.zsi.kielce.pl/wp-content/uploads/2022/09/14.jpg', NULL),
(589, 'https://www.zsi.kielce.pl/wp-content/uploads/2022/09/1.jpg', NULL),
(590, 'https://www.zsi.kielce.pl/wp-content/uploads/2022/09/5.jpg', NULL),
(591, 'https://www.zsi.kielce.pl/wp-content/uploads/2022/09/13.jpg', NULL),
(592, 'https://www.zsi.kielce.pl/wp-content/uploads/2022/09/14.jpg', NULL),
(593, 'https://www.zsi.kielce.pl/wp-content/uploads/2022/09/miniatura.jpg', NULL),
(594, 'https://www.zsi.kielce.pl/wp-content/uploads/2022/09/305745645_450918660404272_170431737480192598_n.jpg', NULL),
(595, 'https://www.zsi.kielce.pl/wp-content/uploads/2022/09/305839875_450918680404270_3367231055657893372_n.jpg', NULL),
(596, 'https://www.zsi.kielce.pl/wp-content/uploads/2022/09/305964959_450918670404271_8722339969681128650_n.jpg', NULL),
(597, 'https://www.zsi.kielce.pl/wp-content/uploads/2022/09/308625163_612966977088257_6983842361378251000_n.jpg', NULL),
(598, 'https://www.zsi.kielce.pl/wp-content/uploads/2022/10/309951171_1023522961651443_8327373588071745586_n-1-1024x660.jpg', NULL),
(599, 'https://www.zsi.kielce.pl/wp-content/uploads/2022/10/310435520_1466217223847034_3201379617816263807_n-1-1024x722.jpg', NULL),
(600, 'https://www.zsi.kielce.pl/wp-content/uploads/2022/10/DSC_5664-1024x683.jpg', NULL),
(601, 'https://www.zsi.kielce.pl/wp-content/uploads/2022/10/DSC_5700-1024x683.jpg', NULL),
(602, 'https://www.zsi.kielce.pl/wp-content/uploads/2022/10/DSC_5703-1024x683.jpg', NULL),
(603, 'https://www.zsi.kielce.pl/wp-content/uploads/2022/10/DSC_5717-1024x683.jpg', NULL),
(604, 'https://www.zsi.kielce.pl/wp-content/uploads/2022/10/DSC_5722-1024x683.jpg', NULL),
(605, 'https://www.zsi.kielce.pl/wp-content/uploads/2022/10/DSC_5972-683x1024.jpg', NULL),
(606, 'https://www.zsi.kielce.pl/wp-content/uploads/2022/10/DSC_5998-1024x683.jpg', NULL),
(607, 'https://www.zsi.kielce.pl/wp-content/uploads/2022/10/DSC_5705-1024x683.jpg', NULL),
(608, 'https://www.zsi.kielce.pl/wp-content/uploads/2022/10/DSC_6002-1024x683.jpg', NULL),
(609, 'https://www.zsi.kielce.pl/wp-content/uploads/2022/10/DSC_6008-1024x683.jpg', NULL),
(610, 'https://www.zsi.kielce.pl/wp-content/uploads/2022/10/DSC_6000-1024x683.jpg', NULL),
(611, 'https://www.zsi.kielce.pl/wp-content/uploads/2022/10/DSC_6002-1024x683.jpg', NULL),
(612, 'https://www.zsi.kielce.pl/wp-content/uploads/2022/10/DSC_6008-1024x683.jpg', NULL),
(613, 'https://www.zsi.kielce.pl/wp-content/uploads/2022/10/DSC_6010-1024x683.jpg', NULL),
(614, 'https://www.zsi.kielce.pl/wp-content/uploads/2022/10/DSC_6011-1024x683.jpg', NULL),
(615, 'https://www.zsi.kielce.pl/wp-content/uploads/2022/10/DSC_6014-1024x683.jpg', NULL),
(616, 'https://www.zsi.kielce.pl/wp-content/uploads/2022/10/DSC_6015-1024x683.jpg', NULL),
(617, 'https://www.zsi.kielce.pl/wp-content/uploads/2022/10/DSC_57221-1024x683.jpg', NULL),
(618, 'https://www.zsi.kielce.pl/wp-content/uploads/2022/10/IMG_1693-1024x683.jpg', NULL),
(619, 'https://www.zsi.kielce.pl/wp-content/uploads/2022/10/IMG_1694-1024x683.jpg', NULL),
(620, 'https://www.zsi.kielce.pl/wp-content/uploads/2022/10/308703804_663980398439665_9157136130856230037_n.jpg', NULL),
(621, 'https://www.zsi.kielce.pl/wp-content/uploads/2022/11/314492824_495533845942753_2525947688183394845_n.jpg', NULL),
(622, 'https://www.zsi.kielce.pl/wp-content/uploads/2022/11/313414278_495534222609382_502416493113241611_n.jpg', NULL),
(623, 'https://www.zsi.kielce.pl/wp-content/uploads/2022/11/313984597_495533935942744_8191794725888410814_n.jpg', NULL),
(624, 'https://www.zsi.kielce.pl/wp-content/uploads/2022/11/314407690_495534102609394_2693491647289523312_n.jpg', NULL),
(625, 'https://www.zsi.kielce.pl/wp-content/uploads/2022/11/314492824_495533845942753_2525947688183394845_n.jpg', NULL),
(626, 'https://www.zsi.kielce.pl/wp-content/uploads/2022/11/316617499_832044721375156_1532581798600309488_n.jpg', NULL),
(627, 'https://www.zsi.kielce.pl/wp-content/uploads/2023/01/327140291_2441831842635805_8573438514682046391_n.jpg', NULL),
(628, 'https://www.zsi.kielce.pl/wp-content/uploads/2023/01/327466731_1147273669263425_4865896855763262717_n.jpg', NULL),
(629, 'https://www.zsi.kielce.pl/wp-content/uploads/2023/01/327599767_732176238222023_1130518179083779953_n-1024x673.jpg', NULL),
(630, 'https://www.zsi.kielce.pl/wp-content/uploads/2023/01/327140291_2441831842635805_8573438514682046391_n.jpg', NULL),
(631, 'https://www.zsi.kielce.pl/wp-content/uploads/2023/01/326582488_866130941338975_7842298899954436457_n.jpg', NULL),
(632, 'https://www.zsi.kielce.pl/wp-content/uploads/2023/01/DSC_7179-1024x683.jpg', NULL),
(633, 'https://www.zsi.kielce.pl/wp-content/uploads/2023/01/326582488_866130941338975_7842298899954436457_n.jpg', NULL),
(634, 'https://www.zsi.kielce.pl/wp-content/uploads/2023/01/DSC_7317-1024x683.jpg', NULL),
(635, 'https://www.zsi.kielce.pl/wp-content/uploads/2023/01/DSC_72362-1024x683.jpg', NULL),
(636, 'https://www.zsi.kielce.pl/wp-content/uploads/2023/01/DSC_7239-683x1024.jpg', NULL),
(637, 'https://www.zsi.kielce.pl/wp-content/uploads/2023/03/337238226_577154481145406_8850113246063441322_n2.jpg', NULL),
(638, 'https://www.zsi.kielce.pl/wp-content/uploads/2023/03/336909848_3523146304675051_8362799598757437808_n-1024x768.jpg', NULL),
(639, 'https://www.zsi.kielce.pl/wp-content/uploads/2023/03/336894016_1277056239832916_7059768994711502754_n-1024x768.jpg', NULL),
(640, 'https://www.zsi.kielce.pl/wp-content/uploads/2023/03/337238226_577154481145406_8850113246063441322_n.jpg', NULL),
(641, 'https://www.zsi.kielce.pl/wp-content/uploads/2023/04/IMG_20230414_181800.jpg', NULL),
(653, 'https://www.zsi.kielce.pl/wp-content/uploads/2023/10/DSC_8996-1024x683.jpg', NULL),
(659, 'https://www.zsi.kielce.pl/wp-content/uploads/2023/10/DSC_9157-1024x683.jpg', ''),
(660, 'https://www.zsi.kielce.pl/wp-content/uploads/2023/10/DSC_9152-1024x683.jpg', '');

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `imagesteachers`
--

CREATE TABLE `imagesteachers` (
  `id` int(11) NOT NULL,
  `id_images` int(11) NOT NULL,
  `id_teachers` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `imagesteachers`
--

INSERT INTO `imagesteachers` (`id`, `id_images`, `id_teachers`) VALUES
(227, 326, 48),
(7, 327, 38),
(14, 327, 71),
(9, 328, 38),
(11, 328, 71),
(15, 329, 28),
(16, 330, 28),
(17, 330, 38),
(18, 331, 28),
(20, 332, 5),
(19, 332, 28),
(21, 332, 47),
(22, 332, 71),
(23, 333, 28),
(24, 334, 28),
(25, 335, 28),
(26, 336, 28),
(5, 337, 28),
(226, 341, 38),
(225, 342, 38),
(224, 343, 13),
(223, 343, 38),
(222, 344, 38),
(221, 345, 38),
(220, 352, 13),
(219, 352, 38),
(83, 360, 13),
(84, 360, 28),
(85, 360, 47),
(108, 365, 28),
(110, 367, 5),
(109, 367, 47),
(218, 368, 35),
(56, 369, 28),
(61, 371, 28),
(117, 373, 28),
(118, 373, 47),
(112, 375, 28),
(113, 375, 47),
(107, 377, 28),
(217, 378, 38),
(216, 379, 28),
(209, 380, 1),
(212, 380, 5),
(215, 380, 6),
(213, 380, 13),
(214, 380, 28),
(211, 380, 69),
(210, 380, 71),
(202, 382, 1),
(207, 382, 5),
(206, 382, 6),
(205, 382, 13),
(204, 382, 28),
(208, 382, 33),
(203, 382, 71),
(77, 384, 5),
(78, 384, 6),
(80, 384, 15),
(79, 384, 23),
(74, 384, 28),
(73, 384, 38),
(76, 384, 47),
(75, 384, 69),
(200, 392, 15),
(201, 392, 28),
(198, 394, 15),
(199, 394, 28),
(196, 396, 15),
(197, 396, 28),
(100, 405, 6),
(99, 405, 28),
(195, 406, 1),
(194, 408, 38),
(89, 410, 28),
(40, 413, 29),
(41, 414, 29),
(42, 417, 1),
(90, 418, 1),
(81, 421, 29),
(192, 423, 1),
(193, 423, 51),
(36, 426, 6),
(35, 426, 28),
(52, 431, 6),
(51, 431, 28),
(53, 432, 28),
(105, 434, 28),
(106, 434, 47),
(57, 439, 28),
(59, 439, 47),
(54, 444, 28),
(72, 454, 28),
(190, 460, 5),
(189, 460, 28),
(191, 460, 33),
(70, 468, 28),
(188, 471, 48),
(187, 473, 38),
(186, 480, 13),
(185, 480, 23),
(184, 480, 28),
(182, 484, 13),
(183, 484, 23),
(181, 488, 1),
(82, 493, 28),
(180, 499, 28),
(102, 500, 28),
(103, 500, 47),
(179, 509, 28),
(178, 509, 47),
(177, 515, 28),
(175, 516, 1),
(176, 516, 29),
(62, 518, 28),
(63, 518, 29),
(173, 521, 38),
(174, 521, 47),
(87, 529, 28),
(88, 529, 29),
(86, 529, 47),
(37, 534, 28),
(38, 536, 1),
(39, 537, 1),
(60, 542, 28),
(101, 546, 28),
(55, 550, 28),
(116, 556, 6),
(114, 556, 28),
(115, 556, 47),
(29, 559, 28),
(104, 564, 13),
(162, 571, 5),
(168, 571, 6),
(169, 571, 13),
(161, 571, 15),
(160, 571, 23),
(166, 571, 28),
(172, 571, 29),
(163, 571, 38),
(167, 571, 47),
(171, 571, 50),
(164, 571, 62),
(165, 571, 64),
(170, 571, 71),
(27, 572, 13),
(28, 573, 28),
(159, 574, 54),
(158, 577, 15),
(93, 581, 6),
(91, 581, 28),
(94, 581, 47),
(92, 581, 71),
(97, 586, 6),
(96, 586, 28),
(98, 586, 47),
(157, 589, 28),
(156, 593, 38),
(155, 594, 38),
(154, 595, 38),
(153, 596, 38),
(152, 598, 13),
(68, 603, 6),
(67, 603, 28),
(69, 603, 47),
(151, 605, 28),
(149, 610, 13),
(150, 610, 28),
(148, 610, 51),
(147, 611, 28),
(146, 611, 51),
(71, 617, 28),
(95, 618, 28),
(145, 620, 1),
(142, 620, 28),
(143, 620, 35),
(141, 620, 38),
(144, 620, 48),
(140, 620, 49),
(138, 631, 28),
(139, 631, 29),
(137, 631, 48),
(30, 632, 28),
(31, 632, 47),
(33, 632, 54),
(32, 632, 64),
(34, 632, 71),
(136, 633, 28),
(135, 633, 29),
(134, 633, 48),
(66, 634, 6),
(64, 634, 13),
(65, 634, 54),
(130, 635, 28),
(132, 635, 54),
(133, 635, 64),
(131, 635, 71),
(129, 636, 48),
(128, 640, 6),
(127, 640, 28),
(126, 641, 38),
(120, 653, 6),
(121, 653, 28),
(119, 653, 47),
(125, 659, 6),
(124, 659, 28),
(123, 660, 6),
(122, 660, 28);

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `teachers`
--

CREATE TABLE `teachers` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `teachers`
--

INSERT INTO `teachers` (`id`, `name`) VALUES
(1, 'Arciszewski Artur'),
(2, 'Bem Jarosław'),
(3, 'Bogacz Nina'),
(4, 'Charabin Ewa'),
(5, 'Chmiel Wioletta'),
(6, 'Dubik Anna'),
(7, 'Dutkiewicz Iwona'),
(8, 'Gałczyńska-Karasek Marta'),
(9, 'Giedyk Miroslaw'),
(10, 'Gierada Agnieszka'),
(11, 'Ginter Anna'),
(12, 'Grabda Agnieszka'),
(13, 'Grimm Katarzyna'),
(14, 'Hipsz Jarosław'),
(15, 'Jagiełło Hanna'),
(16, 'Jakubczyk Monika'),
(17, 'Janaszek Piotr'),
(18, 'Jaszczyk Agnieszka'),
(19, 'Kaczmarczyk Monika'),
(20, 'Klicka Irminia'),
(21, 'Kogut Michał'),
(22, 'Kołodziejski Sławomir'),
(23, 'Kosacka Magdalena'),
(24, 'Kosmala Dorota'),
(25, 'Kostucha Michał'),
(26, 'Kowal Agnieszka'),
(27, 'Kowalczyk Katarzyna'),
(28, 'Kozieł Tomasz'),
(29, 'Kozłowska Marta'),
(30, 'Kubasiewicz Jolanta'),
(31, 'Lenart Agnieszka'),
(32, 'Lis Izabela'),
(33, 'Ludwinek Aleksandra'),
(34, 'Łachowska Klaudia'),
(35, 'Łazarski Mariusz'),
(36, 'Majer Jacek'),
(37, 'Matusiak Marek'),
(38, 'Mazur Sebastian'),
(39, 'Mądzik- Błosińska Ewa'),
(40, 'Misiowiec Grzegorz'),
(41, 'Misiowiec Kinga'),
(42, 'Mierzwa Marek'),
(43, 'Miszczyk Paulina'),
(44, 'Mgłosiek Joanna'),
(45, 'Mochocka Dorota'),
(46, 'Niekurzak Kamil'),
(47, 'Nikodem Lucyna'),
(48, 'Nikodem Mariusz'),
(49, 'Orliński Artur'),
(50, 'Papucki Sebastian'),
(51, 'Paszek-Misztal Anna'),
(52, 'Raduszewski Marek'),
(53, 'Robak Agniesz'),
(54, 'Rokosz Jarosław'),
(55, 'Równicki Hubert'),
(56, 'Ruszczak Ewa'),
(57, 'Rysińska Elżbieta'),
(58, 'Snoch Tomasz'),
(59, 'Stochmal Magdale'),
(60, 'Symula Beata'),
(61, 'Szczerba-Folfas Katarzyna'),
(62, 'Szwajca Tamara'),
(63, 'Śliwa Anna'),
(64, 'Ślusarczyk Małgorzata'),
(65, 'Tamborska Marlena'),
(66, 'Tuchowski Berna'),
(67, 'Tylec Joanna'),
(68, 'Tomicki Łukasz'),
(69, 'Urbańska Małgorzata'),
(70, 'Wawrzoła Sylwest'),
(71, 'Wilczkowska Małgorzata'),
(72, 'Winkler Joanna'),
(73, 'Winkler Rafał'),
(74, 'Wołonkiewicz Mirosław');

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `login` varchar(255) NOT NULL,
  `password` text NOT NULL,
  `token` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `login`, `password`, `token`) VALUES
(1, 'admin', 'Ty4Mf4VOD9zf3C1dfX1iTU3B7vbCVqjAQCx3PrkmBzc=', '0SsVzmOLdKTAxRusviK7Ejix/yEsgaP5/lSyfGyrAMU=');

--
-- Indeksy dla zrzutów tabel
--

--
-- Indeksy dla tabeli `images`
--
ALTER TABLE `images`
  ADD PRIMARY KEY (`id`);

--
-- Indeksy dla tabeli `imagesteachers`
--
ALTER TABLE `imagesteachers`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `relations` (`id_images`,`id_teachers`) USING BTREE,
  ADD KEY `imagesteachers_ibfk_2` (`id_teachers`);

--
-- Indeksy dla tabeli `teachers`
--
ALTER TABLE `teachers`
  ADD PRIMARY KEY (`id`);

--
-- Indeksy dla tabeli `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `login` (`login`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `images`
--
ALTER TABLE `images`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=661;

--
-- AUTO_INCREMENT for table `imagesteachers`
--
ALTER TABLE `imagesteachers`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=228;

--
-- AUTO_INCREMENT for table `teachers`
--
ALTER TABLE `teachers`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=75;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `imagesteachers`
--
ALTER TABLE `imagesteachers`
  ADD CONSTRAINT `imagesteachers_ibfk_1` FOREIGN KEY (`id_images`) REFERENCES `images` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `imagesteachers_ibfk_2` FOREIGN KEY (`id_teachers`) REFERENCES `teachers` (`id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
