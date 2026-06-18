# task-manager-backend

Backend of the Task Manager application built using Node.js, Express.js, MongoDB, and Mongoose.

## Features

* REST API
* Create Task
* Get All Tasks
* Get Single Task
* Update Task
* Delete Task
* MongoDB Database Integration

## Tech Stack

* Node.js
* Express.js
* MongoDB
* Mongoose
* Dotenv
* CORS
* Nodemon

## Installation

### Clone Repository

```bash
git clone <repository-url>
cd server
```

### Install Dependencies

```bash
npm install
```

### Environment Variables

Create a `.env` file in the root directory.

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
```

### Run Development Server

```bash
npm run dev
```

Backend will run on:

```bash
http://localhost:5000
```

## API Endpoints

### Get All Tasks

```http
GET /api/tasks
```

### Get Single Task

```http
GET /api/tasks?id=taskId
```

### Create Task

```http
POST /api/tasks
```

### Update Task

```http
PUT /api/tasks/:id
```

### Delete Task

```http
DELETE /api/tasks/:id
```

## Database Schema

```js
{
  title: String,
  description: String,
  priority: String,
  dueDate: Date,
  completed: Boolean
}
```

## Deployment

Backend is deployed on Render.

## Author

Deep Dholariya
