/*
  Warnings:

  - Added the required column `tps_id` to the `event_volunteers` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `event_volunteers` ADD COLUMN `tps_id` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `event_volunteers` ADD CONSTRAINT `event_volunteers_tps_id_fkey` FOREIGN KEY (`tps_id`) REFERENCES `tps`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
