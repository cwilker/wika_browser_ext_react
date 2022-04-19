import React from 'react';
import StorageExtension from './storageExtension'
import StorageWeb from './storageWeb'



export default Object.assign({
  extension:{
      storage: StorageManagment
  },
  web:{
      storage: StorageManagment
  }
}
)



// function bytesToHex(byteArray) {
//   var s = '0x';
//   byteArray.forEach(function (byte) {
//       s += ('0' + (byte & 0xFF).toString(16)).slice(-2);
//   });
//   return s;
// }

// const importAccount = (phrase) => {
//   let keyring = new polkadotKeyring.Keyring({ type: 'sr25519' });
//   let newPair = keyring.addFromUri(phrase) ;
//   let account = {
//       address: newPair.address,
//       addressRaw: bytesToHex(newPair.addressRaw),
//       phrase: phrase,
//       accountName: '<Account Name>'
//   } ;
//   return account ;
// }

// const generateAddAccount = () => {
//   let phrase = polkadotUtilCrypto.mnemonicGenerate(12);
//   return importAccount(phrase) ;
// }

// let tmp_accounts = {'a1':generateAddAccount(), 'a2': generateAddAccount(), 'a3': generateAddAccount()}
// var devStorage = {'accounts': tmp_accounts, 'accountSelected': 'a1'}

// class StorageManagment extends React.Component{

  
//   // get = (key) => {
//   //   const p = new Promise(
//   //     (resolve) => {
//   //       chrome.storage.local.get(key, (result) => {
//   //         resolve(result[key])
//   //       });
//   //     }
//   //   ) 
//   //   return p
//   // }

//   get = (key) => {
//     return devStorage[key]
//   }

//   // set = (obj) => {
//   //   const p = new Promise(
//   //     (resolve) => {
//   //       chrome.storage.local.set(obj, () => {
//   //         resolve('done')
//   //       })
//   //     }
//   //   )
//   //   return p
//   // }

//   set = (obj) => {
//     devStorage = obj
//   }

//   // saveNewAccount = (accounts, account, accountKey, salt) => {
//   //   const p = new Promise(
//   //     (resolve) => {
//   //       account.phrase = this.encrypt(account.phrase, salt);
//   //       accounts[accountKey] = account;
//   //       chrome.storage.local.set({'accounts': accounts, 'accountSelected': accountKey}, () => {
//   //         resolve(accounts)
//   //       });
//   //     }
//   //   )
//   //   return p
//   // }


// }

// export default StorageManagment;