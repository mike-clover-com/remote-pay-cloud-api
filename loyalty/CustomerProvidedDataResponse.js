/**
 * Autogenerated by Avro
 * 
 * DO NOT EDIT DIRECTLY
 */

var loyalty_CustomerProvidedDataResponseType = require("../loyalty/CustomerProvidedDataResponseType");

/** Response from the loyalty app after receiving the payload */
/**
* @constructor
* @memberof loyalty
*/
var CustomerProvidedDataResponse = function() {
  this._class_ = CustomerProvidedDataResponse;
  this.responseType = undefined;
};


/**
* Set the field value
* @memberof loyalty.CustomerProvidedDataResponse
* @param {loyalty.CustomerProvidedDataResponseType} responseType 
*/
CustomerProvidedDataResponse.prototype.setResponseType = function(responseType) {
  this.responseType = responseType;
};

/**
* Get the field value
* @memberof loyalty.CustomerProvidedDataResponse
* @return {loyalty.CustomerProvidedDataResponseType} 
*/
CustomerProvidedDataResponse.prototype.getResponseType = function() {
  return this.responseType;
};

/**
* @memberof loyalty.CustomerProvidedDataResponse
* @private
*/
CustomerProvidedDataResponse.prototype.getMetaInfo = function(fieldName) {
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

CustomerProvidedDataResponse.prototype.toString = function() {
  return JSON.stringify(this);
};

CustomerProvidedDataResponse._meta_ =  {fields:  {}};
CustomerProvidedDataResponse._meta_._class_ =  CustomerProvidedDataResponse;
CustomerProvidedDataResponse._meta_.fields["responseType"] = {};
CustomerProvidedDataResponse._meta_.fields["responseType"].type = loyalty_CustomerProvidedDataResponseType;

//
// Expose the module.
//
if ('undefined' !== typeof module) {
module.exports = CustomerProvidedDataResponse;
}

