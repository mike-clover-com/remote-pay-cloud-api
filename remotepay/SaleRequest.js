/**
 * Autogenerated by Avro
 * 
 * DO NOT EDIT DIRECTLY
 */

var remotepay_TransactionType = require("../remotepay/TransactionType");
var payments_TipMode = require("../payments/TipMode");
var remotepay_TransactionRequest = require("../remotepay/TransactionRequest");

/**
* @constructor
* @augments remotepay.TransactionRequest
* @memberof remotepay
*/
var SaleRequest = function() {
  remotepay_TransactionRequest.call(this);
  this._superClass_ = remotepay_TransactionRequest;
  this._class_ = SaleRequest;
  this.type = remotepay_TransactionType["PAYMENT"];
  this.tipAmount = undefined;
  this.tipMode = undefined;
};

SaleRequest.prototype = Object.create(remotepay_TransactionRequest.prototype);
SaleRequest.prototype.constructor = SaleRequest;

/**
* Set the field value
* Included tip
*
* @memberof remotepay.SaleRequest
* @param {Number|Null} tipAmount must be a long integer, 
*/
SaleRequest.prototype.setTipAmount = function(tipAmount) {
  this.tipAmount = tipAmount;
};

/**
* Get the field value
* Included tip
* @memberof remotepay.SaleRequest
* @return {Number|Null} must be a long integer, 
*/
SaleRequest.prototype.getTipAmount = function() {
  return this.tipAmount;
};

/**
* Set the field value
* @memberof remotepay.SaleRequest
* @param {payments.TipMode} tipMode 
*/
SaleRequest.prototype.setTipMode = function(tipMode) {
  this.tipMode = tipMode;
};

/**
* Get the field value
* @memberof remotepay.SaleRequest
* @return {payments.TipMode} 
*/
SaleRequest.prototype.getTipMode = function() {
  return this.tipMode;
};

SaleRequest._meta_ =  {fields:  {}};
SaleRequest._meta_._class_ =  SaleRequest;
SaleRequest._meta_._superMeta_ = remotepay_TransactionRequest._meta_;
SaleRequest._meta_.fields["tipAmount"] = {};
SaleRequest._meta_.fields["tipAmount"].type = Number;
SaleRequest._meta_.fields["tipMode"] = {};
SaleRequest._meta_.fields["tipMode"].type = payments_TipMode;

//
// Expose the module.
//
if ('undefined' !== typeof module) {
module.exports = SaleRequest;
}

