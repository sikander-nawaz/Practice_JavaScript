function getUserProfile(id) {
  // Function to simulate the central service call
  function central(id) {
    return new Promise((resolve, reject) => {
      // Simulating the central service call
      setTimeout(() => {
        if (id % 3 === 1) {
          resolve("db1");
        } else if (id % 3 === 2) {
          resolve("db2");
        } else {
          resolve("db3");
        }
      }, 100);
    });
  }

  // Function to simulate the db1, db2, db3 service calls
  function db(database) {
    return new Promise((resolve, reject) => {
      // Simulating the database service call
      setTimeout(() => {
        if (database === "db1") {
          resolve({ username: "john123", country: "USA" });
        } else if (database === "db2") {
          resolve({ username: "jane456", country: "UK" });
        } else {
          resolve({ username: "mark789", country: "Australia" });
        }
      }, 100);
    });
  }

  // Function to simulate the vault service call
  function vault(id) {
    return new Promise((resolve, reject) => {
      // Simulating the vault service call
      setTimeout(() => {
        resolve({ firstname: "John", lastname: "Doe", email: "john.doe@example.com" });
      }, 150);
    });
  }

  // Function to simulate the mark service call
  function mark(id) {
    return new Promise((resolve, reject) => {
      // Simulating the mark service call
      setTimeout(() => {
        resolve();
      }, 100);
    });
  }

  // Promise.allSettled to handle all service calls and respond in 200ms
  return Promise.allSettled([
    central(id),
    db(central(id)),
    vault(id),
    mark(id)
  ]).then((results) => {
    let errors = [];

    // Check for any errors in the results
    results.forEach((result) => {
      if (result.status === "rejected") {
        errors.push(result.reason);
      }
    });

    if (errors.length > 0) {
      // If there are errors, return the first error found
      return Promise.reject(errors[0]);
    } else {
      // If no errors, construct the user profile object
      let userProfile = {
        id: id,
        username: results[1].value.username,
        country: results[1].value.country,
        firstname: results[2].value.firstname,
        lastname: results[2].value.lastname,
        email: results[2].value.email
      };

      return Promise.resolve(userProfile);
    }
  });
}

// Usage example
getUserProfile(123)
  .then((profile) => {
    console.log(profile);
  })
  .catch((error) => {
    console.log("Error:", error);
  });