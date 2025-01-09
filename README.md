# Assignment

# Backend System Design Using Queue

This project demonstrates a backend system that efficiently manages user requests using a queue structure. The system is designed to handle multiple clients concurrently while ensuring robust, scalable, and fault-tolerant request processing.

---

## **Features**

- **User Authentication**: Securely authenticate users before they can enqueue requests.
- **Request Queueing**: Implements a First-In-First-Out (FIFO) queue for each client.
- **Concurrent Processing**: Manages multiple clients and their queues concurrently.
- **Scalability**: Supports increasing user loads without performance degradation.
- **Error Handling**: Robust mechanisms for error detection and recovery.
- **Monitoring**: Integrated logging and performance metrics using Prometheus and Grafana.

---

## **Tech Stack**

- **Programming Language**: Node.js
- **Queue System**: RabbitMQ
- **Database**: MongoDB

---

## **Setup Instructions**

### **Prerequisites**
- Node.js 
- MongoDB
- RabbitMQ

---

## Endpoints
 -User Authentication
 -signup: POST /api/signup
 -Body: { "name": "testuser","email": "testuser@gmail.com", "password": "password123" }
Login: POST /api/login
Body: { "username": "testuser", "password": "password123" }
Task Management
Submit Task: POST /api/task
Body: { "task": "Sample task data" }

