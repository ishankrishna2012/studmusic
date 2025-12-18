# Deployment Guide

This guide covers deploying StudMusic to various platforms.

## Prerequisites

- Node.js 18+
- npm or yarn
- A git repository (for most platforms)

## Deployment Options

### 1. **Vercel** (Recommended - Easiest)

Vercel is made by the Next.js creators and offers seamless deployment.

**Steps**:

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Select your StudMusic repository
5. Click "Deploy"

Vercel will automatically:
- Detect it's a Next.js project
- Install dependencies
- Build the app
- Deploy to a live URL

**CLI Deployment**:
```bash
npm install -g vercel
vercel
# Follow the prompts
```

**Custom Domain**:
- Add domain in Vercel dashboard
- Update DNS settings with your registrar
- Vercel provides SSL certificate automatically

### 2. **Netlify**

**Steps**:

1. Ensure you have `npm run build` working locally
2. Go to [netlify.com](https://netlify.com)
3. Click "New site from Git"
4. Select your repository
5. Set build command: `npm run build`
6. Set publish directory: `.next`
7. Click "Deploy"

### 3. **Railway**

**Steps**:

1. Go to [railway.app](https://railway.app)
2. Click "New Project"
3. Select "Deploy from GitHub"
4. Choose StudMusic repository
5. Railway auto-detects Node.js
6. Add environment variables if needed
7. Deploy automatically

### 4. **Render**

**Steps**:

1. Push to GitHub
2. Go to [render.com](https://render.com)
3. Click "New Web Service"
4. Connect your GitHub account
5. Select StudMusic repo
6. Set build command: `npm run build`
7. Set start command: `npm start`
8. Deploy

### 5. **Self-Hosted (VPS)**

**Requirements**:
- Server with Node.js installed
- PM2 or similar process manager
- Nginx or Apache for reverse proxy
- SSL certificate (Let's Encrypt)

**Steps**:

1. SSH into your server
2. Clone repository:
```bash
git clone <your-repo-url>
cd studmusic
npm install
npm run build
```

3. Install PM2:
```bash
npm install -g pm2
```

4. Start app:
```bash
pm2 start npm --name "studmusic" -- start
pm2 save
pm2 startup
```

5. Configure Nginx:
```nginx
server {
    listen 80;
    server_name yourdomain.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

6. Enable SSL with Let's Encrypt:
```bash
sudo apt-get install certbot nginx-certbot
sudo certbot --nginx -d yourdomain.com
```

## Environment Variables

Create `.env.production.local` for production:

```env
# Only needed if using real APIs
NEXT_PUBLIC_ANALYTICS_ID=your_analytics_id
```

**Important**: Never commit `.env.production.local` to git!

## Optimization Checklist

Before deploying:

- [ ] Run `npm run build` locally and verify no errors
- [ ] Test production build locally: `npm start`
- [ ] Optimize images (already done with Next.js Image)
- [ ] Enable compression (configured in `next.config.js`)
- [ ] Set up monitoring/error tracking
- [ ] Configure custom domain
- [ ] Enable HTTPS/SSL
- [ ] Set up CI/CD (auto-deploy on git push)

## Performance Monitoring

### Vercel Analytics
Built-in with Vercel deployment. Dashboard available in project settings.

### Web Vitals
Monitor with Google Analytics or Vercel Web Analytics.

### Error Tracking
- Sentry: https://sentry.io
- LogRocket: https://logrocket.com
- Datadog: https://datadog.com

## Troubleshooting

### Build Fails
```bash
# Clear cache and rebuild
rm -rf .next node_modules
npm install
npm run build
```

### App Won't Start
Check logs:
```bash
npm start  # If self-hosted
pm2 logs   # PM2 logs
```

### Performance Issues
- Enable image optimization
- Use CDN for static assets
- Implement caching headers
- Check database queries (if added)

## Continuous Deployment

### Auto-deploy on Git Push

**Vercel**: Automatic with GitHub/GitLab/Bitbucket

**GitHub Actions**:
```yaml
name: Deploy
on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2
        with:
          node-version: '18'
      - run: npm ci
      - run: npm run build
      - name: Deploy
        run: npm run deploy
```

## Cost Estimation

| Platform | Free Tier | Paid |
|----------|-----------|------|
| Vercel | ✅ Generous | $20+/mo |
| Netlify | ✅ 100GB/mo | $19+/mo |
| Railway | ✅ $5/mo | Pay-as-you-go |
| Render | ✅ Limited | $7+/mo |
| VPS | ❌ | $5+/mo |

## Post-Deployment

1. **Monitor Performance** - Check dashboards regularly
2. **Update Dependencies** - Run `npm update` monthly
3. **Backup Data** - If database added, set up backups
4. **Log Monitoring** - Watch for errors
5. **User Feedback** - Collect and implement improvements

## Support

For deployment issues:
- Check platform documentation
- Review build logs
- Test locally first
- Create GitHub issue if stuck

---

**Happy deploying! 🚀**
