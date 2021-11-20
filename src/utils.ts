export const needRename = (name: string) => {
  const correctNameReg = /E\d{1,3}/gim;
  return !correctNameReg.test(name);
};
