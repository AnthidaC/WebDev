import { readFileSync, writeFileSync } from 'node:fs';
import { zipSync, strToU8 } from 'fflate';
import { exams } from '../src/fullstack/curriculum.js';
const gearExam = exams.find(item => item.id === 'exam-campus-gear');

const files = Object.fromEntries(Object.entries(gearExam.starter).map(([path, text]) => [path, strToU8(text)]));
files['EXAM_REQUIREMENTS.md'] = strToU8(readFileSync(new URL('../src/fullstack/exams/campus-gear-requirements.md', import.meta.url), 'utf8'));
files['reference/index.html'] = strToU8(readFileSync(new URL('../public/exams/campus-gear/index.html', import.meta.url), 'utf8'));
files['reference/campus-gear-target.png'] = new Uint8Array(readFileSync(new URL('../public/exams/campus-gear/campus-gear-target.png', import.meta.url)));
files['README-OFFLINE.txt'] = strToU8('CAMPUS GEAR — OFFLINE EXAM PACK\n\n1. Extract this ZIP. Open EXAM_REQUIREMENTS.md and reference/index.html.\n2. reference/campus-gear-target.png is the target screenshot.\n3. Run npm install, npm run reset, npm run dev, npm test.\n4. The supplied package files are the starter project. Do not replace them with the reference preview.\n5. Demo password: Campus123! (admin@campus.test, mali@campus.test, niran@campus.test).\n\nThis practice exam stores data in a local JSON file; it does not require Docker, XAMPP, or a database server.');
writeFileSync(new URL('../public/exams/campus-gear-exam.zip', import.meta.url), zipSync(files, { level: 6 }));
console.log(`Built CAMPUS GEAR exam ZIP (${Object.keys(files).length} files).`);
