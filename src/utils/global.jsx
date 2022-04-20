import getStorageInterface from "./storageFactory";

const BACKGROUND = {
  'cryptoReady': false,
  'network': null,
  'storage': getStorageInterface()
}

export default BACKGROUND ;