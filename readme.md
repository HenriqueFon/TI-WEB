# Project Title

Welcome to the **[Project Name]** repository! This project uses **JSON Server** to simulate a backend for games and user login. Below are the instructions to set up and run the JSON Server for both games and user authentication.

---

## 🚀 Getting Started

Follow these instructions to get the project up and running locally:

### 1. **Install Dependencies**

First, ensure that you have `npx` installed. If not, you can install it by running:

```bash
npm install -g npx
```

### 2. **Start the databases**

```bash
npx json-server --watch data/db.json --port 3000

npx json-server --watch data/auth.json --port 3001

