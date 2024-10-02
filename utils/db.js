// Import MongoClient from the MongoDB driver
const { MongoClient } = require('mongodb');

// Defines DBClient class
class DBClient {
  constructor() {
    // Retrieve environment variables or use default values
    const host = process.env.DB_HOST || 'localhost';
    const port = process.env.DB_PORT || 27017;
    const database = process.env.DB_DATABASE || 'files_manager';

    // create the MongoDB URI and the Client instance
    const mongoURI = `mongodb://${host}:${port}`;
    this.client = new MongoClient(mongoURI, { useUnifiedTopology: true });

    // Connect to the database
    this.client.connect()
      .then(() => {
        this.db = this.client.db(database);
      })
      .catch((error) => {
        console.error('MongoDB Connection Error:', error);
      });
  }

  // Check if the connection to MongoDB is alive
  isAlive() {
    return this.client.isConnected();
  }

  // Get the number of documents in the 'users' collection
  async nbUsers() {
    return this.db.collection('users').countDocuments();
  }

  // Get the number of documents in the 'files' collection
  async nbFiles() {
    return this.db.collection('files').countDocuments();
  }
}

// Create and export DBClient instance
const dbClient = new DBClient();
module.exports = dbClient;
