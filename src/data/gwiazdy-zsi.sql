-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Czas generowania: 19 Wrz 2023, 22:32
-- Wersja serwera: 10.4.24-MariaDB
-- Wersja PHP: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Baza danych: `gwiazdy-zsi`
--

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `images`
--

CREATE TABLE `images` (
  `id` int(11) NOT NULL,
  `src` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Zrzut danych tabeli `images`
--

INSERT INTO `images` (`id`, `src`) VALUES
(326, 'https://www.zsi.kielce.pl/wp-content/uploads/photo-gallery/2015pilecki/DSC_0113.JPG'),
(327, 'https://www.zsi.kielce.pl/wp-content/uploads/photo-gallery/2015gielda/IMG_3734%20(Small).JPG'),
(328, 'https://www.zsi.kielce.pl/wp-content/uploads/photo-gallery/2015gielda/IMG_3696%20(Small).JPG'),
(329, 'https://www.zsi.kielce.pl/wp-content/uploads/photo-gallery/2016%20studniowka/12647172_468133136707293_5452053648601032195_n.jpg'),
(330, 'https://www.zsi.kielce.pl/wp-content/uploads/photo-gallery/2016%20studniowka/12647016_468133353373938_2610962868594866453_n.jpg'),
(331, 'https://www.zsi.kielce.pl/wp-content/uploads/photo-gallery/2016%20studniowka/12592197_468133286707278_1885169365132598641_n.jpg'),
(332, 'https://www.zsi.kielce.pl/wp-content/uploads/photo-gallery/20151kwietnia/DSC_0298.JPG'),
(333, 'https://www.zsi.kielce.pl/wp-content/uploads/photo-gallery/20151kwietnia/DSC_0297.JPG'),
(334, 'https://www.zsi.kielce.pl/wp-content/uploads/photo-gallery/20151kwietnia/DSC_0288.JPG'),
(335, 'https://www.zsi.kielce.pl/wp-content/uploads/photo-gallery/20151kwietnia/DSC_0283.JPG'),
(336, 'https://www.zsi.kielce.pl/wp-content/uploads/photo-gallery/20151kwietnia/DSC_0281.JPG'),
(337, 'https://www.zsi.kielce.pl/wp-content/uploads/photo-gallery/20151kwietnia/DSC_0269.JPG'),
(338, 'https://www.zsi.kielce.pl/wp-content/uploads/photo-gallery/20151kwietnia/DSC_0084.JPG'),
(339, 'https://www.zsi.kielce.pl/wp-content/uploads/photo-gallery/20151kwietnia/DSC_0040.JPG'),
(340, 'https://www.zsi.kielce.pl/wp-content/uploads/photo-gallery/2016Kolorowydzien/DSC_0102.JPG'),
(341, 'https://www.zsi.kielce.pl/wp-content/uploads/photo-gallery/2016QuizHistoryczny/DSC_0177.JPG'),
(342, 'https://www.zsi.kielce.pl/wp-content/uploads/photo-gallery/2016QuizHistoryczny/DSC_0162.JPG'),
(343, 'https://www.zsi.kielce.pl/wp-content/uploads/2016/04/Bez-tytu%C5%82u.jpg'),
(344, 'https://www.zsi.kielce.pl/wp-content/uploads/photo-gallery/0000/2016/DzienOtwarty/DSC_0263.JPG'),
(345, 'https://www.zsi.kielce.pl/wp-content/uploads/photo-gallery/0000/2016/DzienOtwarty/DSC_0192.JPG'),
(346, 'https://www.zsi.kielce.pl/wp-content/uploads/photo-gallery/2016%20maturzysci/13124931_1126546674076018_1486855230127395506_n.jpg'),
(347, 'https://www.zsi.kielce.pl/wp-content/uploads/photo-gallery/2016%20maturzysci/13095932_1126546714076014_6550664041446613376_n.jpg'),
(348, 'https://www.zsi.kielce.pl/wp-content/uploads/photo-gallery/2016%20maturzysci/13055514_1126546917409327_8273264732252904494_n.jpg'),
(349, 'https://www.zsi.kielce.pl/wp-content/uploads/photo-gallery/2016%20maturzysci/13102786_1126545747409444_7801736816288144809_n.jpg'),
(350, 'https://www.zsi.kielce.pl/wp-content/uploads/photo-gallery/2016%20maturzysci/13083322_1126545930742759_5988536457950063305_n.jpg'),
(351, 'https://www.zsi.kielce.pl/wp-content/uploads/photo-gallery/2016%20maturzysci/13118997_1126545314076154_8610353995274124875_n.jpg'),
(352, 'https://www.zsi.kielce.pl/wp-content/uploads/photo-gallery/2016%20maturzysci/13087590_1126545097409509_5078828153277865815_n.jpg'),
(353, 'https://www.zsi.kielce.pl/wp-content/uploads/photo-gallery/0000/2016/DzienSportu/IMG_6683.JPG'),
(354, 'https://www.zsi.kielce.pl/wp-content/uploads/photo-gallery/0000/2016/DzienSportu/IMG_6677.JPG'),
(355, 'https://www.zsi.kielce.pl/wp-content/uploads/photo-gallery/0000/2016/DzienSportu/IMG_5613.JPG'),
(356, 'https://www.zsi.kielce.pl/wp-content/uploads/photo-gallery/0000/2016/DzienSportu/IMG_5562.JPG'),
(357, 'https://www.zsi.kielce.pl/wp-content/uploads/2016/09/1.jpg'),
(358, 'https://www.zsi.kielce.pl/wp-content/uploads/photo-gallery/0000/2016/rozpoczecierokuszkolnego/1.JPG'),
(359, 'https://www.zsi.kielce.pl/wp-content/uploads/photo-gallery/0000/2016/rozpoczecierokuszkolnego/2.JPG'),
(360, 'https://www.zsi.kielce.pl/wp-content/uploads/photo-gallery/0000/2016/rozpoczecierokuszkolnego/3.JPG'),
(361, 'https://www.zsi.kielce.pl/wp-content/uploads/photo-gallery/0000/2016/rozpoczecierokuszkolnego/7.JPG'),
(362, 'https://www.zsi.kielce.pl/wp-content/uploads/photo-gallery/0000/2016/rozpoczecierokuszkolnego/12.JPG'),
(363, 'https://www.zsi.kielce.pl/wp-content/uploads/photo-gallery/0000/2016/rozpoczecierokuszkolnego/13.jpg'),
(364, 'https://www.zsi.kielce.pl/wp-content/uploads/photo-gallery/0000/2016/pierwszekroki/DSC_0135.JPG'),
(365, 'https://www.zsi.kielce.pl/wp-content/uploads/2016/09/DSC_0025.jpg'),
(367, 'https://www.zsi.kielce.pl/wp-content/uploads/photo-gallery/0000/2016/Gramiejska/DSC_0054.JPG'),
(368, 'https://www.zsi.kielce.pl/wp-content/uploads/photo-gallery/0000/2016/Gramiejska/DSC_0091.JPG'),
(369, 'https://www.zsi.kielce.pl/wp-content/uploads/photo-gallery/0000/2016/slubowanie/DSC_0011.JPG'),
(370, 'https://www.zsi.kielce.pl/wp-content/uploads/photo-gallery/0000/2016/slubowanie/DSC_0020.JPG'),
(371, 'https://www.zsi.kielce.pl/wp-content/uploads/photo-gallery/0000/2016/slubowanie/DSC_0033.JPG'),
(372, 'https://www.zsi.kielce.pl/wp-content/uploads/photo-gallery/0000/2016/slubowanie/DSC_0105.JPG'),
(373, 'https://www.zsi.kielce.pl/wp-content/uploads/photo-gallery/0000/2016/slubowanie/DSC_0130.JPG'),
(374, 'https://www.zsi.kielce.pl/wp-content/uploads/photo-gallery/0000/2016/slubowanie/DSC_0134.JPG'),
(375, 'https://www.zsi.kielce.pl/wp-content/uploads/photo-gallery/0000/2016/slubowanie/DSC_0138.JPG'),
(376, 'https://www.zsi.kielce.pl/wp-content/uploads/photo-gallery/0000/2016/slubowanie/DSC_0145.JPG'),
(377, 'https://www.zsi.kielce.pl/wp-content/uploads/2016/10/dyrektor.png'),
(378, 'https://www.zsi.kielce.pl/wp-content/uploads/2016/10/20161020_091748-2.jpg'),
(379, 'https://www.zsi.kielce.pl/wp-content/uploads/2016/12/IMG_1217.jpg'),
(380, 'https://www.zsi.kielce.pl/wp-content/uploads/2017/01/IMG_20170127_112258.jpg'),
(381, 'https://www.zsi.kielce.pl/wp-content/uploads/2017/01/IMG_20170127_112421-768x512.jpg'),
(382, 'https://www.zsi.kielce.pl/wp-content/uploads/2017/01/IMG_20170127_112759-768x527.jpg'),
(383, 'https://www.zsi.kielce.pl/wp-content/uploads/2017/02/IMG_9443.jpg'),
(384, 'https://www.zsi.kielce.pl/wp-content/uploads/photo-gallery/0000/2017/Studniowka/DSC01733.jpg'),
(385, 'https://www.zsi.kielce.pl/wp-content/uploads/photo-gallery/0000/2017/Studniowka/IMG_9423.JPG'),
(386, 'https://www.zsi.kielce.pl/wp-content/uploads/photo-gallery/0000/2017/Studniowka/IMG_9443.JPG'),
(387, 'https://www.zsi.kielce.pl/wp-content/uploads/photo-gallery/0000/2017/Studniowka/IMG_9472.JPG'),
(388, 'https://www.zsi.kielce.pl/wp-content/uploads/2017/02/1-1.jpg'),
(389, 'https://www.zsi.kielce.pl/wp-content/uploads/2017/03/DSC_0102.jpg'),
(390, 'https://www.zsi.kielce.pl/wp-content/uploads/2017/03/7.jpg'),
(391, 'https://www.zsi.kielce.pl/wp-content/uploads/2017/03/10.jpg'),
(392, 'https://www.zsi.kielce.pl/wp-content/uploads/2017/03/DSC3132.jpg'),
(393, 'https://www.zsi.kielce.pl/wp-content/uploads/photo-gallery/0000/2017/anglomania/_DSC3114.JPG'),
(394, 'https://www.zsi.kielce.pl/wp-content/uploads/photo-gallery/0000/2017/anglomania/_DSC3135.JPG'),
(395, 'https://www.zsi.kielce.pl/wp-content/uploads/photo-gallery/0000/2017/anglomania/_DSC3126.JPG'),
(396, 'https://www.zsi.kielce.pl/wp-content/uploads/photo-gallery/0000/2017/anglomania/_DSC3132.JPG'),
(397, 'https://www.zsi.kielce.pl/wp-content/uploads/2017/04/2.jpeg'),
(398, 'https://www.zsi.kielce.pl/wp-content/uploads/photo-gallery/0000/2017/pozegnanieklas4/DSC04231.JPG'),
(399, 'https://www.zsi.kielce.pl/wp-content/uploads/photo-gallery/0000/2017/pozegnanieklas4/DSC04229.JPG'),
(400, 'https://www.zsi.kielce.pl/wp-content/uploads/photo-gallery/0000/2017/pozegnanieklas4/DSC04257.JPG'),
(401, 'https://www.zsi.kielce.pl/wp-content/uploads/photo-gallery/0000/2017/pozegnanieklas4/DSC04401.JPG'),
(402, 'https://www.zsi.kielce.pl/wp-content/uploads/photo-gallery/0000/2017/pozegnanieklas4/DSC04404.JPG'),
(403, 'https://www.zsi.kielce.pl/wp-content/uploads/2017/05/1-1.jpg'),
(404, 'https://www.zsi.kielce.pl/wp-content/uploads/photo-gallery/0000/2017/otwarty/1.JPG'),
(405, 'https://www.zsi.kielce.pl/wp-content/uploads/photo-gallery/0000/2017/otwarty/2.JPG'),
(406, 'https://www.zsi.kielce.pl/wp-content/uploads/photo-gallery/0000/2017/otwarty/4.JPG'),
(407, 'https://www.zsi.kielce.pl/wp-content/uploads/photo-gallery/0000/2017/otwarty/3.JPG'),
(408, 'https://www.zsi.kielce.pl/wp-content/uploads/photo-gallery/0000/2017/otwarty/5a.JPG'),
(409, 'https://www.zsi.kielce.pl/wp-content/uploads/photo-gallery/0000/2017/Profesjonalni/FullSizeRender_5.jpg'),
(410, 'https://www.zsi.kielce.pl/wp-content/uploads/photo-gallery/0000/2017/Profesjonalni/FullSizeRender_7.jpg'),
(411, 'https://www.zsi.kielce.pl/wp-content/uploads/photo-gallery/0000/2017/Profesjonalni/FullSizeRender_10.jpg'),
(412, 'https://www.zsi.kielce.pl/wp-content/uploads/photo-gallery/0000/2017/Profesjonalni/FullSizeRender_15.jpg'),
(413, 'https://www.zsi.kielce.pl/wp-content/uploads/photo-gallery/0000/2017/DzienSportu/IMG_3333.JPG'),
(414, 'https://www.zsi.kielce.pl/wp-content/uploads/photo-gallery/0000/2017/DzienSportu/IMG_3335.JPG'),
(415, 'https://www.zsi.kielce.pl/wp-content/uploads/photo-gallery/0000/2017/DzienSportu/IMG_3406.JPG'),
(416, 'https://www.zsi.kielce.pl/wp-content/uploads/photo-gallery/0000/2017/DzienSportu/IMG_3407.JPG'),
(417, 'https://www.zsi.kielce.pl/wp-content/uploads/photo-gallery/0000/2017/DzienSportu/IMG_3419.JPG'),
(418, 'https://www.zsi.kielce.pl/wp-content/uploads/photo-gallery/0000/2017/DzienSportu/IMG_3420.JPG'),
(419, 'https://www.zsi.kielce.pl/wp-content/uploads/photo-gallery/0000/2017/DzienSportu/IMG_3422.JPG'),
(420, 'https://www.zsi.kielce.pl/wp-content/uploads/photo-gallery/0000/2017/DzienSportu/IMG_3427.JPG'),
(421, 'https://www.zsi.kielce.pl/wp-content/uploads/photo-gallery/0000/2017/DzienSportu/IMG_3434.JPG'),
(422, 'https://www.zsi.kielce.pl/wp-content/uploads/photo-gallery/0000/2017/DzienSportu/IMG_3433.JPG'),
(423, 'https://www.zsi.kielce.pl/wp-content/uploads/photo-gallery/0000/2017/DzienSportu/IMG_3445.JPG'),
(424, 'https://www.zsi.kielce.pl/wp-content/uploads/2017/05/1a.jpg'),
(425, 'https://www.zsi.kielce.pl/wp-content/uploads/2017/06/DSCN4119.jpg'),
(426, 'https://www.zsi.kielce.pl/wp-content/uploads/photo-gallery/0000/2017/KoniecRoku/IMG_3120.JPG'),
(427, 'https://www.zsi.kielce.pl/wp-content/uploads/photo-gallery/0000/2017/KoniecRoku/IMG_3132.JPG'),
(428, 'https://www.zsi.kielce.pl/wp-content/uploads/photo-gallery/0000/2017/KoniecRoku/IMG_3161.JPG'),
(429, 'https://www.zsi.kielce.pl/wp-content/uploads/photo-gallery/0000/2017/KoniecRoku/IMG_3160.JPG'),
(430, 'https://www.zsi.kielce.pl/wp-content/uploads/photo-gallery/0000/2017/KoniecRoku/IMG_3116.JPG'),
(431, 'https://www.zsi.kielce.pl/wp-content/uploads/photo-gallery/0000/2017/KoniecRoku/IMG_3162.JPG'),
(432, 'https://www.zsi.kielce.pl/wp-content/uploads/photo-gallery/0000/2017/KoniecRoku/IMG_3133.JPG'),
(433, 'https://www.zsi.kielce.pl/wp-content/uploads/photo-gallery/0000/2017/KoniecRoku/DSCN4121.JPG'),
(434, 'https://www.zsi.kielce.pl/wp-content/uploads/photo-gallery/0000/2017/KoniecRoku/DSCN4119.JPG'),
(435, 'https://www.zsi.kielce.pl/wp-content/uploads/photo-gallery/0000/2017/KoniecRoku/DSCN4131.JPG'),
(436, 'https://www.zsi.kielce.pl/wp-content/uploads/photo-gallery/0000/2017/KoniecRoku/DSCN4128.JPG'),
(437, 'https://www.zsi.kielce.pl/wp-content/uploads/photo-gallery/0000/2017/KoniecRoku/DSCN4130.JPG'),
(438, 'https://www.zsi.kielce.pl/wp-content/uploads/photo-gallery/0000/2017/KoniecRoku/DSCN4133.JPG'),
(439, 'https://www.zsi.kielce.pl/wp-content/uploads/photo-gallery/0000/2017/rozpoczecierokuszkolnego/DSC05138.JPG'),
(440, 'https://www.zsi.kielce.pl/wp-content/uploads/photo-gallery/0000/2017/rozpoczecierokuszkolnego/DSC05141.JPG'),
(441, 'https://www.zsi.kielce.pl/wp-content/uploads/photo-gallery/0000/2017/rozpoczecierokuszkolnego/DSC05141.JPG'),
(442, 'https://www.zsi.kielce.pl/wp-content/uploads/photo-gallery/0000/2017/pierwszekroki/DSC05315.JPG'),
(443, 'https://www.zsi.kielce.pl/wp-content/uploads/photo-gallery/0000/2017/pierwszekroki/DSC05316.JPG'),
(444, 'https://www.zsi.kielce.pl/wp-content/uploads/photo-gallery/0000/2017/pierwszekroki/DSC05329.JPG'),
(445, 'https://www.zsi.kielce.pl/wp-content/uploads/photo-gallery/0000/2017/pierwszekroki/DSC05328.JPG'),
(446, 'https://www.zsi.kielce.pl/wp-content/uploads/photo-gallery/0000/2017/pierwszekroki/DSC05325.JPG'),
(447, 'https://www.zsi.kielce.pl/wp-content/uploads/photo-gallery/0000/2017/pierwszekroki/DSC05331.JPG'),
(448, 'https://www.zsi.kielce.pl/wp-content/uploads/photo-gallery/0000/2017/pierwszekroki/DSC05330.JPG'),
(449, 'https://www.zsi.kielce.pl/wp-content/uploads/photo-gallery/0000/2017/pierwszekroki/DSC05333.JPG'),
(450, 'https://www.zsi.kielce.pl/wp-content/uploads/photo-gallery/0000/2017/pierwszekroki/DSC05332.JPG'),
(451, 'https://www.zsi.kielce.pl/wp-content/uploads/photo-gallery/0000/2017/pierwszekroki/DSC05336.JPG'),
(452, 'https://www.zsi.kielce.pl/wp-content/uploads/photo-gallery/0000/2017/pierwszekroki/DSC05334.JPG'),
(453, 'https://www.zsi.kielce.pl/wp-content/uploads/photo-gallery/0000/2017/pierwszekroki/DSC05344.JPG'),
(454, 'https://www.zsi.kielce.pl/wp-content/uploads/2017/09/IMG_20170920_093244567-1.jpg'),
(455, 'https://www.zsi.kielce.pl/wp-content/uploads/2017/09/IMG_3241.jpg'),
(456, 'https://www.zsi.kielce.pl/wp-content/uploads/photo-gallery/0000/2017/gramiejska/IMG_3241.jpg'),
(457, 'https://www.zsi.kielce.pl/wp-content/uploads/photo-gallery/0000/2017/gramiejskawyniki/image1_(2).jpeg'),
(458, 'https://www.zsi.kielce.pl/wp-content/uploads/photo-gallery/0000/2017/gramiejskawyniki/image1_(3).jpeg'),
(459, 'https://www.zsi.kielce.pl/wp-content/uploads/photo-gallery/0000/2017/gramiejskawyniki/image1_(1).jpeg'),
(460, 'https://www.zsi.kielce.pl/wp-content/uploads/photo-gallery/0000/2017/gramiejskawyniki/image4.jpeg'),
(461, 'https://www.zsi.kielce.pl/wp-content/uploads/photo-gallery/0000/2017/gramiejskawyniki/image3.jpeg'),
(462, 'https://www.zsi.kielce.pl/wp-content/uploads/photo-gallery/0000/2017/gramiejskawyniki/image7.jpeg'),
(463, 'https://www.zsi.kielce.pl/wp-content/uploads/photo-gallery/0000/2017/gramiejskawyniki/image8.jpeg'),
(464, 'https://www.zsi.kielce.pl/wp-content/uploads/photo-gallery/0000/2017/gramiejskawyniki/image5.jpeg'),
(465, 'https://www.zsi.kielce.pl/wp-content/uploads/photo-gallery/0000/2017/gramiejskawyniki/image6.jpeg'),
(466, 'https://www.zsi.kielce.pl/wp-content/uploads/photo-gallery/0000/2017/gramiejskawyniki/image9.jpeg'),
(467, 'https://www.zsi.kielce.pl/wp-content/uploads/photo-gallery/0000/2017/gramiejskawyniki/image10.jpeg'),
(468, 'https://www.zsi.kielce.pl/wp-content/uploads/2017/11/DSC06995.jpg'),
(469, 'https://www.zsi.kielce.pl/wp-content/uploads/2017/12/01.jpg'),
(470, 'https://www.zsi.kielce.pl/wp-content/uploads/2018/02/IMG_3033-1.jpg'),
(471, 'https://www.zsi.kielce.pl/wp-content/uploads/2018/03/IMG_3479.jpg'),
(472, 'https://www.zsi.kielce.pl/wp-content/uploads/2018/03/IMG_3466-300x200.jpg'),
(473, 'https://www.zsi.kielce.pl/wp-content/uploads/2018/03/IMG_20180323_201226034.jpg'),
(474, 'https://www.zsi.kielce.pl/wp-content/uploads/2018/04/na-stron%C4%99.jpg'),
(475, 'https://www.zsi.kielce.pl/wp-content/uploads/photo-gallery/0000/2018/HACKATHON/IMG_1377.JPG'),
(476, 'https://www.zsi.kielce.pl/wp-content/uploads/photo-gallery/0000/2018/HACKATHON/IMG_1388.JPG'),
(477, 'https://www.zsi.kielce.pl/wp-content/uploads/photo-gallery/0000/2018/HACKATHON/IMG_1404.JPG'),
(478, 'https://www.zsi.kielce.pl/wp-content/uploads/photo-gallery/0000/2018/HACKATHON/IMG_1401.JPG'),
(479, 'https://www.zsi.kielce.pl/wp-content/uploads/2018/05/IMG_4053-2.jpg'),
(480, 'https://www.zsi.kielce.pl/wp-content/uploads/photo-gallery/0000/2018/slawomir/IMG_4037.JPG'),
(481, 'https://www.zsi.kielce.pl/wp-content/uploads/photo-gallery/0000/2018/slawomir/IMG_4053.JPG'),
(482, 'https://www.zsi.kielce.pl/wp-content/uploads/photo-gallery/0000/2018/slawomir/IMG_4032.JPG'),
(483, 'https://www.zsi.kielce.pl/wp-content/uploads/photo-gallery/0000/2018/slawomir/IMG_4058.JPG'),
(484, 'https://www.zsi.kielce.pl/wp-content/uploads/photo-gallery/0000/2018/slawomir/IMG_4059.JPG'),
(485, 'https://www.zsi.kielce.pl/wp-content/uploads/2018/06/DSC03029.jpg'),
(486, 'https://www.zsi.kielce.pl/wp-content/uploads/2018/06/DSC03029.jpg'),
(487, 'https://www.zsi.kielce.pl/wp-content/uploads/photo-gallery/0000/2018/dziensportu/DSC03029.JPG'),
(488, 'https://www.zsi.kielce.pl/wp-content/uploads/photo-gallery/0000/2018/dziensportu/DSC03007.JPG'),
(489, 'https://www.zsi.kielce.pl/wp-content/uploads/photo-gallery/0000/2018/dziensportu/DSC03024.JPG'),
(490, 'https://www.zsi.kielce.pl/wp-content/uploads/photo-gallery/0000/2018/dziensportu/DSC03020.JPG'),
(491, 'https://www.zsi.kielce.pl/wp-content/uploads/photo-gallery/0000/2018/dziensportu/DSC03023.JPG'),
(492, 'https://www.zsi.kielce.pl/wp-content/uploads/photo-gallery/0000/2018/dziensportu/DSC03023.JPG'),
(493, 'https://www.zsi.kielce.pl/wp-content/uploads/photo-gallery/0000/2018/dziensportu/DSC03022.JPG'),
(494, 'https://www.zsi.kielce.pl/wp-content/uploads/photo-gallery/0000/2018/dziensportu/DSC03017.JPG'),
(495, 'https://www.zsi.kielce.pl/wp-content/uploads/photo-gallery/0000/2018/dziensportu/DSC03019.JPG'),
(496, 'https://www.zsi.kielce.pl/wp-content/uploads/photo-gallery/0000/2018/dziensportu/DSC02988.JPG'),
(497, 'https://www.zsi.kielce.pl/wp-content/uploads/2018/06/35525267_1289105027888376_3189425345161854976_n.jpg'),
(498, 'https://www.zsi.kielce.pl/wp-content/uploads/2018/06/IMG_1414-200x300.jpg'),
(499, 'https://www.zsi.kielce.pl/wp-content/uploads/2018/06/IMG_1416-200x300.jpg'),
(500, 'https://www.zsi.kielce.pl/wp-content/uploads/2018/09/IMG_4706-wybrane.jpg'),
(501, 'https://www.zsi.kielce.pl/wp-content/uploads/2018/09/IMG_4699-wybrane.jpg'),
(502, 'https://www.zsi.kielce.pl/wp-content/uploads/2018/09/42872918_2060594764004533_8615376371943735296_n-300x225.jpg'),
(503, 'https://www.zsi.kielce.pl/wp-content/uploads/2018/10/43161265_2069027766494566_5263501795845472256_n.jpg'),
(504, 'https://www.zsi.kielce.pl/wp-content/uploads/2018/10/43169815_2069028259827850_7090681377208664064_n-300x225.jpg'),
(505, 'https://www.zsi.kielce.pl/wp-content/uploads/2018/10/43193448_2069028023161207_3261952980420657152_n-300x225.jpg'),
(506, 'https://www.zsi.kielce.pl/wp-content/uploads/2018/10/43169815_2069028259827850_7090681377208664064_n-300x225.jpg'),
(507, 'https://www.zsi.kielce.pl/wp-content/uploads/2018/10/43127792_2069028156494527_4269394794431643648_n-300x225.jpg'),
(508, 'https://www.zsi.kielce.pl/wp-content/uploads/2018/10/43123993_2069027936494549_8109077007091892224_n-300x225.jpg'),
(509, 'https://www.zsi.kielce.pl/wp-content/uploads/2018/10/IMG_6247-ma%C5%82e.jpg'),
(510, 'https://www.zsi.kielce.pl/wp-content/uploads/2018/10/IMG_6241-ma%C5%82e-300x200.jpg'),
(511, 'https://www.zsi.kielce.pl/wp-content/uploads/2018/11/DsXEIJ4XoAABLGI.jpg'),
(512, 'https://www.zsi.kielce.pl/wp-content/uploads/2018/11/DsXEKnEXcAEn6Nm-150x150.jpg'),
(513, 'https://www.zsi.kielce.pl/wp-content/uploads/2018/12/to.jpg'),
(514, 'https://www.zsi.kielce.pl/wp-content/uploads/2018/12/DSC_0465-300x200.jpg'),
(515, 'https://www.zsi.kielce.pl/wp-content/uploads/2018/12/DSC_0512-300x200.jpg'),
(516, 'https://www.zsi.kielce.pl/wp-content/uploads/2018/12/DSC_0294-300x200.jpg'),
(517, 'https://www.zsi.kielce.pl/wp-content/uploads/2019/01/IMG_6475.jpg'),
(518, 'https://www.zsi.kielce.pl/wp-content/uploads/2019/01/IMG_6478-300x200.jpg'),
(519, 'https://www.zsi.kielce.pl/wp-content/uploads/2019/01/IMG_6479-300x200.jpg'),
(520, 'https://www.zsi.kielce.pl/wp-content/uploads/2019/01/IMG_6482-300x200.jpg'),
(521, 'https://www.zsi.kielce.pl/wp-content/uploads/2019/01/IMG_6488-300x200.jpg'),
(522, 'https://www.zsi.kielce.pl/wp-content/uploads/2019/01/IMG_6499-300x200.jpg'),
(523, 'https://www.zsi.kielce.pl/wp-content/uploads/2019/03/53567271_2286845194712821_1770933656022417408_n-300x225.jpg'),
(524, 'https://www.zsi.kielce.pl/wp-content/uploads/2019/04/IMG_6985.jpg'),
(525, 'https://www.zsi.kielce.pl/wp-content/uploads/2019/04/IMG_6888-300x200.jpg'),
(526, 'https://www.zsi.kielce.pl/wp-content/uploads/2019/04/IMG_6902-300x200.jpg'),
(527, 'https://www.zsi.kielce.pl/wp-content/uploads/2019/04/IMG_6902-300x200.jpg'),
(528, 'https://www.zsi.kielce.pl/wp-content/uploads/2019/04/IMG_6921-300x200.jpg'),
(529, 'https://www.zsi.kielce.pl/wp-content/uploads/2019/04/IMG_6929-300x200.jpg'),
(530, 'https://www.zsi.kielce.pl/wp-content/uploads/photo-gallery/0000/2019/sport/IMG_7327.JPG'),
(531, 'https://www.zsi.kielce.pl/wp-content/uploads/photo-gallery/0000/2019/sport/IMG_7328.JPG'),
(532, 'https://www.zsi.kielce.pl/wp-content/uploads/photo-gallery/0000/2019/sport/IMG_7330.JPG	'),
(533, 'https://www.zsi.kielce.pl/wp-content/uploads/photo-gallery/0000/2019/sport/IMG_7335.JPG'),
(534, 'https://www.zsi.kielce.pl/wp-content/uploads/photo-gallery/0000/2019/sport/IMG_7338.JPG'),
(535, 'https://www.zsi.kielce.pl/wp-content/uploads/photo-gallery/0000/2019/dzien_otwarty/IMG_1984.JPG'),
(536, 'https://www.zsi.kielce.pl/wp-content/uploads/photo-gallery/0000/2019/dzien_otwarty/IMG_2042.JPG'),
(537, 'https://www.zsi.kielce.pl/wp-content/uploads/photo-gallery/0000/2019/dzien_otwarty/IMG_2054.JPG'),
(538, 'https://www.zsi.kielce.pl/wp-content/uploads/photo-gallery/0000/2019/dzien_otwarty/IMG_1984.JPG'),
(539, 'https://www.zsi.kielce.pl/wp-content/uploads/2019/09/18r.jpg'),
(540, 'https://www.zsi.kielce.pl/wp-content/uploads/photo-gallery/0000/2019/rozpoczecieroku/18r.jpg'),
(541, 'https://www.zsi.kielce.pl/wp-content/uploads/photo-gallery/0000/2019/rozpoczecieroku/17r.jpg'),
(542, 'https://www.zsi.kielce.pl/wp-content/uploads/2019/09/IMG_8236-300x200.jpg'),
(543, 'https://www.zsi.kielce.pl/wp-content/uploads/2019/09/IMG_8236-300x200.jpg'),
(544, 'https://www.zsi.kielce.pl/wp-content/uploads/2019/09/IMG_8242-300x200.jpg'),
(545, 'https://www.zsi.kielce.pl/wp-content/uploads/2019/09/IMG_8247-300x200.jpg'),
(546, 'https://www.zsi.kielce.pl/wp-content/uploads/photo-gallery/0000/2019/ets/1569677214317.JPEG'),
(547, 'https://www.zsi.kielce.pl/wp-content/uploads/photo-gallery/0000/2019/ets/1569677216637.JPEG'),
(548, 'https://www.zsi.kielce.pl/wp-content/uploads/photo-gallery/0000/2019/ets/1569677211231.JPEG'),
(549, 'https://www.zsi.kielce.pl/wp-content/uploads/photo-gallery/0000/2019/ets/1569677213092.JPEG'),
(550, 'https://www.zsi.kielce.pl/wp-content/uploads/photo-gallery/0000/2019/ets/1569677214945.JPEG'),
(551, 'https://www.zsi.kielce.pl/wp-content/uploads/photo-gallery/0000/2019/ets/1569677803578.JPEG'),
(552, 'https://www.zsi.kielce.pl/wp-content/uploads/photo-gallery/0000/2019/ets/1569678161111.JPEG'),
(553, 'https://www.zsi.kielce.pl/wp-content/uploads/2019/10/IMG-20191007-WA0003-300x225.jpg'),
(554, 'https://www.zsi.kielce.pl/wp-content/uploads/2019/10/IMG-20191007-WA0002-300x225.jpg'),
(555, 'https://www.zsi.kielce.pl/wp-content/uploads/2019/10/MG_9205.jpg'),
(556, 'https://www.zsi.kielce.pl/wp-content/uploads/2019/10/MG_9157-300x200.jpg'),
(557, 'https://www.zsi.kielce.pl/wp-content/uploads/2019/10/MG_9160-300x200.jpg'),
(558, 'https://www.zsi.kielce.pl/wp-content/uploads/2019/10/MG_9197-300x200.jpg'),
(559, 'https://www.zsi.kielce.pl/wp-content/uploads/2019/10/MG_9198-300x200.jpg'),
(560, 'https://www.zsi.kielce.pl/wp-content/uploads/2019/10/MG_9199-300x200.jpg'),
(561, 'https://www.zsi.kielce.pl/wp-content/uploads/2019/10/MG_9204-300x200.jpg'),
(562, 'https://www.zsi.kielce.pl/wp-content/uploads/2019/10/MG_9205.jpg'),
(563, 'https://www.zsi.kielce.pl/wp-content/uploads/2019/10/MG_9207-300x200.jpg'),
(564, 'https://www.zsi.kielce.pl/wp-content/uploads/2019/11/IMG_8849-300x200.jpg'),
(565, 'https://www.zsi.kielce.pl/wp-content/uploads/2019/11/IMG_8944-300x200.jpg'),
(566, 'https://www.zsi.kielce.pl/wp-content/uploads/2019/12/DSC_0851-300x200.jpg'),
(567, 'https://www.zsi.kielce.pl/wp-content/uploads/2019/12/DSC_0888-300x200.jpg'),
(568, 'https://www.zsi.kielce.pl/wp-content/uploads/2019/12/IMG_9008-300x200.jpg'),
(569, 'https://www.zsi.kielce.pl/wp-content/uploads/2019/12/IMG_9056-300x200.jpg'),
(570, 'https://www.zsi.kielce.pl/wp-content/uploads/2020/01/a.jpg'),
(571, 'https://www.zsi.kielce.pl/wp-content/uploads/2020/04/powodzenia-team-zsi-informatyk.jpg'),
(572, 'https://www.zsi.kielce.pl/wp-content/uploads/2020/11/Tydzie%C5%84-przedsi%C4%99biorczo%C5%9Bci-2020.png'),
(573, 'https://www.zsi.kielce.pl/wp-content/uploads/2021/01/IMG_20210126_101149_1.jpg'),
(574, 'https://www.zsi.kielce.pl/wp-content/uploads/2021/06/131319714_4286648871399100_361883471830696030_n.jpg'),
(575, 'https://www.zsi.kielce.pl/wp-content/uploads/2021/09/DSC7537.jpg'),
(576, 'https://www.zsi.kielce.pl/wp-content/uploads/2021/10/247329818_944339302960370_5553214305243822110_n.jpg'),
(577, 'https://www.zsi.kielce.pl/wp-content/uploads/2022/02/273049030_5060024857394827_7383638104945346502_n.jpg'),
(578, 'https://www.zsi.kielce.pl/wp-content/uploads/2022/04/2.jpg'),
(579, 'https://www.zsi.kielce.pl/wp-content/uploads/2022/04/3.jpg'),
(580, 'https://www.zsi.kielce.pl/wp-content/uploads/2022/04/IMG_1375.jpg'),
(581, 'https://www.zsi.kielce.pl/wp-content/uploads/2022/04/IMG_1388.jpg'),
(582, 'https://www.zsi.kielce.pl/wp-content/uploads/2022/04/IMG_1389.jpg'),
(583, 'https://www.zsi.kielce.pl/wp-content/uploads/2022/04/IMG_1394.jpg'),
(584, 'https://www.zsi.kielce.pl/wp-content/uploads/2022/04/IMG_1412.jpg'),
(585, 'https://www.zsi.kielce.pl/wp-content/uploads/2022/04/IMG_1414.jpg'),
(586, 'https://www.zsi.kielce.pl/wp-content/uploads/2022/04/IMG_1416.jpg'),
(587, 'https://www.zsi.kielce.pl/wp-content/uploads/2022/04/IMG_1418.jpg'),
(588, 'https://www.zsi.kielce.pl/wp-content/uploads/2022/09/14.jpg'),
(589, 'https://www.zsi.kielce.pl/wp-content/uploads/2022/09/1.jpg'),
(590, 'https://www.zsi.kielce.pl/wp-content/uploads/2022/09/5.jpg'),
(591, 'https://www.zsi.kielce.pl/wp-content/uploads/2022/09/13.jpg'),
(592, 'https://www.zsi.kielce.pl/wp-content/uploads/2022/09/14.jpg'),
(593, 'https://www.zsi.kielce.pl/wp-content/uploads/2022/09/miniatura.jpg'),
(594, 'https://www.zsi.kielce.pl/wp-content/uploads/2022/09/305745645_450918660404272_170431737480192598_n.jpg'),
(595, 'https://www.zsi.kielce.pl/wp-content/uploads/2022/09/305839875_450918680404270_3367231055657893372_n.jpg'),
(596, 'https://www.zsi.kielce.pl/wp-content/uploads/2022/09/305964959_450918670404271_8722339969681128650_n.jpg'),
(597, 'https://www.zsi.kielce.pl/wp-content/uploads/2022/09/308625163_612966977088257_6983842361378251000_n.jpg'),
(598, 'https://www.zsi.kielce.pl/wp-content/uploads/2022/10/309951171_1023522961651443_8327373588071745586_n-1-1024x660.jpg'),
(599, 'https://www.zsi.kielce.pl/wp-content/uploads/2022/10/310435520_1466217223847034_3201379617816263807_n-1-1024x722.jpg'),
(600, 'https://www.zsi.kielce.pl/wp-content/uploads/2022/10/DSC_5664-1024x683.jpg'),
(601, 'https://www.zsi.kielce.pl/wp-content/uploads/2022/10/DSC_5700-1024x683.jpg'),
(602, 'https://www.zsi.kielce.pl/wp-content/uploads/2022/10/DSC_5703-1024x683.jpg'),
(603, 'https://www.zsi.kielce.pl/wp-content/uploads/2022/10/DSC_5717-1024x683.jpg'),
(604, 'https://www.zsi.kielce.pl/wp-content/uploads/2022/10/DSC_5722-1024x683.jpg'),
(605, 'https://www.zsi.kielce.pl/wp-content/uploads/2022/10/DSC_5972-683x1024.jpg'),
(606, 'https://www.zsi.kielce.pl/wp-content/uploads/2022/10/DSC_5998-1024x683.jpg'),
(607, 'https://www.zsi.kielce.pl/wp-content/uploads/2022/10/DSC_5705-1024x683.jpg'),
(608, 'https://www.zsi.kielce.pl/wp-content/uploads/2022/10/DSC_6002-1024x683.jpg'),
(609, 'https://www.zsi.kielce.pl/wp-content/uploads/2022/10/DSC_6008-1024x683.jpg'),
(610, 'https://www.zsi.kielce.pl/wp-content/uploads/2022/10/DSC_6000-1024x683.jpg'),
(611, 'https://www.zsi.kielce.pl/wp-content/uploads/2022/10/DSC_6002-1024x683.jpg'),
(612, 'https://www.zsi.kielce.pl/wp-content/uploads/2022/10/DSC_6008-1024x683.jpg'),
(613, 'https://www.zsi.kielce.pl/wp-content/uploads/2022/10/DSC_6010-1024x683.jpg'),
(614, 'https://www.zsi.kielce.pl/wp-content/uploads/2022/10/DSC_6011-1024x683.jpg'),
(615, 'https://www.zsi.kielce.pl/wp-content/uploads/2022/10/DSC_6014-1024x683.jpg'),
(616, 'https://www.zsi.kielce.pl/wp-content/uploads/2022/10/DSC_6015-1024x683.jpg'),
(617, 'https://www.zsi.kielce.pl/wp-content/uploads/2022/10/DSC_57221-1024x683.jpg'),
(618, 'https://www.zsi.kielce.pl/wp-content/uploads/2022/10/IMG_1693-1024x683.jpg'),
(619, 'https://www.zsi.kielce.pl/wp-content/uploads/2022/10/IMG_1694-1024x683.jpg'),
(620, 'https://www.zsi.kielce.pl/wp-content/uploads/2022/10/308703804_663980398439665_9157136130856230037_n.jpg'),
(621, 'https://www.zsi.kielce.pl/wp-content/uploads/2022/11/314492824_495533845942753_2525947688183394845_n.jpg'),
(622, 'https://www.zsi.kielce.pl/wp-content/uploads/2022/11/313414278_495534222609382_502416493113241611_n.jpg'),
(623, 'https://www.zsi.kielce.pl/wp-content/uploads/2022/11/313984597_495533935942744_8191794725888410814_n.jpg'),
(624, 'https://www.zsi.kielce.pl/wp-content/uploads/2022/11/314407690_495534102609394_2693491647289523312_n.jpg'),
(625, 'https://www.zsi.kielce.pl/wp-content/uploads/2022/11/314492824_495533845942753_2525947688183394845_n.jpg'),
(626, 'https://www.zsi.kielce.pl/wp-content/uploads/2022/11/316617499_832044721375156_1532581798600309488_n.jpg'),
(627, 'https://www.zsi.kielce.pl/wp-content/uploads/2023/01/327140291_2441831842635805_8573438514682046391_n.jpg'),
(628, 'https://www.zsi.kielce.pl/wp-content/uploads/2023/01/327466731_1147273669263425_4865896855763262717_n.jpg'),
(629, 'https://www.zsi.kielce.pl/wp-content/uploads/2023/01/327599767_732176238222023_1130518179083779953_n-1024x673.jpg'),
(630, 'https://www.zsi.kielce.pl/wp-content/uploads/2023/01/327140291_2441831842635805_8573438514682046391_n.jpg'),
(631, 'https://www.zsi.kielce.pl/wp-content/uploads/2023/01/326582488_866130941338975_7842298899954436457_n.jpg'),
(632, 'https://www.zsi.kielce.pl/wp-content/uploads/2023/01/DSC_7179-1024x683.jpg'),
(633, 'https://www.zsi.kielce.pl/wp-content/uploads/2023/01/326582488_866130941338975_7842298899954436457_n.jpg'),
(634, 'https://www.zsi.kielce.pl/wp-content/uploads/2023/01/DSC_7317-1024x683.jpg'),
(635, 'https://www.zsi.kielce.pl/wp-content/uploads/2023/01/DSC_72362-1024x683.jpg'),
(636, 'https://www.zsi.kielce.pl/wp-content/uploads/2023/01/DSC_7239-683x1024.jpg'),
(637, 'https://www.zsi.kielce.pl/wp-content/uploads/2023/03/337238226_577154481145406_8850113246063441322_n2.jpg'),
(638, 'https://www.zsi.kielce.pl/wp-content/uploads/2023/03/336909848_3523146304675051_8362799598757437808_n-1024x768.jpg'),
(639, 'https://www.zsi.kielce.pl/wp-content/uploads/2023/03/336894016_1277056239832916_7059768994711502754_n-1024x768.jpg'),
(640, 'https://www.zsi.kielce.pl/wp-content/uploads/2023/03/337238226_577154481145406_8850113246063441322_n.jpg'),
(641, 'https://www.zsi.kielce.pl/wp-content/uploads/2023/04/IMG_20230414_181800.jpg'),
(642, 'https://www.zsi.kielce.pl/wp-content/uploads/photo-gallery/2023histhack/IMG_20230414_181800.jpg?bwg=1681637613');

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `imagesteachers`
--

CREATE TABLE `imagesteachers` (
  `id` int(11) NOT NULL,
  `id_images` int(11) NOT NULL,
  `id_teachers` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Zrzut danych tabeli `imagesteachers`
--

INSERT INTO `imagesteachers` (`id`, `id_images`, `id_teachers`) VALUES
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
(83, 360, 13),
(84, 360, 28),
(85, 360, 47),
(108, 365, 28),
(110, 367, 5),
(109, 367, 47),
(56, 369, 28),
(61, 371, 28),
(107, 377, 28),
(77, 384, 5),
(78, 384, 6),
(80, 384, 15),
(79, 384, 23),
(74, 384, 28),
(73, 384, 38),
(76, 384, 47),
(75, 384, 69),
(100, 405, 6),
(99, 405, 28),
(89, 410, 28),
(40, 413, 29),
(41, 414, 29),
(42, 417, 1),
(90, 418, 1),
(81, 421, 29),
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
(70, 468, 28),
(82, 493, 28),
(102, 500, 28),
(103, 500, 47),
(62, 518, 28),
(63, 518, 29),
(87, 529, 28),
(88, 529, 29),
(86, 529, 47),
(37, 534, 28),
(38, 536, 1),
(39, 537, 1),
(60, 542, 28),
(101, 546, 28),
(55, 550, 28),
(29, 559, 28),
(104, 564, 13),
(27, 572, 13),
(28, 573, 28),
(93, 581, 6),
(91, 581, 28),
(94, 581, 47),
(92, 581, 71),
(97, 586, 6),
(96, 586, 28),
(98, 586, 47),
(68, 603, 6),
(67, 603, 28),
(69, 603, 47),
(71, 617, 28),
(95, 618, 28),
(30, 632, 28),
(31, 632, 47),
(33, 632, 54),
(32, 632, 64),
(34, 632, 71),
(66, 634, 6),
(64, 634, 13),
(65, 634, 54);

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `teachers`
--

CREATE TABLE `teachers` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Zrzut danych tabeli `teachers`
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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Zrzut danych tabeli `users`
--

INSERT INTO `users` (`id`, `login`, `password`, `token`) VALUES
(1, 'admin', 'XohImNooBHFR0OVvjcYpJ3NgPQ1qq73WKhHvch0VQtg=', 'cLSq0WBCpRpObIR9ZMEKFDTlN3mQrxhq3ptTvT2E5WM=');

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
-- AUTO_INCREMENT dla zrzuconych tabel
--

--
-- AUTO_INCREMENT dla tabeli `images`
--
ALTER TABLE `images`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=643;

--
-- AUTO_INCREMENT dla tabeli `imagesteachers`
--
ALTER TABLE `imagesteachers`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=112;

--
-- AUTO_INCREMENT dla tabeli `teachers`
--
ALTER TABLE `teachers`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=75;

--
-- AUTO_INCREMENT dla tabeli `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Ograniczenia dla zrzutów tabel
--

--
-- Ograniczenia dla tabeli `imagesteachers`
--
ALTER TABLE `imagesteachers`
  ADD CONSTRAINT `imagesteachers_ibfk_1` FOREIGN KEY (`id_images`) REFERENCES `images` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `imagesteachers_ibfk_2` FOREIGN KEY (`id_teachers`) REFERENCES `teachers` (`id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
