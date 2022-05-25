import { MigrationInterface, QueryRunner } from "typeorm";

export class debugFavourites1653451368762 implements MigrationInterface {
    name = 'debugFavourites1653451368762'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "product" DROP CONSTRAINT "FK_16567b8c8bae8b8907f94db739c"`);
        await queryRunner.query(`ALTER TABLE "product" RENAME COLUMN "sellerIdId" TO "sellerId"`);
        await queryRunner.query(`CREATE TABLE "product_buys_buys" ("productId" uuid NOT NULL, "buysId" uuid NOT NULL, CONSTRAINT "PK_ba9e358cfe3891ffdd88482f43c" PRIMARY KEY ("productId", "buysId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_097aed3188ae8cbc25bd8940f9" ON "product_buys_buys" ("productId") `);
        await queryRunner.query(`CREATE INDEX "IDX_7575627b3cfc991ceef86890cb" ON "product_buys_buys" ("buysId") `);
        await queryRunner.query(`CREATE TABLE "favorites_buyer_buyer" ("favoritesId" uuid NOT NULL, "buyerId" uuid NOT NULL, CONSTRAINT "PK_47515c216f9c1333a8f6f1e6e1e" PRIMARY KEY ("favoritesId", "buyerId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_5cc8551e26dbafbfc6a93178b8" ON "favorites_buyer_buyer" ("favoritesId") `);
        await queryRunner.query(`CREATE INDEX "IDX_a90822967e4d9e479f8bc9208e" ON "favorites_buyer_buyer" ("buyerId") `);
        await queryRunner.query(`CREATE TABLE "favorites_product_product" ("favoritesId" uuid NOT NULL, "productId" uuid NOT NULL, CONSTRAINT "PK_d83fe8bf1fc6b8160527bb4aa83" PRIMARY KEY ("favoritesId", "productId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_1eb276688b60fdb8f6d099f428" ON "favorites_product_product" ("favoritesId") `);
        await queryRunner.query(`CREATE INDEX "IDX_064fd6e3c9bdea1a99e2c23014" ON "favorites_product_product" ("productId") `);
        await queryRunner.query(`ALTER TABLE "seller" ALTER COLUMN "totalSales" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "seller" ALTER COLUMN "grade" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "product" ADD CONSTRAINT "FK_d5cac481d22dacaf4d53f900a3f" FOREIGN KEY ("sellerId") REFERENCES "seller"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "product_buys_buys" ADD CONSTRAINT "FK_097aed3188ae8cbc25bd8940f92" FOREIGN KEY ("productId") REFERENCES "product"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "product_buys_buys" ADD CONSTRAINT "FK_7575627b3cfc991ceef86890cb8" FOREIGN KEY ("buysId") REFERENCES "buys"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "favorites_buyer_buyer" ADD CONSTRAINT "FK_5cc8551e26dbafbfc6a93178b83" FOREIGN KEY ("favoritesId") REFERENCES "favorites"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "favorites_buyer_buyer" ADD CONSTRAINT "FK_a90822967e4d9e479f8bc9208ee" FOREIGN KEY ("buyerId") REFERENCES "buyer"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "favorites_product_product" ADD CONSTRAINT "FK_1eb276688b60fdb8f6d099f4289" FOREIGN KEY ("favoritesId") REFERENCES "favorites"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "favorites_product_product" ADD CONSTRAINT "FK_064fd6e3c9bdea1a99e2c23014b" FOREIGN KEY ("productId") REFERENCES "product"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "favorites_product_product" DROP CONSTRAINT "FK_064fd6e3c9bdea1a99e2c23014b"`);
        await queryRunner.query(`ALTER TABLE "favorites_product_product" DROP CONSTRAINT "FK_1eb276688b60fdb8f6d099f4289"`);
        await queryRunner.query(`ALTER TABLE "favorites_buyer_buyer" DROP CONSTRAINT "FK_a90822967e4d9e479f8bc9208ee"`);
        await queryRunner.query(`ALTER TABLE "favorites_buyer_buyer" DROP CONSTRAINT "FK_5cc8551e26dbafbfc6a93178b83"`);
        await queryRunner.query(`ALTER TABLE "product_buys_buys" DROP CONSTRAINT "FK_7575627b3cfc991ceef86890cb8"`);
        await queryRunner.query(`ALTER TABLE "product_buys_buys" DROP CONSTRAINT "FK_097aed3188ae8cbc25bd8940f92"`);
        await queryRunner.query(`ALTER TABLE "product" DROP CONSTRAINT "FK_d5cac481d22dacaf4d53f900a3f"`);
        await queryRunner.query(`ALTER TABLE "seller" ALTER COLUMN "grade" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "seller" ALTER COLUMN "totalSales" DROP NOT NULL`);
        await queryRunner.query(`DROP INDEX "public"."IDX_064fd6e3c9bdea1a99e2c23014"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_1eb276688b60fdb8f6d099f428"`);
        await queryRunner.query(`DROP TABLE "favorites_product_product"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_a90822967e4d9e479f8bc9208e"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_5cc8551e26dbafbfc6a93178b8"`);
        await queryRunner.query(`DROP TABLE "favorites_buyer_buyer"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_7575627b3cfc991ceef86890cb"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_097aed3188ae8cbc25bd8940f9"`);
        await queryRunner.query(`DROP TABLE "product_buys_buys"`);
        await queryRunner.query(`ALTER TABLE "product" RENAME COLUMN "sellerId" TO "sellerIdId"`);
        await queryRunner.query(`ALTER TABLE "product" ADD CONSTRAINT "FK_16567b8c8bae8b8907f94db739c" FOREIGN KEY ("sellerIdId") REFERENCES "seller"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
