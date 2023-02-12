import express, { Request, Response } from 'express';
import { getImagesPath } from '../../file';
import { queryValidation } from '../../utils/queryValidation';

const images: express.Router = express.Router();

images.get('/', async (req: Request, res: Response): Promise<void> => {
  const valid = await queryValidation(req.query);
  if (valid) {
    res.status(406).send(valid);
    return;
  }
  const result: string = await getImagesPath(req.query);
  if (result) {
    res.sendFile(result);
  } else {
    res.send('File not Found!');
  }
  return;
});
export default images;
