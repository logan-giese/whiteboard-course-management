import firebase from "./firebase.js";

// User data service for fetching and updating user data in Firestore
const UserService = {
    
    // Get a collection of all users in the system
    getUsers: async () => {
        const db = firebase.firestore();
        
        const snapshot = await db.collection('users').get();
        return snapshot.docs.map((user) => {
            return {
                id: user.id,
                ...user.data()
            }
        });
    },
    
    // Get a specific user by ID
    // Returns null if the user can't be found
    getUserById: async (id) => {
        const db = firebase.firestore();
        
        const doc = await db.collection('users').doc(id).get();
        return (doc.exists ? {id: id, ...doc.data()} : null);
    },
    
    // Create a new user with the provided data and return the ID
    createUser: async (newUser) => {
        const db = firebase.firestore();
        
        const doc = await db.collection('users').add(newUser);
        return doc.id;
    },
    
}

export default UserService;
