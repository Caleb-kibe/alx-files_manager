// Import redis library
const redis = require('redis');

// Defines RedisClient class
class RedisClient {
  constructor() {
    this.client = redis.createClient();

    // Handle Redis client error
    this.client.on('error', (error) => {
      console.error('Redis Client Error:', error);
    });
  }

  // Check if redis connection is alive
  isAlive() {
    return this.client.connected;
  }

  // get value from redis
  async get(key) {
    return new Promise((resolve, reject) => {
      this.client.get(key, (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    });
  }

  // set value in redis with expiration
  async set(key, value, duration) {
    return new Promise((resolve, reject) => {
      this.client.setex(key, duration, value, (err) => {
        if (err) {
          reject(err);
        } else {
          resolve(true);
        }
      });
    });
  }

  // delete the value from redis
  async del(key) {
    return new Promise((resolve, reject) => {
      this.client.del(key, (err) => {
        if (err) {
          reject(err);
        } else {
          resolve(true);
        }
      });
    });
  }
}

// create and export an instance of RedisClient
const redisClient = new RedisClient();
module.exports = redisClient;
