import pool from '../db/db-mariadb.js';


export const loginHandler = async (req, res) => {

    const {email,password} = req.body
    let conn;
     try {
        conn = await pool.getConnection();
        const result = await conn.query("SELECT id,name,email,role from products.user where email=? and password=?",[email,password]);
        return res.status(200).send(result[0])
     } catch (err) {
        console.error(err)
     } finally {
        if (conn) return conn.end();
     }
   }

export const fetchAll = async (req, res) => {
    
        let conn;
     try {
        conn = await pool.getConnection();
        const result = await conn.query("SELECT id,name,email,role from products.user");
        const data = result.map(item => item)
        return res.status(200).send(data)
     } catch (err) {
        console.error(err)
     } finally {
        if (conn) return conn.end();
     }
   }

export const fetchById = async (req, res) => {
    
        let conn;
     try {
        conn = await pool.getConnection();
        const result = await conn.query("SELECT name,email,role from products.user where id=?",[req.params.id]);
        return res.status(200).send(result[0])
     } catch (err) {
        console.error(err)
     } finally {
        if (conn) return conn.end();
     }
   }
