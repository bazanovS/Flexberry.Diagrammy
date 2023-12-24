




CREATE TABLE АктПриемки (
 primaryKey UUID NOT NULL,
 НомерАкта INT NULL,
 ДатаПриемки TIMESTAMP(3) NULL,
 Сотрудники UUID NOT NULL,
 Поставщики UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE ТЧАктаПриемки (
 primaryKey UUID NOT NULL,
 Количество INT NULL,
 СкладскоеМесто UUID NOT NULL,
 Товар UUID NOT NULL,
 АктПриемки UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE ОтпускМатериала (
 primaryKey UUID NOT NULL,
 ДатаПроводки TIMESTAMP(3) NULL,
 СкладскоеМесто UUID NOT NULL,
 Сотрудники UUID NOT NULL,
 Заказ UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE СкладскоеМесто (
 primaryKey UUID NOT NULL,
 НомерМеста INT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE Заказ (
 primaryKey UUID NOT NULL,
 НомерЗаказа INT NULL,
 ФИОЗаказчика VARCHAR(255) NULL,
 АдресЗаказа VARCHAR(255) NULL,
 СпособПолучения VARCHAR(9) NULL,
 ДатаПолучения TIMESTAMP(3) NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE ТЧЗаказа (
 primaryKey UUID NOT NULL,
 Количество INT NULL,
 Товар UUID NOT NULL,
 Заказ UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE Поставщики (
 primaryKey UUID NOT NULL,
 КодПоставщика INT NULL,
 Наименование VARCHAR(255) NULL,
 НомерТС VARCHAR(255) NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE Сотрудники (
 primaryKey UUID NOT NULL,
 ФИОСотрудника VARCHAR(255) NULL,
 Должность VARCHAR(255) NULL,
 Табель INT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE Товар (
 primaryKey UUID NOT NULL,
 КодМатериала INT NULL,
 Материал VARCHAR(255) NULL,
 Цена DOUBLE PRECISION NULL,
 Количество INT NULL,
 ЕстьВНаличии VARCHAR(3) NULL,
 СкладскоеМесто UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE STORMNETLOCKDATA (
 LockKey VARCHAR(300) NOT NULL,
 UserName VARCHAR(300) NOT NULL,
 LockDate TIMESTAMP(3) NULL,
 PRIMARY KEY (LockKey));


CREATE TABLE STORMSETTINGS (
 primaryKey UUID NOT NULL,
 Module VARCHAR(1000) NULL,
 Name VARCHAR(255) NULL,
 Value TEXT NULL,
 "User" VARCHAR(255) NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE STORMAdvLimit (
 primaryKey UUID NOT NULL,
 "User" VARCHAR(255) NULL,
 Published BOOLEAN NULL,
 Module VARCHAR(255) NULL,
 Name VARCHAR(255) NULL,
 Value TEXT NULL,
 HotKeyData INT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE STORMFILTERSETTING (
 primaryKey UUID NOT NULL,
 Name VARCHAR(255) NOT NULL,
 DataObjectView VARCHAR(255) NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE STORMWEBSEARCH (
 primaryKey UUID NOT NULL,
 Name VARCHAR(255) NOT NULL,
 "Order" INT NOT NULL,
 PresentView VARCHAR(255) NOT NULL,
 DetailedView VARCHAR(255) NOT NULL,
 FilterSetting_m0 UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE STORMFILTERDETAIL (
 primaryKey UUID NOT NULL,
 Caption VARCHAR(255) NOT NULL,
 DataObjectView VARCHAR(255) NOT NULL,
 ConnectMasterProp VARCHAR(255) NOT NULL,
 OwnerConnectProp VARCHAR(255) NULL,
 FilterSetting_m0 UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE STORMFILTERLOOKUP (
 primaryKey UUID NOT NULL,
 DataObjectType VARCHAR(255) NOT NULL,
 Container VARCHAR(255) NULL,
 ContainerTag VARCHAR(255) NULL,
 FieldsToView VARCHAR(255) NULL,
 FilterSetting_m0 UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE UserSetting (
 primaryKey UUID NOT NULL,
 AppName VARCHAR(256) NULL,
 UserName VARCHAR(512) NULL,
 UserGuid UUID NULL,
 ModuleName VARCHAR(1024) NULL,
 ModuleGuid UUID NULL,
 SettName VARCHAR(256) NULL,
 SettGuid UUID NULL,
 SettLastAccessTime TIMESTAMP(3) NULL,
 StrVal VARCHAR(256) NULL,
 TxtVal TEXT NULL,
 IntVal INT NULL,
 BoolVal BOOLEAN NULL,
 GuidVal UUID NULL,
 DecimalVal DECIMAL(20,10) NULL,
 DateTimeVal TIMESTAMP(3) NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE ApplicationLog (
 primaryKey UUID NOT NULL,
 Category VARCHAR(64) NULL,
 EventId INT NULL,
 Priority INT NULL,
 Severity VARCHAR(32) NULL,
 Title VARCHAR(256) NULL,
 Timestamp TIMESTAMP(3) NULL,
 MachineName VARCHAR(32) NULL,
 AppDomainName VARCHAR(512) NULL,
 ProcessId VARCHAR(256) NULL,
 ProcessName VARCHAR(512) NULL,
 ThreadName VARCHAR(512) NULL,
 Win32ThreadId VARCHAR(128) NULL,
 Message VARCHAR(2500) NULL,
 FormattedMessage TEXT NULL,
 PRIMARY KEY (primaryKey));



 ALTER TABLE АктПриемки ADD CONSTRAINT FK96a348ff0dd82a8e693a83f05e7d7bb16df138da FOREIGN KEY (Сотрудники) REFERENCES Сотрудники; 
CREATE INDEX Index96a348ff0dd82a8e693a83f05e7d7bb16df138da on АктПриемки (Сотрудники); 

 ALTER TABLE АктПриемки ADD CONSTRAINT FKbdd553adce84b9ebcbc0f3752a3cba7cf0b567da FOREIGN KEY (Поставщики) REFERENCES Поставщики; 
CREATE INDEX Indexbdd553adce84b9ebcbc0f3752a3cba7cf0b567da on АктПриемки (Поставщики); 

 ALTER TABLE ТЧАктаПриемки ADD CONSTRAINT FKb68f54c9e1f19d4c746a983cf7797d278e0926f2 FOREIGN KEY (СкладскоеМесто) REFERENCES СкладскоеМесто; 
CREATE INDEX Indexb68f54c9e1f19d4c746a983cf7797d278e0926f2 on ТЧАктаПриемки (СкладскоеМесто); 

 ALTER TABLE ТЧАктаПриемки ADD CONSTRAINT FK4552d39001bbe7382c407713e0c81c030608498e FOREIGN KEY (Товар) REFERENCES Товар; 
CREATE INDEX Index4552d39001bbe7382c407713e0c81c030608498e on ТЧАктаПриемки (Товар); 

 ALTER TABLE ТЧАктаПриемки ADD CONSTRAINT FK9e1aacb51157e4a61e68f65c8e44c13dcb11991b FOREIGN KEY (АктПриемки) REFERENCES АктПриемки; 
CREATE INDEX Index9e1aacb51157e4a61e68f65c8e44c13dcb11991b on ТЧАктаПриемки (АктПриемки); 

 ALTER TABLE ОтпускМатериала ADD CONSTRAINT FKb571e27eba3bdce2ea4a2673cb31ab6d940b10f7 FOREIGN KEY (СкладскоеМесто) REFERENCES СкладскоеМесто; 
CREATE INDEX Indexb571e27eba3bdce2ea4a2673cb31ab6d940b10f7 on ОтпускМатериала (СкладскоеМесто); 

 ALTER TABLE ОтпускМатериала ADD CONSTRAINT FK48c855b7557233f26ca6b6c90e43a34e295ae2e6 FOREIGN KEY (Сотрудники) REFERENCES Сотрудники; 
CREATE INDEX Index48c855b7557233f26ca6b6c90e43a34e295ae2e6 on ОтпускМатериала (Сотрудники); 

 ALTER TABLE ОтпускМатериала ADD CONSTRAINT FK63fea698cc077cb538ab8ac9a1f4fae9e5e23644 FOREIGN KEY (Заказ) REFERENCES Заказ; 
CREATE INDEX Index63fea698cc077cb538ab8ac9a1f4fae9e5e23644 on ОтпускМатериала (Заказ); 

 ALTER TABLE ТЧЗаказа ADD CONSTRAINT FK1d0ab5900221b90ec2ff8936b89ac55099a3dba3 FOREIGN KEY (Товар) REFERENCES Товар; 
CREATE INDEX Index1d0ab5900221b90ec2ff8936b89ac55099a3dba3 on ТЧЗаказа (Товар); 

 ALTER TABLE ТЧЗаказа ADD CONSTRAINT FK090982b8c80507134833346fcb869c56de17b6b8 FOREIGN KEY (Заказ) REFERENCES Заказ; 
CREATE INDEX Index090982b8c80507134833346fcb869c56de17b6b8 on ТЧЗаказа (Заказ); 

 ALTER TABLE Товар ADD CONSTRAINT FK2a032665c1f4f60bb0d8b8d56c7b97a11dbde49d FOREIGN KEY (СкладскоеМесто) REFERENCES СкладскоеМесто; 
CREATE INDEX Index2a032665c1f4f60bb0d8b8d56c7b97a11dbde49d on Товар (СкладскоеМесто); 

 ALTER TABLE STORMWEBSEARCH ADD CONSTRAINT FKc4378e39870eb056aec84088683297a01d2a6200 FOREIGN KEY (FilterSetting_m0) REFERENCES STORMFILTERSETTING; 

 ALTER TABLE STORMFILTERDETAIL ADD CONSTRAINT FK921d16269835017e2a0d0e29ad6fb175454a70d0 FOREIGN KEY (FilterSetting_m0) REFERENCES STORMFILTERSETTING; 

 ALTER TABLE STORMFILTERLOOKUP ADD CONSTRAINT FKce38ef0db3f01a53acaa49fed8853fb941ad47ba FOREIGN KEY (FilterSetting_m0) REFERENCES STORMFILTERSETTING; 

