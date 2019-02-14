/**
 * Autogenerated by Avro
 * 
 * DO NOT EDIT DIRECTLY
 */


/**
* @memberof payments
* @enum {string}
*/
TransactionResult = {
  APPROVED : "APPROVED",
  DECLINED : "DECLINED",
  ABORTED : "ABORTED",
  VOICE_AUTHORISATION : "VOICE_AUTHORISATION",
  PAYMENT_PART_ONLY : "PAYMENT_PART_ONLY",
  PARTIALLY_APPROVED : "PARTIALLY_APPROVED",
  NONE : "NONE"
};


//
// Expose the module.
//
if ('undefined' !== typeof module) {
module.exports = TransactionResult;
}

