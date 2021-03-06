/**
 * @since 2017-01-06 16:39
 * @author vivaxy
 */

const log4js = require('log4js');
const fse = require('fs-extra');

const log4jsConfig = require('../conf/log4js');

const {logFile} = log4jsConfig;

fse.ensureFileSync(logFile);

log4js.configure(log4jsConfig);

const logger = log4js.getLogger();

module.exports = logger;
