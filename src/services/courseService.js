import firebase from "./firebase.js";

// Course data service for fetching and updating course data in Firestore
const CourseService = {
    
    // Get a collection of all courses in the system
    getCourses: async () => {
        const db = firebase.firestore();
        
        const snapshot = await db.collection('courses').get();
        return snapshot.docs.map((course) => {
            return {
                id: course.id,
                ...course.data()
            }
        });
    },
    
    // Get a specific course by ID
    // Returns null if the course can't be found
    getCourseById: async (id) => {
        const db = firebase.firestore();
        
        const doc = await db.collection('courses').doc(id).get();
        return (doc.exists ? {id: id, ...doc.data()} : null);
    },
    
    // Create a new course with the provided data and return the ID
    createCourse: async (newCourse) => {
        const db = firebase.firestore();
        
        const doc = await db.collection('courses').add(newCourse);
        return doc.id;
    },
    
    // Update a course by ID, changing only the fields in the provided data object
    // Example: updateCourse(2, {title: 'Intro to Test Courses'}) will only change the course's title
    updateCourse: async (id, newData) => {
        const db = firebase.firestore();
        
        const doc = db.collection('courses').doc(id);
        await doc.update(newData);
    },
    
    // Delete a course by ID
    deleteCourse: async (id) => {
        const db = firebase.firestore();
        
        db.collection('courses').doc(id).delete();
    },
    
}

export default CourseService;
