import WasmImageProcessor from 'azion/wasm-image-processor';

async function handleRequest(request) {
  const {
    loadImage,
    resize,
    getImageResponse,
  } = WasmImageProcessor;

  // or use storage path like '/images/shirt.png'
  // await loadImage('/images/shirt.png');
  await loadImage('https://images.adsttc.com/media/images/5940/f007/b22e/38af/1f00/0066/large_jpg/Azion_-_Photos_by_Gabriel_Carpes_(10).jpg');
  // can be percent or dimensions
  await resize(0.1, 0.1);
  // can be png, webp and jpeg (with quality arg)
  const resp = getImageResponse('png');

  return resp;
}

export default async function main(event) {
  return handleRequest(event?.request);
}
