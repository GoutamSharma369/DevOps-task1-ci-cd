// Import the Express framework
const express = require('express');

// Initialize the application
const app = express();

// Define the port to listen on
const PORT = process.env.PORT || 3000;

// HTML Content for the response
const htmlContent = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>DevOps Task 1 App</title>
    <!-- Load Tailwind CSS from CDN for easy styling and responsiveness -->
    <script src="https://cdn.tailwindcss.com"></script>
    <style>
        /* Define a custom animation for the box */
        @keyframes pulse-color {
            0%, 100% { background-color: #fca5a5; box-shadow: 0 0 15px rgba(252, 165, 165, 0.8); } /* Red-300 */
            50% { background-color: #60a5fa; box-shadow: 0 0 25px rgba(96, 165, 250, 1); } /* Blue-400 */
        }
        .animated-box {
            animation: pulse-color 4s infinite ease-in-out;
            border-radius: 12px;
            display: flex;
            align-items: center;
            justify-content: center;
            height: 100%;
        }
        /* Use Inter font */
        body {
            font-family: 'Inter', sans-serif;
        }
    </style>
</head>
<body class="bg-gray-900 text-white min-h-screen flex items-center justify-center p-4">
    <div class="container mx-auto max-w-4xl p-8 bg-gray-800 rounded-xl shadow-2xl">
        <header class="text-center mb-10">
            <h1 class="text-5xl font-extrabold text-indigo-400 mb-2">CI/CD Demo Application</h1>
            <p class="text-xl text-gray-400">Successfully deployed via GitHub Actions pipeline!</p>
        </header>

        <!-- Colorful Grid View -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

            <!-- Animated Box: Mentioning Task 1 -->
            <div class="col-span-4 p-6 rounded-xl bg-gray-700 shadow-xl">
                <div class="animated-box text-3xl md:text-5xl font-black text-white p-10">
                    THIS IS TASK 1
                </div>
            </div>

            <!-- Supporting Boxes with Colors -->
            <div class="p-6 rounded-xl bg-purple-500 shadow-md flex items-center justify-center h-24">
                <p class="text-lg font-bold">Node.js</p>
            </div>
            <div class="p-6 rounded-xl bg-yellow-500 shadow-md flex items-center justify-center h-24">
                <p class="text-lg font-bold">Express</p>
            </div>
            <div class="p-6 rounded-xl bg-green-500 shadow-md flex items-center justify-center h-24">
                <p class="text-lg font-bold">Docker</p>
            </div>
            <div class="p-6 rounded-xl bg-blue-500 shadow-md flex items-center justify-center h-24">
                <p class="text-lg font-bold">GitHub Actions</p>
            </div>

        </div>

        <footer class="text-center mt-10 text-sm text-gray-500">
            Containerized Deployment Successful | Port ${PORT}
        </footer>
    </div>
</body>
</html>
`;

// Define a simple GET endpoint for the root URL ('/')
app.get('/', (req, res) => {
  // Set the Content-Type header to tell the browser it's HTML
  res.setHeader('Content-Type', 'text/html');
  // Send the HTML content
  res.send(htmlContent);
});

// Start the server and listen on the defined port
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log('--- READY FOR CI/CD ---');
});
