import pool from '../config/database.js';

export const getWelcome = (req, res) => {
    res.json({
        message: 'hello dockerized api',
        status: 'running',
    });
};

export const getHealth = async (req, res) => {
    try {
        const result = await pool.query('SELECT NOW() AS now');

        res.json({
            status: 'ok',
            database: 'connected',
            timestamp: result.rows[0].now,
        });
    } catch (error) {
        res.status(503).json({
            status: 'error',
            database: 'disconnected',
            message: 'Unable to reach the database',
        });
    }
};