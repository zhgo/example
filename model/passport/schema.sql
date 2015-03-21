CREATE TABLE `passport_avatar` (
  `AvatarID` int(10) unsigned NOT NULL AUTO_INCREMENT COMMENT '',
  `UserID` int(10) unsigned NOT NULL COMMENT '',
  `CreationTime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '',
  `ServerID` tinyint(3) unsigned NOT NULL COMMENT '',
  `FileSize` int(10) unsigned NOT NULL COMMENT '',
  `FilePath` char(40) NOT NULL COMMENT '',
  PRIMARY KEY (`AvatarID`)
) ENGINE=InnoDB AUTO_INCREMENT=1000000 DEFAULT CHARSET=utf8 COMMENT='';

CREATE TABLE `passport_live` (
  `LiveID` char(16) NOT NULL COMMENT '',
  `UserID` int(10) unsigned NOT NULL COMMENT '',
  `CreationTime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '',
  `Source` smallint(5) unsigned NOT NULL DEFAULT '1' COMMENT '',
  `Email` varchar(128) NOT NULL COMMENT '',
  `Nickname` varchar(128) NOT NULL COMMENT '',
  PRIMARY KEY (`LiveID`),
  KEY `UserID` (`UserID`)
) ENGINE=InnoDB AUTO_INCREMENT=1000000 DEFAULT CHARSET=utf8 COMMENT='';

CREATE TABLE `passport_login` (
  `LoginID` int(10) unsigned NOT NULL AUTO_INCREMENT COMMENT '',
  `UserID` int(10) unsigned NOT NULL COMMENT '',
  `CreationTime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '',
  `Source` smallint(5) unsigned NOT NULL DEFAULT '1' COMMENT '',
  `LoginIp` bigint(20) unsigned NOT NULL COMMENT '',
  `AnonymousID` char(32) NOT NULL COMMENT '',
  `AuthCode` char(32) NOT NULL COMMENT '',
  `UserAgent` varchar(128) NOT NULL COMMENT '',
  PRIMARY KEY (`LoginID`),
  KEY `UserID` (`UserID`)
) ENGINE=InnoDB AUTO_INCREMENT=1000000 DEFAULT CHARSET=utf8 COMMENT='';

CREATE TABLE `passport_native` (
  `NativeID` int(10) unsigned NOT NULL AUTO_INCREMENT COMMENT '',
  `UserID` int(10) unsigned NOT NULL COMMENT '',
  `CreationTime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '',
  `Source` smallint(5) unsigned NOT NULL DEFAULT '1' COMMENT '',
  `Type` enum('Email','MobileNo','Keyword') NOT NULL COMMENT '',
  `Symbol` varchar(64) NOT NULL COMMENT '',
  `Password` char(32) NOT NULL COMMENT '',
  PRIMARY KEY (`NativeID`),
  UNIQUE KEY `TypeSymbol` (`Type`,`Symbol`),
  KEY `UserID` (`UserID`)
) ENGINE=InnoDB AUTO_INCREMENT=1000000 DEFAULT CHARSET=utf8 COMMENT='';

CREATE TABLE `passport_user` (
  `UserID` int(10) unsigned NOT NULL AUTO_INCREMENT COMMENT '',
  `CreationTime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '',
  `BirthYear` year(4) NOT NULL COMMENT '',
  `Gender` enum('Secret','Male','Female') NOT NULL DEFAULT 'Secret' COMMENT '',
  `Nickname` varchar(16) NOT NULL COMMENT '',
  PRIMARY KEY (`UserID`)
) ENGINE=InnoDB AUTO_INCREMENT=1000000 DEFAULT CHARSET=utf8 COMMENT='';

