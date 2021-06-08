import * as fs from 'fs';
import * as path from 'path';

const exec = require('child_process').exec;

export class PostBuild {
  private static directory: string;
  private static data = [];
  private static files: string[];

  public static run(dir = './dist/tour-of-heroes/browser'): void {
    this.directory = dir;
    this.files = this.getFilesFromPath();

    if (!this.files && this.files.length <= 0) {
      console.log('Nothing to purge');
      return;
    }

    this.files.map(f => {
      const originalSize = this.getFileSizeInKiloBytes(`${dir}/${f}`) + 'kb';
      const fileData = { file: f, originalSize: originalSize, newSize: '' };
      this.data.push(fileData);
    });

    console.log('Run PurgeCSS...');

    this.purge();
  }

  private static purge(): void {
    exec(
      `purgecss -css ${this.directory}/*.css --content ${this.directory}/index.html ${this.directory}/*.js -o ${this.directory}/`,

      () => {
        this.data.map(d => {
          const newSize = this.getFileSizeInKiloBytes(`${this.directory}/${d.file}`) + 'kb';
          d.newSize = newSize;
        });

        console.table(this.data);
      }
    );
  }

  private static getFilesFromPath(): any[] {
    const files = fs.readdirSync(this.directory);
    return files.filter(f => path.extname(f).toLowerCase() === '.css');
  }

  private static getFileSizeInKiloBytes(filename: string) {
    const stats = fs.statSync(filename);
    const fileSizeInBytes = stats.size / 1024;
    return fileSizeInBytes.toFixed(2);
  }
}

PostBuild.run();
