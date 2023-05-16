-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema zara
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema zara
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `zara` DEFAULT CHARACTER SET utf8 ;
USE `zara` ;

-- -----------------------------------------------------
-- Table `zara`.`products`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `zara`.`products` (
  `productID` INT NOT NULL AUTO_INCREMENT,
  `gender` VARCHAR(45) NOT NULL,
  `type` VARCHAR(45) NOT NULL,
  `name` VARCHAR(45) NOT NULL,
  `colors` VARCHAR(45) NOT NULL,
  `price` INT NOT NULL,
  `sizes` VARCHAR(45) NOT NULL,
  `des` TEXT NOT NULL,
  PRIMARY KEY (`productID`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `zara`.`img`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `zara`.`img` (
  `idimg` INT NOT NULL AUTO_INCREMENT,
  `link` TEXT NULL,
  `products_productID` INT NOT NULL,
  PRIMARY KEY (`idimg`, `products_productID`),
  INDEX `fk_img_products_idx` (`products_productID` ASC) VISIBLE,
  CONSTRAINT `fk_img_products`
    FOREIGN KEY (`products_productID`)
    REFERENCES `zara`.`products` (`productID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `zara`.`users`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `zara`.`users` (
  `idusers` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `surname` VARCHAR(45) NOT NULL,
  `email` VARCHAR(45) NOT NULL,
  `password` TEXT NOT NULL,
  PRIMARY KEY (`idusers`),
  UNIQUE INDEX `email_UNIQUE` (`email` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `zara`.`cart`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `zara`.`cart` (
  `idcart` INT NOT NULL AUTO_INCREMENT,
  `products_productID` INT NOT NULL,
  `users_idusers` INT NOT NULL,
  PRIMARY KEY (`idcart`, `products_productID`, `users_idusers`),
  INDEX `fk_cart_products1_idx` (`products_productID` ASC) VISIBLE,
  INDEX `fk_cart_users1_idx` (`users_idusers` ASC) VISIBLE,
  CONSTRAINT `fk_cart_products1`
    FOREIGN KEY (`products_productID`)
    REFERENCES `zara`.`products` (`productID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_cart_users1`
    FOREIGN KEY (`users_idusers`)
    REFERENCES `zara`.`users` (`idusers`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
