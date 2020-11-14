import { NgxLoggerLevel } from 'ngx-logger';

export const environment = {
  production: false,
  apiBase: '/api',
  apiUrl: 'http://localhost:4200/api',
  logLevel: NgxLoggerLevel.DEBUG,
  serverLogLevel: NgxLoggerLevel.DEBUG,
  disableConsoleLogging: false
};
