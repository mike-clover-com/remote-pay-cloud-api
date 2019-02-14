/**
 * Autogenerated by Avro
 * 
 * DO NOT EDIT DIRECTLY
 */

var payments_TipMode = require("../payments/TipMode");
var payments_DataEntryLocation = require("../payments/DataEntryLocation");
var merchant_TipSuggestion = require("../merchant/TipSuggestion");

/**
* @constructor
* @memberof payments
*/
var TransactionSettings = function() {
  this._class_ = TransactionSettings;
  this.cardEntryMethods = undefined;
  this.disableCashBack = false;
  this.cloverShouldHandleReceipts = true;
  this.forcePinEntryOnSwipe = false;
  this.disableRestartTransactionOnFailure = false;
  this.allowOfflinePayment = false;
  this.approveOfflinePaymentWithoutPrompt = false;
  this.forceOfflinePayment = false;
  this.signatureThreshold = undefined;
  this.signatureEntryLocation = undefined;
  this.tipMode = undefined;
  this.tippableAmount = undefined;
  this.disableReceiptSelection = false;
  this.disableDuplicateCheck = false;
  this.autoAcceptPaymentConfirmations = false;
  this.autoAcceptSignature = false;
  this.returnResultOnTransactionComplete = false;
  this.tipSuggestions = undefined;
  this.regionalExtras = undefined;
};


/**
* Set the field value
* @memberof payments.TransactionSettings
* @param {Number} cardEntryMethods must be an integer
*/
TransactionSettings.prototype.setCardEntryMethods = function(cardEntryMethods) {
  this.cardEntryMethods = cardEntryMethods;
};

/**
* Get the field value
* @memberof payments.TransactionSettings
* @return {Number} must be an integer
*/
TransactionSettings.prototype.getCardEntryMethods = function() {
  return this.cardEntryMethods;
};

/**
* Set the field value
* @memberof payments.TransactionSettings
* @param {Boolean} disableCashBack 
*/
TransactionSettings.prototype.setDisableCashBack = function(disableCashBack) {
  this.disableCashBack = disableCashBack;
};

/**
* Get the field value
* @memberof payments.TransactionSettings
* @return {Boolean} 
*/
TransactionSettings.prototype.getDisableCashBack = function() {
  return this.disableCashBack;
};

/**
* Set the field value
* @memberof payments.TransactionSettings
* @param {Boolean} cloverShouldHandleReceipts 
*/
TransactionSettings.prototype.setCloverShouldHandleReceipts = function(cloverShouldHandleReceipts) {
  this.cloverShouldHandleReceipts = cloverShouldHandleReceipts;
};

/**
* Get the field value
* @memberof payments.TransactionSettings
* @return {Boolean} 
*/
TransactionSettings.prototype.getCloverShouldHandleReceipts = function() {
  return this.cloverShouldHandleReceipts;
};

/**
* Set the field value
* @memberof payments.TransactionSettings
* @param {Boolean} forcePinEntryOnSwipe 
*/
TransactionSettings.prototype.setForcePinEntryOnSwipe = function(forcePinEntryOnSwipe) {
  this.forcePinEntryOnSwipe = forcePinEntryOnSwipe;
};

/**
* Get the field value
* @memberof payments.TransactionSettings
* @return {Boolean} 
*/
TransactionSettings.prototype.getForcePinEntryOnSwipe = function() {
  return this.forcePinEntryOnSwipe;
};

/**
* Set the field value
* @memberof payments.TransactionSettings
* @param {Boolean} disableRestartTransactionOnFailure 
*/
TransactionSettings.prototype.setDisableRestartTransactionOnFailure = function(disableRestartTransactionOnFailure) {
  this.disableRestartTransactionOnFailure = disableRestartTransactionOnFailure;
};

/**
* Get the field value
* @memberof payments.TransactionSettings
* @return {Boolean} 
*/
TransactionSettings.prototype.getDisableRestartTransactionOnFailure = function() {
  return this.disableRestartTransactionOnFailure;
};

