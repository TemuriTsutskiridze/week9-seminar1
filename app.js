// 1. Write a program that will divide numbers. Be aware that both of the values should be numbers and second number should not be 0

// function divide(a, b) {
//   if (typeof a !== "number" || typeof b !== "number") {
//     throw new Error("Values must be numbers");
//   }
//   if (b === 0) {
//     throw new Error("Can't divide by 0");
//   }
//   return a / b;
// }

// try {
//   console.log(divide("5", 0));
// } catch (error) {
//   console.log("Failed:" + error);
// }

// 2. fetch github user from api, handle errors

// async function getGithubUser(user) {
//   const response = await fetch(`https://api.github.com/users/${user}`);
//   console.log(response.ok);
//   if (!response.ok) {
//     throw new Error("Failed fethching data");
//   }

//   const data = await response.json();
//   return data;
// }

// async function handleUser(username) {
//   try {
//     const user = await getGithubUser(username);
//     console.log(user);
//   } catch (error) {
//     console.log(error);
//   }
// }

// handleUser("temuritsutskiridze");

// 3. eloquent javascript exercise

// class MultiplicatorUnitFailure extends Error {}

// class OtherError extends Error {}

// function primitiveMultiply(a, b) {
//   let random = Math.random();
//   if (random < 0.2) {
//     return a * b;
//   } else {
//     throw new MultiplicatorUnitFailure("Klunk");
//   }
// }

// function reliableMultiply(a, b) {
//   for (;;) {
//     try {
//       return primitiveMultiply(a, b);
//     } catch (error) {
//       if (!(error instanceof MultiplicatorUnitFailure)) {
//         console.log("something else");
//       }
//     }
//   }
// }

// console.log(reliableMultiply(8, 8));

// 4. Write a program that parses string into object. Note that JSON string may be malformed

function jsonParse(jsonString) {
  try {
    const obj = JSON.parse(jsonString);
    return obj;
  } catch (error) {
    console.log(error.message);
  } finally {
    console.log("executed");
  }
}

let JSONstring = '{name: "John", age: 30}';

console.log(jsonParse(JSONstring));

console.log("hello");
