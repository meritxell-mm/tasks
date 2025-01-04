# Task List API

The **Tasks API** is a lightweight and efficient RESTful service designed for managing tasks in a to-do list. Built with **Node.js** and **Express**, it provides essential CRUD operations to create, retrieve, update, and delete tasks seamlessly.

## API Endpoints and Usage

### 1. Task List
**Endpoint:**  
`GET http://localhost:4001/api/tasks/`  

**Description:**  
Retrieves a list of all tasks.

---

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