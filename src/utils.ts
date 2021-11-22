import path from 'path';
import { AnimateTitleMetaParser } from 'animate-metainfo-parser-cn';
const mediaExtArr = ['mp4', 'mkv'].map(ext => `.${ext}`);
export const needRename = (name: string) => {
  if (!mediaExtArr.includes(path.extname(name))) return false;
  const metaInfo = new AnimateTitleMetaParser(name);
  if (metaInfo.episode === -1) return false;
  const correctNameReg = /E\d{1,3}/gim;
  return !correctNameReg.test(name);
};
