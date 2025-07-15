# Express TypeScript Authentication Example

A robust authentication system built with Express.js and TypeScript, featuring user registration, login, and session management. This project demonstrates best practices for implementing secure authentication in a modern Node.js application.

## Features

- 🔐 Secure user authentication
- 📝 User registration with input validation
- 🔑 JWT-based authentication
- 🔄 Redis for JWT token management (Blacklist Token)
- 🛡️ Password hashing with bcrypt
- 📊 PostgreSQL database with Prisma ORM
- ✨ TypeScript for type safety
- 🔍 Input validation using Zod

## Prerequisites

- Node.js (v14 or higher)
- PostgreSQL
- Redis
- TypeScript

## Installation

1. Clone the repository:
```bash
git clone https://github.com/sahilvers/Express-Typescript-Authentication-Example.git
cd Express-Typescript-Authentication-Example
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
Create a `.env` file in the root directory with the following variables:
```env
DATABASE_URL="postgresql://user:password@localhost:5432/dbname"
REDIS_URL="redis://localhost:6379"
PORT=3000

JWT_ACCESS_SECRET=your_jwt_access_secret_here
JWT_REFRESH_SECRET=your_jwt_refresh_secret_here
JWT_ACCESS_EXPIRATION_MINUTES=15
JWT_REFRESH_EXPIRATION_DAYS=1

```

4. Run database migrations:
```bash
npx prisma migrate dev
```

5. Start the server:
```bash
npm run dev
```

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Login user
- `POST /api/auth/logout` - Logout user
- `GET /api/auth/me` - Get current user info

## Project Structure

```
src/
├── config/         # Configuration files
├── controllers/    # Request handlers
├── middlewares/    # Custom middleware functions
├── routes/         # API routes
├── types/          # TypeScript type definitions
└── utils/          # Utility functions
```

## Security Features

- Password hashing using bcrypt
- JWT token authentication
- Input validation and sanitization
- JWT token management with Redis (Blacklist Token)
- TypeScript for enhanced type safety

## Development

To run the project in development mode with hot reload:

```bash
npm run dev
```

For production build:

```bash
npm run build
npm start
```

## Testing

```bash
npm test
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Express.js team for the excellent web framework
- Prisma team for the amazing ORM
- TypeScript team for the type safety

## Support

If you found this project helpful, please give it a ⭐️!
