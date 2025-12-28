# Deployment Guide - Receitas Premium 2026

Your landing page is ready for deployment! Here are the steps to deploy it using Vercel or Netlify (recommended for Vite React apps).

## 1. Prerequisites

Ensure you have your project committed to a GitHub repository.
1. Initialize git (if you haven't):
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   ```
2. Create a new repository on GitHub and push your code.

## 2. Deploy to Vercel (Recommended)

1. Go to [Vercel](https://vercel.com) and sign up/login.
2. Click **"Add New..."** -> **"Project"**.
3. Import your GitHub repository.
4. Vercel will validte the settings automatically:
    - **Framework Preset**: Vite
    - **Build Command**: `npm run build`
    - **Output Directory**: `dist`
5. Click **"Deploy"**.

## 3. Deploy to Netlify

1. Go to [Netlify](https://netlify.com) and sign up/login.
2. Click **"Add new site"** -> **"Import an existing project"**.
3. Connect to GitHub and select your repository.
4. Configure the build settings:
    - **Build command**: `npm run build`
    - **Publish directory**: `dist`
5. Click **"Deploy site"**.

## 4. Post-Deployment (Domain Setup)

After deployment, you can connect your custom domain (e.g., `receitaspremium2026.com.br`):
- **Vercel**: Go to Settings -> Domains -> Add Domain.
- **Netlify**: Go to Domain management -> Add custom domain.

## Local Testing

To verify the production build locally before deploying:
```bash
cmd /c "npm run preview"
```
