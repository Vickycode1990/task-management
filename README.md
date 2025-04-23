# Task Management System

A modern task management system built with FastAPI, React, and SQLAlchemy.

## 🚀 Features

- **User Management**
  - User registration and authentication
  - JWT-based authentication
  - Password hashing with bcrypt

- **Task Management**
  - Create, read, update tasks
  - Task status tracking
  - Priority levels
  - Due date management
  - Task assignment

- **Comments System**
  - Add comments to tasks
  - Track comment history
  - User attribution

- **Modern UI**
  - React-based frontend
  - Responsive design with Tailwind CSS
  - Real-time updates
  - Interactive dashboard
  - Beautiful task cards

- **Security**
  - JWT authentication
  - Password hashing
  - Role-based access control
  - Input validation

## 🛠️ Technical Stack

### Backend
- **Framework**: FastAPI
- **Database**: SQLite with SQLAlchemy ORM
- **Authentication**: JWT tokens
- **Password Hashing**: bcrypt
- **API Documentation**: Swagger/OpenAPI
- **Data Validation**: Pydantic

### Frontend
- **Framework**: React
- **State Management**: Zustand
- **Styling**: Tailwind CSS
- **Forms**: React Hook Form
- **API Client**: Axios
- **Data Fetching**: React Query
- **Routing**: React Router

## 📦 Installation

### Backend Setup

1. Create a virtual environment:
   ```bash
   python -m venv venv
   source venv/bin/activate  # Linux/Mac
   venv\Scripts\activate     # Windows
   ```

2. Install backend dependencies:
   ```bash
   pip install -r requirements.txt
   ```

### Frontend Setup

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Install frontend dependencies:
   ```bash
   npm install
   ```

## 🚀 Usage

### Start the Backend Server

1. Activate the virtual environment (if not already activated)
2. Run the FastAPI server:
   ```bash
   python main.py
   ```
3. Access the API documentation at http://localhost:8001/docs

### Start the Frontend Development Server

1. In a new terminal, navigate to the frontend directory
2. Start the development server:
   ```bash
   npm start
   ```
3. Access the application at http://localhost:3000

## 📚 Features Overview

### Dashboard
- Task statistics
- Recent activities
- Priority distribution
- Status overview

### Task Management
- Create new tasks
- Assign tasks to users
- Set priorities and due dates
- Track task status
- Add comments and updates

### User Features
- User registration
- Profile management
- Task assignment
- Activity tracking

## 🔒 Authentication

The application uses JWT tokens for authentication:

1. Register a new user:
   ```bash
   curl -X POST "http://localhost:8001/users/" -H "Content-Type: application/json" -d '{"username": "testuser", "email": "test@example.com", "password": "password123"}'
   ```

2. Get access token:
   ```bash
   curl -X POST "http://localhost:8001/token" -d "username=testuser&password=password123"
   ```

3. Use the token in subsequent requests:
   ```bash
   curl -X GET "http://localhost:8001/tasks/" -H "Authorization: Bearer YOUR_TOKEN"
   ```

## 🧪 Testing

### Backend Tests
```bash
pytest
```

### Frontend Tests
```bash
cd frontend
npm test
```

## 📝 License

This project is licensed under the MIT License. 