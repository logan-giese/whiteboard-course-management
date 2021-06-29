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
    
    // Update a user by ID, changing only the fields in the provided data object
    // Example: updateUser(3, {first_name: 'Geoffrey'}) will only change the user's first name
    updateUser: async (id, newData) => {
        const db = firebase.firestore();
        
        const doc = db.collection('users').doc(id);
        await doc.update(newData);
    },
    
    // Delete a user by ID
    deleteUser: async (id) => {
        const db = firebase.firestore();
        
        db.collection('users').doc(id).delete();
    },
    
    // TODO - handle assigned and enrolled courses
    
}

export default UserService;
