/**
 * animate name +\
 *  seasion name +\
 *    具体的剧
 */
import { AnimateTitleMetaParser } from 'animate-metainfo-parser-cn';
import path from 'path';
import fs from 'fs';
import chalk from 'chalk';
import cron from 'node-cron';
import { needRename } from './utils';
const log = console.log;

const getName = (name: string) => {
  const meta = new AnimateTitleMetaParser(name);
  return `E${String('0' + meta.episode).slice(-2)} ${name}`;
};
const main = (baseDir: string, dryRun: boolean) => {
  const files = fs.readdirSync(baseDir);
  for (const file of files) {
    // console.log(file);
    if (fs.lstatSync(path.join(baseDir, file)).isDirectory()) {
      log(chalk.blue('>step into ' + file + '\\'));
      main(path.join(baseDir, file), dryRun);
    } else {
      if (needRename(file)) {
        const newName = getName(file);
        log(chalk.red(`[[rename]]: ${file} -> ${newName}`));
        if (!dryRun) {
          fs.renameSync(path.join(baseDir, file), path.join(baseDir, newName));
        }
      }
    }
  }
};

// run from command line
if (process.env.NODE_ENV === 'development') {
  main(path.resolve(__dirname, '../demo'), true);
} else {
  if (process.env.ANIMATE_DIR) {
    // first run, use dryMode
    log(
      chalk.blue(
        'First time, dry run mode, please check the result is expected'
      )
    );
    main(process.env.ANIMATE_DIR, true);
    log(
      chalk.blue('First round completed, next run will execute in 2 minutes.')
    );
    setTimeout(() => {
      main(process.env.ANIMATE_DIR as string, process.env.DRY_RUN === 'true');
      cron.schedule('* */4 * * *', () => {
        main(process.env.ANIMATE_DIR as string, process.env.DRY_RUN === 'true');
      });
    }, 1000 * 60 * 2);
  } else {
    console.error('请设置animate_dir环境变量');
    process.exit(-1);
  }
}