/**
* Set the field value
* @memberof payments.TransactionSettings
* @param {Boolean} allowOfflinePayment 
*/
TransactionSettings.prototype.setAllowOfflinePayment = function(allowOfflinePayment) {
  this.allowOfflinePayment = allowOfflinePayment;
};

/**
* Get the field value
* @memberof payments.TransactionSettings
* @return {Boolean} 
*/
TransactionSettings.prototype.getAllowOfflinePayment = function() {
  return this.allowOfflinePayment;
};

/**
* Set the field value
* @memberof payments.TransactionSettings
* @param {Boolean} approveOfflinePaymentWithoutPrompt 
*/
TransactionSettings.prototype.setApproveOfflinePaymentWithoutPrompt = function(approveOfflinePaymentWithoutPrompt) {
  this.approveOfflinePaymentWithoutPrompt = approveOfflinePaymentWithoutPrompt;
};

/**
* Get the field value
* @memberof payments.TransactionSettings
* @return {Boolean} 
*/
TransactionSettings.prototype.getApproveOfflinePaymentWithoutPrompt = function() {
  return this.approveOfflinePaymentWithoutPrompt;
};

/**
* Set the field value
* @memberof payments.TransactionSettings
* @param {Boolean} forceOfflinePayment 
*/
TransactionSettings.prototype.setForceOfflinePayment = function(forceOfflinePayment) {
  this.forceOfflinePayment = forceOfflinePayment;
};

/**
* Get the field value
* @memberof payments.TransactionSettings
* @return {Boolean} 
*/
TransactionSettings.prototype.getForceOfflinePayment = function() {
  return this.forceOfflinePayment;
};

/**
* Set the field value
* @memberof payments.TransactionSettings
* @param {Number} signatureThreshold must be a long integer
*/
TransactionSettings.prototype.setSignatureThreshold = function(signatureThreshold) {
  this.signatureThreshold = signatureThreshold;
};

/**
* Get the field value
* @memberof payments.TransactionSettings
* @return {Number} must be a long integer
*/
TransactionSettings.prototype.getSignatureThreshold = function() {
  return this.signatureThreshold;
};

/**
* Set the field value
* @memberof payments.TransactionSettings
* @param {payments.DataEntryLocation} signatureEntryLocation 
*/
TransactionSettings.prototype.setSignatureEntryLocation = function(signatureEntryLocation) {
  this.signatureEntryLocation = signatureEntryLocation;
};

/**
* Get the field value
* @memberof payments.TransactionSettings
* @return {payments.DataEntryLocation} 
*/
TransactionSettings.prototype.getSignatureEntryLocation = function() {
  return this.signatureEntryLocation;
};

/**
* Set the field value
* @memberof payments.TransactionSettings
* @param {payments.TipMode} tipMode 
*/
TransactionSettings.prototype.setTipMode = function(tipMode) {
  this.tipMode = tipMode;
};

/**
* Get the field value
* @memberof payments.TransactionSettings
* @return {payments.TipMode} 
*/
TransactionSettings.prototype.getTipMode = function() {
  return this.tipMode;
};

/**
* Set the field value
* @memberof payments.TransactionSettings
* @param {Number} tippableAmount must be a long integer
*/
TransactionSettings.prototype.setTippableAmount = function(tippableAmount) {
  this.tippableAmount = tippableAmount;
};

/**
* Get the field value
* @memberof payments.TransactionSettings
* @return {Number} must be a long integer
*/
TransactionSettings.prototype.getTippableAmount = function() {
  return this.tippableAmount;
};

/**
* Set the field value
* @memberof payments.TransactionSettings
* @param {Boolean} disableReceiptSelection 
*/
TransactionSettings.prototype.setDisableReceiptSelection = function(disableReceiptSelection) {
  this.disableReceiptSelection = disableReceiptSelection;
};

