/**
 * Autogenerated by Avro
 * 
 * DO NOT EDIT DIRECTLY
 */

var payments_BatchCardTotal = require("../payments/BatchCardTotal");
var payments_BatchTotalType = require("../payments/BatchTotalType");

/**
* @constructor
* @memberof payments
*/
var DeviceTotalStats = function() {
  this._class_ = DeviceTotalStats;
  this.deviceId = undefined;
  this.deviceSerial = undefined;
  this.deviceName = undefined;
  this.terminalId = undefined;
  this.sales = undefined;
  this.refunds = undefined;
  this.net = undefined;
  this.giftCardLoads = undefined;
  this.giftCardCashOuts = undefined;
  this.tax = undefined;
  this.tips = undefined;
  this.cardTotals = undefined;
};


/**
* Set the field value
* Device ID corresponding to these stats
*
* @memberof payments.DeviceTotalStats
* @param {Number} deviceId must be a long integer
*/
DeviceTotalStats.prototype.setDeviceId = function(deviceId) {
  this.deviceId = deviceId;
};

/**
* Get the field value
* Device ID corresponding to these stats
* @memberof payments.DeviceTotalStats
* @return {Number} must be a long integer
*/
DeviceTotalStats.prototype.getDeviceId = function() {
  return this.deviceId;
};

/**
* Set the field value
* Device serial number corresponding to these stats
*
* @memberof payments.DeviceTotalStats
* @param {String} deviceSerial 
*/
DeviceTotalStats.prototype.setDeviceSerial = function(deviceSerial) {
  this.deviceSerial = deviceSerial;
};

/**
* Get the field value
* Device serial number corresponding to these stats
* @memberof payments.DeviceTotalStats
* @return {String} 
*/
DeviceTotalStats.prototype.getDeviceSerial = function() {
  return this.deviceSerial;
};

/**
* Set the field value
* Device name corresponding to these stats
*
* @memberof payments.DeviceTotalStats
* @param {String} deviceName 
*/
DeviceTotalStats.prototype.setDeviceName = function(deviceName) {
  this.deviceName = deviceName;
};

/**
* Get the field value
* Device name corresponding to these stats
* @memberof payments.DeviceTotalStats
* @return {String} 
*/
DeviceTotalStats.prototype.getDeviceName = function() {
  return this.deviceName;
};

/**
* Set the field value
* Terminal ID of Device corresponding to these stats
*
* @memberof payments.DeviceTotalStats
* @param {String} terminalId 
*/
DeviceTotalStats.prototype.setTerminalId = function(terminalId) {
  this.terminalId = terminalId;
};

/**
* Get the field value
* Terminal ID of Device corresponding to these stats
* @memberof payments.DeviceTotalStats
* @return {String} 
*/
DeviceTotalStats.prototype.getTerminalId = function() {
  return this.terminalId;
};

/**
* Set the field value
* @memberof payments.DeviceTotalStats
* @param {payments.BatchTotalType} sales 
*/
DeviceTotalStats.prototype.setSales = function(sales) {
  this.sales = sales;
};

/**
* Get the field value
* @memberof payments.DeviceTotalStats
* @return {payments.BatchTotalType} 
*/
DeviceTotalStats.prototype.getSales = function() {
  return this.sales;
};

/**
* Set the field value
* @memberof payments.DeviceTotalStats
* @param {payments.BatchTotalType} refunds 
*/
DeviceTotalStats.prototype.setRefunds = function(refunds) {
  this.refunds = refunds;
};

/**
* Get the field value
* @memberof payments.DeviceTotalStats
* @return {payments.BatchTotalType} 
*/
DeviceTotalStats.prototype.getRefunds = function() {
  return this.refunds;
};

/**
* Set the field value
* @memberof payments.DeviceTotalStats
* @param {payments.BatchTotalType} net 
*/
DeviceTotalStats.prototype.setNet = function(net) {
  this.net = net;
};

/**
* Get the field value
* @memberof payments.DeviceTotalStats
* @return {payments.BatchTotalType} 
*/
DeviceTotalStats.prototype.getNet = function() {
  return this.net;
};

/**
* Set the field value
* @memberof payments.DeviceTotalStats
* @param {payments.BatchTotalType} giftCardLoads 
*/
DeviceTotalStats.prototype.setGiftCardLoads = function(giftCardLoads) {
  this.giftCardLoads = giftCardLoads;
};

/**
* Get the field value
* @memberof payments.DeviceTotalStats
* @return {payments.BatchTotalType} 
*/
DeviceTotalStats.prototype.getGiftCardLoads = function() {
  return this.giftCardLoads;
};

