import { getImagesPath } from '../file';
import { queryValidation } from '../utils/queryValidation';

describe('test the incoming input from the user', (): void => {
  it('should raise error because of the width', async (): Promise<void> => {
    const error = await queryValidation({
      filename: 'encenadaport',
      width: '-100',
      height: '500',
    });
    expect(error).not.toBeNull();
  });

  it('should raise error because of the file name is not exist', async (): Promise<void> => {
    const test = await queryValidation({
      filename: '123',
      width: '100',
      height: '500',
    });
    expect(test).not.toBeNull();
  });
  it('valid input should return null if success', async (): Promise<void> => {
    const test = await queryValidation({
      filename: 'palmtunnel',
      width: '100',
      height: '500',
    });
    expect(test).toBeNull();
  });
});
describe('test get image path', (): void => {
  it('valid input should return a string', async (): Promise<void> => {
    const error = await getImagesPath({
      filename: 'encenadaport',
      width: '1000',
      height: '500',
    });
    expect(error).not.toBeNull();
  });
});
