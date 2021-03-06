/**
 * Autogenerated by Avro
 * 
 * DO NOT EDIT DIRECTLY
 */

var remotemessage_Method = require("../remotemessage/Method");
var remotemessage_Message = require("../remotemessage/Message");

/**
* @constructor
* @augments remotemessage.Message
* @memberof remotemessage
*/
var ActivityMessageToActivity = function() {
  remotemessage_Message.call(this);
  this._superClass_ = remotemessage_Message;
  this._class_ = ActivityMessageToActivity;
  this.setMethod(remotemessage_Method["ACTIVITY_MESSAGE_TO_ACTIVITY"]);
  this.action = undefined;
  this.payload = undefined;
};

ActivityMessageToActivity.prototype = Object.create(remotemessage_Message.prototype);
ActivityMessageToActivity.prototype.constructor = ActivityMessageToActivity;

/**
* Set the field value
* The name of the activity/action being sent to a running custom activity
*
* @memberof remotemessage.ActivityMessageToActivity
* @param {String} action 
*/
ActivityMessageToActivity.prototype.setAction = function(action) {
  this.action = action;
};

/**
* Get the field value
* The name of the activity/action being sent to a running custom activity
* @memberof remotemessage.ActivityMessageToActivity
* @return {String} 
*/
ActivityMessageToActivity.prototype.getAction = function() {
  return this.action;
};

/**
* Set the field value
* Data for this activity
*
* @memberof remotemessage.ActivityMessageToActivity
* @param {String} payload 
*/
ActivityMessageToActivity.prototype.setPayload = function(payload) {
  this.payload = payload;
};

/**
* Get the field value
* Data for this activity
* @memberof remotemessage.ActivityMessageToActivity
* @return {String} 
*/
ActivityMessageToActivity.prototype.getPayload = function() {
  return this.payload;
};

ActivityMessageToActivity._meta_ =  {fields:  {}};
ActivityMessageToActivity._meta_._class_ =  ActivityMessageToActivity;
ActivityMessageToActivity._meta_._superMeta_ = remotemessage_Message._meta_;
ActivityMessageToActivity._meta_.fields["action"] = {};
ActivityMessageToActivity._meta_.fields["action"].type = String;
ActivityMessageToActivity._meta_.fields["payload"] = {};
ActivityMessageToActivity._meta_.fields["payload"].type = String;

//
// Expose the module.
//
if ('undefined' !== typeof module) {
module.exports = ActivityMessageToActivity;
}

