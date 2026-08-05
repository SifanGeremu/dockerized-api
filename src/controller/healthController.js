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

export const getTime = (req, res) => {
    const now = new Date();
    res.json({
        serverTime: now.toISOString(),
        uptimeSeconds: process.uptime(),
    });
};

export const getDbVersion = async (req, res) => {
    try {
        const result = await pool.query("SELECT version() as version");
        res.json({
            database: 'postgres',
            version: result.rows[0].version,
        });
    } catch (error) {
        res.status(503).json({
            database: 'postgres',
            error: 'unable to fetch version',
        });
    }
};