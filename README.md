# Crop Manager API

A comprehensive RESTful API for managing agricultural operations including crop management, field tracking, employee management, and financial operations.

## Features

- User Authentication and Authorization
- Crop Management
- Field Management
- Activity Tracking
- Financial Management (Income & Expenses)
- Employee Management
- Attendance Tracking
- Inventory Management
- Variety Management
- Transaction Tracking

## Tech Stack

- Node.js
- Express.js
- MongoDB with Mongoose
- JSON Web Tokens (JWT) for authentication

## API Endpoints

### Authentication
`/api/user`
- User registration and authentication endpoints

### Crop Management
`/api/crop`
- CRUD operations for crops
- Crop planning and tracking

### Field Management
`/api/field`
- Field registration and management
- Field status tracking

### Activity Tracking
`/api/activity`
- Track farming activities
- Activity logs and history

### Financial Management
`/api/incomecategory`
- Income category management

`/api/expenseCategory`
- Expense category management

`/api/income`
- Income transaction management

`/api/expense`
- Expense transaction management

### Employee Management
`/api/employee`
- Employee registration and management
- Employee role management

### Attendance
`/api/attendance`
- Employee attendance tracking

### Inventory
`/api/items`
- Inventory management
- Stock tracking

### Variety Management
`/api/variety`
- Crop variety management

### Transaction Management
`/api/transaction`
- General transaction tracking

## Setup

1. Install dependencies:
```bash
npm install
```

2. Configure environment variables:
Create a `.env` file with:
```
MONGODBURL=your_mongodb_connection_string
PORT=5000 (or preferred port)
```

3. Start the server:
```bash
npm start
```

## Security Features

- CORS enabled
- Request body parsing
- Error handling middleware
- MongoDB security best practices

## API Response Format

All API endpoints return responses in JSON format:

Success Response:
```json
{
  "success": true,
  "data": {...}
}
```

Error Response:
```json
{
  "message": "Error description"
}
```

## Database Models

- User Model
- Crop Model
- Field Model
- Activity Model
- Income/Expense Models
- Employee Model
- Attendance Model
- Item Model
- Variety Model
- Transaction Model

## Error Handling

The API includes centralized error handling middleware that catches and processes all errors, returning appropriate HTTP status codes and error messages.

## Cross-Origin Resource Sharing (CORS)

CORS is enabled for all origins (*) to allow cross-origin requests.

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a new Pull Request
