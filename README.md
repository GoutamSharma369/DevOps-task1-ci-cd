DevOps Internship - Task 1: Automated Code Deployment Using CI/CD Pipeline

Repository: GoutamSharma369/DevOps-task1-ci-cd

🎯 Objective

The primary objective was to set up a robust, automated Continuous Integration/Continuous Deployment (CI/CD) pipeline using GitHub Actions to perform a build → push workflow, containerizing a Node.js application and publishing the final image to DockerHub.

💻 Application Stack

Component

Tool / Framework

Purpose

Codebase

Node.js (Express)

Minimal web application (server.js).

Container

Docker

Packaging the application and its environment.

CI/CD Orchestration

GitHub Actions

Automating the workflow on every push to main.

Registry

DockerHub

Storing the final container image.

Application Proof

The application (server.js) was configured to serve a responsive, colorful HTML page confirming the task completion, running on Port 3000.

🛠️ CI/CD Pipeline Implementation

The pipeline is defined in the .github/workflows/main.yml file.

1. Security (GitHub Secrets)

To authenticate the workflow and allow pushing to a private DockerHub account, the following credentials were securely stored in the GitHub repository's secrets:

DOCKER_USERNAME

DOCKERHUB_TOKEN (The Access Token acts as the password)

The generation and setup of the token and secrets were completed successfully.

2. Workflow Logic (main.yml)

The pipeline, named "Docker CI/CD Build and Push," runs a single job triggered by a push to the main branch:

Step

Action Performed

Key Technology

Checkout repository

Fetches the code (including the Dockerfile).

actions/checkout@v4

Log in to Docker Hub

Authenticates using the stored secrets (DOCKER_USERNAME and DOCKERHUB_TOKEN).

docker/login-action@v3

Build and push Docker image

Builds the image using the local Dockerfile and pushes the final image to the registry.

docker/build-push-action@v5

Final Image Tag

GoutamSharma369/nodejs-demo-task1:latest



✅ Success & Troubleshooting (Proof of Work)

The CI/CD pipeline achieved a successful end-to-end run, demonstrating automated deployment functionality.

Final Successful Run

The final commit shows the successful completion of the workflow, confirming the image was built and pushed to DockerHub.

Key Troubleshooting Milestones

During development, the pipeline failed fast, allowing for quick identification and resolution of critical issues:

Login Failure: Initially, the workflow failed at the login step due to a secret name mismatch (DOCKER_PASSWORD vs. DOCKERHUB_TOKEN). This was fixed by correctly referencing DOCKERHUB_TOKEN in the YAML.

Build Failure: The pipeline failed at the build step due to residual shell command syntax (cat) at the start of the Dockerfile. This was resolved by cleaning the Dockerfile in vim.

By overcoming these errors, the pipeline is now robust and reliable for future updates.
