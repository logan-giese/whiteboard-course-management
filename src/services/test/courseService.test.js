/**
 * @jest-environment node
 */
import CourseService from "../courseService";

let testCourseId;

const testCourseObject = {
    course_code: "TEST-5052",
    semester_code: "FA21",
    session_code: "02",
    title: "Test Course",
};

// Create
test('creates a new course', async () => {
    await CourseService.createCourse(testCourseObject)
        .then((id) => (testCourseId = id));

    expect(testCourseId).toBeDefined();
});

// Fetch
test('fetches a specific course', async () => {
    let retrievedCourse;

    await CourseService.getCourseById(testCourseId)
        .then((course) => (retrievedCourse = course));

    expect(retrievedCourse).toMatchObject({ id: testCourseId, ...testCourseObject });
});

// Fetch All
test('fetches all courses', async () => {
    let retrievedCourses;

    await CourseService.getCourses()
        .then((courses) => (retrievedCourses = courses));

    expect(retrievedCourses.find(course => course.id == testCourseId)).toBeDefined();
});

// Fetch Courses from List of IDs
test("fetches all courses from a list of IDs", async () => {
    let idList = [testCourseId];
    let retrievedCourses;

    await CourseService.getCoursesById(idList)
        .then((courses) => (retrievedCourses = courses));

    expect(retrievedCourses.find((course) => course.id == testCourseId)).toBeDefined();
});

// Update
test('updates a course', async () => {
    let retrievedCourse;

    await CourseService.updateCourse(testCourseId, {
        title: "Better Test Course",
    });

    await CourseService.getCourseById(testCourseId)
        .then((course) => (retrievedCourse = course));

    expect(retrievedCourse).toMatchObject({
        id: testCourseId,
        ...testCourseObject,
        title: "Better Test Course",
    });
});

// Delete
test('deletes a course', async () => {
    let deleted = false;

    await CourseService.deleteCourse(testCourseId)
        .then(() => (deleted = true));

    expect(deleted).toBe(true);
});
