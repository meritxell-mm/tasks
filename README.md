Task list:
http://localhost:4001/api/tasks/

New task:
http://localhost:4001/api/tasks/
curl -X POST http://localhost:4001/api/tasks/ -H "Content-Type: application/json" -d '{"name": "task_name"}'

Delete task:
http://localhost:4001/api/tasks/taskID
curl -X DELETE http://localhost:4001/api/tasks/1

Update task:
http://localhost:4001/api/tasks/taskID
curl -X PUT http://localhost:4001/api/tasks/1  -H "Content-Type: application/json" -d '{"name": "Updated Task Name", "completed": true}'
