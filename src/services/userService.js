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
    // An ID can be optionally provided to give the new user a specific ID
    createUser: async (newUser, id = "") => {
        const db = firebase.firestore();
        
        if (id == "") {
            const doc = await db.collection("users").add(newUser);
            return doc.id;
        } else {
            await db.collection("users").doc(id).set(newUser);
            return id;
        }
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
    
    // Enroll a student in the given course if not enrolled already
    enrollCourse: async (userId, courseId) => {
        const db = firebase.firestore();
        
        const doc = db.collection('users').doc(userId);
        await doc.update({
            enrolled_courses: firebase.firestore.FieldValue.arrayUnion(courseId)
        });
    },
    
    // Unenroll a student from the given course (remove it from their list of enrolled courses)
    unenrollCourse: async (userId, courseId) => {
        const db = firebase.firestore();
        
        const doc = db.collection('users').doc(userId);
        await doc.update({
            enrolled_courses: firebase.firestore.FieldValue.arrayRemove(courseId)
        });
    },
    
    // Check if a student is enrolled in the given course
    enrolledInCourse: async (userId, courseId) => {
        const db = firebase.firestore();
        
        const doc = await db.collection('users').doc(userId).get();
        if (doc.exists && doc.data().enrolled_courses?.includes(courseId))
            return true;
        return false;
    },
    
    // Assign a professor to the given course if not assigned already
    assignCourse: async (userId, courseId) => {
        const db = firebase.firestore();
        
        const doc = db.collection('users').doc(userId);
        await doc.update({
            assigned_courses: firebase.firestore.FieldValue.arrayUnion(courseId)
        });
    },
    
    // Unassign a professor from the given course (remove it from their list of assigned courses)
    unassignCourse: async (userId, courseId) => {
        const db = firebase.firestore();
        
        const doc = db.collection('users').doc(userId);
        await doc.update({
            assigned_courses: firebase.firestore.FieldValue.arrayRemove(courseId)
        });
    },
    
    // Check if a professor is assigned to the given course
    assignedToCourse: async (userId, courseId) => {
        const db = firebase.firestore();
        
        const doc = await db.collection('users').doc(userId).get();
        if (doc.exists && doc.data().assigned_courses?.includes(courseId))
            return true;
        return false;
    },
    
}

export default UserService;
