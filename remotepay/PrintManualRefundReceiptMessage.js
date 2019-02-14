/**
 * Autogenerated by Avro
 * 
 * DO NOT EDIT DIRECTLY
 */

var payments_Credit = require("../payments/Credit");

/**
* @constructor
* @memberof remotepay
*/
var PrintManualRefundReceiptMessage = function() {
  this._class_ = PrintManualRefundReceiptMessage;
  this.credit = undefined;
};


/**
* Set the field value
* @memberof remotepay.PrintManualRefundReceiptMessage
* @param {payments.Credit} credit 
*/
PrintManualRefundReceiptMessage.prototype.setCredit = function(credit) {
  this.credit = credit;
};

/**
* Get the field value
* @memberof remotepay.PrintManualRefundReceiptMessage
* @return {payments.Credit} 
*/
PrintManualRefundReceiptMessage.prototype.getCredit = function() {
  return this.credit;
};

/**
* @memberof remotepay.PrintManualRefundReceiptMessage
* @private
*/
PrintManualRefundReceiptMessage.prototype.getMetaInfo = function(fieldName) {
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

PrintManualRefundReceiptMessage.prototype.toString = function() {
  return JSON.stringify(this);
};

PrintManualRefundReceiptMessage._meta_ =  {fields:  {}};
PrintManualRefundReceiptMessage._meta_._class_ =  PrintManualRefundReceiptMessage;
PrintManualRefundReceiptMessage._meta_.fields["credit"] = {};
PrintManualRefundReceiptMessage._meta_.fields["credit"].type = payments_Credit;

//
// Expose the module.
//
if ('undefined' !== typeof module) {
module.exports = PrintManualRefundReceiptMessage;
}

