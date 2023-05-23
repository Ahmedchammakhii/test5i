const { getFirestore, collection, getDocs, getDoc, doc, deleteDoc, addDoc, query, where,updateDoc } = require('firebase/firestore');
const app = require("../firebase")
const db = getFirestore(app);

exports.getBlogs = async () => {
  const blogsCol = collection(db, 'blogs');
  const blogsnapshot = await getDocs(blogsCol);
  const blogsList = blogsnapshot.docs.map(doc => ({
    id: doc.id,
    data: doc.data()}))
  return blogsList;
}
exports.createBlog = async (blog) => {
  const blogsCol = collection(db, 'blogs');
  const newblogRef = await addDoc(blogsCol, blog);
  console.log(`blog created with ID: ${newblogRef.id}`);
}


exports.getOneBlog = async (blogId) => {
  const blogsCollection = collection(db, 'blogs');
  const blogRef = doc(blogsCollection, blogId);
  const blogsnapshot = await getDoc(blogRef);
  if (blogsnapshot.exists()) {
    return blogsnapshot.data();
  } else {
    console.log(`blog with ID ${blogId} not found`);
    return null;
  }
}

exports.deleteBlog = async (blogId) => {
  const blogsCollection = collection(db, 'blogs');
  const blogRef = doc(blogsCollection, blogId);
  const blogsnapshot = await getDoc(blogRef);
  if (blogsnapshot.exists()) {
    await deleteDoc(blogRef);
    console.log(`blog with ID ${blogId} deleted successfully`)
  } else {
    console.log(`blog with ID ${blogId} not found`);
    return null;
  }


}
exports.getMonthlyBlogs = async () => {
  const blogsCol = collection(db, 'blogs');
  const currentDate = new Date();
  const currentMonthStart = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
  const blogsquery = query(blogsCol, where('created_at', '>=', currentMonthStart));
  const querySnapshot = await getDocs(blogsquery);
  const monthlyBlogsList = querySnapshot.docs.map(doc => {
    const data = doc.data();
    data.created_at = data.created_at.toDate();
    return data;
  });
  console.log(monthlyBlogsList, "date :", currentMonthStart)
  return monthlyBlogsList;
}


exports.updateBlog = async (blogId, updatedData) => {
  const blogRef = doc(db, 'blogs', blogId);
  try {
    await updateDoc(blogRef, updatedData);
    console.log('Blog updated successfully.');
  } catch (error) {
    console.error('Error updating blog:', error);
  }
};