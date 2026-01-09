---
description: How to enable GitHub Actions deployment
---

# Enable GitHub Actions Deployment

1.  **Open Settings**: Go to Repository **Settings** > **Pages**.
2.  **Set Source**: Change "Build and deployment" > "Source" to **GitHub Actions**.
3.  **Verify**: Ensure `.github/workflows/deploy.yml` exists. Push to `main` to deploy.

> **Tip**: The agent can use `gh` CLI to trigger and monitor deployments:
> - Trigger: `gh workflow run deploy.yml`
> - Monitor: `gh run watch`
