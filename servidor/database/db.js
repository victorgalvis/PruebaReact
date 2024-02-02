import { Sequelize } from 'sequelize';

//Se conecta a la base de datos usando sequlize, con los parametros de esta misma "nombre base de datos" "usuario" "constrasena"
const db = new Sequelize('mydb', 'root', '0124', {
    host:'localhost',
    dialect:'mysql'
});
export default db;