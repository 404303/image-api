import { promises as fs } from 'fs';
import path from 'path';
import { ImagesPath } from '../file';

export interface ImgQuery {
  filename?: string;
  width?: string;
  height?: string;
}

export const queryValidation = async (
  query: ImgQuery,
): Promise<string | null> => {
  // invalid file name.
  if (!query.filename) {
    return 'please enter image name';
  }
  // vaild file name.
  if (query.filename) {
    try {
      await fs.access(path.resolve(ImagesPath, `${query.filename}.jpg`));
    } catch {
      return 'image not found in images folder';
    }
  }
  // vaild file name but not provide any height and width.
  if (query.filename && !query.height && !query.width) {
    return null;
  }
  // invaild height and width.
  if (Number.isNaN(Number(query.height)) || Number.isNaN(Number(query.width))) {
    return 'width and height must be a number';
  }
  // provide a nigative height and width.
  if (Number(query.height) < 1 || Number(query.width) < 1) {
    return 'width and height must be postive number';
  }
  return null;
};
