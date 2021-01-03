import { NgxLoggerLevel } from 'ngx-logger';

export const environment = {
  production: true,
  apiBase: '/api',
  apiUrl: 'http://localhost:4200/api',
  logLevel: NgxLoggerLevel.OFF,
  serverLogLevel: NgxLoggerLevel.ERROR,
  disableConsoleLogging: true
};
