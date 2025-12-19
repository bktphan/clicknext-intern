# 🧪 Banking Web App Playground

## 📌 Overview
Banking Web App Playground is a basic banking system simulator developed to practice and learn web development with Vue 3. The application supports core functionalities such as login, deposit-withdrawal, and transaction history management, emphasizing efficient state management and client-side data persistence.

## 🛠 Tech Stack
- **Frontend Framework:** Vue 3 (Composition API)
- **Build Tool:** Vite
- **State Management:** Pinia
- **Routing:** Vue Router
- **CSS Framework:** Bootstrap 5
- **Language:** JavaScript
- **Code Quality:** ESLint, Prettier

## ✨ Key Features
- **Authentication:** Simulated login system with data validation (e.g., email format and password length checks).
- **Banking Operations:** Supports deposit and withdrawal transactions with balance validation and error notifications.
- **Transaction History:** Displays a complete list of transactions, including date, user email, transaction type, and amount.
- **Transaction Management:** Allows editing and deleting of past transactions.
- **Data Persistence:** Saves transaction data and login status to the browser's `LocalStorage`, ensuring data remains available after refreshing or closing the page.

## 🚀 Getting Started

### Prerequisites
- Node.js (Version 20.19.0 or higher)
- npm (Comes installed with Node.js)

### Installation & Running
1. Clone this project to your local machine.
2. Navigate to the `client` folder:
   ```bash
   cd client
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Run the project in development mode:
   ```bash
   npm run dev
   ```
5. Open your browser and go to the displayed URL (usually `http://localhost:5173`).

## 📝 Learning Log / Notes
- **State Management with Pinia:** Separating stores into `user` (for login management) and `bank` (for transaction management) keeps the code organized. Using Getters allows for real-time balance calculation.
- **Vue Router Navigation Guards:** Using `beforeEach` to check the `isLoggedIn` status from LocalStorage prevents unauthorized access to Deposit or Transaction pages.
- **LocalStorage Integration:** Learned how to sync data from Pinia State to LocalStorage for data persistence, reloading it when the application starts.
- **Bootstrap 5 & Modals:** Utilizing Bootstrap for layout and controlling Modals via JavaScript to display edit forms or deletion confirmations.
- **Vue Composition API:** Writing code with `<script setup>` makes it more concise and readable, including the use of `ref` and `computed` for reactive data management.

---
Made with ❤️ by bktphan 2025
