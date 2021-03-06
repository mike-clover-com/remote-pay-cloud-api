/**
 * Autogenerated by Avro
 * 
 * DO NOT EDIT DIRECTLY
 */


/**
* @constructor
* @memberof device
*/
var UpdatedDeviceBundle = function() {
  this._class_ = UpdatedDeviceBundle;
  this.merchantId = undefined;
  this.provisionedSerialNumber = undefined;
  this.equipmentNumber = undefined;
  this.equipmentCode = undefined;
  this.bundleId = undefined;
  this.effectiveTime = undefined;
};


/**
* Set the field value
* The UUID of the merchant that the equipment is associated with.
*
* @memberof device.UpdatedDeviceBundle
* @param {String} merchantId 
*/
UpdatedDeviceBundle.prototype.setMerchantId = function(merchantId) {
  this.merchantId = merchantId;
};

/**
* Get the field value
* The UUID of the merchant that the equipment is associated with.
* @memberof device.UpdatedDeviceBundle
* @return {String} 
*/
UpdatedDeviceBundle.prototype.getMerchantId = function() {
  return this.merchantId;
};

/**
* Set the field value
* The serial number of the provisioned device that is being updated.
*
* @memberof device.UpdatedDeviceBundle
* @param {String} provisionedSerialNumber 
*/
UpdatedDeviceBundle.prototype.setProvisionedSerialNumber = function(provisionedSerialNumber) {
  this.provisionedSerialNumber = provisionedSerialNumber;
};

/**
* Get the field value
* The serial number of the provisioned device that is being updated.
* @memberof device.UpdatedDeviceBundle
* @return {String} 
*/
UpdatedDeviceBundle.prototype.getProvisionedSerialNumber = function() {
  return this.provisionedSerialNumber;
};

/**
* Set the field value
* The equipment number of the boarded equipment that is getting the updated bundle.
*
* @memberof device.UpdatedDeviceBundle
* @param {String} equipmentNumber 
*/
UpdatedDeviceBundle.prototype.setEquipmentNumber = function(equipmentNumber) {
  this.equipmentNumber = equipmentNumber;
};

/**
* Get the field value
* The equipment number of the boarded equipment that is getting the updated bundle.
* @memberof device.UpdatedDeviceBundle
* @return {String} 
*/
UpdatedDeviceBundle.prototype.getEquipmentNumber = function() {
  return this.equipmentNumber;
};

/**
* Set the field value
* The equipment code of the boarded equipment that is getting the updated bundle.
*
* @memberof device.UpdatedDeviceBundle
* @param {String} equipmentCode 
*/
UpdatedDeviceBundle.prototype.setEquipmentCode = function(equipmentCode) {
  this.equipmentCode = equipmentCode;
};

/**
* Get the field value
* The equipment code of the boarded equipment that is getting the updated bundle.
* @memberof device.UpdatedDeviceBundle
* @return {String} 
*/
UpdatedDeviceBundle.prototype.getEquipmentCode = function() {
  return this.equipmentCode;
};

/**
* Set the field value
* The UUID of the bundle that is being used to be updated. Null if the bundle is being removed from the equipment.
*
* @memberof device.UpdatedDeviceBundle
* @param {String} bundleId 
*/
UpdatedDeviceBundle.prototype.setBundleId = function(bundleId) {
  this.bundleId = bundleId;
};

/**
* Get the field value
* The UUID of the bundle that is being used to be updated. Null if the bundle is being removed from the equipment.
* @memberof device.UpdatedDeviceBundle
* @return {String} 
*/
UpdatedDeviceBundle.prototype.getBundleId = function() {
  return this.bundleId;
};

/**
* Set the field value
* The effective time of the bundle being assigned to a provisioned device.
*
* @memberof device.UpdatedDeviceBundle
* @param {Number} effectiveTime must be a long integer
*/
UpdatedDeviceBundle.prototype.setEffectiveTime = function(effectiveTime) {
  this.effectiveTime = effectiveTime;
};

/**
* Get the field value
* The effective time of the bundle being assigned to a provisioned device.
* @memberof device.UpdatedDeviceBundle
* @return {Number} must be a long integer
*/
UpdatedDeviceBundle.prototype.getEffectiveTime = function() {
  return this.effectiveTime;
};

/**
* @memberof device.UpdatedDeviceBundle
* @private
*/
UpdatedDeviceBundle.prototype.getMetaInfo = function(fieldName) {
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

UpdatedDeviceBundle.prototype.toString = function() {
  return JSON.stringify(this);
};

UpdatedDeviceBundle._meta_ =  {fields:  {}};
UpdatedDeviceBundle._meta_._class_ =  UpdatedDeviceBundle;
UpdatedDeviceBundle._meta_.fields["merchantId"] = {};
UpdatedDeviceBundle._meta_.fields["merchantId"].type = String;
UpdatedDeviceBundle._meta_.fields["provisionedSerialNumber"] = {};
UpdatedDeviceBundle._meta_.fields["provisionedSerialNumber"].type = String;
UpdatedDeviceBundle._meta_.fields["equipmentNumber"] = {};
UpdatedDeviceBundle._meta_.fields["equipmentNumber"].type = String;
UpdatedDeviceBundle._meta_.fields["equipmentCode"] = {};
UpdatedDeviceBundle._meta_.fields["equipmentCode"].type = String;
UpdatedDeviceBundle._meta_.fields["bundleId"] = {};
UpdatedDeviceBundle._meta_.fields["bundleId"].type = String;
UpdatedDeviceBundle._meta_.fields["effectiveTime"] = {};
UpdatedDeviceBundle._meta_.fields["effectiveTime"].type = Number;

//
// Expose the module.
//
if ('undefined' !== typeof module) {
module.exports = UpdatedDeviceBundle;
}

