# Todo React App with Appwrite
Developed with ❤️ by [Kushagra Malani](https://github.com/Kushagra-Malani).

A simple Todo App built with React and Appwrite. This project demonstrates the basics of integrating Appwrite's backend services to create, read, and delete todos. It's beginner-friendly and serves as a learning resource for those interested in using Appwrite with React.

---

## Features

- **Create Todos**: Add new tasks to the Appwrite database.
- **Read Todos**: Fetch and display tasks stored in the database.
- **Delete Todos**: Remove tasks from the database.
- **Appwrite Integration**: Learn how to set up and use Appwrite services in your project.

---

## Prerequisites

Before starting, ensure you have the following installed:

- [Node.js](https://nodejs.org/en/) (v14 or later)
- [Appwrite](https://appwrite.io/) backend configured
- A database and collection created in your Appwrite project

---

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/todo-app-with-appwrite.git
cd todo-app-with-appwrite
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment Variables

Create a `.env` file in the root directory and add your Appwrite configuration:

```env
REACT_APP_API_ENDPOINT='https://your-appwrite-endpoint'
REACT_APP_PROJECT_ID='your-project-id'
REACT_APP_DATABASE_ID='your-database-id'
REACT_APP_COLLECTION_ID='your-collection-id'
```

### 4. Run the App

```bash
npm start
```

Open your browser and navigate to [http://localhost:3000](http://localhost:3000).

---

## Folder Structure

```plaintext
src/
├── appwrite/
│   └── appwriteConfig.js     # Contains Appwrite client configuration
├── components/
│   ├── TodoForm.jsx          # Form to add todos
│   ├── TodoList.jsx          # Component to display todos
│   ├── Profile.jsx           # User profile section
│   └── Navbar.jsx            # Navigation bar
├── App.jsx                   # Main application component
├── index.js                  # Entry point for the React app
└── styles/                   # TailwindCSS styles (if applicable)
```

---

## How It Works

1. **Setup Appwrite Backend**: 
    - Create a project in Appwrite.
    - Configure a database and collection with the necessary attributes (e.g., `todo_str_attribute` for storing todo strings).
2. **Connect Appwrite in React**:
    - Use `appwriteConfig.js` to initialize Appwrite with your API endpoint and project ID.
3. **CRUD Operations**:
    - **Create**: Add new todos using Appwrite's `createDocument` method.
    - **Read**: Fetch all todos using `listDocuments`.
    - **Delete**: Remove todos using `deleteDocument`.

---

## Learning Objectives

- Understand the basics of Appwrite setup and integration.
- Perform CRUD operations with Appwrite databases.
- Learn to use React hooks like `useState` and `useEffect` effectively.

---

## Contributions

Contributions are welcome! If you'd like to add new features or improve the existing code, feel free to submit a pull request.

---

## License

This project is licensed under the MIT License.

---

## Resources

- [Appwrite Documentation](https://appwrite.io/docs)
- [React Documentation](https://reactjs.org/docs/getting-started.html)

Happy Learning! 🎉
