// import {MigrationInterface, QueryRunner} from "typeorm";
//
// export class Cities1645620793888 implements MigrationInterface {
//
//     public async up(queryRunner: QueryRunner): Promise<void> {
//         await queryRunner.query("INSERT INTO shopping_order.city (name, state_id) VALUES ('RIO BRANCO', (SELECT state_id from shopping_order.state where name = 'ACRE'))");
//         await queryRunner.query("INSERT INTO shopping_order.city (name, state_id) VALUES ('MACEIO', (SELECT state_id from shopping_order.state where name = 'ALAGOAS'))");
//         await queryRunner.query("INSERT INTO shopping_order.city (name, state_id) VALUES ('MACAPÁ', (SELECT state_id from shopping_order.state where name = 'AMAPÁ'))");
//         await queryRunner.query("INSERT INTO shopping_order.city (name, state_id) VALUES ('MANAUS', (SELECT state_id from shopping_order.state where name = 'AMAZONAS'))");
//         await queryRunner.query("INSERT INTO shopping_order.city (name, state_id) VALUES ('SALVADOR', (SELECT state_id from shopping_order.state where name = 'BAHIA'))");
//         await queryRunner.query("INSERT INTO shopping_order.city (name, state_id) VALUES ('FORTALEZA', (SELECT state_id from shopping_order.state where name = 'CEARÁ'))");
//         await queryRunner.query("INSERT INTO shopping_order.city (name, state_id) VALUES ('BRASILIA', (SELECT state_id from shopping_order.state where name = 'DISTRITO FEDERAL'))");
//         await queryRunner.query("INSERT INTO shopping_order.city (name, state_id) VALUES ('VITÓRIA', (SELECT state_id from shopping_order.state where name = 'ESPÍRITO SANTO'))");
//         await queryRunner.query("INSERT INTO shopping_order.city (name, state_id) VALUES ('GOIÂNIA', (SELECT state_id from shopping_order.state where name = 'GOIÁS'))");
//         await queryRunner.query("INSERT INTO shopping_order.city (name, state_id) VALUES ('SÃO LUÍS', (SELECT state_id from shopping_order.state where name = 'MARANHÃO'))");
//         await queryRunner.query("INSERT INTO shopping_order.city (name, state_id) VALUES ('CUIABÁ', (SELECT state_id from shopping_order.state where name = 'MATO GROSSO'))");
//         await queryRunner.query("INSERT INTO shopping_order.city (name, state_id) VALUES ('CAMPO GRANDE', (SELECT state_id from shopping_order.state where name = 'MATO GROSSO DO SUL'))");
//         await queryRunner.query("INSERT INTO shopping_order.city (name, state_id) VALUES ('BELO HORIZONTE', (SELECT state_id from shopping_order.state where name = 'MINAS GERAIS'))");
//         await queryRunner.query("INSERT INTO shopping_order.city (name, state_id) VALUES ('BELÉM', (SELECT state_id from shopping_order.state where name = 'PARÁ'))");
//         await queryRunner.query("INSERT INTO shopping_order.city (name, state_id) VALUES ('JOÃO PESSOA', (SELECT state_id from shopping_order.state where name = 'PARAÍBA'))");
//         await queryRunner.query("INSERT INTO shopping_order.city (name, state_id) VALUES ('CURITIBA', (SELECT state_id from shopping_order.state where name = 'PARANÁ'))");
//         await queryRunner.query("INSERT INTO shopping_order.city (name, state_id) VALUES ('RECIFE', (SELECT state_id from shopping_order.state where name = 'PERNAMBUCO'))");
//         await queryRunner.query("INSERT INTO shopping_order.city (name, state_id) VALUES ('TERESINA', (SELECT state_id from shopping_order.state where name = 'PIAUÍ'))");
//         await queryRunner.query("INSERT INTO shopping_order.city (name, state_id) VALUES ('RIO DE JANEIRO', (SELECT state_id from shopping_order.state where name = 'RIO DE JANEIRO'))");
//         await queryRunner.query("INSERT INTO shopping_order.city (name, state_id) VALUES ('NATAL', (SELECT state_id from shopping_order.state where name = 'RIO GRANDE DO NORTE'))");
//         await queryRunner.query("INSERT INTO shopping_order.city (name, state_id) VALUES ('PORTO ALEGRE', (SELECT state_id from shopping_order.state where name = 'RIO GRANDE DO SUL'))");
//         await queryRunner.query("INSERT INTO shopping_order.city (name, state_id) VALUES ('PORTO VELHO', (SELECT state_id from shopping_order.state where name = 'RONDÔNIA'))");
//         await queryRunner.query("INSERT INTO shopping_order.city (name, state_id) VALUES ('BOA VISTA', (SELECT state_id from shopping_order.state where name = 'RORAIMA'))");
//         await queryRunner.query("INSERT INTO shopping_order.city (name, state_id) VALUES ('FLORIANÓPOLIS', (SELECT state_id from shopping_order.state where name = 'SANTA CATARINA'))");
//         await queryRunner.query("INSERT INTO shopping_order.city (name, state_id) VALUES ('SÃO PAULO', (SELECT state_id from shopping_order.state where name = 'SÃO PAULO'))");
//         await queryRunner.query("INSERT INTO shopping_order.city (name, state_id) VALUES ('ARACAJU', (SELECT state_id from shopping_order.state where name = 'SERGIPE'))");
//         await queryRunner.query("INSERT INTO shopping_order.city (name, state_id) VALUES ('PALMAS', (SELECT state_id from shopping_order.state where name = 'TOCANTINS'))");
//     }
//
//     public async down(queryRunner: QueryRunner): Promise<void> {
//         await queryRunner.query("DELETE FROM shopping_order.city");
//     }
//
// }
