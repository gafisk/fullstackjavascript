import { Sequelize } from "sequelize";

const db = new Sequelize('n_crud_db', 'root', '', {
  host: 'localhost',
  dialect: "mysql"
})

export default db;