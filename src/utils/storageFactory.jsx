import StorageExtension from './storageExtension'
import StorageWeb from './storageWeb'


const StorageClasses = {
  'extension': StorageExtension,
  'web': StorageWeb
}

function getStorageInterface() {
    const url = window.location.href
    const env = (url.split(':')[0] == 'chrome-extension') ? 'extension' : 'web'
    const storage = new StorageClasses[env]()
    return storage ;
}


export default getStorageInterface;