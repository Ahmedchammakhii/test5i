const serviceAccount = require('./serviceAccountKey.json');
const admin = require('firebase-admin');
const bcrypt = require("bcrypt")
const { VerifyToken } = require('../middlewear/verifyToken');
const scrypt = require('scrypt-js');
require('dotenv').config()
const serviceAccountKey = process.env.FIREBASE_CREDENTIAL["service_account_key"]
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
    const customClaims = { admin: true };


    await admin.auth().setCustomUserClaims(uid, customClaims);

    console.log("User signed up as admin:", userRecord);
  } catch (error) {
    console.error("Sign up error:", error.code, error.message);
  }
}
// async function signUpWithScrypt(email, password) {
//   function generateSalt(length = 16) {
//     const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
//     let salt = '';
//     for (let i = 0; i < length; i++) {
//       salt += characters.charAt(Math.floor(Math.random() * characters.length));
//     }
//     return salt;
//   }
//   try {

//     const salt = generateSalt(); // Generate a random salt
//     const passwordBuffer = Buffer.from(password, 'utf8');
//     const scryptParams = { N: 16384, r: 8, p: 1, dkLen: 64, encoding: 'binary' };

//     // Derive the password hash using scrypt
//     const derivedKey = await scrypt(passwordBuffer, salt, scryptParams);

//     // Store the derivedKey and salt in your user data collection or database
//     const userRecord = await admin.auth().createUser({
//       email: email,
//       passwordHash: derivedKey.toString('base64'),
//       salt: salt.toString('base64'),
//     });
//     const uid = userRecord.uid;

//     await admin.auth().setCustomUserClaims(uid, { admin: true });
//     console.log('User registered:', userRecord);
//   } catch (error) {
//     console.error('Registration error:', error.code, error.message);
//   }
// }

async function signIn(req, res) {
  const email = req.body.email;
  const password = req.body.password
  try {
    const userRecord = await admin.auth().getUserByEmail(email);
    //       const passwordMatch = await bcrypt.compare(password, userRecord.passwordHash);
    // console.log(passwordMatch)
    const customToken = "bearer: " + await admin.auth().createCustomToken(userRecord.uid);
    if (userRecord.customClaims && userRecord.customClaims.admin) {
      console.log("Admin privileges granted");
      console.log("User signed in:", userRecord);
    } else {
      // Code for non-admin actions
      console.log("You are not an admin");
    }

    const uid = await VerifyToken(customToken);

    res.status(200).json(userRecord);
  } catch (error) {
    console.error("Sign in error:", error.code, error.message);
    return res.status(500).json({ error: 'Sign in error' });
  }
}

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
  signUpAsAdmin,
  signIn,
  signOut,
}


