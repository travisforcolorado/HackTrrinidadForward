# Deployment Documentation

## Overview

This project uses [GitHub Actions](https://github.com/features/actions) to automatically build and deploy the application to [GitHub Pages](https://pages.github.com/).

## Prerequisites

- [Node.js](https://nodejs.org/) (Version 20 or higher recommended)
- [npm](https://www.npmjs.com/)
- [Git](https://git-scm.com/)

## Local Development

To run the application locally:

1.  **Install dependencies:**
    ```bash
    npm install
    ```

2.  **Start the development server:**
    ```bash
    npm run dev
    ```
    The application will be available at `http://localhost:3001/HackTrrinidadForward/` (or similar, check the terminal output).

## Automated Deployment

Deployment is handled automatically by the `.github/workflows/deploy.yml` workflow.

### Triggers

The deployment workflow is triggered by:
- Pushes to the `main` or `work` branches.
- Pull requests targeting `main` or `work` branches.
- Manual trigger via the GitHub Actions "Run workflow" button.

### Process

1.  **Build**: The workflow checks out the code, installs dependencies using `npm ci`, and builds the project using `npm run build`.
2.  **Upload**: The build artifacts (in the `dist` folder) are uploaded as a GitHub Pages artifact.
3.  **Deploy**: The artifact is deployed to the `github-pages` environment.

## Configuration Files

-   **`.github/workflows/deploy.yml`**: Defines the CI/CD pipeline.
-   **`vite.config.js`**: Sets the `base` path to `/HackTrrinidadForward/` to ensure assets load correctly on GitHub Pages.
-   **`package.json`**: Contains the `build` script (`vite build`) used by the workflow.

## manual Deployment (Not Recommended)

While automated deployment is preferred, you can deploy manually using `gh-pages` if necessary:

1.  Build the project:
    ```bash
    npm run build
    ```
2.  Deploy the `dist` folder:
    ```bash
    npm run deploy
    ```
    *Note: This requires the `gh-pages` package and appropriate Git permissions.*
