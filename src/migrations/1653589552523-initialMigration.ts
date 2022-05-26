import { MigrationInterface, QueryRunner } from "typeorm";

export class initialMigration1653589552523 implements MigrationInterface {
    name = 'initialMigration1653589552523'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "seller" ("id" uuid NOT NULL, "name" character varying NOT NULL, "email" character varying NOT NULL, "password" character varying NOT NULL, "totalSales" integer, "grade" integer, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_36445a9c6e794945a4a4a8d3c9d" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "product" ("id" uuid NOT NULL, "name" character varying NOT NULL, "price" double precision NOT NULL, "description" character varying NOT NULL, "stock" integer NOT NULL, "url_image" character varying NOT NULL, "category_id" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "sellerIdId" uuid, CONSTRAINT "PK_bebc9158e480b949565b4dc7a82" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "buys" ("id" uuid NOT NULL, "paid" boolean NOT NULL DEFAULT false, "grade" integer, "feedback" character varying, "created_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_34ecbce508fa8a98d0f23d9372a" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "buyer" ("id" uuid NOT NULL, "name" character varying NOT NULL, "email" character varying NOT NULL, "password" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_0480fc3c7289846a31b8e1bc503" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "category" ("id" uuid NOT NULL, "name" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_9c4e4a89e3674fc9f382d733f03" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "product_buys_buys" ("productId" uuid NOT NULL, "buysId" uuid NOT NULL, CONSTRAINT "PK_ba9e358cfe3891ffdd88482f43c" PRIMARY KEY ("productId", "buysId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_097aed3188ae8cbc25bd8940f9" ON "product_buys_buys" ("productId") `);
        await queryRunner.query(`CREATE INDEX "IDX_7575627b3cfc991ceef86890cb" ON "product_buys_buys" ("buysId") `);
        await queryRunner.query(`CREATE TABLE "buyer_favourite_prod_product" ("buyerId" uuid NOT NULL, "productId" uuid NOT NULL, CONSTRAINT "PK_ed97990cf6669c304398a523558" PRIMARY KEY ("buyerId", "productId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_637ce0005a1186af596fdc20b4" ON "buyer_favourite_prod_product" ("buyerId") `);
        await queryRunner.query(`CREATE INDEX "IDX_3a0f19f02ad9e9d29822ea03df" ON "buyer_favourite_prod_product" ("productId") `);
        await queryRunner.query(`CREATE TABLE "buyer_buys_buys" ("buyerId" uuid NOT NULL, "buysId" uuid NOT NULL, CONSTRAINT "PK_d26c45a772943526c20ddb116d9" PRIMARY KEY ("buyerId", "buysId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_5756dcd51c020f2b3565e520fa" ON "buyer_buys_buys" ("buyerId") `);
        await queryRunner.query(`CREATE INDEX "IDX_a36548b64a47a9c12a2e37d7a6" ON "buyer_buys_buys" ("buysId") `);
        await queryRunner.query(`ALTER TABLE "product" ADD CONSTRAINT "FK_16567b8c8bae8b8907f94db739c" FOREIGN KEY ("sellerIdId") REFERENCES "seller"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "product_buys_buys" ADD CONSTRAINT "FK_097aed3188ae8cbc25bd8940f92" FOREIGN KEY ("productId") REFERENCES "product"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "product_buys_buys" ADD CONSTRAINT "FK_7575627b3cfc991ceef86890cb8" FOREIGN KEY ("buysId") REFERENCES "buys"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "buyer_favourite_prod_product" ADD CONSTRAINT "FK_637ce0005a1186af596fdc20b4e" FOREIGN KEY ("buyerId") REFERENCES "buyer"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "buyer_favourite_prod_product" ADD CONSTRAINT "FK_3a0f19f02ad9e9d29822ea03df4" FOREIGN KEY ("productId") REFERENCES "product"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "buyer_buys_buys" ADD CONSTRAINT "FK_5756dcd51c020f2b3565e520fa4" FOREIGN KEY ("buyerId") REFERENCES "buyer"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "buyer_buys_buys" ADD CONSTRAINT "FK_a36548b64a47a9c12a2e37d7a6b" FOREIGN KEY ("buysId") REFERENCES "buys"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "buyer_buys_buys" DROP CONSTRAINT "FK_a36548b64a47a9c12a2e37d7a6b"`);
        await queryRunner.query(`ALTER TABLE "buyer_buys_buys" DROP CONSTRAINT "FK_5756dcd51c020f2b3565e520fa4"`);
        await queryRunner.query(`ALTER TABLE "buyer_favourite_prod_product" DROP CONSTRAINT "FK_3a0f19f02ad9e9d29822ea03df4"`);
        await queryRunner.query(`ALTER TABLE "buyer_favourite_prod_product" DROP CONSTRAINT "FK_637ce0005a1186af596fdc20b4e"`);
        await queryRunner.query(`ALTER TABLE "product_buys_buys" DROP CONSTRAINT "FK_7575627b3cfc991ceef86890cb8"`);
        await queryRunner.query(`ALTER TABLE "product_buys_buys" DROP CONSTRAINT "FK_097aed3188ae8cbc25bd8940f92"`);
        await queryRunner.query(`ALTER TABLE "product" DROP CONSTRAINT "FK_16567b8c8bae8b8907f94db739c"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_a36548b64a47a9c12a2e37d7a6"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_5756dcd51c020f2b3565e520fa"`);
        await queryRunner.query(`DROP TABLE "buyer_buys_buys"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_3a0f19f02ad9e9d29822ea03df"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_637ce0005a1186af596fdc20b4"`);
        await queryRunner.query(`DROP TABLE "buyer_favourite_prod_product"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_7575627b3cfc991ceef86890cb"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_097aed3188ae8cbc25bd8940f9"`);
        await queryRunner.query(`DROP TABLE "product_buys_buys"`);
        await queryRunner.query(`DROP TABLE "category"`);
        await queryRunner.query(`DROP TABLE "buyer"`);
        await queryRunner.query(`DROP TABLE "buys"`);
        await queryRunner.query(`DROP TABLE "product"`);
        await queryRunner.query(`DROP TABLE "seller"`);
    }

}
