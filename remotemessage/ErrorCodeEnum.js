/**
 * Autogenerated by Avro
 * 
 * DO NOT EDIT DIRECTLY
 */

var remotemessage_ErrorCode = require("../remotemessage/ErrorCode");

/**
* @constructor
* @memberof remotemessage
*/
var ErrorCodeEnum = function() {
  this._class_ = ErrorCodeEnum;
  this.errorCode = undefined;
};


/**
* Set the field value
* @memberof remotemessage.ErrorCodeEnum
* @param {remotemessage.ErrorCode} errorCode 
*/
ErrorCodeEnum.prototype.setErrorCode = function(errorCode) {
  this.errorCode = errorCode;
};

/**
* Get the field value
* @memberof remotemessage.ErrorCodeEnum
* @return {remotemessage.ErrorCode} 
*/
ErrorCodeEnum.prototype.getErrorCode = function() {
  return this.errorCode;
};

/**
* @memberof remotemessage.ErrorCodeEnum
* @private
*/
ErrorCodeEnum.prototype.getMetaInfo = function(fieldName) {
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

ErrorCodeEnum.prototype.toString = function() {
  return JSON.stringify(this);
};

ErrorCodeEnum._meta_ =  {fields:  {}};
ErrorCodeEnum._meta_._class_ =  ErrorCodeEnum;
ErrorCodeEnum._meta_.fields["errorCode"] = {};
ErrorCodeEnum._meta_.fields["errorCode"].type = remotemessage_ErrorCode;

//
// Expose the module.
//
if ('undefined' !== typeof module) {
module.exports = ErrorCodeEnum;
}

