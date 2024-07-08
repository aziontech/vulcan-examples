import fs from "node:fs";
import fsPromises from "node:fs/promises";

const DIR_PATH = ".";
const FILE_PATH = `${DIR_PATH}/test.txt`;
const COPY_FILE_DEST = `${DIR_PATH}/copy.txt`;
const SECOND_COPY_FILE_DEST = `${DIR_PATH}/copy2.txt`;
const NEW_DIR_PATH = `abc`;

function runSyncFsOperations() {
  const {
    openSync,
    closeSync,
    statSync,
    lstatSync,
    readFileSync,
    readdirSync,
  } = fs;

  try {
    const fileDescriptor = openSync(FILE_PATH);
    closeSync(fileDescriptor);

    const stat = statSync(FILE_PATH);
    const lstat = lstatSync(FILE_PATH);
    console.log(`\n[sync] stat result: ${JSON.stringify(stat)}`);
    console.log(`\n[sync] lstat result: ${JSON.stringify(lstat)}`);

    const fileContent = readFileSync(FILE_PATH).toString();
    console.log(`\n[sync] file content: ${fileContent}`);

    const dirFiles = readdirSync(DIR_PATH);
    console.log(`\n[sync] dir files: ${dirFiles}`);
  } catch (err) {
    throw new Error(`[sync] ${err.message}`)
  }
}

async function runAsyncFsOperationsWithCallback() {
  const {
    open,
    close,
    stat,
    lstat,
    readFile,
    readdir,
    mkdir,
    rmdir,
    copyFile,
    cp,
  } = fs;

  open(FILE_PATH, (err, fd) => {
    if (err) {
      console.log(`[async - callback] error in open: ${err}`);
    } else {
      close(fd, (err) => {
        if (err) {
          console.log(`[async - callback] error in close: ${err}`);
        }
      });
    }
  });

  stat(FILE_PATH, (err, stats) => {
    if (err) {
      console.log(`[async - callback] error in stat: ${err}`);
    } else {
      console.log(`\n[async - callback] stat result: ${JSON.stringify(stats)}`);
    }
  });
  lstat(FILE_PATH, (err, stats) => {
    if (err) {
      console.log(`[async - callback] error in lstat: ${err}`);
    } else {
      console.log(`\n[async - callback] lstat result: ${JSON.stringify(stats)}`);
    }
  });

  readFile(FILE_PATH, (err, data) => {
    if (err) {
      console.log(`[async - callback] error in readFile: ${err}`);
    } else {
      console.log(`\n[async - callback] file data: ${data}`);
    }
  });

  copyFile(FILE_PATH, COPY_FILE_DEST, (err) => {
    if (err) {
      console.log(`[async - callback] error in copyFile: ${err}`);
    }
  });

  mkdir(NEW_DIR_PATH, (err) => {
    if (err) {
      console.log(`[async - callback] error in mkdir: ${err}`);
    } else {
      rmdir(NEW_DIR_PATH, (err2) => {
        if (err2) {
          console.log(`[async - callback] error in rmdir: ${err2}`);
        }
      });
    }
  });

  readdir(DIR_PATH, (err, files) => {
    if (err) {
      console.log(`[async - callback] error in readdir: ${err}`);
    } else {
      console.log(`\n[async - callback] dir files: ${files}`);
    }
  });

  cp(FILE_PATH, SECOND_COPY_FILE_DEST, (err) => {
    if (err) {
      console.log(`[async - callback] error in cp: ${err}`);
    }
  });
}

async function runAsyncFsOperationsWithPromises() {
  const {
    open,
    stat,
    lstat,
    readFile,
    readdir,
    mkdir,
    rmdir,
    copyFile,
    cp,
  } = fsPromises;

  try {
    const fd = await open(FILE_PATH);
    console.log(`\n[async - promise] open file result ${JSON.stringify(fd)}`);

    const stats = await stat(FILE_PATH);
    console.log(`\n[async - promise] stat result: ${JSON.stringify(stats)}`);

    const lstats = await lstat(FILE_PATH);
    console.log(`\n[async - promise] lstat result: ${JSON.stringify(lstats)}`);

    const data = await readFile(FILE_PATH);
    console.log(`\n[async - promise] file data: ${data}`);

    await copyFile(FILE_PATH, COPY_FILE_DEST);

    await mkdir(NEW_DIR_PATH);
    await rmdir(NEW_DIR_PATH);

    const files = await readdir(DIR_PATH);
    console.log(`\n[async - promise] dir files: ${files}`);

    await cp(FILE_PATH, SECOND_COPY_FILE_DEST);
  } catch (err) {
    throw new Error(`[async - promise] ${err.message}`)
  }
}

export default async function handler() {
  try {
    runSyncFsOperations();

    await runAsyncFsOperationsWithCallback();

    await runAsyncFsOperationsWithPromises();

    return new Response('OK!', {
      headers: new Headers([['Content-Type', 'text/plain']]),
      status: 200,
    });
  } catch (error) {
    console.log("Error:", error.message);

    return new Response(error.message, {
      headers: new Headers([['Content-Type', 'text/plain']]),
      status: 500,
    });
  }
}
