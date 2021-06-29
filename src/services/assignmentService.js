import firebase from "./firebase.js";

// Assignment data service for fetching and updating assignment data in Firestore
const AssignmentService = {
    
    // Get a collection of all assignments within a course
    getAssignments: async (courseId) => {
        const db = firebase.firestore();
        
        const snapshot = await db.collection('courses').doc(courseId).collection('assignments').get();
        return snapshot.docs.map((assignment) => {
            return {
                id: assignment.id,
                ...assignment.data()
            }
        });
    },
    
    // Get a specific assignment by ID
    // Returns null if the assignment can't be found
    getAssignmentById: async (courseId, assignmentId) => {
        const db = firebase.firestore();
        
        const doc = await db.collection('courses').doc(courseId).collection('assignments').doc(assignmentId).get();
        return (doc.exists ? {id: assignmentId, ...doc.data()} : null);
    },
    
    // Add new assignment with the provided data to the specified course and return the assignment ID
    addAssignment: async (courseId, newAssignment) => {
        const db = firebase.firestore();
        
        const doc = await db.collection('courses').doc(courseId).collection('assignments').add(newAssignment);
        return doc.id;
    },
    
    // Update assignment by ID, changing only the fields in the provided data object
    // Example: updateAssignment(2, 31, {title: 'Demo Assignment'}) will only change the assignment's title
    updateAssignment: async (courseId, assignmentId, newData) => {
        const db = firebase.firestore();
        
        const doc = db.collection('courses').doc(courseId).collection('assignments').doc(assignmentId);
        await doc.update(newData);
    },
    
    // Delete assignment by ID
    deleteAssignment: async (courseId, assignmentId) => {
        const db = firebase.firestore();
        
        db.collection('courses').doc(courseId).collection('assignments').doc(assignmentId).delete();
    },
    
    // TODO - handle assignment submissions fetch/update
    
}

export default AssignmentService;
