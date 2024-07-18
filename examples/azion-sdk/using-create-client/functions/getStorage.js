const getStorageExample = async (client) => {
  const testBucketName = "ola-pessoal";
  const testObjectName = "test-object";
  const testFileContent = "Hello, world!";

  const buckets = await client.storage.getBuckets();

  let bucket = await client.storage.getBucketByName(testBucketName);
  if (!bucket) {
    bucket = await client.storage.createBucket(testBucketName, "read_write");
  }

  const objects = await bucket.getObjects();
  const uploadResponse = await bucket.createObject(
    testObjectName,
    testFileContent
  );
  const object = await bucket.getObjectByKey(testObjectName);

  const newContent = "Hello, updated world!";
  const updateResponse = await bucket.createObject(testObjectName, newContent);
  const deleteObjectResponse = await bucket.deleteObject(testObjectName);
  // const deleteBucketResponse = await client.storage.deleteBucket(testBucketName);

  return {
    buckets,
    objects,
    uploadResponse,
    object,
    updateResponse,
    deleteObjectResponse,
  };
};

export default getStorageExample;
