# Restaurant Management System

This project is a web application designed for managing a restaurant menu, orders, and payments. It consists of a **frontend** for users to explore and place orders, an **admin panel** for managing menu items and orders, and a **backend** that handles all data processing and communication between the frontend and database.

## Features

- **Home Page**: Displays the main page with an overview of the restaurant, menu options, and a welcoming interface.  
  ![Home Page](https://github.com/user-attachments/assets/b75dc41b-7482-423e-a917-676cd9bef4f8)
  
- **Explore Menu Page**: Shows the list of items available for purchase, allowing users to add them to their cart.  
  ![Explore Menu Page](https://github.com/user-attachments/assets/2b004f1b-e2ba-4f90-8194-415736d08404)
  
- **Cart Details Page**: Displays the items added to the cart with options to modify the quantity and proceed to checkout.  
  ![Cart Details Page](https://github.com/user-attachments/assets/08e67072-c581-43f9-9070-2263991b0c48)
  
- **Stripe Payment Page**: Integrates Stripe for processing payments, allowing users to pay for their orders.  
  ![Stripe Payment Page](https://github.com/user-attachments/assets/d1767d54-8e12-4d65-8452-42e75c590c5a)
  
- **My Orders Page**: Displays a history of the user's past orders with their status.  
  ![My Orders Page](https://github.com/user-attachments/assets/888874f4-9fd6-43bc-a2c9-7ac9ef9019d3)

### Admin Dashboard Features

- **Add Food to Menu**: Admin can add new food items to the menu with details like price, description, and image.  
  ![Add Food to Menu](https://github.com/user-attachments/assets/2f7281e2-0ef9-42f8-a9b5-8e7c3a0c9085)
  
- **Check Menu List**: Admin can view the current menu items listed in the application.  
  ![Check Menu List](https://github.com/user-attachments/assets/534c6301-c2cf-455a-b887-af1a9ce708c9)
  
- **Update Order Status**: Admin can update the status of orders, such as marking them as processed or completed.  
  ![Update Order Status](https://github.com/user-attachments/assets/28b6a39c-a877-4fc4-8a63-229c6dd8c69a)

## Project Structure

The project is organized into three main folders:

1. **Frontend**: This folder contains the client-side code for the user interface and interactions.  
2. **Backend**: The server-side code that handles data management, API routes, and database interactions.  
3. **Admin**: The admin dashboard where administrators can manage menu items and order statuses.

---

## Installation & Setup

To get the project up and running on your local machine, follow these instructions:

### Prerequisites

- Node.js (v14 or higher)
- npm (Node Package Manager)
- A code editor (e.g., Visual Studio Code)

### Step-by-Step Instructions

#### 1. Clone the Repository

```bash
git clone https://github.com/your-username/your-repository.git
cd your-repository
```
#### 2. Run the backend,Frontend and Admin 

```bash
cd backend
npm run server
cd frontend
npm run dev
cd admin
npm run dev
```
