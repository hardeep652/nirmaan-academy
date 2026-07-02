const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

async function main() {
  const client = await pool.connect();
  try {
    const res = await client.query("SELECT id, student_name, image_url, admission_year FROM student_data WHERE student_name ILIKE '%modi%' OR student_name ILIKE '%krishna%'");
    console.log("Matching students:");
    console.log(JSON.stringify(res.rows, null, 2));

    const res2 = await client.query("SELECT id, student_name, image_url, admission_year FROM student_data WHERE admission_year = 2024");
    console.log("\n2024 students:");
    console.log(JSON.stringify(res2.rows, null, 2));
  } catch (err) {
    console.error(err);
  } finally {
    client.release();
    await pool.end();
  }
}

main();
