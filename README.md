# StoreKit In-App Purchase with React Native

## Usage

  1. Run `npm i -S gengqizhi/react-native-storekit`
  2. Code like this:
  ```
  import Storekit from 'react-native-storekit';
  let InAppPurchase = new Storekit(["MERCHANT_IDENTIFIER"],(response,error)=>{console.log(response,error)});
  let purchaseData = {
    product: '',
    quantity: 1,
    applicationUsername: '',
  };
  InAppPurchase.purchase(purchaseData);
  
  ```




## Author
Hans Knoechel ([@hansemannnn](https://twitter.com/hansemannnn) / [Web](http://hans-knoechel.de))

## License
Apache 2.0

## Contributing
Code contributions are greatly appreciated, please submit a new [pull request](https://github.com/hansemannn/react-native-storekit/pull/new/master)!
