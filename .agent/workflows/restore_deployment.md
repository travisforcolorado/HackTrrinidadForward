---
description: How to restore GitHub Actions deployment
---

# Restore GitHub Actions Deployment

If deployment is broken or reverted to "Deploy from branch":

1.  **Check Workflow File**: Ensure `.github/workflows/deploy.yml` exists and is valid.
2.  **Browser - Open Pages Settings**: Go to `https://github.com/travisforcolorado/HackTrrinidadForward/settings/pages`.
3.  **Browser - Change Source**:
    -   Locate "Build and deployment" > "Source".
    -   Change it from "Deploy from a branch" to "GitHub Actions".
4.  **Browser - Verify Actions**:
    -   Go to the "Actions" tab.
    -   Trigger the "Deploy to GitHub Pages" workflow if it doesn't run automatically.
