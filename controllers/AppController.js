const redisClient = require('../utils/redis');
const dbClient = require('../utils/db');

// Define the AppController class
class AppController {
  // GET /status
  static async getStatus(req, res) {
    const status = {
      redis: redisClient.isAlive(),
      db: dbClient.isAlive(),
    };
    return res.status(200).json(status);
  }

  // GET stats
  static async getStats(req, res) {
    try {
      const users = await dbClient.nbUsers();
      const files = await dbClient.nbFiles();
      const stats = {
        users,
        files,
      };
      return res.status(200).json(stats);
    } catch (error) {
      console.error('Error fetching status:', error);
      return res.status(500).json({ error: 'Failed to fetch stats' });
    }
  }
}

module.exports = AppController;
