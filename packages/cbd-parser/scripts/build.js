import replace from '@rollup/plugin-replace';
import { build } from 'vite';

import { resolveFile } from '../../../scripts/helper.js';

const artifacts = [
    { name: 'cbd', entry: resolveFile('./packages/cbd-parser/src/cbd.ts') },
    { name: 'main', entry: resolveFile('./packages/cbd-parser/src/worker/main/worker.ts') },
    { name: 'sub', entry: resolveFile('./packages/cbd-parser/src/worker/sub/worker.ts') },
];

const main = async () => {
    for (const [index, { name, entry }] of artifacts.entries()) {
        await build({
            configFile: false,
            build: {
                target: 'es2020',
                emptyOutDir: index === 0,
                outDir: 'lib',
                lib: {
                    entry,
                    name: 'cbd',
                    formats: ['es'],
                    fileName: () => `${name}.js`,
                },
                sourcemap: true,
                watch: process.argv.includes('--watch') ? { include: 'src/**' } : null,
            },
            plugins: [
                {
                    ...replace({
                        preventAssignment: true,
                        values: {
                            __MAIN_WORKER_SOURCE: '"main.js"',
                            __SUB_WORKER_SOURCE: '"sub.js"',
                        },
                    }),
                    enforce: 'post',
                },
            ],
        });
    }
};

main();
