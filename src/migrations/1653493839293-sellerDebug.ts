import { MigrationInterface, QueryRunner } from "typeorm";

export class sellerDebug1653493839293 implements MigrationInterface {
    name = 'sellerDebug1653493839293'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "product" DROP CONSTRAINT "FK_d5cac481d22dacaf4d53f900a3f"`);
        await queryRunner.query(`ALTER TABLE "favorites_buyer_id_buyer" DROP CONSTRAINT "FK_38fe00ca043372d99871fcb82c2"`);
        await queryRunner.query(`ALTER TABLE "favorites_product_id_product" DROP CONSTRAINT "FK_0835ad5f15a93f5a7e11b3a3f0c"`);
        await queryRunner.query(`ALTER TABLE "product" RENAME COLUMN "sellerId" TO "sellerIdId"`);
        await queryRunner.query(`ALTER TABLE "seller" ALTER COLUMN "totalSales" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "seller" ALTER COLUMN "grade" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "product" ADD CONSTRAINT "FK_16567b8c8bae8b8907f94db739c" FOREIGN KEY ("sellerIdId") REFERENCES "seller"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "favorites_buyer_id_buyer" ADD CONSTRAINT "FK_38fe00ca043372d99871fcb82c2" FOREIGN KEY ("buyerId") REFERENCES "buyer"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "favorites_product_id_product" ADD CONSTRAINT "FK_0835ad5f15a93f5a7e11b3a3f0c" FOREIGN KEY ("productId") REFERENCES "product"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "favorites_product_id_product" DROP CONSTRAINT "FK_0835ad5f15a93f5a7e11b3a3f0c"`);
        await queryRunner.query(`ALTER TABLE "favorites_buyer_id_buyer" DROP CONSTRAINT "FK_38fe00ca043372d99871fcb82c2"`);
        await queryRunner.query(`ALTER TABLE "product" DROP CONSTRAINT "FK_16567b8c8bae8b8907f94db739c"`);
        await queryRunner.query(`ALTER TABLE "seller" ALTER COLUMN "grade" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "seller" ALTER COLUMN "totalSales" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "product" RENAME COLUMN "sellerIdId" TO "sellerId"`);
        await queryRunner.query(`ALTER TABLE "favorites_product_id_product" ADD CONSTRAINT "FK_0835ad5f15a93f5a7e11b3a3f0c" FOREIGN KEY ("productId") REFERENCES "product"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "favorites_buyer_id_buyer" ADD CONSTRAINT "FK_38fe00ca043372d99871fcb82c2" FOREIGN KEY ("buyerId") REFERENCES "buyer"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "product" ADD CONSTRAINT "FK_d5cac481d22dacaf4d53f900a3f" FOREIGN KEY ("sellerId") REFERENCES "seller"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
