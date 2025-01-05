# Task List API

The **Tasks API** is a lightweight and efficient RESTful service designed for managing tasks in a to-do list. Built with **Node.js** and **Express**, it provides essential CRUD operations to create, retrieve, update, and delete tasks seamlessly.

## Project Folder Structure

The project is organized in a modular manner for scalability and maintainability. 

- **`api.js`**: Application entry point to initialize and start the server.  
- **controllers/**: Handles HTTP request logic, manages incoming requests and sends responses by using services.
- **db/**: Sets up the database connection pool for interacting with the database.
- **models/**: Contains data models representing the structure of application data.
- **repositories/**: Handles direct database operations, including CRUD queries.
- **services/**: Implements business logic and interacts with the database.
- **routers/**: Maps API endpoints to corresponding controller methods.

## Project Setup

Before running the application, you need to ensure that the necessary database user is created in your MariaDB/MySQL instance.

### Step 1: Create the Database User

1. **Login to MySQL/MariaDB** as an admin user (e.g., `root`):

   ```bash
   mysql -u root -p
   ```

2. **Create the user** `task_user` with a password of your choice (replace `task_pwd` with your actual password in `.env` file):

   ```sql
   CREATE USER IF NOT EXISTS 'task_user'@'localhost' IDENTIFIED BY 'task_pwd';
   ```

3. **Create the database**:

   ```sql
   CREATE DATABASE IF NOT EXISTS tasks_db;
   ```

   Or dev db: 
   ```sql
   CREATE DATABASE IF NOT EXISTS tasks_db_dev;
   ```

4. **Grant appropriate privileges** to `task_user` on the `tasks_db` database:

   ```sql
   GRANT ALL PRIVILEGES ON tasks_db.* TO 'task_user'@'localhost' WITH GRANT OPTION; 
   FLUSH PRIVILEGES;
   ```

    Dev db: 
   ```sql
   GRANT ALL PRIVILEGES ON tasks_db_dev.* TO 'task_user'@'localhost' WITH GRANT OPTION; 
   FLUSH PRIVILEGES;
   ```

5. **Create tasks table**:

   ```sql
   CREATE TABLE tasks (
        id BIGINT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        completed BOOLEAN DEFAULT FALSE
      );
   ```

## Run the application

   ```bash
   npm run start
   ```

### On DEV env:

   ```bash
   npm run start-dev
   ```


## API Endpoints and Usage

### 1. Task List
**Endpoint:**  
`GET http://localhost:4001/api/tasks/`  

### 2. New Task
**Endpoint:**  
`POST http://localhost:4001/api/tasks/`  

**Example cURL Command:**  
```bash
curl -X POST http://localhost:4001/api/tasks/ \
-H "Content-Type: application/json" \
-d '{"name": "task_name"}
```


### 3. Delete Task
**Endpoint:**  
`DELETE http://localhost:4001/api/tasks/taskID`

**Example cURL Command:**  
```bash
curl -X DELETE http://localhost:4001/api/tasks/1
```

### 4. Update Task
**Endpoint:**  
`PUT http://localhost:4001/api/tasks/taskID`

**Example cURL Command:**  
```bash
curl -X PUT http://localhost:4001/api/tasks/1 \
-H "Content-Type: application/json" \
-d '{"name": "Updated Task Name", "completed": true}'
```