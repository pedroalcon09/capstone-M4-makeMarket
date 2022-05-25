import { MigrationInterface, QueryRunner } from "typeorm";

export class initialMigration1653061518678 implements MigrationInterface {
    name = 'initialMigration1653061518678'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "seller" ("id" uuid NOT NULL, "name" character varying NOT NULL, "email" character varying NOT NULL, "password" character varying NOT NULL, "totalSales" integer NOT NULL, "grade" integer NOT NULL, "created_at" TIMESTAMP NOT NULL, "updated_at" TIMESTAMP NOT NULL, CONSTRAINT "PK_36445a9c6e794945a4a4a8d3c9d" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "product" ("id" uuid NOT NULL, "name" character varying NOT NULL, "price" integer NOT NULL, "description" character varying NOT NULL, "stock" integer NOT NULL, "url_image" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL, "updated_at" TIMESTAMP NOT NULL, "sellerId" uuid, CONSTRAINT "PK_bebc9158e480b949565b4dc7a82" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "buys" ("id" uuid NOT NULL, "status" character varying NOT NULL, "grade" integer NOT NULL, "created_at" TIMESTAMP NOT NULL, "feedback" character varying NOT NULL, CONSTRAINT "PK_34ecbce508fa8a98d0f23d9372a" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "buyer" ("id" uuid NOT NULL, "name" character varying NOT NULL, "email" character varying NOT NULL, "password" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL, "updated_at" TIMESTAMP NOT NULL, CONSTRAINT "PK_0480fc3c7289846a31b8e1bc503" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "favorites" ("id" uuid NOT NULL, CONSTRAINT "PK_890818d27523748dd36a4d1bdc8" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "buys_buyer_buyer" ("buysId" uuid NOT NULL, "buyerId" uuid NOT NULL, CONSTRAINT "PK_237c7b402e377689049148e58ea" PRIMARY KEY ("buysId", "buyerId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_93f4962b559c6cab572b0d4441" ON "buys_buyer_buyer" ("buysId") `);
        await queryRunner.query(`CREATE INDEX "IDX_c0776841bc320d0f87844ed809" ON "buys_buyer_buyer" ("buyerId") `);
        await queryRunner.query(`CREATE TABLE "buys_product_product" ("buysId" uuid NOT NULL, "productId" uuid NOT NULL, CONSTRAINT "PK_23cbd9cf6087118d91663fd0270" PRIMARY KEY ("buysId", "productId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_618cdda761a44d9a687ae160a6" ON "buys_product_product" ("buysId") `);
        await queryRunner.query(`CREATE INDEX "IDX_f95b6d78cd0091c563d0bce8ed" ON "buys_product_product" ("productId") `);
        await queryRunner.query(`CREATE TABLE "buyer_buys_buys" ("buyerId" uuid NOT NULL, "buysId" uuid NOT NULL, CONSTRAINT "PK_d26c45a772943526c20ddb116d9" PRIMARY KEY ("buyerId", "buysId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_5756dcd51c020f2b3565e520fa" ON "buyer_buys_buys" ("buyerId") `);
        await queryRunner.query(`CREATE INDEX "IDX_a36548b64a47a9c12a2e37d7a6" ON "buyer_buys_buys" ("buysId") `);
        await queryRunner.query(`CREATE TABLE "favorites_buyer_buyer" ("favoritesId" uuid NOT NULL, "buyerId" uuid NOT NULL, CONSTRAINT "PK_47515c216f9c1333a8f6f1e6e1e" PRIMARY KEY ("favoritesId", "buyerId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_5cc8551e26dbafbfc6a93178b8" ON "favorites_buyer_buyer" ("favoritesId") `);
        await queryRunner.query(`CREATE INDEX "IDX_a90822967e4d9e479f8bc9208e" ON "favorites_buyer_buyer" ("buyerId") `);
        await queryRunner.query(`CREATE TABLE "favorites_product_product" ("favoritesId" uuid NOT NULL, "productId" uuid NOT NULL, CONSTRAINT "PK_d83fe8bf1fc6b8160527bb4aa83" PRIMARY KEY ("favoritesId", "productId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_1eb276688b60fdb8f6d099f428" ON "favorites_product_product" ("favoritesId") `);
        await queryRunner.query(`CREATE INDEX "IDX_064fd6e3c9bdea1a99e2c23014" ON "favorites_product_product" ("productId") `);
        await queryRunner.query(`ALTER TABLE "product" ADD CONSTRAINT "FK_d5cac481d22dacaf4d53f900a3f" FOREIGN KEY ("sellerId") REFERENCES "seller"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "buys_buyer_buyer" ADD CONSTRAINT "FK_93f4962b559c6cab572b0d44417" FOREIGN KEY ("buysId") REFERENCES "buys"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "buys_buyer_buyer" ADD CONSTRAINT "FK_c0776841bc320d0f87844ed8099" FOREIGN KEY ("buyerId") REFERENCES "buyer"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "buys_product_product" ADD CONSTRAINT "FK_618cdda761a44d9a687ae160a69" FOREIGN KEY ("buysId") REFERENCES "buys"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "buys_product_product" ADD CONSTRAINT "FK_f95b6d78cd0091c563d0bce8edc" FOREIGN KEY ("productId") REFERENCES "product"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "buyer_buys_buys" ADD CONSTRAINT "FK_5756dcd51c020f2b3565e520fa4" FOREIGN KEY ("buyerId") REFERENCES "buyer"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "buyer_buys_buys" ADD CONSTRAINT "FK_a36548b64a47a9c12a2e37d7a6b" FOREIGN KEY ("buysId") REFERENCES "buys"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
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
        await queryRunner.query(`ALTER TABLE "buyer_buys_buys" DROP CONSTRAINT "FK_a36548b64a47a9c12a2e37d7a6b"`);
        await queryRunner.query(`ALTER TABLE "buyer_buys_buys" DROP CONSTRAINT "FK_5756dcd51c020f2b3565e520fa4"`);
        await queryRunner.query(`ALTER TABLE "buys_product_product" DROP CONSTRAINT "FK_f95b6d78cd0091c563d0bce8edc"`);
        await queryRunner.query(`ALTER TABLE "buys_product_product" DROP CONSTRAINT "FK_618cdda761a44d9a687ae160a69"`);
        await queryRunner.query(`ALTER TABLE "buys_buyer_buyer" DROP CONSTRAINT "FK_c0776841bc320d0f87844ed8099"`);
        await queryRunner.query(`ALTER TABLE "buys_buyer_buyer" DROP CONSTRAINT "FK_93f4962b559c6cab572b0d44417"`);
        await queryRunner.query(`ALTER TABLE "product" DROP CONSTRAINT "FK_d5cac481d22dacaf4d53f900a3f"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_064fd6e3c9bdea1a99e2c23014"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_1eb276688b60fdb8f6d099f428"`);
        await queryRunner.query(`DROP TABLE "favorites_product_product"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_a90822967e4d9e479f8bc9208e"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_5cc8551e26dbafbfc6a93178b8"`);
        await queryRunner.query(`DROP TABLE "favorites_buyer_buyer"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_a36548b64a47a9c12a2e37d7a6"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_5756dcd51c020f2b3565e520fa"`);
        await queryRunner.query(`DROP TABLE "buyer_buys_buys"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_f95b6d78cd0091c563d0bce8ed"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_618cdda761a44d9a687ae160a6"`);
        await queryRunner.query(`DROP TABLE "buys_product_product"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_c0776841bc320d0f87844ed809"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_93f4962b559c6cab572b0d4441"`);
        await queryRunner.query(`DROP TABLE "buys_buyer_buyer"`);
        await queryRunner.query(`DROP TABLE "favorites"`);
        await queryRunner.query(`DROP TABLE "buyer"`);
        await queryRunner.query(`DROP TABLE "buys"`);
        await queryRunner.query(`DROP TABLE "product"`);
        await queryRunner.query(`DROP TABLE "seller"`);
    }

}
