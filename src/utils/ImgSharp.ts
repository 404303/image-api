import sharp from 'sharp';

interface SharpResize {
  original: string;
  des: string;
  width: number;
  height: number;
}
// proccess and create new image and filed to assets/thumbs.
const imgSharp = async (sharpRessize: SharpResize): Promise<string | null> => {
  try {
    await sharp(sharpRessize.original)
      .resize(sharpRessize.width, sharpRessize.height)
      .toFormat('jpeg')
      .toFile(sharpRessize.des);
    return null;
  } catch {
    return 'Image could not be processed.';
  }
};
export default imgSharp;
