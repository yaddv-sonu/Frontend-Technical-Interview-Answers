const person = {
  name: "sonu yadav",
  age: 25,
};

const personProxy = new Proxy(person, {
  set(target, property, value) {
    if (property === "age") {
      if (typeof value !== "number") {
        console.error("Age must be a number!");
        return false;
      }
    } else if (property === "name") {
      if (typeof value !== "string") {
        console.error("Name must be a string!");
        return false;
      }
    } else {
      console.error(`Property "${property}" is not allowed!`);
      return false;
    }
    target[property] = value;
    return true;
  },
});

function testObjectBehavior() {
  const output = document.getElementById("output");
  output.innerHTML = "";

  personProxy.name = "sonu "; 
  personProxy.age = 30; 

  personProxy.age = "thirty"; 
  personProxy.name = 123; 
  personProxy.address = "123 yadav"; 

  output.innerHTML = `<strong>Current Object State:</strong> <pre>${JSON.stringify(
    person,
    null,
    2
  )}</pre>`;
}

document
  .getElementById("testButton")
  .addEventListener("click", testObjectBehavior);
