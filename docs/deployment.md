# 🚀 RuneFlip Deployment Guide

This guide covers deploying RuneFlip to production environments.

## 📋 Prerequisites

- Vercel account (for frontend)
- Supabase account (for backend)
- Domain name (optional)
- Solana mainnet RPC endpoint

## 🔧 Supabase Setup

### 1. Create Project
1. Visit [supabase.com](https://supabase.com)
2. Create new project
3. Choose region closest to users
4. Note project URL and keys

### 2. Database Setup
```sql
-- Run the migration file
-- supabase/migrations/001_initial_schema.sql
```

### 3. Edge Functions
```bash
# Deploy RNG function
supabase functions deploy rng

# Deploy match handler
supabase functions deploy match-handler
```

### 4. Environment Variables
Set in Supabase dashboard:
- `SUPABASE_URL`
- `SUPABASE_SERVICE_ROLE_KEY`

## 🌐 Vercel Deployment

### 1. Connect Repository
1. Import project from GitHub
2. Select RuneFlip repository
3. Configure build settings

### 2. Environment Variables
Add in Vercel dashboard:
```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
NEXT_PUBLIC_SOLANA_NETWORK=mainnet-beta
NEXT_PUBLIC_RPC_ENDPOINT=your_rpc_endpoint
```

### 3. Domain Setup
1. Add custom domain in Vercel
2. Configure DNS records
3. Enable SSL certificate

## 🔒 Security Checklist

- [ ] Environment variables secured
- [ ] RLS policies enabled
- [ ] CORS configured properly
- [ ] Rate limiting implemented
- [ ] SSL certificate active
- [ ] Security headers configured

## 📊 Monitoring

### Analytics Setup
1. Google Analytics (optional)
2. Vercel Analytics
3. Supabase Analytics
4. Custom error tracking

### Performance Monitoring
- Core Web Vitals
- API response times
- Database query performance
- User experience metrics

## 🔄 CI/CD Pipeline

### GitHub Actions
```yaml
# .github/workflows/deploy.yml
name: Deploy to Production
on:
  push:
    branches: [main]
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
      - run: npm ci
      - run: npm run build
      - run: npm run test
```

## 🚨 Troubleshooting

### Common Issues
1. **Build Failures**: Check TypeScript errors
2. **Database Errors**: Verify RLS policies
3. **Wallet Issues**: Check network configuration
4. **Performance**: Optimize images and code splitting

### Debug Commands
```bash
# Check build locally
npm run build

# Type checking
npm run type-check

# Test database connection
npm run test:db
```

## 📈 Scaling Considerations

### Database Optimization
- Index frequently queried columns
- Implement connection pooling
- Monitor query performance
- Set up read replicas if needed

### Frontend Optimization
- Enable Vercel Edge Functions
- Implement proper caching
- Optimize bundle size
- Use CDN for static assets

## 🔐 Backup Strategy

### Database Backups
- Automated daily backups
- Point-in-time recovery
- Cross-region replication
- Regular restore testing

### Code Backups
- Git repository backups
- Environment variable backups
- Documentation backups
- Deployment configuration backups

## 📞 Support

For deployment issues:
- Check Vercel logs
- Review Supabase logs
- Monitor error tracking
- Contact support if needed

---

**🎯 Ready to deploy? Follow this guide step by step for a successful production deployment!**
