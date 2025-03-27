# Marketplace Backend

This directory contains the backend service for the Marketplace application, responsible for handling business logic, user authentication, and data management.

## Features

- User authentication and authorization
- Product management (CRUD operations with soft delete support)
- Order processing
- API endpoints for seamless frontend integration

## Technologies Used

- Node.js with Express.js
- MongoDB with Mongoose
- JSON Web Tokens (JWT) for authentication
- Morgan for logging
- Helmet for security
- CORS for cross-origin resource sharing
- dotenv for environment variable management

## Project Structure

```
marketplace-backend/
├── models/
│   ├── Product.js
│   ├── User.js
├── routes/
│   ├── products.routes.js
│   ├── user.routes.js
│   ├── health.js
├── views/
│   ├── index.pug
├── public/
├── .env.example
├── server.js
├── package.json
```

## Installation

### Prerequisites

- Node.js (>=14.x)
- npm (>=6.x)
- MongoDB (>=4.x)

### Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/midbahou/Capstone-Project.git
   ```
2. Navigate to the backend directory:
   ```bash
   cd Capstone-Project/marketplace-backend
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Set up environment variables:
   - Create a `.env` file based on `.env.example`
   - Update the necessary environment variables (e.g., `MONGODB_URI`, `PORT`)
5. Start the server:
   ```bash
   npm run dev
   ```
   The backend will run on `http://localhost:4000`.

## API Endpoints

### Product Routes
- `GET /api/products` - Fetch all non-deleted products
- `POST /api/products` - Add a new product
- `GET /api/products/all` - Fetch all products (including soft deleted)
- `GET /api/products/:id` - Get a specific product by ID
- `PATCH /api/products/:id` - Update a product by ID
- `DELETE /api/products/:id` - Soft delete a product
- `PATCH /api/products/:id/restore` - Restore a soft-deleted product

### User Routes
- `GET /api/user` - Fetch all users
- `GET /api/user/:id` - Fetch a specific user by ID
- `POST /api/user` - Create a new user
- `PATCH /api/user/:id` - Update user details
- `DELETE /api/user/:id` - Delete a user

### Health Check Route
- `GET /api/health` - Verify if the server is running

## Middleware

- **Helmet** - Adds security to the app
- **Morgan** - Logs HTTP requests
- **CORS** - Enables cross-origin requests
- **Error Handling Middleware** - Handles global errors

## Testing

To test the API, you can use tools like Postman or CURL.

## Resources Used

Below are the key resources and references that were utilized in building the backend:

- **MongoDB Atlas** - Cloud database for storing marketplace data

- **Postman** - API testing and debugging

- **bcryptjs** - Password hashing for secure authentication

- **jsonwebtoken (JWT)** - Secure token-based authentication

- **Mongoose** - ODM to interact with MongoDB efficiently

- **Express.js** Documentation - Used for routing and middleware configuration

- **Nodemon** - Auto-restart development server

## Dependencies
"cors": "^2.8.5", "dotenv": "^16.4.7", "express": "^4.21.2", "helmet": "^8.0.0", "mongoose": "^8.12.1", "pug": "^3.0.3"