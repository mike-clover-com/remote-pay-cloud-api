/**
 * Autogenerated by Avro
 * 
 * DO NOT EDIT DIRECTLY
 */

var remotepay_ResponseCode = require("../remotepay/ResponseCode");

/** The base for responses */
/**
* @constructor
* @memberof remotepay
*/
var BaseResponse = function() {
  this._class_ = BaseResponse;
  this.success = undefined;
  this.result = undefined;
  this.reason = undefined;
  this.message = undefined;
};


/**
* Set the field value
* If true then the requested operation succeeded
*
* @memberof remotepay.BaseResponse
* @param {Boolean} success 
*/
BaseResponse.prototype.setSuccess = function(success) {
  this.success = success;
};

/**
* Get the field value
* If true then the requested operation succeeded
* @memberof remotepay.BaseResponse
* @return {Boolean} 
*/
BaseResponse.prototype.getSuccess = function() {
  return this.success;
};

/**
* Set the field value
* The result of the requested operation.
*
* @memberof remotepay.BaseResponse
* @param {remotepay.ResponseCode} result 
*/
BaseResponse.prototype.setResult = function(result) {
  this.result = result;
};

/**
* Get the field value
* The result of the requested operation.
* @memberof remotepay.BaseResponse
* @return {remotepay.ResponseCode} 
*/
BaseResponse.prototype.getResult = function() {
  return this.result;
};

/**
* Set the field value
* Optional information about result.
*
* @memberof remotepay.BaseResponse
* @param {String|Null} reason 
*/
BaseResponse.prototype.setReason = function(reason) {
  this.reason = reason;
};

/**
* Get the field value
* Optional information about result.
* @memberof remotepay.BaseResponse
* @return {String|Null} 
*/
BaseResponse.prototype.getReason = function() {
  return this.reason;
};

/**
* Set the field value
* Detailed information about result.
*
* @memberof remotepay.BaseResponse
* @param {String|Null} message 
*/
BaseResponse.prototype.setMessage = function(message) {
  this.message = message;
};

/**
* Get the field value
* Detailed information about result.
* @memberof remotepay.BaseResponse
* @return {String|Null} 
*/
BaseResponse.prototype.getMessage = function() {
  return this.message;
};

/**
* @memberof remotepay.BaseResponse
* @private
*/
BaseResponse.prototype.getMetaInfo = function(fieldName) {
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

BaseResponse.prototype.toString = function() {
  return JSON.stringify(this);
};

BaseResponse._meta_ =  {fields:  {}};
BaseResponse._meta_._class_ =  BaseResponse;
BaseResponse._meta_.fields["success"] = {};
BaseResponse._meta_.fields["success"].type = Boolean;
BaseResponse._meta_.fields["result"] = {};
BaseResponse._meta_.fields["result"].type = remotepay_ResponseCode;
BaseResponse._meta_.fields["reason"] = {};
BaseResponse._meta_.fields["reason"].type = String;
BaseResponse._meta_.fields["message"] = {};
BaseResponse._meta_.fields["message"].type = String;

//
// Expose the module.
//
if ('undefined' !== typeof module) {
module.exports = BaseResponse;
}

