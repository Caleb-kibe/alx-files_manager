import { ObjectId } from 'mongodb';
import sha1 from 'sha1';  // Used for password hashing
import dbClient from '../utils/db';  // MongoDB client

class UsersController {
  // Create a new user
  static async postNew(req, res) {
    const { email, password } = req.body;

    // Check if email is provided
    if (!email) {
      return res.status(400).json({ error: 'Missing email' });
    }

    // Check if password is provided
    if (!password) {
      return res.status(400).json({ error: 'Missing password' });
    }

    // Check if the email already exists in the database
    const userExists = await dbClient.db.collection('users').findOne({ email });
    if (userExists) {
      return res.status(400).json({ error: 'Already exist' });
    }

    // Hash the password using SHA1
    const hashedPassword = sha1(password);

    // Create the new user object
    const newUser = {
      email,
      password: hashedPassword,
    };

    // Insert the user into the database
    const result = await dbClient.db.collection('users').insertOne(newUser);

    // Return the newly created user (only id and email)
    return res.status(201).json({ id: result.insertedId, email });
  }
}

export default UsersController;
