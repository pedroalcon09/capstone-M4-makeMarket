import { MigrationInterface, QueryRunner } from "typeorm";

export class addSellerIdProduct1653338968936 implements MigrationInterface {
    name = 'addSellerIdProduct1653338968936'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "product" DROP CONSTRAINT "FK_d5cac481d22dacaf4d53f900a3f"`);
        await queryRunner.query(`ALTER TABLE "product" RENAME COLUMN "sellerId" TO "sellerIdId"`);
        await queryRunner.query(`ALTER TABLE "product" ADD CONSTRAINT "FK_16567b8c8bae8b8907f94db739c" FOREIGN KEY ("sellerIdId") REFERENCES "seller"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "product" DROP CONSTRAINT "FK_16567b8c8bae8b8907f94db739c"`);
        await queryRunner.query(`ALTER TABLE "product" RENAME COLUMN "sellerIdId" TO "sellerId"`);
        await queryRunner.query(`ALTER TABLE "product" ADD CONSTRAINT "FK_d5cac481d22dacaf4d53f900a3f" FOREIGN KEY ("sellerId") REFERENCES "seller"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
