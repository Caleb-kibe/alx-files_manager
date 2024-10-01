# File Upload and Management Platform

## Overview

This project is a summary of key back-end concepts learned during this trimester, focusing on technologies such as authentication, Node.js, MongoDB, Redis, pagination, and background processing. The goal is to build a simple platform where users can upload and view files. 

The platform will include the following features:
- **User authentication** via a token
- **List all files**
- **Upload a new file**
- **Change file permissions**
- **View a file**
- **Generate thumbnails for image files**

The project serves as a practical way to bring together the various components you've learned, giving you the freedom to implement certain details (e.g., structuring files, utilizing the `utils` folder, etc.).

Of course, platforms like this already exist, but the purpose here is to practice assembling different pieces to build a complete product.

Enjoy the process of learning and building!

## Features

1. **User Authentication**  
   Authenticate users with tokens to securely manage their access to the platform.

2. **File Management**  
   - Upload files to the platform.
   - List all uploaded files.
   - View specific files.
   - Modify file permissions.

3. **Image Thumbnails**  
   Automatically generate thumbnails for image files using background processing.

4. **Data Storage**  
   - MongoDB for storing file metadata.
   - Redis for caching and background processing.

## Resources

To help you build this project, we recommend the following resources:

- [Node.js Getting Started](https://nodejs.org/en/docs/guides/getting-started-guide/)
- [Process API Documentation](https://nodejs.org/dist/latest-v12.x/docs/api/process.html)
- [Express Getting Started](https://expressjs.com/en/starter/installing.html)
- [Mocha Documentation](https://mochajs.org/)
- [Nodemon Documentation](https://nodemon.io/)
- [MongoDB](https://www.mongodb.com/)
- [Bull (Queue Processing)](https://optimalbits.github.io/bull/)
- [Image Thumbnails](https://www.npmjs.com/package/image-thumbnail)
- [Mime-Types](https://www.npmjs.com/package/mime-types)
- [Redis](https://redis.io/)

## Learning Objectives

By the end of this project, you should be able to:
- Create an API with Express.
- Authenticate users via token-based authentication.
- Store data in MongoDB.
- Store temporary data in Redis.
- Set up and use a background worker to process tasks like generating thumbnails.

## Requirements

- Allowed editors: `vi`, `vim`, `emacs`, Visual Studio Code.
- Files will be interpreted/compiled on **Ubuntu 18.04 LTS** using **Node.js (version 12.x.x)**.
- All files should end with a new line.
- A `README.md` file at the root of the project folder is mandatory.
- All code should use the `.js` extension.
- Code will be verified using **ESLint** for linting.
