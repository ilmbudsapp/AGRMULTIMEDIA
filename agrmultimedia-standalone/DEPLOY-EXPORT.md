# Deployment export folder

The production-ready standalone repo lives at:

```
../theenchantedchronicles/
```

See that folder's **DEPLOYMENT.md** for GitHub, Vercel, and DNS instructions.

To refresh the export from this monorepo:

```bash
node scripts/scaffold-standalone.mjs
# then copy agrmultimedia-standalone/ to ../theenchantedchronicles/ (exclude node_modules, .next, out)
```
