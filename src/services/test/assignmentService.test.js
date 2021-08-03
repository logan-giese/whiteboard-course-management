/**
 * @jest-environment node
 */
import AssignmentService from "../assignmentService";
import CourseService from "../courseService";

let testCourseId;
let testAssignmentId;

const testCourseObject = {
    course_code: "TEST-5056",
    semester_code: "SP22",
    session_code: "03",
    title: "Test Course Again",
};
const testAssignmentObject = {
    content: "Please do this thing for class credit.",
    description: "This assignment is for testing",
    is_assignment: true,
    title: "Test Assignment",
    type: 0,
    deadline: new Date().setFullYear(2022),
    submissions: {
        student1: {
            grade: 99,
            submission: "I have done the thing.",
        }
    }
};

// Create
test('creates a new assignment in a new course', async () => {
    await CourseService.createCourse(testCourseObject)
        .then((id) => (testCourseId = id));

    await AssignmentService.addAssignment(testCourseId, testAssignmentObject)
        .then((id) => (testAssignmentId = id));

    expect(testAssignmentId).toBeDefined();
});

// Fetch
test('fetches a specific assignment', async () => {
    let retrievedAssignment;

    await AssignmentService.getAssignmentById(testCourseId, testAssignmentId)
        .then((assignment) => (retrievedAssignment = assignment));

    expect(retrievedAssignment).toMatchObject({ id: testAssignmentId, ...testAssignmentObject });
});

// Fetch All
test('fetches all assignments', async () => {
    let retrievedAssignment;

    await AssignmentService.getAssignments(testCourseId)
        .then((assignments) => (retrievedAssignment = assignments[0]));

    expect(retrievedAssignment).toMatchObject({ id: testAssignmentId, ...testAssignmentObject });
});

// Update
test('updates an assignment', async () => {
    let retrievedAssignment;

    await AssignmentService.updateAssignment(testCourseId, testAssignmentId, {
        description: "This assignment has been updated for testing",
    });

    await AssignmentService.getAssignmentById(testCourseId, testAssignmentId)
        .then((assignment) => (retrievedAssignment = assignment));

    expect(retrievedAssignment).toMatchObject({
        id: testAssignmentId,
        ...testAssignmentObject,
        description: "This assignment has been updated for testing",
    });
});

// Delete
test('deletes an assignment and test course', async () => {
    let deleted = false;

    await AssignmentService.deleteAssignment(testCourseId, testAssignmentId)
        .then(() => (deleted = true));

    await CourseService.deleteCourse(testCourseId);

    expect(deleted).toBe(true);
});
