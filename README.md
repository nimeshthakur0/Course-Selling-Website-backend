# Course Selling Website Backend

This project is a backend for a course selling website. It is designed to handle various functionalities related to both admin and user accounts. The backend uses JWTs (JSON Web Tokens) for authentication and MongoDB for data storage.

## Features

### Admin Routes

- `POST /admin/signup`: Creates a new admin account.
- `POST /admin/signin`: Logs in an admin account.
- `POST /admin/courses`: Creates a new course.
- `GET /admin/courses`: Returns all courses.

### User Routes

- `POST /users/signup`: Creates a new user account.
- `POST /users/signin`: Logs in a user account.
- `GET /users/courses`: Lists all courses.
- `POST /users/courses/:courseId`: Purchases a course.
- `GET /users/purchasedCourses`: Lists all purchased courses.

## Authentication

The system uses JWTs for managing the authentication of both admin and user accounts. This ensures secure access to the application's functionalities.

## Data Storage

MongoDB is used as the database for storing all the data related to courses, users, and admins. This allows for efficient data retrieval and storage.

## Getting Started

To get started with this project, follow these steps:

1. **Clone the repository** to your local machine using `git clone https://github.com/nimeshthakur0/course-selling-website-backend.git`.
2. **Install dependencies** by running `npm install` in the project root directory. This will install all necessary packages listed in `package.json`.
3. **Set up MongoDB** by creating a database for the project. Ensure MongoDB is running on your system or use a cloud-based MongoDB service like MongoDB Atlas.
4. **Configure environment variables** if necessary, including setting up the `JWT_SECRET` used for token generation and verification.
5. **Start the server** by running `npm start` or `node index.js` from the root of the project. The server should start on port 3000, or you can configure a different port.
6. **Test the API** using a tool like Postman or through any frontend application that can communicate with the backend.

## Contribution

Contributions are welcome. Please fork the repository and submit a pull request with your changes.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
