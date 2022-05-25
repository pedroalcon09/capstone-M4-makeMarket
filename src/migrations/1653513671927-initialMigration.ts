import { MigrationInterface, QueryRunner } from "typeorm";

export class initialMigration1653513671927 implements MigrationInterface {
    name = 'initialMigration1653513671927'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "buys" DROP COLUMN "status"`);
        await queryRunner.query(`ALTER TABLE "buys" ADD "paid" boolean NOT NULL DEFAULT false`);
        await queryRunner.query(`ALTER TABLE "buys" ALTER COLUMN "grade" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "buys" ALTER COLUMN "feedback" DROP NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "buys" ALTER COLUMN "feedback" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "buys" ALTER COLUMN "grade" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "buys" DROP COLUMN "paid"`);
        await queryRunner.query(`ALTER TABLE "buys" ADD "status" character varying NOT NULL`);
    }

}
