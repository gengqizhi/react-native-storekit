/**
 * @providesModule RNStoreKit
 * @flow
 */
'use strict';
import { NativeModules } from 'react-native';
let NativeRNStoreKit = NativeModules.RNStoreKit;
let NativeProductRequest = NativeModules.RNProductRequest;
let NativeTransaction = NativeModules.RNTransaction;

class RNStoreKit{
  constructor(ids, callback){
    //自定义请求的产品
    //NativeProductRequest.requestProductsCustom(ids, (response,error)=>callback(response,error));
  }
  //NativeProductRequest\\
  //取消
  cancel = () => NativeRNStoreKit.cancel();
  //NativeRNStoreKit\\
  //请求产品
  requestProducts = (ids, callback) => {
  NativeRNStoreKit.requestProducts(ids, callback);
}
//请求产品
requestProductsCustom = (ids, callback) => {
  NativeRNStoreKit.requestProductsCustom(ids, (response,error)=>callback(response,error));
}
//购买 purchaseData: {product:'',quantity: num,applicationUsername:'applicationUsername'}
purchase = (purchaseData) => NativeRNStoreKit.purchase(purchaseData);
//刷新收据
refreshReceipt = (properties, callback) => NativeRNStoreKit.refreshReceipt(properties, callback);
//添加事务
addTransactionObserver = (args) => NativeRNStoreKit.addTransactionObserver(args);
//删除事务
removeTransactionObserver = () => NativeRNStoreKit.removeTransactionObserver();
//是否存在收据
receiptExists = () => NativeRNStoreKit.receiptExists();
//是否可以支付
canMakePayments = () => NativeRNStoreKit.canMakePayments();
//开始下载
startDownloads = (downloads) => NativeRNStoreKit.startDownloads(downloads);
//取消下载
cancelDownloads = (downloads) => NativeRNStoreKit.cancelDownloads(downloads);
//暂停下载
pauseDownloads = (downloads) => NativeRNStoreKit.pauseDownloads(downloads);
//继续下载
resumeDownloads = (downloads) => NativeRNStoreKit.resumeDownloads(downloads);
//恢复完成交易
restoreCompletedTransactions = (args) => NativeRNStoreKit.restoreCompletedTransactions(args);
//设置收据验证沙箱
setReceiptVerificationSandbox = (value) => NativeRNStoreKit.setReceiptVerificationSandbox(value);
//设置包版本
setBundleVersion = (_bundleVersion) => NativeRNStoreKit.setBundleVersion(_bundleVersion);
//设置包ID
setBundleIdentifier = (_bundleIdentifier) => NativeRNStoreKit.setBundleIdentifier(_bundleIdentifier);
//设置自动完成交易
setAutoFinishTransactions = (_autoFinishTransactions) => NativeRNStoreKit.setAutoFinishTransactions(_autoFinishTransactions);
//NativeTransaction\\
//完成
finish = () => NativeTransaction.finish();
}

module.exports = RNStoreKit;
