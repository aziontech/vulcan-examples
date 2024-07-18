import { createBucket, deleteBucket, getBucketByName, getBuckets } from 'azion/storage';

const demonstrateStorageOperations = async () => {
  const bucketName = 'my-example-bucket';
  const objectName = 'sample-file.txt';
  const initialContent = 'Hello, world!';
  const updatedContent = 'Hello, updated world!';

  // List all buckets
  const allBuckets = await getBuckets();
  console.log('Existing buckets:', allBuckets);

  // Get or create the bucket
  let bucket = await getBucketByName(bucketName);
  if (!bucket) {
    console.log(`Creating new bucket: ${bucketName}`);
    bucket = await createBucket(bucketName, 'read_write');
  }

  // List objects in the bucket
  const objectsInBucket = await bucket.getObjects();
  console.log('Objects in bucket:', objectsInBucket);

  // Create a new object
  const createdObject = await bucket.createObject(objectName, initialContent);
  console.log('Created object:', createdObject);

  // Retrieve the object
  
  const retrievedObject = await bucket.getObjectByKey(objectName);

  console.log('Object content:', retrievedObject);

  // Update the object
  const updatedObject = await bucket.updateObject(retrievedObject.key, updatedContent);
  console.log('Updated object:', updatedObject);

  // Delete the object
  // await bucket.deleteObject(objectName);
  // console.log('Object deleted successfully');

  // Delete the bucket (commented out for safety)
  // await deleteBucket(bucketName);
  // console.log('Bucket deleted successfully');

  return {
    allBuckets,
    objectsInBucket,
    createdObject,
    retrievedObject,
    updatedObject
  };
};

export default demonstrateStorageOperations;