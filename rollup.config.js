
import babel from '@rollup/plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import terser from '@rollup/plugin-terser';
import json from 'rollup-plugin-json';
import fs from 'fs';
import path from 'path';

export default {
    buildStart() {
        const distPath = path.resolve(__dirname, 'dist');
        if (fs.existsSync(distPath)) {
            fs.rmdirSync(distPath, { recursive: true });
        }
    },
    input: './src/main.ts',
    output: [
        {
            name: 'utils-logger',
            file: './dist/index.js',
            format: 'umd'
        },
        {
            file: './dist/cjs/index.js',
            format: 'cjs'
        },
        {
            file: './dist/esm/index.js',
            format: 'esm'
        },
    ],
    plugins: [
        json({
            include: ['package.json']
        }),
        babel({
            exclude: 'node_modules/**'
        }),
        resolve(),
        commonjs(),
        typescript(),
        terser(),
    ]
}