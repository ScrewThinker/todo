### 1. Incident Response: EKS Egress Spikes
- Immediately isolate suspicious pods and restrict network access.
- Capture logs, pod specs, and container images for evidence.
- Monitor network traffic and CloudTrail for abnormal activity.
- Within 24 hours, rotate secrets, patch images, and review IAM roles.

### 2. Secrets in .env
- Storing DB creds in Git is risky due to leaks and insider threats.
- Move secrets to Secrets Manager or SSM Parameter Store and fetch them at runtime.
- Rotate secrets regularly and remove them from Git history.

### 3. Zero-Trust in Kubernetes
- Use IRSA and service accounts for identity, RBAC and NetworkPolicy for access control.
- Enforce least-privilege 

### 4. Supply Chain Security
- Use trusted base images and scan with tools like Trivy.
- Lock npm dependencies and scan for vulnerabilities.

### 5. Cost vs Security
- Don’t skip scans; block critical issues with gates and severity budgets.
- Allow async scanning for minor issues and use allowlists to speed releases safely.

---


**1. AWS Security Group vs NACL**  
- SGs are stateful and instance-level; NACLs are stateless and subnet-level.

**2. Terraform State & Securing**  
- Tracks deployed resources; secure via encrypted S3 and restricted IAM access.

**3. Two container image scanning tools**  
- Trivy, Qualys.

**4. Kubernetes RBAC for pod-level ConfigMap**  
- Create a Role with `get/list` on the ConfigMap and bind it to the pod’s service account with a RoleBinding.

**5. IRSA**  
- Attaches IAM roles to pods instead of nodes, providing least-privilege access and improving security.

---


- **Blue/Green Deployments**: ALB weighted target groups or Argo Rollouts for safe production releases.  

---
