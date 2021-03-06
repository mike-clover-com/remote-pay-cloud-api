/**
 * Autogenerated by Avro
 * 
 * DO NOT EDIT DIRECTLY
 */


/**
* @constructor
* @memberof base
*/
var Tender = function() {
  this._class_ = Tender;
  this.id = undefined;
  this.editable = undefined;
  this.labelKey = undefined;
  this.label = undefined;
  this.opensCashDrawer = undefined;
  this.supportsTipping = undefined;
  this.enabled = undefined;
  this.visible = undefined;
  this.instructions = undefined;
};


/**
* Set the field value
* Unique identifier
*
* @memberof base.Tender
* @param {String} id 
*/
Tender.prototype.setId = function(id) {
  this.id = id;
};

/**
* Get the field value
* Unique identifier
* @memberof base.Tender
* @return {String} 
*/
Tender.prototype.getId = function() {
  return this.id;
};

/**
* Set the field value
* If this merchant tender is editable
*
* @memberof base.Tender
* @param {Boolean} editable 
*/
Tender.prototype.setEditable = function(editable) {
  this.editable = editable;
};

/**
* Get the field value
* If this merchant tender is editable
* @memberof base.Tender
* @return {Boolean} 
*/
Tender.prototype.getEditable = function() {
  return this.editable;
};

/**
* Set the field value
* Label Key
*
* @memberof base.Tender
* @param {String} labelKey 
*/
Tender.prototype.setLabelKey = function(labelKey) {
  this.labelKey = labelKey;
};

/**
* Get the field value
* Label Key
* @memberof base.Tender
* @return {String} 
*/
Tender.prototype.getLabelKey = function() {
  return this.labelKey;
};

/**
* Set the field value
* Label Key
*
* @memberof base.Tender
* @param {String} label 
*/
Tender.prototype.setLabel = function(label) {
  this.label = label;
};

/**
* Get the field value
* Label Key
* @memberof base.Tender
* @return {String} 
*/
Tender.prototype.getLabel = function() {
  return this.label;
};

/**
* Set the field value
* If this tender opens the cash drawer
*
* @memberof base.Tender
* @param {Boolean} opensCashDrawer 
*/
Tender.prototype.setOpensCashDrawer = function(opensCashDrawer) {
  this.opensCashDrawer = opensCashDrawer;
};

/**
* Get the field value
* If this tender opens the cash drawer
* @memberof base.Tender
* @return {Boolean} 
*/
Tender.prototype.getOpensCashDrawer = function() {
  return this.opensCashDrawer;
};

/**
* Set the field value
* Allow tipping on payment from tender
*
* @memberof base.Tender
* @param {Boolean} supportsTipping 
*/
Tender.prototype.setSupportsTipping = function(supportsTipping) {
  this.supportsTipping = supportsTipping;
};

/**
* Get the field value
* Allow tipping on payment from tender
* @memberof base.Tender
* @return {Boolean} 
*/
Tender.prototype.getSupportsTipping = function() {
  return this.supportsTipping;
};

/**
* Set the field value
* If this merchant tender is enabled
*
* @memberof base.Tender
* @param {Boolean} enabled 
*/
Tender.prototype.setEnabled = function(enabled) {
  this.enabled = enabled;
};

/**
* Get the field value
* If this merchant tender is enabled
* @memberof base.Tender
* @return {Boolean} 
*/
Tender.prototype.getEnabled = function() {
  return this.enabled;
};

/**
* Set the field value
* If this merchant tender is visible
*
* @memberof base.Tender
* @param {Boolean} visible 
*/
Tender.prototype.setVisible = function(visible) {
  this.visible = visible;
};

/**
* Get the field value
* If this merchant tender is visible
* @memberof base.Tender
* @return {Boolean} 
*/
Tender.prototype.getVisible = function() {
  return this.visible;
};

/**
* Set the field value
* Label Key
*
* @memberof base.Tender
* @param {String} instructions 
*/
Tender.prototype.setInstructions = function(instructions) {
  this.instructions = instructions;
};

/**
* Get the field value
* Label Key
* @memberof base.Tender
* @return {String} 
*/
Tender.prototype.getInstructions = function() {
  return this.instructions;
};

/**
* @memberof base.Tender
* @private
*/
Tender.prototype.getMetaInfo = function(fieldName) {
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

Tender.prototype.toString = function() {
  return JSON.stringify(this);
};

Tender._meta_ =  {fields:  {}};
Tender._meta_._class_ =  Tender;
Tender._meta_.fields["id"] = {};
Tender._meta_.fields["id"].type = String;
Tender._meta_.fields["editable"] = {};
Tender._meta_.fields["editable"].type = Boolean;
Tender._meta_.fields["labelKey"] = {};
Tender._meta_.fields["labelKey"].type = String;
Tender._meta_.fields["label"] = {};
Tender._meta_.fields["label"].type = String;
Tender._meta_.fields["opensCashDrawer"] = {};
Tender._meta_.fields["opensCashDrawer"].type = Boolean;
Tender._meta_.fields["supportsTipping"] = {};
Tender._meta_.fields["supportsTipping"].type = Boolean;
Tender._meta_.fields["enabled"] = {};
Tender._meta_.fields["enabled"].type = Boolean;
Tender._meta_.fields["visible"] = {};
Tender._meta_.fields["visible"].type = Boolean;
Tender._meta_.fields["instructions"] = {};
Tender._meta_.fields["instructions"].type = String;

//
// Expose the module.
//
if ('undefined' !== typeof module) {
module.exports = Tender;
}

