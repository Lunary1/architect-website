import mysql from "mysql2/promise";

export async function query({ query, values = [] }) {
  const dbconnection = await mysql.createConnection({
    host: "ID317986_kindt.db.webhosting.be",
    database: "ID317986_kindt",
    user: "ID317986_kindt",
    password: "8rT206W3f6ndvlK45D0A",
  });
  try {
    const [results] = await dbconnection.execute(query, values);
    dbconnection.end;
    return results;
  } catch (error) {
    throw error(error.message);
    return { error };
  }
}
