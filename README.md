# Socket.IO Chat Application

This is a simple chat application built using Node.js, Express, and Socket.IO. The application allows users to send and receive messages in real-time.

## Table of Contents

- [Installation](#installation)
- [Development](#development)
- [Project Structure](#project-structure)
- [Demo](#demo)

## Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/MahmoudDahdouh/socket.io-chat
   cd socket.io-chat
   ```

2. Install the dependencies:
   ```sh
   npm install
   ```

## Development

To start the server with automatic restarts on file changes, use the following command:

```sh
npm run dev
```

This will start the server at `http://localhost:3000`.

## Project Structure

```
socket.io-chat
├── index.js
├── index.html
├── package.json
└── README.md
```

- `index.js`: The main server file that sets up the Express server and Socket.IO.
- `index.html`: The client-side HTML file with embedded JavaScript to handle real-time communication.
- `package.json`: Contains metadata about the project and its dependencies.
- `README.md`: The file you are currently reading.

## Demo

![Demo](/demo.gif)
