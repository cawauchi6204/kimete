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
	measurementId: FB_MEASUREMENT_ID,
}
// Initialize Firebase
try {
	firebase.initializeApp(firebaseConfig)
	firebase.analytics()
} catch (e) {
	console.log(e)
}

const db = firebase.firestore()
const auth = firebase.auth()

export const getAllUser = async () => {
	const users: any[] = []
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

export const signUpByEmail = (_email: string, _password: string) => {
  auth.createUserWithEmailAndPassword(_email,_password)
  .then((result:any) => {
    // result.user.updateProfile({
    // })
    console.log(result)
  }).catch((_error) => {
    console.log(_error.message)
  })
}

export const signOut = () => {
  auth.signOut()
}
