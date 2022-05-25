import { MigrationInterface, QueryRunner } from "typeorm";

export class initialMigration1653502918949 implements MigrationInterface {
    name = 'initialMigration1653502918949'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "buyer_favourite_prod_product" ("buyerId" uuid NOT NULL, "productId" uuid NOT NULL, CONSTRAINT "PK_ed97990cf6669c304398a523558" PRIMARY KEY ("buyerId", "productId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_637ce0005a1186af596fdc20b4" ON "buyer_favourite_prod_product" ("buyerId") `);
        await queryRunner.query(`CREATE INDEX "IDX_3a0f19f02ad9e9d29822ea03df" ON "buyer_favourite_prod_product" ("productId") `);
        await queryRunner.query(`ALTER TABLE "buyer_favourite_prod_product" ADD CONSTRAINT "FK_637ce0005a1186af596fdc20b4e" FOREIGN KEY ("buyerId") REFERENCES "buyer"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "buyer_favourite_prod_product" ADD CONSTRAINT "FK_3a0f19f02ad9e9d29822ea03df4" FOREIGN KEY ("productId") REFERENCES "product"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "buyer_favourite_prod_product" DROP CONSTRAINT "FK_3a0f19f02ad9e9d29822ea03df4"`);
        await queryRunner.query(`ALTER TABLE "buyer_favourite_prod_product" DROP CONSTRAINT "FK_637ce0005a1186af596fdc20b4e"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_3a0f19f02ad9e9d29822ea03df"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_637ce0005a1186af596fdc20b4"`);
        await queryRunner.query(`DROP TABLE "buyer_favourite_prod_product"`);
    }

}
