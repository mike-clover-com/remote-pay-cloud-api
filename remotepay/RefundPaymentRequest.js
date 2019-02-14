/**
 * Autogenerated by Avro
 * 
 * DO NOT EDIT DIRECTLY
 */

var remotepay_BaseRequest = require("../remotepay/BaseRequest");

/**
* @constructor
* @augments remotepay.BaseRequest
* @memberof remotepay
*/
var RefundPaymentRequest = function() {
  remotepay_BaseRequest.call(this);
  this._superClass_ = remotepay_BaseRequest;
  this._class_ = RefundPaymentRequest;
  this.fullRefund = undefined;
  this.amount = undefined;
  this.orderId = undefined;
  this.paymentId = undefined;
  this.disablePrinting = undefined;
  this.disableReceiptSelection = undefined;
  this.extras = undefined;
};

RefundPaymentRequest.prototype = Object.create(remotepay_BaseRequest.prototype);
RefundPaymentRequest.prototype.constructor = RefundPaymentRequest;

/**
* Set the field value
* If true, then it is a full refund.  The amount will be ignored.
*
* @memberof remotepay.RefundPaymentRequest
* @param {Boolean} fullRefund 
*/
RefundPaymentRequest.prototype.setFullRefund = function(fullRefund) {
  this.fullRefund = fullRefund;
};

/**
* Get the field value
* If true, then it is a full refund.  The amount will be ignored.
* @memberof remotepay.RefundPaymentRequest
* @return {Boolean} 
*/
RefundPaymentRequest.prototype.getFullRefund = function() {
  return this.fullRefund;
};

/**
* Set the field value
* Amount to be refunded
*
* @memberof remotepay.RefundPaymentRequest
* @param {Number|Null} amount must be a long integer, 
*/
RefundPaymentRequest.prototype.setAmount = function(amount) {
  this.amount = amount;
};

/**
* Get the field value
* Amount to be refunded
* @memberof remotepay.RefundPaymentRequest
* @return {Number|Null} must be a long integer, 
*/
RefundPaymentRequest.prototype.getAmount = function() {
  return this.amount;
};

/**
* Set the field value
* Unique identifier
*
* @memberof remotepay.RefundPaymentRequest
* @param {String} orderId 
*/
RefundPaymentRequest.prototype.setOrderId = function(orderId) {
  this.orderId = orderId;
};

/**
* Get the field value
* Unique identifier
* @memberof remotepay.RefundPaymentRequest
* @return {String} 
*/
RefundPaymentRequest.prototype.getOrderId = function() {
  return this.orderId;
};

/**
* Set the field value
* Unique identifier
*
* @memberof remotepay.RefundPaymentRequest
* @param {String} paymentId 
*/
RefundPaymentRequest.prototype.setPaymentId = function(paymentId) {
  this.paymentId = paymentId;
};

/**
* Get the field value
* Unique identifier
* @memberof remotepay.RefundPaymentRequest
* @return {String} 
*/
RefundPaymentRequest.prototype.getPaymentId = function() {
  return this.paymentId;
};

/**
* Set the field value
* If true, then do not print using the clover printer.  Return print information.
*
* @memberof remotepay.RefundPaymentRequest
* @param {Boolean|Null} disablePrinting 
*/
RefundPaymentRequest.prototype.setDisablePrinting = function(disablePrinting) {
  this.disablePrinting = disablePrinting;
};

/**
* Get the field value
* If true, then do not print using the clover printer.  Return print information.
* @memberof remotepay.RefundPaymentRequest
* @return {Boolean|Null} 
*/
RefundPaymentRequest.prototype.getDisablePrinting = function() {
  return this.disablePrinting;
};

/**
* Set the field value
* Do not show the receipt options screen
*
* @memberof remotepay.RefundPaymentRequest
* @param {Boolean|Null} disableReceiptSelection 
*/
RefundPaymentRequest.prototype.setDisableReceiptSelection = function(disableReceiptSelection) {
  this.disableReceiptSelection = disableReceiptSelection;
};

/**
* Get the field value
* Do not show the receipt options screen
* @memberof remotepay.RefundPaymentRequest
* @return {Boolean|Null} 
*/
RefundPaymentRequest.prototype.getDisableReceiptSelection = function() {
  return this.disableReceiptSelection;
};

/**
* Set the field value
* Extra pass-through data used by external systems.
*
* @memberof remotepay.RefundPaymentRequest
* @param {Object.<String,String>} extras A map of <String> to <>
*/
RefundPaymentRequest.prototype.setExtras = function(extras) {
  this.extras = extras;
};

/**
* Get the field value
* Extra pass-through data used by external systems.
* @memberof remotepay.RefundPaymentRequest
* @return {Object.<String,String>} A map of <String> to <>
*/
RefundPaymentRequest.prototype.getExtras = function() {
  return this.extras;
};

RefundPaymentRequest._meta_ =  {fields:  {}};
RefundPaymentRequest._meta_._class_ =  RefundPaymentRequest;
RefundPaymentRequest._meta_._superMeta_ = remotepay_BaseRequest._meta_;
RefundPaymentRequest._meta_.fields["fullRefund"] = {};
RefundPaymentRequest._meta_.fields["fullRefund"].type = Boolean;
RefundPaymentRequest._meta_.fields["amount"] = {};
RefundPaymentRequest._meta_.fields["amount"].type = Number;
RefundPaymentRequest._meta_.fields["orderId"] = {};
RefundPaymentRequest._meta_.fields["orderId"].type = String;
RefundPaymentRequest._meta_.fields["paymentId"] = {};
RefundPaymentRequest._meta_.fields["paymentId"].type = String;
RefundPaymentRequest._meta_.fields["disablePrinting"] = {};
RefundPaymentRequest._meta_.fields["disablePrinting"].type = Boolean;
RefundPaymentRequest._meta_.fields["disableReceiptSelection"] = {};
RefundPaymentRequest._meta_.fields["disableReceiptSelection"].type = Boolean;
RefundPaymentRequest._meta_.fields["extras"] = {};
RefundPaymentRequest._meta_.fields["extras"].type = Object;

//
// Expose the module.
//
if ('undefined' !== typeof module) {
module.exports = RefundPaymentRequest;
}

