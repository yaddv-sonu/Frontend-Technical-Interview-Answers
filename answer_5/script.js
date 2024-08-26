const originalObject = {
  name: "Sonu Yadav",
  age: 24,
  address: {
    street: "123 bikaner ",
    city: "bikaner",
    country: "India",
  },
  hobbies: ["reading", "hiking", "coding"],
};

function deepCopy(obj) {
  return JSON.parse(JSON.stringify(obj));
}

document.getElementById("copyButton").addEventListener("click", () => {
  const copiedObject = deepCopy(originalObject);

  copiedObject.name = "Rahul ";
  copiedObject.address.city = " jaipur";

  const result = document.getElementById("result");
  result.textContent = `Original Object:\n${JSON.stringify(
    originalObject,
    null,
    2
  )}\n\nCopied Object:\n${JSON.stringify(copiedObject, null, 2)}`;
});
