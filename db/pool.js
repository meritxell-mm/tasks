import mariadb from 'mariadb'

const pool = mariadb.createPool({
    host: 'localhost',
    user: 'task_db_user',
    password: 'task_pwd',
    database: 'tasks_db',
    connectionLimit: 5,
});

export default pool;
