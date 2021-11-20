import path from 'path';
const mediaExtArr = ['mp4', 'mkv'].map(ext => `.${ext}`);
export const needRename = (name: string) => {
  if (!mediaExtArr.includes(path.extname(name))) return false;
  const correctNameReg = /E\d{1,3}/gim;
  return !correctNameReg.test(name);
};
