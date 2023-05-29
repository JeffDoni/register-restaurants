-- CreateTable
CREATE TABLE `Restaurante` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(191) NOT NULL,
    `documento` VARCHAR(191) NOT NULL,
    `tipo` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Horario` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `diaSemana` VARCHAR(191) NOT NULL,
    `horaAbertura` VARCHAR(191) NOT NULL,
    `horaFechamento` VARCHAR(191) NOT NULL,
    `restauranteId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Horario` ADD CONSTRAINT `Horario_restauranteId_fkey` FOREIGN KEY (`restauranteId`) REFERENCES `Restaurante`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
