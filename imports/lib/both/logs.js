import { Meteor } from 'meteor/meteor';
import { Logger }     from 'meteor/ostrio:logger';
import { LoggerFile } from 'meteor/ostrio:loggerfile';
import DateUtil from '../utils/dateUtil.js';


const optionFile = {
  fileNameFormat: function(time) {
    // Create log-files hourly
    const date = new DateUtil(time);
	const fileDateFormat = date.dateFormat("YYYY-MM-DD");
    
    return `serverLog_${fileDateFormat}.log`;
  },
  format: function(time, level, message, data, userId = Meteor.userId()) {
    // Omit Date and hours from messages
    const date = new DateUtil(time);
	const fileDateFormat = date.dateFormat("YYYYMMDD - HH:mm:ss");        

    return `[ ${fileDateFormat} ] - [ ${level} ] | User: ${userId} | | ${message} | \r\n${data} \r\n`;
  },
  path: `${Meteor.absolutePath}/data/logs/` // Use absolute storage path
};

const optionEnable = {
  enable: true,
  filter: ['ERROR', 'FATAL', 'WARN', 'DEBUG', 'INFO', 'TRACE'], // Filters: 'ERROR', 'FATAL', 'WARN', 'DEBUG', 'INFO', 'TRACE', '*'
  client: true, // Set to `false` to avoid Client to Server logs transfer
  server: true  // Allow logging on server
};

const Log = new Logger();
const LogFile = new LoggerFile(Log, optionFile).enable(optionEnable);

export default Log;

/*
  message {String} - Any text message
  data    {Object} - [optional] Any additional info as object
  userId  {String} - [optional] Current user id
 */

//Use with throw
//throw log.error(message, data, userId);
