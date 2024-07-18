import { createDatabase, getDatabases, getDatabaseById } from 'azion/sql';

const getDatabase = async () => {
  const dbName = 'my-database';
  const dbs = await getDatabases();

  let db = dbs.find((database) => database.name === dbName);
  if (!db) {
    db = await createDatabase(dbName);
  } else {
    db = await getDatabaseById(db.id);
  }

  const tableQuery = 'CREATE TABLE IF NOT EXISTS users (id INT PRIMARY KEY, name VARCHAR(100));';
  await db.execute([tableQuery]);

  const users = await db.query(['SELECT * FROM users']);

  if (users.rows.length === 0) {
    const insertUser = await db.query(["INSERT INTO users (id, name) VALUES (1, 'John Doe');"]);
    console.log('User added:', insertUser);
  } else {
    console.log('User already exists:', users);
  }
  console.log(users);
  return {
    databases: dbs,
    createTableQuery: tableQuery,
    selectUsersQuery: 'SELECT * FROM users',
    users: users?.rows || []
  };
};

export default getDatabase;