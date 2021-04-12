import * as fs from 'fs';
import { write } from 'lighthouse/lighthouse-cli/printer';

const directory = 'tmp/lighthouse/';

export class LighthouseReport {
  private static config: any;
  private static results: any;

  public static async generateReport(results: any, config: any): Promise<void> {
    this.config = config;
    this.results = results;

    if (this.results.lhr.runtimeError) {
      this.handleError(this.results.lhr.runtimeError);
      return;
    } else {
      await this.writeFile('html');
      await this.writeFile('json');
    }
  }

  private static createFileName(fileExtension: string): string {
    const { emulatedFormFactor } = this.config.settings;
    return `${emulatedFormFactor}.${fileExtension}`;
  }

  private static async writeFile(fileType: string): Promise<void> {
    if (this.results.report.length) {
      const fileName = this.createFileName(fileType);
      const results = fileType === 'html' ? this.results.report[0] : this.results.report[1];

      fs.mkdirSync(directory, { recursive: true });

      return write(results, fileType, `${directory}${fileName}`).catch((error: any) =>
        this.handleError(error)
      );
    }

    return null;
  }

  private static handleError(error: Error): void {
    console.log(error);
  }
}
