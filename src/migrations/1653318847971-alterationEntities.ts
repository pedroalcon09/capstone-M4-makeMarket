import { MigrationInterface, QueryRunner } from "typeorm";

export class alterationEntities1653318847971 implements MigrationInterface {
    name = 'alterationEntities1653318847971'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "product_buys_buys" ("productId" uuid NOT NULL, "buysId" uuid NOT NULL, CONSTRAINT "PK_ba9e358cfe3891ffdd88482f43c" PRIMARY KEY ("productId", "buysId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_097aed3188ae8cbc25bd8940f9" ON "product_buys_buys" ("productId") `);
        await queryRunner.query(`CREATE INDEX "IDX_7575627b3cfc991ceef86890cb" ON "product_buys_buys" ("buysId") `);
        await queryRunner.query(`ALTER TABLE "category" ALTER COLUMN "created_at" SET DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "category" ALTER COLUMN "updated_at" SET DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "seller" ALTER COLUMN "created_at" SET DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "seller" ALTER COLUMN "updated_at" SET DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "product" ALTER COLUMN "created_at" SET DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "product" ALTER COLUMN "updated_at" SET DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "product_buys_buys" ADD CONSTRAINT "FK_097aed3188ae8cbc25bd8940f92" FOREIGN KEY ("productId") REFERENCES "product"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "product_buys_buys" ADD CONSTRAINT "FK_7575627b3cfc991ceef86890cb8" FOREIGN KEY ("buysId") REFERENCES "buys"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "product_buys_buys" DROP CONSTRAINT "FK_7575627b3cfc991ceef86890cb8"`);
        await queryRunner.query(`ALTER TABLE "product_buys_buys" DROP CONSTRAINT "FK_097aed3188ae8cbc25bd8940f92"`);
        await queryRunner.query(`ALTER TABLE "product" ALTER COLUMN "updated_at" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "product" ALTER COLUMN "created_at" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "seller" ALTER COLUMN "updated_at" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "seller" ALTER COLUMN "created_at" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "category" ALTER COLUMN "updated_at" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "category" ALTER COLUMN "created_at" DROP DEFAULT`);
        await queryRunner.query(`DROP INDEX "public"."IDX_7575627b3cfc991ceef86890cb"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_097aed3188ae8cbc25bd8940f9"`);
        await queryRunner.query(`DROP TABLE "product_buys_buys"`);
    }

}
