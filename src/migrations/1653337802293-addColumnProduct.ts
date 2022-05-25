import { MigrationInterface, QueryRunner } from "typeorm";

export class addColumnProduct1653337802293 implements MigrationInterface {
    name = 'addColumnProduct1653337802293'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "product" ADD "category_id" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "product" DROP COLUMN "category_id"`);
    }

}
