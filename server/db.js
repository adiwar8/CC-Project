import { createPool } from 'mysql2/promise';

export const pool = createPool({
    host: 'web-db.czwhh69hr7aj.ap-southeast-2.rds.amazonaws.com',
    port: process.env.PORT,
    user: 'admin',
    password: 'abcd1234',
    database: 'todolist',
})

