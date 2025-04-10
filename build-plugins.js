import { build, defineConfig } from 'vite';
import path from 'path';
import { readdir } from 'fs/promises';

const root = process.cwd();

const pluginTypes = ['editors', 'menu', 'validators', 'wizards'];

async function buildAll() {
    for (const pluginType of pluginTypes) {
        const folderPath = path.resolve(root, 'apps/plugins/src', pluginType);
        let entries;
        try {
            entries = await readdir(folderPath);
        } catch (error) {
            console.error(`Error reading ${folderPath}:`, error);
            continue;
        }

        const tsFiles = entries.filter(file => file.endsWith('.ts'));

        for (const file of tsFiles) {
            const filePath = path.resolve(folderPath, file);
            const baseName = path.basename(file, '.ts');
            const pluginName = `${baseName.charAt(0).toUpperCase()}${baseName.slice(1)}Plugin`;
            const outFileName = baseName.toLowerCase(); // Kein Prefix, nur lowercase

            const config = defineConfig({
                build: {
                    lib: {
                        entry: filePath,
                        name: pluginName,
                        fileName: outFileName,
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

            console.log(`📦 Baue Plugin ${pluginName} aus ${pluginType}/${file}...`);
            await build(config);
            console.log(`✅ Fertig: ${outFileName}.js`);
        }
    }
}

buildAll();
