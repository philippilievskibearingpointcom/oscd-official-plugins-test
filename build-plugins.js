import { build, defineConfig } from 'vite';
import path from 'path';

const root = process.cwd();

const plugins = [
    { entry: 'IED.ts', name: 'IedPlugin', file: 'ied-plugin' },
    { entry: 'Cleanup.ts', name: 'Cleanup', file: 'cleanup' },
    { entry: 'Communication.ts', name: 'Communication', file: 'communication' },
];

async function buildAll() {
    for (const { entry, name, file } of plugins) {
        const config = defineConfig({
            build: {
                lib: {
                    entry: path.resolve(root, 'apps/plugins/src/editors', entry),
                    name,
                    fileName: file,
                    formats: ['es'],
                },
                rollupOptions: {
                    output: {
                        inlineDynamicImports: true,
                    },
                },
                target: 'esnext',
                emptyOutDir: false,
                configFile: false,
            },
            resolve: {
                alias: {
                    '@openscd/open-scd': path.resolve(root, 'libs/openscd/open-scd'),
                    '@openscd/core': path.resolve(root, 'libs/openscd/core'),
                    '@openscd/xml': path.resolve(root, 'libs/openscd/xml/src'),
                },
            },
        });

        console.log(`📦 Building ${name}...`);
        await build(config);
        console.log(`✅ Done: ${file}.js`);
    }
}

buildAll();
