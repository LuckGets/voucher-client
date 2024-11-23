import path from 'path';
const buildEslintCommand = (filenames) => {
  return `next lint --fix --file ${filenames
    .filter((f) => f.includes('/src/'))
    .map((f) => path.relative(process.cwd(), f))
    .join(' --file ')}`;
};

const config = {
  'src/**/*.{js,jsx,ts,tsx}': [buildEslintCommand, 'prettier --write'],
  '*.{json,css,md}': 'prettier --write',
};

export default config;
