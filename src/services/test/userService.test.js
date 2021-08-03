/**
 * @jest-environment node
 */
import UserService from "../userService";

let testUserId;

const testUserObject = {
    first_name: "John",
    last_name: "Johnson",
    email: "jj42@test.com",
    role: 0,
    assigned_courses: ["test1", "test2"],
    enrolled_courses: ["test1", "test3"],
};

// Create
test('creates a new user', async () => {
    await UserService.createUser(testUserObject)
        .then((id) => (testUserId = id));

    expect(testUserId).toBeDefined();
});

// Fetch
test('fetches a specific user', async () => {
    let retrievedUser;

    await UserService.getUserById(testUserId)
        .then((content) => (retrievedUser = content));

    expect(retrievedUser).toMatchObject({ id: testUserId, ...testUserObject });
});

// Fetch All
test('fetches all users', async () => {
    let retrievedUsers;

    await UserService.getUsers()
        .then((contents) => (retrievedUsers = contents));

    expect(retrievedUsers.find(user => user.id == testUserId)).toBeDefined();
});

// Update
test('updates a user', async () => {
    let retrievedUser;

    await UserService.updateUser(testUserId, {
        email: "jj27@test.org",
    });

    await UserService.getUserById(testUserId)
        .then((content) => (retrievedUser = content));

    expect(retrievedUser).toMatchObject({
        id: testUserId,
        ...testUserObject,
        email: "jj27@test.org",
    });
});

// Enroll Course (Student)
test("enrolls a user in a course", async () => {
    let isEnrolled = false;

    await UserService.enrollCourse(testUserId, "test4");

    await UserService.enrolledInCourse(testUserId, "test4")
        .then((enrolled) => (isEnrolled = enrolled))

    expect(isEnrolled).toBe(true);
});

// Assign Course (Professor)
test("assigns a user to a course", async () => {
    let isAssigned = false;

    await UserService.assignCourse(testUserId, "test4");

    await UserService.assignedToCourse(testUserId, "test4").then(
        (assigned) => (isAssigned = assigned)
    );

    expect(isAssigned).toBe(true);
});

// Delete
test('deletes a user', async () => {
    let deleted = false;

    await UserService.deleteUser(testUserId)
        .then(() => (deleted = true));

    expect(deleted).toBe(true);
});
