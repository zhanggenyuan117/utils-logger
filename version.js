#!/bin/sh

import fs from 'fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

try {
    const filePath = path.join(__dirname, 'package.json')
    let p = fs.readFileSync(filePath,'utf8')
    let pData = JSON.parse(p)
    let l = pData.version.split('.')
    pData.version = [l[0], l[1], Number(l[2]) + 1].join('.')
    const updatePackage = JSON.stringify(pData, null, 2)
    fs.writeFileSync(filePath, updatePackage, 'utf8')
    
} catch (error) {
    console.log(error);
}