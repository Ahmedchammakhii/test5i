const { getFirestore, collection, getDocs, getDoc, doc, deleteDoc, addDoc,query,where,serverTimestamp } = require('firebase/firestore');
const app = require("../firebase")
const db = getFirestore(app);

exports.getUsers = async () => {
  const clientsCol = collection(db, 'clients');
  const clientSnapshot = await getDocs(clientsCol) ;
  const clientsList = clientSnapshot.docs.map(doc => ({
    id: doc.id,
    data: doc.data()
  }));
  return clientsList;
}
exports.createUser = async (user) => {
  const clientsCol = collection(db, 'clients');
  const userWithTimestamp = {
    ...user,
    created_at: serverTimestamp(),
    // needs: firebase.firestore.FieldValue.arrayUnion(...user.arrayField) // Assuming the array of strings is in user.arrayField
  };
  const newUserRef = await addDoc(clientsCol, userWithTimestamp);
  console.log(`User created with ID: ${newUserRef.id}`);
};



exports.getOneUser = async (userId) => {
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

exports.deleteUser = async (userId) => {
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

  
}
exports.getMonthlyUsers = async () => {
  const clientsCol = collection(db, 'clients');
  const currentDate = new Date();
  const currentMonthStart = new Date(currentDate.getFullYear(), currentDate.getMonth(), );
  const currentMonthEnd = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0, 23, 59, 59, 999);
  const usersQuery = query(clientsCol, where('created_at', '>=', currentMonthStart), where('created_at', '<=', currentMonthEnd));
  const querySnapshot = await getDocs(usersQuery);
  const monthlyUsersList = querySnapshot.docs.map(doc => {
    const data = doc.data();
    data.created_at = data.created_at.toDate(); 
    return data;  
  });
  console.log("these are all the users who've dowloaded the catalogue from ",currentMonthStart," to "+ currentMonthEnd, "monthly", monthlyUsersList);
  return monthlyUsersList;
}
