import firebase from "./firebase.js";

// Course content data service for fetching and updating course content data in Firestore
const CourseContentService = {
    
    // Get a collection of all course content within a course
    getCourseContent: async (courseId) => {
        const db = firebase.firestore();
        
        const snapshot = await db.collection('courses').doc(courseId).collection('content').get();
        return snapshot.docs.map((content) => {
            return {
                id: content.id,
                ...content.data()
            }
        });
    },
    
    // Get a specific course content by ID
    // Returns null if the course content can't be found
    getCourseContentById: async (courseId, contentId) => {
        const db = firebase.firestore();
        
        const doc = await db.collection('courses').doc(courseId).collection('content').doc(contentId).get();
        return (doc.exists ? {id: contentId, ...doc.data()} : null);
    },
    
    // Add new course content with the provided data to the specified course and return the content ID
    addCourseContent: async (courseId, newContent) => {
        const db = firebase.firestore();
        
        const doc = await db.collection('courses').doc(courseId).collection('content').add(newContent);
        return doc.id;
    },
    
    // Update course content by ID, changing only the fields in the provided data object
    // Example: updateCourseContent(2, 31, {title: 'Demo Content'}) will only change the content's title
    updateCourseContent: async (courseId, contentId, newData) => {
        const db = firebase.firestore();
        
        const doc = db.collection('courses').doc(courseId).collection('content').doc(contentId);
        await doc.update(newData);
    },
    
    // Delete course content by ID
    deleteCourseContent: async (courseId, contentId) => {
        const db = firebase.firestore();
        
        db.collection('courses').doc(courseId).collection('content').doc(contentId).delete();
    },
    
}

export default CourseContentService;
