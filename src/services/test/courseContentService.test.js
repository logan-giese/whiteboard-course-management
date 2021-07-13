/**
 * @jest-environment node
 */
import CourseContentService from "../courseContentService";
import CourseService from "../courseService";

let testCourseId;
let testContentId;

const testCourseObject = {
    course_code: "TEST-5054",
    semester_code: "SU21",
    session_code: "01",
    title: "Test Course",
};
const testContentObject = {
    content: "https://randomfox.ca",
    description: "This content is for testing",
    is_assignment: false,
    title: "Test Content",
    type: 1,
};

// Create
test('creates new course content in a new course', async () => {
    await CourseService.createCourse(testCourseObject)
        .then((id) => (testCourseId = id));

    await CourseContentService.addCourseContent(testCourseId, testContentObject)
        .then((id) => (testContentId = id));

    expect(testContentId).toBeDefined();
});

// Fetch
test('fetches specific course content', async () => {
    let retrievedContent;

    await CourseContentService.getCourseContentById(testCourseId, testContentId)
        .then((content) => (retrievedContent = content));

    expect(retrievedContent).toMatchObject({ id: testContentId, ...testContentObject });
});

// Fetch All
test('fetches all course content', async () => {
    let retrievedContent;

    await CourseContentService.getCourseContent(testCourseId)
        .then((contents) => (retrievedContent = contents[0]));

    expect(retrievedContent).toMatchObject({ id: testContentId, ...testContentObject });
});

// Update
test('updates course content', async () => {
    let retrievedContent;

    await CourseContentService.updateCourseContent(testCourseId, testContentId, {
        description: "This content has been updated for testing",
    });

    await CourseContentService.getCourseContentById(testCourseId, testContentId)
        .then((content) => (retrievedContent = content));

    expect(retrievedContent).toMatchObject({
        id: testContentId,
        ...testContentObject,
        description: "This content has been updated for testing",
    });
});

// Delete
test('deletes course content and test course', async () => {
    let deleted = false;

    await CourseContentService.deleteCourseContent(testCourseId, testContentId)
        .then(() => (deleted = true));

    await CourseService.deleteCourse(testCourseId);

    expect(deleted).toBe(true);
});
