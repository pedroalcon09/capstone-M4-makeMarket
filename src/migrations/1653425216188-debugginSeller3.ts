import { MigrationInterface, QueryRunner } from "typeorm";

export class debugginSeller31653425216188 implements MigrationInterface {
    name = 'debugginSeller31653425216188'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "seller" ALTER COLUMN "grade" DROP NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "seller" ALTER COLUMN "grade" SET NOT NULL`);
    }

}
