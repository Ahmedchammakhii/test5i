const serviceAccount = require('./serviceAccountKey.json');
const admin = require('firebase-admin');
const bcrypt=require("bcrypt")
const {VerifyToken} =require('../middlewear/verifyToken');

require('dotenv').config()
const serviceAccountKey=process.env.FIREBASE_CREDENTIAL["service_account_key"]
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://db5i-9ff89.firebaseio.com/'
});

async function signUpAsAdmin(email, password) {
  try {
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const userRecord = await admin.auth().createUser({
      email: email,
      password: hashedPassword
    });

    const uid = userRecord.uid;

    await admin.auth().setCustomUserClaims(uid, { admin: true });

    console.log("User signed up as admin:", userRecord);
  } catch (error) {
    console.error("Sign up error:", error.code, error.message);
  }
}


async function signIn(req, res) {
    const  email = req.body.email;
  
    try {
      const userRecord = await admin.auth().getUserByEmail(email);
      const customToken = "bearer: "+ await admin.auth().createCustomToken(userRecord.uid);
  
      console.log("User signed in:", userRecord);
      const uid = await VerifyToken(customToken);

      res.status(200).json(userRecord);
    } catch (error) {
      console.error("Sign in error:", error.code, error.message);
      return res.status(500).json({ error: 'Sign in error' });
    }
  }
  
  module.exports = {
    signIn,
  };

async function signOut(uid) {
    try {
        await admin.auth().revokeRefreshTokens(uid);
        console.log("Refresh tokens revoked for user:", uid);
      } catch (error) {
        console.error("Error revoking refresh tokens:", error);
        throw error;
      }
    }

module.exports = {
    admin,
    signUpAsAdmin,
    signIn,
signOut}
 

