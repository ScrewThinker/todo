🟢 Todo API – Node.js Production-Ready Service

This project is a production-ready Node.js REST API implementing a Todo service with observability, containerization, CI/CD automation, and secure cloud infrastructure.

🚀 Project Overview

The project implements:
Node.js service with health check and Todo endpoints.
Persistence using AWS DynamoDB (preferred) or in-memory store.
Testing with Jest + Supertest for positive & negative cases.
Observability via structured JSON logs and Prometheus metrics.
Containerization using a multi-stage Dockerfile with non-root user.
CI/CD pipeline: build → test → scan → deploy.
Cloud & security hardening via Terraform + Kubernetes manifests/Helm charts.

📦 Features
Node.js Service
Health Check
GET /healthz
Response: { status: "ok", commit: "<GIT_SHA>" }
Todo API
GET /api/v1/todos         # List all todos
POST /api/v1/todos        # Create a todo { id, title, done }

Persistence Options
AWS DynamoDB (preferred)
In-memory store for local testing
Observability
JSON structured logs
Request logging
Prometheus metrics
Containerization
Multi-stage Dockerfile
Minimal base image
Non-root runtime user


Suggested Repo Structure
.
├─ src/
│  ├─ index.js
│  ├─ server.js
│  ├─ routes/
│  └─ db/        # dynamo.js or memory.js
├─ tests/
│  └─ api.test.js
├─ package.json
├─ Dockerfile
├─ .dockerignore
├─ README.md
└─ .github/workflows/ci.yaml   # or GitLab/Jenkins CI config


⚡ Quick Acceptance Checks

Run the following to verify the app locally:

curl -s localhost:3000/healthz
curl -s -X POST localhost:3000/api/v1/todos \
     -H "content-type: application/json" \
     -d '{"title":"first"}'
curl -s localhost:3000/api/v1/todos

🛠 CI/CD Pipeline
Build & Unit Tests
npm ci && npm test

Static Analysis
ESLint (fails on errors)
Dependency Scan
npm audit --audit-level=high

Docker Image Build & Scan
Multi-stage Docker build
Trivy/Grype scan (fail on High/Critical)

Deployment
Local K8s (kind/minikube) acceptable

Release Metadata
Inject GIT_SHA into /healthz

☁️ Cloud & Security Hardening
Infrastructure (Terraform)
Network: VPC + 2 public subnets + 2 private subnets
Compute: EKS

IRSA for AWS access
One node group (spot/on-demand)

State & Secrets
S3 with SSE-KMS for Terraform state

DynamoDB state lock
Secrets in AWS Secrets Manager / SSM

Data Layer
Least-privilege IAM policy

DynamoDB table (if used)
Kubernetes / Helm

Deployment with probes, resource limits, security context
ClusterIP Service
Ingress via ALB (preferred) or Nginx + cert-manager
NetworkPolicy: deny-all + allow ingress
Logs to CloudWatch, Prometheus scrape endpoint

Security Controls
IAM least privilege
TLS (ACM managed or self-signed for tests)

Image pinning or optional signing (Cosign / Notation)
Dev/prod config separation; no secrets in CI logs or env files

🧪 Testing
Frameworks: Jest + Supertest

Coverage:
Health check
Todo create/list (happy path)

Negative case (validation failure)
🐳 Docker
Multi-stage build
Non-root user
Minimal base image
.dockerignore included

📈 Observability
JSON structured logs
Prometheus metrics
Request logging middleware

💡 Notes
/healthz always returns the current GIT_SHA
Supports ephemeral in-memory DB for local testing
CI/CD ensures code quality, vulnerability scanning, and automated deployment
Designed for security-first, cloud-native production deployments
📚 References
Node.js
Docker
AWS EKS
Terraform
Prometheus
Jest
Supertest