/**
* Get the field value
* @memberof payments.TransactionSettings
* @return {Boolean} 
*/
TransactionSettings.prototype.getDisableReceiptSelection = function() {
  return this.disableReceiptSelection;
};

/**
* Set the field value
* @memberof payments.TransactionSettings
* @param {Boolean} disableDuplicateCheck 
*/
TransactionSettings.prototype.setDisableDuplicateCheck = function(disableDuplicateCheck) {
  this.disableDuplicateCheck = disableDuplicateCheck;
};

/**
* Get the field value
* @memberof payments.TransactionSettings
* @return {Boolean} 
*/
TransactionSettings.prototype.getDisableDuplicateCheck = function() {
  return this.disableDuplicateCheck;
};

/**
* Set the field value
* If set to true, confirmation requests triggered by a challenge at the payment gateway are automatically accepted, and confirmation requests are not transmitted back to the calling program. Be sure you are willing to accept the risk associated with accepting offline or duplicate payment challenges. See https://docs.clover.com/build/working-with-challenges for more information.
*
* @memberof payments.TransactionSettings
* @param {Boolean} autoAcceptPaymentConfirmations 
*/
TransactionSettings.prototype.setAutoAcceptPaymentConfirmations = function(autoAcceptPaymentConfirmations) {
  this.autoAcceptPaymentConfirmations = autoAcceptPaymentConfirmations;
};

/**
* Get the field value
* If set to true, confirmation requests triggered by a challenge at the payment gateway are automatically accepted, and confirmation requests are not transmitted back to the calling program. Be sure you are willing to accept the risk associated with accepting offline or duplicate payment challenges. See https://docs.clover.com/build/working-with-challenges for more information.
* @memberof payments.TransactionSettings
* @return {Boolean} 
*/
TransactionSettings.prototype.getAutoAcceptPaymentConfirmations = function() {
  return this.autoAcceptPaymentConfirmations;
};

/**
* Set the field value
* @memberof payments.TransactionSettings
* @param {Boolean} autoAcceptSignature 
*/
TransactionSettings.prototype.setAutoAcceptSignature = function(autoAcceptSignature) {
  this.autoAcceptSignature = autoAcceptSignature;
};

/**
* Get the field value
* @memberof payments.TransactionSettings
* @return {Boolean} 
*/
TransactionSettings.prototype.getAutoAcceptSignature = function() {
  return this.autoAcceptSignature;
};

/**
* Set the field value
* @memberof payments.TransactionSettings
* @param {Boolean} returnResultOnTransactionComplete 
*/
TransactionSettings.prototype.setReturnResultOnTransactionComplete = function(returnResultOnTransactionComplete) {
  this.returnResultOnTransactionComplete = returnResultOnTransactionComplete;
};

/**
* Get the field value
* @memberof payments.TransactionSettings
* @return {Boolean} 
*/
TransactionSettings.prototype.getReturnResultOnTransactionComplete = function() {
  return this.returnResultOnTransactionComplete;
};

/**
* Set the field value
* @memberof payments.TransactionSettings
* @param {Array.<merchant.TipSuggestion>} tipSuggestions An array of 
*/
TransactionSettings.prototype.setTipSuggestions = function(tipSuggestions) {
  this.tipSuggestions = tipSuggestions;
};

/**
* Get the field value
* @memberof payments.TransactionSettings
* @return {Array.<merchant.TipSuggestion>} An array of 
*/
TransactionSettings.prototype.getTipSuggestions = function() {
  return this.tipSuggestions;
};

/**
* Set the field value
* @memberof payments.TransactionSettings
* @param {Object.<String,String>} regionalExtras A map of <String> to <>
*/
TransactionSettings.prototype.setRegionalExtras = function(regionalExtras) {
  this.regionalExtras = regionalExtras;
};