/**
* Set the field value
* @memberof payments.DeviceTotalStats
* @param {payments.BatchTotalType} giftCardCashOuts 
*/
DeviceTotalStats.prototype.setGiftCardCashOuts = function(giftCardCashOuts) {
  this.giftCardCashOuts = giftCardCashOuts;
};

/**
* Get the field value
* @memberof payments.DeviceTotalStats
* @return {payments.BatchTotalType} 
*/
DeviceTotalStats.prototype.getGiftCardCashOuts = function() {
  return this.giftCardCashOuts;
};

/**
* Set the field value
* @memberof payments.DeviceTotalStats
* @param {payments.BatchTotalType} tax 
*/
DeviceTotalStats.prototype.setTax = function(tax) {
  this.tax = tax;
};

/**
* Get the field value
* @memberof payments.DeviceTotalStats
* @return {payments.BatchTotalType} 
*/
DeviceTotalStats.prototype.getTax = function() {
  return this.tax;
};

/**
* Set the field value
* @memberof payments.DeviceTotalStats
* @param {payments.BatchTotalType} tips 
*/
DeviceTotalStats.prototype.setTips = function(tips) {
  this.tips = tips;
};

/**
* Get the field value
* @memberof payments.DeviceTotalStats
* @return {payments.BatchTotalType} 
*/
DeviceTotalStats.prototype.getTips = function() {
  return this.tips;
};

/**
* Set the field value
* @memberof payments.DeviceTotalStats
* @param {Array.<payments.BatchCardTotal>} cardTotals An array of 
*/
DeviceTotalStats.prototype.setCardTotals = function(cardTotals) {
  this.cardTotals = cardTotals;
};

/**
* Get the field value
* @memberof payments.DeviceTotalStats
* @return {Array.<payments.BatchCardTotal>} An array of 
*/
DeviceTotalStats.prototype.getCardTotals = function() {
  return this.cardTotals;
};

/**
* @memberof payments.DeviceTotalStats
* @private
*/
DeviceTotalStats.prototype.getMetaInfo = function(fieldName) {
  var curclass = this._class_;
  do {
    var fieldMetaInfo = curclass._meta_.fields[fieldName];
    if(fieldMetaInfo) {
      return fieldMetaInfo;
    }
    if(curclass._meta_._superMeta_) {
      curclass = curclass._meta_._superMeta_._class_;
    } else {
      curclass = null;
    }
  } while(curclass);
  return null;
};

DeviceTotalStats.prototype.toString = function() {
  return JSON.stringify(this);
};

DeviceTotalStats._meta_ =  {fields:  {}};
DeviceTotalStats._meta_._class_ =  DeviceTotalStats;
DeviceTotalStats._meta_.fields["deviceId"] = {};
DeviceTotalStats._meta_.fields["deviceId"].type = Number;
DeviceTotalStats._meta_.fields["deviceSerial"] = {};
DeviceTotalStats._meta_.fields["deviceSerial"].type = String;
DeviceTotalStats._meta_.fields["deviceName"] = {};
DeviceTotalStats._meta_.fields["deviceName"].type = String;
DeviceTotalStats._meta_.fields["terminalId"] = {};
DeviceTotalStats._meta_.fields["terminalId"].type = String;
DeviceTotalStats._meta_.fields["sales"] = {};
DeviceTotalStats._meta_.fields["sales"].type = payments_BatchTotalType;
DeviceTotalStats._meta_.fields["refunds"] = {};
DeviceTotalStats._meta_.fields["refunds"].type = payments_BatchTotalType;
DeviceTotalStats._meta_.fields["net"] = {};
DeviceTotalStats._meta_.fields["net"].type = payments_BatchTotalType;
DeviceTotalStats._meta_.fields["giftCardLoads"] = {};
DeviceTotalStats._meta_.fields["giftCardLoads"].type = payments_BatchTotalType;
DeviceTotalStats._meta_.fields["giftCardCashOuts"] = {};
DeviceTotalStats._meta_.fields["giftCardCashOuts"].type = payments_BatchTotalType;
DeviceTotalStats._meta_.fields["tax"] = {};
DeviceTotalStats._meta_.fields["tax"].type = payments_BatchTotalType;
DeviceTotalStats._meta_.fields["tips"] = {};
DeviceTotalStats._meta_.fields["tips"].type = payments_BatchTotalType;
DeviceTotalStats._meta_.fields["cardTotals"] = {};
DeviceTotalStats._meta_.fields["cardTotals"].type = Array;
DeviceTotalStats._meta_.fields["cardTotals"].elementType = payments_BatchCardTotal;

//
// Expose the module.
//
if ('undefined' !== typeof module) {
module.exports = DeviceTotalStats;
}
