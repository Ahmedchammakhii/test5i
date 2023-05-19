const  { getFirestore, collection, getDocs,getDoc ,doc,deleteDoc,addDoc} =require('firebase/firestore');
const app=require("../firebase")
const db =  getFirestore(app);

exports.getUsers=async()=> {
    const clientsCol = collection(db, 'clients');
    const clientSnapshot = await getDocs(clientsCol);
    const clientsList = clientSnapshot.docs.map(doc => doc.data());
    return clientsList;
  }
  exports.createUser=async (user)=> {
    const clientsCol = collection(db, 'clients');
    const newUserRef = await addDoc(clientsCol, user);
    console.log(`User created with ID: ${newUserRef.id}`);
  }


   exports.getOneUser=async(userId)=> {
    const usersCollection = collection(db, 'clients');
    const userRef = doc(usersCollection, userId);
    const userSnapshot = await getDoc(userRef);
    if (userSnapshot.exists()) {
      return userSnapshot.data();
    } else {
      console.log(`User with ID ${userId} not found`);
      return null;
    }
  }

  exports.deleteUser=async(userId)=> {
    const usersCollection = collection(db, 'clients');
    const userRef = doc(usersCollection, userId);
    const userSnapshot = await getDoc(userRef);
    if (userSnapshot.exists()) {
        await deleteDoc(userRef);
        console.log(`User with ID ${userId} deleted successfully`)
      } else {
        console.log(`User with ID ${userId} not found`);
        return null;
      }
    
    ;
  }