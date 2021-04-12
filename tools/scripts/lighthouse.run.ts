import * as chromeLauncher from 'chrome-launcher';
import { LaunchedChrome } from 'chrome-launcher';
import * as lighthouse from 'lighthouse';
import * as ora from 'ora';

import { options, perfConfig } from './lighthouse.config';
import { LighthouseReport } from './lighthouse.report';

const page = 'http://localhost:3333/heroes';

export class Lighthouse {
  private static chrome: LaunchedChrome;
  private static config: object;
  private static spinner = ora();
  private static url: string;

  public static async runLighthouse(url: string, config: any): Promise<void> {
    this.config = config;
    this.url = url;

    this.startChrome()
      .then(() => this.startLighthouse())
      .catch((error: any) => this.handleError(error));
  }

  private static async createReport(results: any): Promise<void> {
    this.spinner.start('Creating reports...');

    await LighthouseReport.generateReport(results, this.config)
      .then(() => this.spinner.succeed('Reports are ready!'))
      .catch((error: any) => this.handleError(error));
  }

  private static async startChrome(): Promise<any> {
    this.spinner.start('Starting Chrome...');

    await chromeLauncher
      .launch({ chromeFlags: options.chromeFlags })
      .then((chrome: LaunchedChrome) => {
        this.spinner.succeed('Chrome started');
        this.chrome = chrome;
        options.port = chrome.port;
      })
      .catch((error: any) => this.handleError(error));
  }

  private static async startLighthouse(): Promise<any> {
    this.spinner.start('Running Lighthouse audit...');

    await lighthouse(this.url, options, this.config)
      .then((results: any) =>
        this.chrome.kill().then(() => {
          this.spinner.succeed('Lighthouse audit done');
          this.spinner.succeed('Chrome closed');
          if (results) {
            this.createReport(results);
          }
        })
      )
      .catch((error: any) => this.handleError(error));
  }

  private static handleError(error: Error): void {
    this.spinner.fail('Something went wrong');
    console.log(error);
  }
}

Lighthouse.runLighthouse(page, perfConfig);
