import pool from "./pool.js";

const dbQuery = async (query, params = []) => {
    const connection = await pool.getConnection();
    try {
      const result = await connection.query(query, params);
      return result;
    } finally {
      connection.release();
    }
  };

  export default dbQuery;