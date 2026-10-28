import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { resolve, join, dirname } from 'node:path';
import { spawnSync } from 'node:child_process';
import { fullstackCurriculum } from '../src/fullstack/curriculum.js';

const root = resolve('tmp/prisma-validation');
const dotenv = await readFile(join(root, '.env'), 'utf8');
const connection = dotenv.match(/^DATABASE_URL=["']?([^\r\n"']+)/m)?.[1];
const url = new URL(connection);
if (!['127.0.0.1', 'localhost'].includes(url.hostname) || url.pathname !== '/fullstack_lab') {
  throw new Error('Validation requires the isolated local fullstack_lab database');
}
const project = fullstackCurriculum.find(item => item.id === 'fs-15');
for (const [path, contents] of Object.entries(project.solution)) {
  await mkdir(dirname(join(root, path)), { recursive: true });
  await writeFile(join(root, path), contents);
}
const npm = process.platform === 'win32' ? 'npm.cmd' : 'npm';
const env = { ...process.env, DATABASE_URL: connection };
function npmRun(args) {
  const result = spawnSync(npm, args, { cwd: root, env, stdio: 'inherit', shell: process.platform === 'win32' });
  if (result.status) process.exit(result.status);
}
npmRun(['install', '--no-audit', '--no-fund']);
npmRun(['exec', '--', 'prisma', 'generate']);
npmRun(['run', 'db:setup']);
npmRun(['test']);
function nodeRun(script) {
  const result = spawnSync(process.execPath, ['-e', script], { cwd: root, env, stdio: 'inherit' });
  if (result.status) process.exit(result.status);
}
// Two different processes prove that the data survives process shutdown.
nodeRun(`const {PrismaClient}=require('@prisma/client');const p=new PrismaClient();p.customer.upsert({where:{email:'persistence@example.com'},update:{},create:{name:'Persistence check',email:'persistence@example.com'}}).then(()=>console.log('Created persistent row')).finally(()=>p.$disconnect());`);
nodeRun(`const {PrismaClient}=require('@prisma/client');const p=new PrismaClient();(async()=>{const row=await p.customer.findUnique({where:{email:'persistence@example.com'}});if(row?.name!=='Persistence check')throw new Error('Persistence check failed');await p.customer.delete({where:{id:row.id}});console.log('PASS: second process read persistent database row');})().catch(e=>{console.error(e.message);process.exitCode=1;}).finally(()=>p.$disconnect());`);
console.log('PASS: Prisma CRUD and persistence on local MySQL/MariaDB');
