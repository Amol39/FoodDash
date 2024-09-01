# FoodDash

## Overview

**FoodDash** is a comprehensive web application designed to streamline restaurant operations and enhance the dining experience for customers. The platform includes two main interfaces: an Admin Dashboard for restaurant management and a user-facing frontend where customers can browse the menu, place orders, and track their deliveries. The application is built using a combination of modern technologies:

- **Frontend**: React.js for the user interface, integrated with context for state management.
- **Admin Dashboard**: A React-based admin panel with a focus on managing orders, products, and customer interactions.
- **Backend**: Node.js and Express.js, with a MongoDB database, providing a robust API for the frontend and admin dashboard.


## Setup and Running the Project

To run the **FoodDash** project on your local machine, follow these steps:

### 1. Download and Extract the Project

1. Download the ZIP file of the project from the repository.
2. Extract the contents of the ZIP file to a directory on your machine.

### 2. Running the Admin Dashboard

1. Navigate to the `admin` folder:
    ```bash
    cd FoodDash/admin
    ```
2. Install the necessary dependencies:
    ```bash
    npm install
    ```
3. Start the development server for the admin dashboard:
    ```bash
    npm run dev
    ```
4. The Admin Dashboard should now be running on `http://localhost:5174` or another port specified in your terminal.

### 3. Running the Backend Server

1. Open a new terminal and navigate to the `backend` folder:
    ```bash
    cd FoodDash/backend
    ```
2. Install the necessary dependencies:
    ```bash
    npm install
    ```
3. Start the backend server:
    ```bash
    npm start server
    ```
4. The backend API should now be running on `http://localhost:5000` or another port specified in your terminal.

### 4. Running the Frontend

1. Open another new terminal and navigate to the `frontend` folder:
    ```bash
    cd FoodDash/frontend
    ```
2. Install the necessary dependencies:
    ```bash
    npm install
    ```
3. Start the development server for the frontend:
    ```bash
    npm run dev
    ```
4. The Frontend should now be running on `http://localhost:3000` or another port specified in your terminal.

### 5. Accessing the Application

- **Admin Dashboard**: Open your browser and go to `http://localhost:3000` (or the specified port) to access the admin dashboard.
- **Frontend**: Similarly, access the user-facing frontend on `http://localhost:3000` (or the specified port).
- **Backend**: The backend API will be available at `http://localhost:5000`.

## Key Features

- **Admin Dashboard**: Manage orders, view customer interactions, and add/edit products.
- **User Interface**: Browse the menu, place orders, track order status, and manage your cart.
- **API**: A robust backend API powering the admin and frontend interfaces.

## Contributing

If you'd like to contribute to **FoodDash**, please fork the repository and use a feature branch. Pull requests are warmly welcome.
