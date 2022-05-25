import { MigrationInterface, QueryRunner } from "typeorm";

export class mergeFavouritesRoutes1653443197454 implements MigrationInterface {
    name = 'mergeFavouritesRoutes1653443197454'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "favorites_buyer_id_buyer" ("favoritesId" uuid NOT NULL, "buyerId" uuid NOT NULL, CONSTRAINT "PK_897639a7bcf3296e5b4f7ee2922" PRIMARY KEY ("favoritesId", "buyerId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_11577528d42462ec1eab024afd" ON "favorites_buyer_id_buyer" ("favoritesId") `);
        await queryRunner.query(`CREATE INDEX "IDX_38fe00ca043372d99871fcb82c" ON "favorites_buyer_id_buyer" ("buyerId") `);
        await queryRunner.query(`CREATE TABLE "favorites_product_id_product" ("favoritesId" uuid NOT NULL, "productId" uuid NOT NULL, CONSTRAINT "PK_592175d9897c967c45531da6f14" PRIMARY KEY ("favoritesId", "productId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_eea5546d6d40998ad883818ba3" ON "favorites_product_id_product" ("favoritesId") `);
        await queryRunner.query(`CREATE INDEX "IDX_0835ad5f15a93f5a7e11b3a3f0" ON "favorites_product_id_product" ("productId") `);
        await queryRunner.query(`ALTER TABLE "favorites_buyer_id_buyer" ADD CONSTRAINT "FK_11577528d42462ec1eab024afd0" FOREIGN KEY ("favoritesId") REFERENCES "favorites"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "favorites_buyer_id_buyer" ADD CONSTRAINT "FK_38fe00ca043372d99871fcb82c2" FOREIGN KEY ("buyerId") REFERENCES "buyer"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "favorites_product_id_product" ADD CONSTRAINT "FK_eea5546d6d40998ad883818ba36" FOREIGN KEY ("favoritesId") REFERENCES "favorites"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "favorites_product_id_product" ADD CONSTRAINT "FK_0835ad5f15a93f5a7e11b3a3f0c" FOREIGN KEY ("productId") REFERENCES "product"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "favorites_product_id_product" DROP CONSTRAINT "FK_0835ad5f15a93f5a7e11b3a3f0c"`);
        await queryRunner.query(`ALTER TABLE "favorites_product_id_product" DROP CONSTRAINT "FK_eea5546d6d40998ad883818ba36"`);
        await queryRunner.query(`ALTER TABLE "favorites_buyer_id_buyer" DROP CONSTRAINT "FK_38fe00ca043372d99871fcb82c2"`);
        await queryRunner.query(`ALTER TABLE "favorites_buyer_id_buyer" DROP CONSTRAINT "FK_11577528d42462ec1eab024afd0"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_0835ad5f15a93f5a7e11b3a3f0"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_eea5546d6d40998ad883818ba3"`);
        await queryRunner.query(`DROP TABLE "favorites_product_id_product"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_38fe00ca043372d99871fcb82c"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_11577528d42462ec1eab024afd"`);
        await queryRunner.query(`DROP TABLE "favorites_buyer_id_buyer"`);
    }

}
