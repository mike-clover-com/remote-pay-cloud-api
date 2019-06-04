/**
 * Autogenerated by Avro
 * 
 * DO NOT EDIT DIRECTLY
 */

var remotemessage_Method = require("../remotemessage/Method");
var remotemessage_ResultStatus = require("../remotemessage/ResultStatus");
var remotemessage_ExternalDeviceSubState = require("../remotemessage/ExternalDeviceSubState");
var remotemessage_ExternalDeviceState = require("../remotemessage/ExternalDeviceState");
var remotemessage_Message = require("../remotemessage/Message");
var remotemessage_ExternalDeviceStateData = require("../remotemessage/ExternalDeviceStateData");

/**
* @constructor
* @augments remotemessage.Message
* @memberof remotemessage
*/
var InvalidStateTransitionMessage = function() {
  remotemessage_Message.call(this);
  this._superClass_ = remotemessage_Message;
  this._class_ = InvalidStateTransitionMessage;
  this.setMethod(remotemessage_Method["INVALID_STATE_TRANSITION"]);
  this.result = undefined;
  this.reason = undefined;
  this.requestedTransition = undefined;
  this.state = undefined;
  this.substate = undefined;
  this.data = undefined;
};

InvalidStateTransitionMessage.prototype = Object.create(remotemessage_Message.prototype);
InvalidStateTransitionMessage.prototype.constructor = InvalidStateTransitionMessage;

/**
* Set the field value
* @memberof remotemessage.InvalidStateTransitionMessage
* @param {remotemessage.ResultStatus} result 
*/
InvalidStateTransitionMessage.prototype.setResult = function(result) {
  this.result = result;
};

/**
* Get the field value
* @memberof remotemessage.InvalidStateTransitionMessage
* @return {remotemessage.ResultStatus} 
*/
InvalidStateTransitionMessage.prototype.getResult = function() {
  return this.result;
};

/**
* Set the field value
* Detail message from the server.
*
* @memberof remotemessage.InvalidStateTransitionMessage
* @param {String} reason 
*/
InvalidStateTransitionMessage.prototype.setReason = function(reason) {
  this.reason = reason;
};

/**
* Get the field value
* Detail message from the server.
* @memberof remotemessage.InvalidStateTransitionMessage
* @return {String} 
*/
InvalidStateTransitionMessage.prototype.getReason = function() {
  return this.reason;
};

/**
* Set the field value
* @memberof remotemessage.InvalidStateTransitionMessage
* @param {String} requestedTransition 
*/
InvalidStateTransitionMessage.prototype.setRequestedTransition = function(requestedTransition) {
  this.requestedTransition = requestedTransition;
};

/**
* Get the field value
* @memberof remotemessage.InvalidStateTransitionMessage
* @return {String} 
*/
InvalidStateTransitionMessage.prototype.getRequestedTransition = function() {
  return this.requestedTransition;
};

/**
* Set the field value
* @memberof remotemessage.InvalidStateTransitionMessage
* @param {remotemessage.ExternalDeviceState} state 
*/
InvalidStateTransitionMessage.prototype.setState = function(state) {
  this.state = state;
};

/**
* Get the field value
* @memberof remotemessage.InvalidStateTransitionMessage
* @return {remotemessage.ExternalDeviceState} 
*/
InvalidStateTransitionMessage.prototype.getState = function() {
  return this.state;
};

/**
* Set the field value
* @memberof remotemessage.InvalidStateTransitionMessage
* @param {remotemessage.ExternalDeviceSubState} substate 
*/
InvalidStateTransitionMessage.prototype.setSubstate = function(substate) {
  this.substate = substate;
};

/**
* Get the field value
* @memberof remotemessage.InvalidStateTransitionMessage
* @return {remotemessage.ExternalDeviceSubState} 
*/
InvalidStateTransitionMessage.prototype.getSubstate = function() {
  return this.substate;
};

/**
* Set the field value
* @memberof remotemessage.InvalidStateTransitionMessage
* @param {remotemessage.ExternalDeviceStateData} data 
*/
InvalidStateTransitionMessage.prototype.setData = function(data) {
  this.data = data;
};

/**
* Get the field value
* @memberof remotemessage.InvalidStateTransitionMessage
* @return {remotemessage.ExternalDeviceStateData} 
*/
InvalidStateTransitionMessage.prototype.getData = function() {
  return this.data;
};

InvalidStateTransitionMessage._meta_ =  {fields:  {}};
InvalidStateTransitionMessage._meta_._class_ =  InvalidStateTransitionMessage;
InvalidStateTransitionMessage._meta_._superMeta_ = remotemessage_Message._meta_;
InvalidStateTransitionMessage._meta_.fields["result"] = {};
InvalidStateTransitionMessage._meta_.fields["result"].type = remotemessage_ResultStatus;
InvalidStateTransitionMessage._meta_.fields["reason"] = {};
InvalidStateTransitionMessage._meta_.fields["reason"].type = String;
InvalidStateTransitionMessage._meta_.fields["requestedTransition"] = {};
InvalidStateTransitionMessage._meta_.fields["requestedTransition"].type = String;
InvalidStateTransitionMessage._meta_.fields["state"] = {};
InvalidStateTransitionMessage._meta_.fields["state"].type = remotemessage_ExternalDeviceState;
InvalidStateTransitionMessage._meta_.fields["substate"] = {};
InvalidStateTransitionMessage._meta_.fields["substate"].type = remotemessage_ExternalDeviceSubState;
InvalidStateTransitionMessage._meta_.fields["data"] = {};
InvalidStateTransitionMessage._meta_.fields["data"].type = remotemessage_ExternalDeviceStateData;

//
// Expose the module.
//
if ('undefined' !== typeof module) {
module.exports = InvalidStateTransitionMessage;
}
