export default function getStorageData(keyName, defaultValue) {
    const savedItem = window.sessionStorage.getItem(keyName);
    return savedItem || defaultValue;
}