import mysql from 'mysql'

const conn = mysql.createConnection({
    host: '127.0.0.1',
    user: 'testuser',
    password: 'testpwd',
    port: '3001',
    database: 'testdb',
    socketPath: '/var/run/mysqld/mysqld.sock'
})

export default conn