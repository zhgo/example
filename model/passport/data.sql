SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

INSERT INTO `passport_native` (`NativeID`, `UserID`, `CreationTime`, `Source`, `Password`, `Type`, `Symbol`) VALUES
(1, 1, '2008-12-17 07:15:06', '1', '', 'email', 'anonymous@examples.com'),
(2, 2, '2009-02-11 04:16:52', '1', '', 'email', 'webmaster@examples.com');

INSERT INTO `passport_user` (`UserID`, `BirthYear`, `Gender`, `Nickname`) VALUES
(1, 1982, 'Male', 'Anonymous'),
(2, 1982, 'Male', 'Liudng');
