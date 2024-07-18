import CryptoJS from 'crypto-js'; // Use CryptoJS for browser compatibility

// Encryption Configuration
const algorithm = 'aes-256-cbc';

const secretKey = import.meta.env.VITE_ENCRYPTION_SECRET;
if (!secretKey) {
  throw new Error('Encryption secret key (VITE_ENCRYPTION_SECRET) is missing!');
}

const ivLengthBytes = 16;

export function encrypt(data) {
  const key = CryptoJS.enc.Hex.parse(secretKey);
  const iv = CryptoJS.lib.WordArray.random(ivLengthBytes);

  const encrypted = CryptoJS.AES.encrypt(data, key, {
    iv: iv,
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7
  });

  // Encode IV and ciphertext separately to Base64 to avoid issues with special characters
  const ivBase64 = CryptoJS.enc.Base64.stringify(iv);
  const encryptedBase64 = encrypted.toString();
  return ivBase64 + encryptedBase64;
}

export function decrypt(data) {
  try {
    // Decode IV and ciphertext from Base64
    const iv = CryptoJS.enc.Base64.parse(data.substring(0, 24));
    const encryptedText = CryptoJS.enc.Base64.parse(data.substring(24));

    const key = CryptoJS.enc.Hex.parse(secretKey);

    const decrypted = CryptoJS.AES.decrypt({ ciphertext: encryptedText }, key, {
      iv: iv,
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.Pkcs7
    });

    return decrypted.toString(CryptoJS.enc.Utf8);
  } catch (error) {
    console.error("Decryption failed:", error);
    return null;
  }
}