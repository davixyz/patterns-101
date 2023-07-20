// Given a function that fetches user data from an API.
function fetchUserData(userId) {
    // Simulate an API call with a delay
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (userId === 1) {
          resolve({
            id: 1,
            name: 'Alice',
            email: 'alice@example.com',
          });
        } else {
          resolve(null); // Simulate user not found
        }
      }, 1000);
    });
  }
  
  // Use optional chaining and nullish coalescing to handle the possible absence of data.
  async function displayUserData(userId) {
    const user = await fetchUserData(userId);
    const name = /* Your code here */; // Use optional chaining to access the name property safely and provide a default value if it's null or undefined.
    const email = /* Your code here */; // Use optional chaining to access the email property safely and provide a default value if it's null or undefined.
  
    if (name && email) {
      console.log(`User: ${name}`);
      console.log(`Email: ${email}`);
    } else {
      console.log('User not found.');
    }
  }
  
  // Test cases
  displayUserData(1); // Existing user
  displayUserData(2); // Non-existing user
  