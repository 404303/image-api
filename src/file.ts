import { promises as fs } from 'fs';
import path from 'path';
import imgSharp from './utils/ImgSharp';
import { ImgQuery } from './utils/queryValidation';

//paths
export const ImagesPath = path.resolve(__dirname, '../assets/images');
export const ImagesThumbPath = path.resolve(__dirname, '../assets/thumbs');

export const getImagesPath = async (query: ImgQuery): Promise<any> => {
  const originalImg = path.resolve(ImagesPath, `${query.filename}.jpg`);
  const thumbImg = path.resolve(
    ImagesThumbPath,
    `${query.filename}-${query.width}x${query.height}.jpg`,
  );
  const FilePath: string = query.height && query.width ? thumbImg : originalImg;
  try {
    //check image existence.
    await fs.access(FilePath);
  } catch {
    await imgSharp({
      original: originalImg,
      des: thumbImg,
      width: Number(query.width),
      height: Number(query.height),
    });
    console.log(`img created ${FilePath}`);
  }
  return FilePath;
};
