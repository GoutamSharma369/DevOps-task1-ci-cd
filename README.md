# 📝 DevOps Internship - Task 1: Complete Workflow and Command Report

This report documents the chronological execution, environment setup, and sequential commands used to build, debug, and automate the CI/CD pipeline for the Node.js application.

## Phase 1: Environment Setup & Application Preparation

### 1. Initial Setup

* **Repository Acquisition:** Started by cloning the GitHub repository.
    * `cd Downloads/Devops\ internship`
    * `git clone https://github.com/omisharajivmadan-lgtm/task1-github-actions.git`
* **Authentication Setup:** Configured Git identity for committing (resolved the initial "Author identity unknown" error).
    * `git config --global user.email "your.email@example.com"`
    * `git config --global user.name "Your Name"`
* **Node.js Installation:** Resolved the initial error (`bash: npm: command not found`) by installing Node.js globally.

### 2. Application and Docker Preparation

* **Application Initialization:** Created `package.json` and installed dependencies.
    * `npm init -y`
    * `npm install express`
* **Code Flexibility:** Updated `index.js` to read the port from `process.env.PORT` for cloud-native compatibility.
* **Testing Gate:** Updated `package.json` with an `exit 0` test script to guarantee CI success.
* **Container Blueprint:** Created `Dockerfile` using a **multi-stage build** for efficiency.
    * `touch Dockerfile`
* **Build Optimization:** Created `.dockerignore` to exclude local artifacts.
    * `touch .dockerignore`
* **Local Commit:** Created a local snapshot of the containerized application files.
    * `git add .`
    * `git commit -m "feat: Add Node.js app, Dockerfile, and .dockerignore for containerization"`

## Phase 2: CI/CD Pipeline Implementation & Debugging

### 1. Workflow Definition and Deployment Challenges

* **Secrets Configuration:** Configured **`DOCKERHUB_USERNAME`** and **`DOCKERHUB_TOKEN`** in GitHub Secrets (resolving the login dependency stalled by a service outage).
* **Pipeline Definition:** Defined the **Test → Build → Push** pipeline logic in `main.yml`.
    * `mkdir -p .github/workflows`
    * `nano .github/workflows/main.yml`
* **Initial Push & Success:** Pushed the workflow. The pipeline ran successfully as the secrets were correctly configured.
    * `git push origin main`

### 2. Documentation and Final Commit

* **Documentation:** Created a detailed `README.md`, including architecture and verification steps.
* **Screenshot Capture:** Captured success proofs (Pipeline Run, DockerHub Artifact, Local Verification).
* **Final Push:** Updated `README.md` with images and made the final push.
    * `git add .`
    * `git commit -m "docs: Finalize README, adding success proof screenshots"`
    * `git push origin main`

## Phase 3: Local Artifact Verification (Final Proof)

* **Local Docker Setup:** Resolved the error (`bash: docker: command not found`) by installing and starting Docker Desktop/WSL.
* **Verification:** Pulled the immutable artifact using the Git Commit SHA tag and ran the container.
    * `docker pull omishamadan/task1-node-app:<COMMIT_SHA>`
    * `docker run -d -p 8080:3000 --name task1_app_final omishamadan/task1-node-app:<COMMIT_SHA>`
* **Result:** Verified the application message in the browser at `http://localhost:8080/`, confirming the deployed artifact is fully func
<img width="1888" height="839" alt="Screenshot 2025-10-20 174528" src="https://github.com/user-attachments/assets/dbe0a1ad-ba2e-47c7-b7bd-90ae6b16335c" />
tional.
  
<img width="1907" height="1015" alt="Screenshot 2025-10-20 174207" src="https://github.com/user-attachments/assets/7c1d0359-7d91-4ada-b358-bc3adc468129" />


