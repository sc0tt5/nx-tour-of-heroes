import { NgxLoggerLevel } from 'ngx-logger';

export const environment = {
  production: true,
  apiUrl: 'http://localhost:3333/api', // this would not be localhost in a real app
  logLevel: NgxLoggerLevel.OFF,
  serverLogLevel: NgxLoggerLevel.ERROR,
  disableConsoleLogging: true
};
