/**
 * Autogenerated by Avro
 * 
 * DO NOT EDIT DIRECTLY
 */

var remotemessage_Method = require("../remotemessage/Method");
var remotemessage_Message = require("../remotemessage/Message");

/** Used in loyalty systems. */
/**
* @constructor
* @augments remotemessage.Message
* @memberof remotemessage
*/
var LoyaltyPointsReceiptPrintedMessage = function() {
  remotemessage_Message.call(this);
  this._superClass_ = remotemessage_Message;
  this._class_ = LoyaltyPointsReceiptPrintedMessage;
  this.setMethod(remotemessage_Method["SHOW_LOYALTY_POINTS_RECEIPT_PRINTED"]);
  this.points = undefined;
  this.orderId = undefined;
};

LoyaltyPointsReceiptPrintedMessage.prototype = Object.create(remotemessage_Message.prototype);
LoyaltyPointsReceiptPrintedMessage.prototype.constructor = LoyaltyPointsReceiptPrintedMessage;

/**
* Set the field value
* The number of points calculated for the event
*
* @memberof remotemessage.LoyaltyPointsReceiptPrintedMessage
* @param {Number} points must be a long integer
*/
LoyaltyPointsReceiptPrintedMessage.prototype.setPoints = function(points) {
  this.points = points;
};

/**
* Get the field value
* The number of points calculated for the event
* @memberof remotemessage.LoyaltyPointsReceiptPrintedMessage
* @return {Number} must be a long integer
*/
LoyaltyPointsReceiptPrintedMessage.prototype.getPoints = function() {
  return this.points;
};

/**
* Set the field value
* The order with which the awarded are associated
*
* @memberof remotemessage.LoyaltyPointsReceiptPrintedMessage
* @param {String} orderId 
*/
LoyaltyPointsReceiptPrintedMessage.prototype.setOrderId = function(orderId) {
  this.orderId = orderId;
};

/**
* Get the field value
* The order with which the awarded are associated
* @memberof remotemessage.LoyaltyPointsReceiptPrintedMessage
* @return {String} 
*/
LoyaltyPointsReceiptPrintedMessage.prototype.getOrderId = function() {
  return this.orderId;
};

LoyaltyPointsReceiptPrintedMessage._meta_ =  {fields:  {}};
LoyaltyPointsReceiptPrintedMessage._meta_._class_ =  LoyaltyPointsReceiptPrintedMessage;
LoyaltyPointsReceiptPrintedMessage._meta_._superMeta_ = remotemessage_Message._meta_;
LoyaltyPointsReceiptPrintedMessage._meta_.fields["points"] = {};
LoyaltyPointsReceiptPrintedMessage._meta_.fields["points"].type = Number;
LoyaltyPointsReceiptPrintedMessage._meta_.fields["orderId"] = {};
LoyaltyPointsReceiptPrintedMessage._meta_.fields["orderId"].type = String;

//
// Expose the module.
//
if ('undefined' !== typeof module) {
module.exports = LoyaltyPointsReceiptPrintedMessage;
}