/**
* Get the field value
* @memberof payments.TransactionSettings
* @return {Object.<String,String>} A map of <String> to <>
*/
TransactionSettings.prototype.getRegionalExtras = function() {
  return this.regionalExtras;
};

/**
* @memberof payments.TransactionSettings
* @private
*/
TransactionSettings.prototype.getMetaInfo = function(fieldName) {
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

TransactionSettings.prototype.toString = function() {
  return JSON.stringify(this);
};

TransactionSettings._meta_ =  {fields:  {}};
TransactionSettings._meta_._class_ =  TransactionSettings;
TransactionSettings._meta_.fields["cardEntryMethods"] = {};
TransactionSettings._meta_.fields["cardEntryMethods"].type = Number;
TransactionSettings._meta_.fields["disableCashBack"] = {};
TransactionSettings._meta_.fields["disableCashBack"].type = Boolean;
TransactionSettings._meta_.fields["cloverShouldHandleReceipts"] = {};
TransactionSettings._meta_.fields["cloverShouldHandleReceipts"].type = Boolean;
TransactionSettings._meta_.fields["forcePinEntryOnSwipe"] = {};
TransactionSettings._meta_.fields["forcePinEntryOnSwipe"].type = Boolean;
TransactionSettings._meta_.fields["disableRestartTransactionOnFailure"] = {};
TransactionSettings._meta_.fields["disableRestartTransactionOnFailure"].type = Boolean;
TransactionSettings._meta_.fields["allowOfflinePayment"] = {};
TransactionSettings._meta_.fields["allowOfflinePayment"].type = Boolean;
TransactionSettings._meta_.fields["approveOfflinePaymentWithoutPrompt"] = {};
TransactionSettings._meta_.fields["approveOfflinePaymentWithoutPrompt"].type = Boolean;
TransactionSettings._meta_.fields["forceOfflinePayment"] = {};
TransactionSettings._meta_.fields["forceOfflinePayment"].type = Boolean;
TransactionSettings._meta_.fields["signatureThreshold"] = {};
TransactionSettings._meta_.fields["signatureThreshold"].type = Number;
TransactionSettings._meta_.fields["signatureEntryLocation"] = {};
TransactionSettings._meta_.fields["signatureEntryLocation"].type = payments_DataEntryLocation;
TransactionSettings._meta_.fields["tipMode"] = {};
TransactionSettings._meta_.fields["tipMode"].type = payments_TipMode;
TransactionSettings._meta_.fields["tippableAmount"] = {};
TransactionSettings._meta_.fields["tippableAmount"].type = Number;
TransactionSettings._meta_.fields["disableReceiptSelection"] = {};
TransactionSettings._meta_.fields["disableReceiptSelection"].type = Boolean;
TransactionSettings._meta_.fields["disableDuplicateCheck"] = {};
TransactionSettings._meta_.fields["disableDuplicateCheck"].type = Boolean;
TransactionSettings._meta_.fields["autoAcceptPaymentConfirmations"] = {};
TransactionSettings._meta_.fields["autoAcceptPaymentConfirmations"].type = Boolean;
TransactionSettings._meta_.fields["autoAcceptSignature"] = {};
TransactionSettings._meta_.fields["autoAcceptSignature"].type = Boolean;
TransactionSettings._meta_.fields["returnResultOnTransactionComplete"] = {};
TransactionSettings._meta_.fields["returnResultOnTransactionComplete"].type = Boolean;
TransactionSettings._meta_.fields["tipSuggestions"] = {};
TransactionSettings._meta_.fields["tipSuggestions"].type = Array;
TransactionSettings._meta_.fields["tipSuggestions"].elementType = merchant_TipSuggestion;
TransactionSettings._meta_.fields["regionalExtras"] = {};
TransactionSettings._meta_.fields["regionalExtras"].type = Object;

//
// Expose the module.
//
if ('undefined' !== typeof module) {
module.exports = TransactionSettings;
}

