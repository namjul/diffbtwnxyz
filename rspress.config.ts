import * as path from 'node:path';
import { defineConfig } from 'rspress/config';

export default defineConfig({
  root: path.join(__dirname, 'content'),
  title: 'Difference between XYZ',
  themeConfig: {
    socialLinks: [ ],
  },
});
