import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
    resolve: {
        alias: {
            // Point to the root of the 'open-scd' package
            '@openscd/open-scd': path.resolve(__dirname, 'libs/openscd/open-scd'),
            '@openscd/core': path.resolve(__dirname, 'libs/openscd/core'),
            '@openscd/xml': path.resolve(__dirname, 'libs/openscd/xml/src')
        },
    },
    build: {
        lib: {
            entry: path.resolve(__dirname, 'apps/plugins/src/editors/Substation.ts'),
            name: 'Substation',
            fileName: 'substation',
            formats: ['es']
        },
        rollupOptions: {
            output: {
                inlineDynamicImports: true
            }
        },
        target: 'esnext'
    }
});
