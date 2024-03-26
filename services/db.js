import mysql from 'mysql'

const conn = mysql.createConnection({
    host: '127.0.0.1',
    user: process.env.USER,
    password: process.env.PASSWORD,
    port: process.env.PORT,
    database: 'testdb',
    socketPath: '/var/run/mysqld/mysqld.sock'
})

export default conn