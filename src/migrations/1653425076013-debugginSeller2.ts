import { MigrationInterface, QueryRunner } from "typeorm";

export class debugginSeller21653425076013 implements MigrationInterface {
    name = 'debugginSeller21653425076013'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "product" DROP CONSTRAINT "FK_16567b8c8bae8b8907f94db739c"`);
        await queryRunner.query(`ALTER TABLE "product" DROP COLUMN "sellerIdId"`);
        await queryRunner.query(`ALTER TABLE "product" ADD "sellerId" uuid`);
        await queryRunner.query(`ALTER TABLE "seller" ALTER COLUMN "totalSales" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "product" DROP COLUMN "price"`);
        await queryRunner.query(`ALTER TABLE "product" ADD "price" double precision NOT NULL`);
        await queryRunner.query(`ALTER TABLE "product" ADD CONSTRAINT "FK_d5cac481d22dacaf4d53f900a3f" FOREIGN KEY ("sellerId") REFERENCES "seller"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "product" DROP CONSTRAINT "FK_d5cac481d22dacaf4d53f900a3f"`);
        await queryRunner.query(`ALTER TABLE "product" DROP COLUMN "price"`);
        await queryRunner.query(`ALTER TABLE "product" ADD "price" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "seller" ALTER COLUMN "totalSales" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "product" DROP COLUMN "sellerId"`);
        await queryRunner.query(`ALTER TABLE "product" ADD "sellerIdId" uuid`);
        await queryRunner.query(`ALTER TABLE "product" ADD CONSTRAINT "FK_16567b8c8bae8b8907f94db739c" FOREIGN KEY ("sellerIdId") REFERENCES "seller"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
