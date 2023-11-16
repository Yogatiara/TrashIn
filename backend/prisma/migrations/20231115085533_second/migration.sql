-- DropForeignKey
ALTER TABLE `event_images` DROP FOREIGN KEY `event_images_event_volunteer_id_fkey`;

-- DropForeignKey
ALTER TABLE `tps` DROP FOREIGN KEY `tps_user_id_fkey`;

-- DropForeignKey
ALTER TABLE `tps_images` DROP FOREIGN KEY `tps_images_tps_id_fkey`;

-- AlterTable
ALTER TABLE `event_volunteers` MODIFY `start_at` DATE NOT NULL,
    MODIFY `end_at` DATE NOT NULL;

-- AlterTable
ALTER TABLE `tps` MODIFY `user_id` INTEGER NULL;

-- AddForeignKey
ALTER TABLE `tps` ADD CONSTRAINT `tps_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `tps_images` ADD CONSTRAINT `tps_images_tps_id_fkey` FOREIGN KEY (`tps_id`) REFERENCES `tps`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `event_images` ADD CONSTRAINT `event_images_event_volunteer_id_fkey` FOREIGN KEY (`event_volunteer_id`) REFERENCES `event_volunteers`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
