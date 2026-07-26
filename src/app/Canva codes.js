const today = new Date().getDay();
const target = 5;

if (today === target - 1) {
  console.log("Status: Tomorrow is Friday! 🎉");
} else {
  console.log("Status: The timeline does not match.");
}