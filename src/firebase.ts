import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth'
import {
  getFirestore,
  query,
  getDocs,
  collection,
  where,
  addDoc,
} from 'firebase/firestore'

const provider = new GoogleAuthProvider()

const firebaseConfig = {
  apiKey: 'AIzaSyCSAtHpJt7L7eW9LeJaVFuwl2xRCsbliOI',
  authDomain: 'whatsapp-clone-b7ca4.firebaseapp.com',
  projectId: 'whatsapp-clone-b7ca4',
  storageBucket: 'whatsapp-clone-b7ca4.appspot.com',
  messagingSenderId: '398445311442',
  appId: '1:398445311442:web:c310f20efb8af26aa1440b',
}

const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const db = getFirestore(app)

export const signInWithGoogle = async () => {
  try {
    const res = await signInWithPopup(auth, provider)

    const firebaseUser = res.user

    const q = query(
      collection(db, 'users'),
      where('uid', '==', firebaseUser.uid)
    )

    const docs = await getDocs(q)

    if (docs.docs.length === 0) {
      await addDoc(collection(db, 'users'), {
        uid: firebaseUser.uid,
        username: firebaseUser.displayName,
        email: firebaseUser.email,
        img: firebaseUser.photoURL,
        contacts: [],
      })

      const newUser = {
        uid: firebaseUser.uid,
        username: firebaseUser.displayName,
        email: firebaseUser.email,
        img: firebaseUser.photoURL,
        contacts: [],
      }
      return newUser
    }

    const foundUser = docs.docs[0].data()

    return foundUser
  } catch (err) {
    console.error(err)
    alert('Error accoured')
  }
}

export const firebaseLogout = async () => {
  await signOut(auth)
}
