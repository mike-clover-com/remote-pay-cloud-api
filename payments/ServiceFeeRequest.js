/**
 * Autogenerated by Avro
 * 
 * DO NOT EDIT DIRECTLY
 */

var payments_VaultedCard = require("../payments/VaultedCard");

/**
* @constructor
* @memberof payments
*/
var ServiceFeeRequest = function() {
  this._class_ = ServiceFeeRequest;
  this.amount = undefined;
  this.orderId = undefined;
  this.sourcePaymentId = undefined;
  this.vaultedCard = undefined;
};


/**
* Set the field value
* amount (cents) of the service fee
*
* @memberof payments.ServiceFeeRequest
* @param {Number} amount must be a long integer
*/
ServiceFeeRequest.prototype.setAmount = function(amount) {
  this.amount = amount;
};

/**
* Get the field value
* amount (cents) of the service fee
* @memberof payments.ServiceFeeRequest
* @return {Number} must be a long integer
*/
ServiceFeeRequest.prototype.getAmount = function() {
  return this.amount;
};

/**
* Set the field value
* Unique identifier of the order with which this payment is associated (will be auto-populated by client connector)
*
* @memberof payments.ServiceFeeRequest
* @param {String} orderId 
*/
ServiceFeeRequest.prototype.setOrderId = function(orderId) {
  this.orderId = orderId;
};

/**
* Get the field value
* Unique identifier of the order with which this payment is associated (will be auto-populated by client connector)
* @memberof payments.ServiceFeeRequest
* @return {String} 
*/
ServiceFeeRequest.prototype.getOrderId = function() {
  return this.orderId;
};

/**
* Set the field value
* Unique identifier of the primary payment the serivce fee is associated with
*
* @memberof payments.ServiceFeeRequest
* @param {String} sourcePaymentId 
*/
ServiceFeeRequest.prototype.setSourcePaymentId = function(sourcePaymentId) {
  this.sourcePaymentId = sourcePaymentId;
};

/**
* Get the field value
* Unique identifier of the primary payment the serivce fee is associated with
* @memberof payments.ServiceFeeRequest
* @return {String} 
*/
ServiceFeeRequest.prototype.getSourcePaymentId = function() {
  return this.sourcePaymentId;
};

/**
* Set the field value
* Vaulted card to use to bill the service fee
*
* @memberof payments.ServiceFeeRequest
* @param {payments.VaultedCard} vaultedCard 
*/
ServiceFeeRequest.prototype.setVaultedCard = function(vaultedCard) {
  this.vaultedCard = vaultedCard;
};

/**
* Get the field value
* Vaulted card to use to bill the service fee
* @memberof payments.ServiceFeeRequest
* @return {payments.VaultedCard} 
*/
ServiceFeeRequest.prototype.getVaultedCard = function() {
  return this.vaultedCard;
};

/**
* @memberof payments.ServiceFeeRequest
* @private
*/
ServiceFeeRequest.prototype.getMetaInfo = function(fieldName) {
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

ServiceFeeRequest.prototype.toString = function() {
  return JSON.stringify(this);
};

ServiceFeeRequest._meta_ =  {fields:  {}};
ServiceFeeRequest._meta_._class_ =  ServiceFeeRequest;
ServiceFeeRequest._meta_.fields["amount"] = {};
ServiceFeeRequest._meta_.fields["amount"].type = Number;
ServiceFeeRequest._meta_.fields["orderId"] = {};
ServiceFeeRequest._meta_.fields["orderId"].type = String;
ServiceFeeRequest._meta_.fields["sourcePaymentId"] = {};
ServiceFeeRequest._meta_.fields["sourcePaymentId"].type = String;
ServiceFeeRequest._meta_.fields["vaultedCard"] = {};
ServiceFeeRequest._meta_.fields["vaultedCard"].type = payments_VaultedCard;

//
// Expose the module.
//
if ('undefined' !== typeof module) {
module.exports = ServiceFeeRequest;
}
