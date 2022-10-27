import * as fs from 'fs/promises';

export const loader = async (name: string) => {
  return await fs.readFile(`./articles/${name}/content.md`);
}