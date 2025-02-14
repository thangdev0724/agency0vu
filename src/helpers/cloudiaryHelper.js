import CryptoJS from "crypto-js";
import axios from "axios";
const API_SECRET = import.meta.env.VITE_CLOUDINARY_API_SECRET;
const API_KEY = import.meta.env.VITE_CLOUDINARY_API_KEY;
const CLOUD_NAME = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;

function generateHash(timestamp) {
  const string = `timestamp=${timestamp}${API_SECRET}`;
  const hash = CryptoJS.SHA1(string);
  return CryptoJS.enc.Hex.stringify(hash);
}

async function uploadImage(file) {
  const timestamp = new Date().getTime() / 1000;
  const signature = generateHash(timestamp);

  const formData = new FormData();
  formData.append("file", file);
  formData.append("api_key", API_KEY);
  formData.append("timestamp", timestamp);
  formData.append("signature", signature);
  try {
    const response = await axios.post(
      `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`,
      formData
    );
    return response.data;
  } catch (error) {
    return error.response;
  }
}

export default uploadImage;
