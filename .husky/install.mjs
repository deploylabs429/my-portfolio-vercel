if (process.env.CI === 'true' || process.env.VERCEL === '1') {
  process.exit(0);
}

const { default: husky } = await import('husky');
husky();
