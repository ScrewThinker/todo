# To-Do API DevOps Assessment

This repo contains a Node.js To-Do API with full CI/CD, Docker, Terraform infra, and Kubernetes deployment.

## Quick Start
1. npm install
2. npm test
3. npm start
4. curl -s localhost:3000/healthz
5. curl -s -X POST localhost:3000/api/v1/todos -H "content-type: application/json" -d '{"title":"first"}'
6. curl -s localhost:3000/api/v1/todos
7. curl -s localhost:3000/metrics

## Architecture & Security
- Node.js REST API
- Dockerized, non-root
- CI/CD with GitHub Actions (build, test, lint, audit, Trivy scan, deploy)
- Terraform-managed AWS infra (VPC, EKS, DynamoDB, IRSA)
- Least-privilege IAM roles, secrets in AWS Secrets Manager, metrics/logging endpoints