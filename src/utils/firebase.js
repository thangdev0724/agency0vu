import { initializeApp } from "firebase/app";
import { v4 as uuidv4 } from "uuid";

import {
  getFirestore,
  collection,
  getDocs,
  doc,
  setDoc,
  updateDoc,
  deleteDoc,
  getDoc,
} from "firebase/firestore/lite";

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyDIF-ufMmtdP55nlMcy5EfWgafGpaXLl8o",
  authDomain: "webapp-6cfcf.firebaseapp.com",
  projectId: "webapp-6cfcf",
  storageBucket: "webapp-6cfcf.appspot.com",
  messagingSenderId: "458974569241",
  appId: "1:458974569241:web:0a685879a30719a9f45b88",
  measurementId: "G-FZ21GP426R",
};

export const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export async function getListProduct(col = "romanProduct") {
  const productCols = collection(db, col);
  const snapshot = await getDocs(productCols);
  const productList = snapshot.docs.map((doc) => doc.data());

  return productList;
}

export async function insertDocument(data, collection = "romanProduct") {
  const id = uuidv4();
  const docs = { ...data, id };
  await setDoc(doc(db, collection, id), docs);
}

export async function updateDocument(id, data, collection = "romanProduct") {
  console.log(data);
  const washingtonRef = doc(db, collection, id);
  await updateDoc(washingtonRef, data);
}

export async function deleteDocument(id, collection = "romanProduct") {
  await deleteDoc(doc(db, collection, id.toString()));
}

export async function getDetailDocument(id, collection = "romanProduct") {
  const washingtonRef = doc(db, collection, id);
  const docSnap = await getDoc(washingtonRef);

  if (docSnap.exists()) {
    return docSnap.data();
  } else {
    console.log("No such document!");
    return null;
  }
}
