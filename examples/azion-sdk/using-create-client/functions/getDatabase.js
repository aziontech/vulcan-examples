const getDatabase = async (client) => {
  const dbName = 'my-database';
  const dbs = await client.sql.getDatabases();

  let db = dbs.find((database) => database.name === dbName);
  if (!db) {
    db = await client.sql.createDatabase(dbName);
  } else {
    db = await client.sql.getDatabaseById(db.id);
  }

  const createTableQuery = 'CREATE TABLE IF NOT EXISTS users (id INT PRIMARY KEY, name VARCHAR(100));';
  await db.execute([createTableQuery]);

  const selectUsersQuery = 'SELECT * FROM users';
  const users = await db.query([selectUsersQuery]);

  if (users.rows.length === 0) {
    const insertUser = await db.query(["INSERT INTO users (id, name) VALUES (1, 'Tom Bombadil');"]);
    console.log('User added:', insertUser);
  } else {
    console.log('User already exists:', users);
  }
  console.log(users);
  return {
    databases: dbs,
    createTableQuery,
    selectUsersQuery,
    users: users?.rows
  };
};

export default getDatabase;