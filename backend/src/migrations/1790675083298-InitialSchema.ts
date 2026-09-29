import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialSchema1790675083298 implements MigrationInterface {
    name = 'InitialSchema1790675083298'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "username"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ADD "username" character varying NOT NULL`);
    }

}
