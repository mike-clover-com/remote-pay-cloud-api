
module.exports.remotemessage = remotemessage;
/**
* @namespace remotemessage
*/
function remotemessage() {}


remotemessage.AcknowledgementMessage = require("./AcknowledgementMessage");
remotemessage.ActivityMessageFromActivity = require("./ActivityMessageFromActivity");
remotemessage.ActivityMessageToActivity = require("./ActivityMessageToActivity");
remotemessage.ActivityRequest = require("./ActivityRequest");
remotemessage.ActivityResponseMessage = require("./ActivityResponseMessage");
remotemessage.AddDiscountAction = require("./AddDiscountAction");
remotemessage.AddLineItemAction = require("./AddLineItemAction");
remotemessage.BalanceInquiryRequestMessage = require("./BalanceInquiryRequestMessage");
remotemessage.BalanceInquiryResponseMessage = require("./BalanceInquiryResponseMessage");
remotemessage.BreakMessage = require("./BreakMessage");
remotemessage.CapturePreAuthMessage = require("./CapturePreAuthMessage");
remotemessage.CapturePreAuthResponseMessage = require("./CapturePreAuthResponseMessage");
remotemessage.CardDataRequestMessage = require("./CardDataRequestMessage");
remotemessage.CardDataResponseMessage = require("./CardDataResponseMessage");
remotemessage.CashbackSelectedMessage = require("./CashbackSelectedMessage");
remotemessage.CloseoutRequestMessage = require("./CloseoutRequestMessage");
remotemessage.CloseoutResponseMessage = require("./CloseoutResponseMessage");
remotemessage.CloverDeviceLogMessage = require("./CloverDeviceLogMessage");
remotemessage.ConfigurationChangeMessage = require("./ConfigurationChangeMessage");
remotemessage.ConfirmPaymentMessage = require("./ConfirmPaymentMessage");
remotemessage.CreditPrintMessage = require("./CreditPrintMessage");
remotemessage.CustomerInfoMessage = require("./CustomerInfoMessage");
remotemessage.CustomerProvidedDataMessage = require("./CustomerProvidedDataMessage");
remotemessage.DeclineCreditPrintMessage = require("./DeclineCreditPrintMessage");
remotemessage.DeclinePaymentPrintMessage = require("./DeclinePaymentPrintMessage");
remotemessage.DiscoveryRequestMessage = require("./DiscoveryRequestMessage");
remotemessage.DiscoveryResponseMessage = require("./DiscoveryResponseMessage");
remotemessage.EmployeePermissionsRequest = require("./EmployeePermissionsRequest");
remotemessage.ErrorCode = require("./ErrorCode");
remotemessage.ErrorCodeEnum = require("./ErrorCodeEnum");
remotemessage.ExternalDeviceState = require("./ExternalDeviceState");
remotemessage.ExternalDeviceStateData = require("./ExternalDeviceStateData");
remotemessage.ExternalDeviceStateEnum = require("./ExternalDeviceStateEnum");
remotemessage.ExternalDeviceSubState = require("./ExternalDeviceSubState");
remotemessage.FinishCancelMessage = require("./FinishCancelMessage");
remotemessage.FinishOkMessage = require("./FinishOkMessage");
remotemessage.ForceConnectMessage = require("./ForceConnectMessage");
remotemessage.GetPrintersRequestMessage = require("./GetPrintersRequestMessage");
remotemessage.GetPrintersResponseMessage = require("./GetPrintersResponseMessage");
remotemessage.ImagePrintMessage = require("./ImagePrintMessage");
remotemessage.IncrementPreAuthMessage = require("./IncrementPreAuthMessage");
remotemessage.IncrementPreAuthResponseMessage = require("./IncrementPreAuthResponseMessage");
remotemessage.InputOption = require("./InputOption");
remotemessage.InvalidStateTransitionMessage = require("./InvalidStateTransitionMessage");
remotemessage.KeyPress = require("./KeyPress");
remotemessage.KeyPressEnum = require("./KeyPressEnum");
remotemessage.KeyPressMessage = require("./KeyPressMessage");
remotemessage.LastMessageRequestMessage = require("./LastMessageRequestMessage");
remotemessage.LastMessageResponseMessage = require("./LastMessageResponseMessage");
remotemessage.LogLevelEnum = require("./LogLevelEnum");
remotemessage.LogMessage = require("./LogMessage");
remotemessage.LoyaltyPointsCalculatedMessage = require("./LoyaltyPointsCalculatedMessage");
remotemessage.LoyaltyPointsEarnedMessage = require("./LoyaltyPointsEarnedMessage");
remotemessage.LoyaltyPointsReceiptPrintedMessage = require("./LoyaltyPointsReceiptPrintedMessage");
remotemessage.Message = require("./Message");
remotemessage.Method = require("./Method");
remotemessage.OpenCashDrawerMessage = require("./OpenCashDrawerMessage");
remotemessage.OrderActionAddDiscountMessage = require("./OrderActionAddDiscountMessage");
remotemessage.OrderActionAddLineItemMessage = require("./OrderActionAddLineItemMessage");
remotemessage.OrderActionRemoveDiscountMessage = require("./OrderActionRemoveDiscountMessage");
remotemessage.OrderActionRemoveLineItemMessage = require("./OrderActionRemoveLineItemMessage");
remotemessage.OrderActionResponse = require("./OrderActionResponse");
remotemessage.OrderActionResponseMessage = require("./OrderActionResponseMessage");
remotemessage.OrderUpdateMessage = require("./OrderUpdateMessage");
remotemessage.PairingCodeMessage = require("./PairingCodeMessage");
remotemessage.PairingRequestMessage = require("./PairingRequestMessage");
remotemessage.PairingResponseMessage = require("./PairingResponseMessage");
remotemessage.PairingState = require("./PairingState");
remotemessage.PartialAuthMessage = require("./PartialAuthMessage");
remotemessage.PayIntent = require("./PayIntent");
remotemessage.PaymentConfirmedMessage = require("./PaymentConfirmedMessage");
remotemessage.PaymentPrintMerchantCopyMessage = require("./PaymentPrintMerchantCopyMessage");
remotemessage.PaymentPrintMessage = require("./PaymentPrintMessage");
remotemessage.PaymentRejectedMessage = require("./PaymentRejectedMessage");
remotemessage.PaymentVoidedMessage = require("./PaymentVoidedMessage");
remotemessage.PrintJobStatusRequestMessage = require("./PrintJobStatusRequestMessage");
remotemessage.PrintJobStatusResponseMessage = require("./PrintJobStatusResponseMessage");
remotemessage.QueryStatus = require("./QueryStatus");
remotemessage.QueryStatusEnum = require("./QueryStatusEnum");
remotemessage.RefundPaymentPrintMessage = require("./RefundPaymentPrintMessage");
remotemessage.RefundRequestMessage = require("./RefundRequestMessage");
remotemessage.RefundResponseMessage = require("./RefundResponseMessage");
remotemessage.RegisterForCustomerProvidedDataMessage = require("./RegisterForCustomerProvidedDataMessage");
remotemessage.RemoteError = require("./RemoteError");
remotemessage.RemoteMessage = require("./RemoteMessage");
remotemessage.RemoteMessageType = require("./RemoteMessageType");
remotemessage.RemoveDiscountAction = require("./RemoveDiscountAction");
remotemessage.RemoveLineItemAction = require("./RemoveLineItemAction");
remotemessage.RequestTipRequestMessage = require("./RequestTipRequestMessage");
remotemessage.RequestTipResponseMessage = require("./RequestTipResponseMessage");
remotemessage.ResetDeviceResponseMessage = require("./ResetDeviceResponseMessage");
remotemessage.ResetMessage = require("./ResetMessage");
remotemessage.ResultStatus = require("./ResultStatus");
remotemessage.ResultStatusEnum = require("./ResultStatusEnum");
remotemessage.RetrieveCustomActivitiesRequestMessage = require("./RetrieveCustomActivitiesRequestMessage");
remotemessage.RetrieveCustomActivitiesResponseMessage = require("./RetrieveCustomActivitiesResponseMessage");
remotemessage.RetrieveDeviceStatusRequestMessage = require("./RetrieveDeviceStatusRequestMessage");
remotemessage.RetrieveDeviceStatusResponseMessage = require("./RetrieveDeviceStatusResponseMessage");
remotemessage.RetrievePaymentRequestMessage = require("./RetrievePaymentRequestMessage");
remotemessage.RetrievePaymentResponseMessage = require("./RetrievePaymentResponseMessage");
remotemessage.RetrievePendingPaymentsMessage = require("./RetrievePendingPaymentsMessage");
remotemessage.RetrievePendingPaymentsResponseMessage = require("./RetrievePendingPaymentsResponseMessage");
remotemessage.ShowPaymentReceiptOptionsMessage = require("./ShowPaymentReceiptOptionsMessage");
remotemessage.ShowReceiptOptionsMessage = require("./ShowReceiptOptionsMessage");
remotemessage.ShowReceiptOptionsResponseMessage = require("./ShowReceiptOptionsResponseMessage");
remotemessage.ShutDownMessage = require("./ShutDownMessage");
remotemessage.SignatureRequestMessage = require("./SignatureRequestMessage");
remotemessage.SignatureResponseMessage = require("./SignatureResponseMessage");
remotemessage.SignatureVerifiedMessage = require("./SignatureVerifiedMessage");
remotemessage.StartVasMessage = require("./StartVasMessage");
remotemessage.StopVasMessage = require("./StopVasMessage");
remotemessage.TerminalMessage = require("./TerminalMessage");
remotemessage.TextPrintMessage = require("./TextPrintMessage");
remotemessage.ThankYouMessage = require("./ThankYouMessage");
remotemessage.TipAddedMessage = require("./TipAddedMessage");
remotemessage.TipAdjustMessage = require("./TipAdjustMessage");
remotemessage.TipAdjustResponseMessage = require("./TipAdjustResponseMessage");
remotemessage.TransactionType = require("./TransactionType");
remotemessage.TxStartRequestMessage = require("./TxStartRequestMessage");
remotemessage.TxStartResponseMessage = require("./TxStartResponseMessage");
remotemessage.TxStartResponseResult = require("./TxStartResponseResult");
remotemessage.TxState = require("./TxState");
remotemessage.TxStateEnum = require("./TxStateEnum");
remotemessage.TxStateMessage = require("./TxStateMessage");
remotemessage.TxTypeRequestInfo = require("./TxTypeRequestInfo");
remotemessage.UiDirection = require("./UiDirection");
remotemessage.UiState = require("./UiState");
remotemessage.UiStateMessage = require("./UiStateMessage");
remotemessage.VasConfigChangedMessage = require("./VasConfigChangedMessage");
remotemessage.VasConfigMessage = require("./VasConfigMessage");
remotemessage.VasPayloadMessage = require("./VasPayloadMessage");
remotemessage.VasState = require("./VasState");
remotemessage.VasStateEnum = require("./VasStateEnum");
remotemessage.VasStateMessage = require("./VasStateMessage");
remotemessage.VaultCardMessage = require("./VaultCardMessage");
remotemessage.VaultCardResponseMessage = require("./VaultCardResponseMessage");
remotemessage.VerifySignatureMessage = require("./VerifySignatureMessage");
remotemessage.VoidCreditMessage = require("./VoidCreditMessage");
remotemessage.VoidCreditResponseMessage = require("./VoidCreditResponseMessage");
remotemessage.VoidPaymentMessage = require("./VoidPaymentMessage");
remotemessage.VoidPaymentRefundMessage = require("./VoidPaymentRefundMessage");
remotemessage.VoidPaymentRefundResponseMessage = require("./VoidPaymentRefundResponseMessage");
remotemessage.VoidPaymentResponseMessage = require("./VoidPaymentResponseMessage");
remotemessage.WelcomeMessage = require("./WelcomeMessage.js");

//
// Expose the module.
//
if ('undefined' !== typeof module) {
  module.exports = remotemessage;
}
    