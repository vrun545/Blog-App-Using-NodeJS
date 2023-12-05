# Blog App Readme

## Overview

This NodeJS project is a simple blog application that provides user authentication, authorization, and basic CRUD functionalities. The project uses Node.js and Express for the backend API, EJS for frontend views, JWT for secure authentication, Multer for smooth image file uploads, and Cookie-parser for storing the token inside browser storage. The application allows signed-in users to create, edit, and delete their blog posts, as well as add comments. Anonymous users can view blogs and comments but cannot participate in posting or commenting.

## Features

- User authentication with sign-up and sign-in functionality.
- Password hashing for secure storage.
- JWT-based authorization to control access to different functionalities.
- EJS templates for dynamic HTML rendering.
- Backend API built with Node.js and Express.
- User-specific access control: only signed-in users can post blogs and comments.
- Anonymous users can view blogs and comments.
- Smooth image file uploads using Multer.
- Token storage in browser storage using Cookie-parser.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/blog-app.git
   ```

2. Install dependencies:

   ```bash
   cd blog-app
   npm install
   ```

3. Run the application:

   ```bash
   npm start
   ```

   The application will be accessible at `http://localhost:5000`.

## Usage

1. Open your browser and navigate to `http://localhost:5000`.

2. Sign up for a new account or sign in if you already have one.

3. Once signed in, you can create a new blog post, including smooth image file uploads, or view existing ones.

4. Only signed-in users can post blogs and add comments.

5. Anonymous users can view blogs and comments.

## Folder Structure

- `views`: Contains EJS templates for rendering HTML.
- `public`: Static assets such as stylesheets and client-side scripts.
- `routes`: Defines the application routes.
- `controllers`: Handles the logic for each route.
- `models`: Defines data models for MongoDB.
- `middleware`: Custom middleware functions for authentication and authorization.
- `uploads`: Directory for storing uploaded images.
- `index.js`: Main entry point for the application.

## Dependencies

- `express`: Web application framework for Node.js.
- `ejs`: Embedded JavaScript templates for HTML rendering.
- `mongoose`: MongoDB object modeling for Node.js.
- `bcryptjs`: Library for password hashing.
- `jsonwebtoken`: JSON Web Token implementation for authentication.
- `express-session`: Session middleware for Express.
- `multer`: Middleware for handling `multipart/form-data` (used for image uploads).
- `cookie-parser`: Parses cookies and stores JWT in browser storage.

## Contributing

Feel free to contribute by submitting bug reports, feature requests, or pull requests. Please follow the [contributing guidelines](CONTRIBUTING.md).

## License

This project is licensed under the [MIT License](LICENSE).

Happy blogging!
