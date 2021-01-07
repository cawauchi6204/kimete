import firebase from 'firebase'
import {
  FB_APIKEY,
  FB_AUTH_DOMAIN,
  FB_PROJECT_ID,
  FB_STORAGE_BUCKET,
  FB_MESSAGING_SENDER_ID,
  FB_APP_ID,
  FB_MEASUREMENT_ID,
} from '@env'

export const firebaseConfig = {
  apiKey: FB_APIKEY,
  authDomain: FB_AUTH_DOMAIN,
  projectId: FB_PROJECT_ID,
  storageBucket: FB_STORAGE_BUCKET,
  messagingSenderId: FB_MESSAGING_SENDER_ID,
  appId: FB_APP_ID,
  measurementId: FB_MEASUREMENT_ID
}
// Initialize Firebase
try {
  firebase.initializeApp(firebaseConfig)
  firebase.analytics();
} catch (e) {
  console.log(e)
}
export const db = firebase.firestore()

export const getAllUser = async () => {
	const users = []
	db.collection('users')
		.get()
		.then((docs) => {
			if (docs) {
				docs.forEach((doc) => {
					users.push(doc.data())
				})
			}
			console.log(users)
		})
		.catch((error) => {
			console.log(error.message)
		})
}


