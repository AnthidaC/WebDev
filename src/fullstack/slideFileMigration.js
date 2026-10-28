// Upgrade earlier course work without replacing learner implementations.
export function migrateSlideFiles(saved, starter) {
  if (!saved?.files || !Object.keys(saved.files).some(path => path.endsWith('.cjs'))) return saved;
  const paths = Object.keys(saved.files);
  if (paths.some(path => path.endsWith('.cjs') && Object.hasOwn(saved.files, path.replace(/\.cjs$/, '.js')))) {
    return { ...saved, migrationNotice: 'งานเดิมมีทั้ง .js และ .cjs ชื่อเดียวกัน จึงเก็บไว้ครบก่อน ใช้ ZIP สำรองแล้วเลือกไฟล์ที่จะใช้เองได้ โครงเริ่มใหม่ใช้ .js ตามสไลด์' };
  }
  const files = Object.fromEntries(Object.entries(saved.files).map(([path, content]) => [path.replace(/\.cjs$/, '.js'), content.replace(/\.cjs\b/g, '.js')]));
  for (const path of ['backend/package.json', 'scripts/package.json', 'prisma/package.json']) {
    if (!Object.hasOwn(files, path) && starter[path]) files[path] = starter[path];
  }
  return { ...saved, files, check: null, migrationNotice: 'ปรับไฟล์ Node เดิมเป็น .js ตามสไลด์ พร้อมแก้ path ที่อ้างถึงแล้ว โค้ดที่คุณเขียนยังอยู่ กรุณารันและตรวจงานใหม่' };
}
