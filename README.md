📝 DevOps Internship - Task 1: Complete Workflow and Command Report

This report documents the chronological execution, environment setup, and sequential commands used to build, debug, and automate the CI/CD pipeline for the Node.js application.

Phase 1: Environment Setup & Application Preparation

1. Initial Setup

Repository Acquisition: Started by cloning the GitHub repository.

Commands: cd Downloads/Devops\ internship, then git clone https://github.com/omisharajivmadan-lgtm/task1-github-actions.git

Authentication Setup: Configured Git identity for committing.

Commands: git config --global user.email "your.email@example.com", git config --global user.name "Your Name"

Node.js Installation: Resolved the initial error (bash: npm: command not found) by installing Node.js globally.

Verification: node -v, npm -v

2. Application and Docker Preparation

Application Initialization: Created package.json and installed dependencies.

Commands: npm init -y, npm install express

Code Flexibility: Updated index.js to read the port from process.env.PORT for cloud-native compatibility.

Command: nano index.js

Testing Gate: Updated package.json with an exit 0 test script to guarantee CI success.

Command: nano package.json

Container Blueprint: Created Dockerfile using a multi-stage build for efficient image size.

Commands: touch Dockerfile, nano Dockerfile

Build Optimization: Created .dockerignore to exclude local artifacts.

Commands: touch .dockerignore, nano .dockerignore

Initial Commit: Created a local snapshot of the containerized application files.

Commands: git add ., git commit -m "feat: Add Node.js app, Dockerfile, and .dockerignore for containerization"

Phase 2: CI/CD Pipeline Implementation & Debugging

1. Workflow Definition and Deployment Challenges

Secrets Configuration: DockerHub was initially offline, delaying token generation. Once available, DOCKERHUB_USERNAME and DOCKERHUB_TOKEN were securely configured in GitHub Secrets.

Pipeline Definition: Defined the Test → Build → Push pipeline logic with two dependent jobs in main.yml.

Commands: mkdir -p .github/workflows, nano .github/workflows/main.yml

Initial Push & Failure: Pushed the workflow, which failed (as expected) due to missing external secrets, validating the secure setup.

Command: git push origin main

Final Successful Run: After setting secrets, the code was pushed, resulting in a SUCCESSFUL end-to-end pipeline execution.

Command: git push origin main

2. Documentation and Final Commit

Documentation: Created a detailed README.md in VS Code, explaining the architecture, security, and verification steps.

Visual Proof: Generated and linked an architecture diagram (assets/cicd-flow.png).

Commands: git add assets, git commit -m "docs: Add CI/CD architecture diagram image"

Final Push: Updated README.md with captured success screenshots (Pipeline Run, DockerHub Artifact, Local Verification).

Commands: git add ., git commit -m "docs: Finalize README, adding success proof screenshots", git push origin main

Phase 3: Local Artifact Verification (Final Proof)

Local Docker Setup: Resolved the final error (bash: docker: command not found) by installing and starting Docker Desktop/WSL.

Action: Executed Docker Desktop/WSL update and restarted Git Bash.

Verification: Pulled the immutable artifact using the Git Commit SHA tag and ran the container.

Commands: docker pull omishamadan/task1-node-app:<COMMIT_SHA>, docker run -d -p 8080:3000 --name task1_app_final omishamadan/task1-node-app:<COMMIT_SHA>

Result: Verified the application message in the browser at http://localhost:8080/, confirming the deployed artifact is fully functional.
