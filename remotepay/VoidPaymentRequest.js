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
var VoidPaymentRequest = function() {
  remotepay_BaseRequest.call(this);
  this._superClass_ = remotepay_BaseRequest;
  this._class_ = VoidPaymentRequest;
  this.orderId = undefined;
  this.paymentId = undefined;
  this.employeeId = undefined;
  this.voidReason = undefined;
  this.disablePrinting = undefined;
  this.disableReceiptSelection = undefined;
  this.extras = undefined;
};

VoidPaymentRequest.prototype = Object.create(remotepay_BaseRequest.prototype);
VoidPaymentRequest.prototype.constructor = VoidPaymentRequest;

/**
* Set the field value
* Unique identifier
*
* @memberof remotepay.VoidPaymentRequest
* @param {String} orderId 
*/
VoidPaymentRequest.prototype.setOrderId = function(orderId) {
  this.orderId = orderId;
};

/**
* Get the field value
* Unique identifier
* @memberof remotepay.VoidPaymentRequest
* @return {String} 
*/
VoidPaymentRequest.prototype.getOrderId = function() {
  return this.orderId;
};

/**
* Set the field value
* Unique identifier
*
* @memberof remotepay.VoidPaymentRequest
* @param {String} paymentId 
*/
VoidPaymentRequest.prototype.setPaymentId = function(paymentId) {
  this.paymentId = paymentId;
};

/**
* Get the field value
* Unique identifier
* @memberof remotepay.VoidPaymentRequest
* @return {String} 
*/
VoidPaymentRequest.prototype.getPaymentId = function() {
  return this.paymentId;
};

/**
* Set the field value
* Unique identifier
*
* @memberof remotepay.VoidPaymentRequest
* @param {String} employeeId 
*/
VoidPaymentRequest.prototype.setEmployeeId = function(employeeId) {
  this.employeeId = employeeId;
};

/**
* Get the field value
* Unique identifier
* @memberof remotepay.VoidPaymentRequest
* @return {String} 
*/
VoidPaymentRequest.prototype.getEmployeeId = function() {
  return this.employeeId;
};

/**
* Set the field value
* Reason for void
*
* @memberof remotepay.VoidPaymentRequest
* @param {String} voidReason 
*/
VoidPaymentRequest.prototype.setVoidReason = function(voidReason) {
  this.voidReason = voidReason;
};

/**
* Get the field value
* Reason for void
* @memberof remotepay.VoidPaymentRequest
* @return {String} 
*/
VoidPaymentRequest.prototype.getVoidReason = function() {
  return this.voidReason;
};

/**
* Set the field value
* If true, then do not print using the clover printer.  Return print information.
*
* @memberof remotepay.VoidPaymentRequest
* @param {Boolean|Null} disablePrinting 
*/
VoidPaymentRequest.prototype.setDisablePrinting = function(disablePrinting) {
  this.disablePrinting = disablePrinting;
};

/**
* Get the field value
* If true, then do not print using the clover printer.  Return print information.
* @memberof remotepay.VoidPaymentRequest
* @return {Boolean|Null} 
*/
VoidPaymentRequest.prototype.getDisablePrinting = function() {
  return this.disablePrinting;
};

/**
* Set the field value
* Do not show the receipt options screen
*
* @memberof remotepay.VoidPaymentRequest
* @param {Boolean|Null} disableReceiptSelection 
*/
VoidPaymentRequest.prototype.setDisableReceiptSelection = function(disableReceiptSelection) {
  this.disableReceiptSelection = disableReceiptSelection;
};

/**
* Get the field value
* Do not show the receipt options screen
* @memberof remotepay.VoidPaymentRequest
* @return {Boolean|Null} 
*/
VoidPaymentRequest.prototype.getDisableReceiptSelection = function() {
  return this.disableReceiptSelection;
};

/**
* Set the field value
* Extra pass-through data used by external systems.
*
* @memberof remotepay.VoidPaymentRequest
* @param {Object.<String,String>} extras A map of <String> to <>
*/
VoidPaymentRequest.prototype.setExtras = function(extras) {
  this.extras = extras;
};

/**
* Get the field value
* Extra pass-through data used by external systems.
* @memberof remotepay.VoidPaymentRequest
* @return {Object.<String,String>} A map of <String> to <>
*/
VoidPaymentRequest.prototype.getExtras = function() {
  return this.extras;
};

VoidPaymentRequest._meta_ =  {fields:  {}};
VoidPaymentRequest._meta_._class_ =  VoidPaymentRequest;
VoidPaymentRequest._meta_._superMeta_ = remotepay_BaseRequest._meta_;
VoidPaymentRequest._meta_.fields["orderId"] = {};
VoidPaymentRequest._meta_.fields["orderId"].type = String;
VoidPaymentRequest._meta_.fields["paymentId"] = {};
VoidPaymentRequest._meta_.fields["paymentId"].type = String;
VoidPaymentRequest._meta_.fields["employeeId"] = {};
VoidPaymentRequest._meta_.fields["employeeId"].type = String;
VoidPaymentRequest._meta_.fields["voidReason"] = {};
VoidPaymentRequest._meta_.fields["voidReason"].type = String;
VoidPaymentRequest._meta_.fields["disablePrinting"] = {};
VoidPaymentRequest._meta_.fields["disablePrinting"].type = Boolean;
VoidPaymentRequest._meta_.fields["disableReceiptSelection"] = {};
VoidPaymentRequest._meta_.fields["disableReceiptSelection"].type = Boolean;
VoidPaymentRequest._meta_.fields["extras"] = {};
VoidPaymentRequest._meta_.fields["extras"].type = Object;

//
// Expose the module.
//
if ('undefined' !== typeof module) {
module.exports = VoidPaymentRequest;
}

