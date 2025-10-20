# Deployment Guide - Denso QMS

This guide will walk you through deploying the Denso Quality Management System to Vercel.

## Prerequisites

- A [Vercel account](https://vercel.com/signup) (free tier is sufficient)
- GitHub repository with your code (already set up)
- Node.js 18.x or later

## Deployment Steps

### Option 1: Deploy via Vercel Dashboard (Recommended)

1. **Go to Vercel**
   - Visit [vercel.com](https://vercel.com)
   - Sign in with your GitHub account

2. **Import Project**
   - Click "Add New..." → "Project"
   - Select "Import Git Repository"
   - Find and select `abhijit-aiplanet/Denso-QMS`

3. **Configure Project**
   - **Framework Preset**: Next.js (auto-detected)
   - **Root Directory**: `./`
   - **Build Command**: `npm run build` (auto-detected)
   - **Output Directory**: `.next` (auto-detected)
   - **Install Command**: `npm install` (auto-detected)

4. **Environment Variables** (Optional for now)
   - Add any environment variables from `.env.example` if needed
   - For the initial deployment, no environment variables are required

5. **Deploy**
   - Click "Deploy"
   - Wait 2-3 minutes for the build to complete
   - Your app will be live at `https://your-project-name.vercel.app`

### Option 2: Deploy via Vercel CLI

```bash
# Install Vercel CLI globally
npm install -g vercel

# Login to Vercel
vercel login

# Deploy from your project directory
cd "C:\Users\Abhijit\OneDrive - iitkgp.ac.in\Desktop\AI_Planet\Denso"
vercel

# Follow the prompts:
# - Set up and deploy? Yes
# - Which scope? Select your account
# - Link to existing project? No
# - Project name? denso-qms (or your preferred name)
# - Directory? ./
# - Override settings? No

# For production deployment
vercel --prod
```

## Post-Deployment

### 1. Custom Domain (Optional)
- Go to your project settings in Vercel
- Navigate to "Domains"
- Add your custom domain
- Update DNS records as instructed

### 2. Environment Variables
When you add backend functionality:
- Go to Project Settings → Environment Variables
- Add variables from `.env.example`
- Redeploy to apply changes

### 3. Automatic Deployments
Every push to the `master` branch will automatically trigger a new deployment on Vercel.

**Branch Deployments:**
- `master` branch → Production deployment
- Other branches → Preview deployments

## Monitoring and Analytics

### Vercel Dashboard
- **Deployments**: View all deployments and their status
- **Analytics**: Track page views and performance
- **Logs**: View real-time function logs
- **Speed Insights**: Monitor Core Web Vitals

## Troubleshooting

### Build Fails
1. Check the build logs in Vercel dashboard
2. Ensure all dependencies are in `package.json`
3. Test build locally: `npm run build`

### Runtime Errors
1. Check Function Logs in Vercel dashboard
2. Enable error reporting in production
3. Check browser console for client-side errors

### Performance Issues
1. Review Speed Insights in Vercel
2. Optimize images and assets
3. Enable caching strategies

## Updating Your Deployment

```bash
# Make changes to your code
# Commit and push to GitHub
git add .
git commit -m "Your commit message"
git push origin master

# Vercel will automatically deploy the changes
```

## Rollback

If something goes wrong:
1. Go to Vercel Dashboard → Deployments
2. Find the last working deployment
3. Click the three dots → "Promote to Production"

## Security Recommendations

1. **Environment Variables**: Never commit sensitive data to GitHub
2. **API Keys**: Store all API keys in Vercel Environment Variables
3. **Custom Headers**: Already configured in `vercel.json` for security
4. **HTTPS**: Automatically enabled by Vercel
5. **DDoS Protection**: Built-in Vercel protection

## Cost Considerations

**Vercel Free Tier includes:**
- 100GB bandwidth per month
- Unlimited deployments
- Automatic HTTPS
- Preview deployments
- Edge network (CDN)

This is sufficient for development and moderate production use.

## Support

- [Vercel Documentation](https://vercel.com/docs)
- [Next.js Documentation](https://nextjs.org/docs)
- [Vercel Community](https://github.com/vercel/vercel/discussions)

## Next Steps

After deploying the frontend:
1. Set up the backend API (FastAPI/Flask)
2. Configure database connections
3. Add authentication
4. Set up monitoring and logging
5. Configure CI/CD pipelines

---

**Deployment Checklist:**
- [ ] Code pushed to GitHub
- [ ] Vercel account created
- [ ] Project imported to Vercel
- [ ] Environment variables configured (if needed)
- [ ] First deployment successful
- [ ] App accessible via Vercel URL
- [ ] Custom domain configured (optional)
- [ ] SSL certificate active (automatic)
- [ ] Analytics enabled
- [ ] Team members invited (if needed)

