document.getElementById("sendRequests").addEventListener("click", sendRequests);

function sendRequests() {
  const endpoint = "https://jsonplaceholder.typicode.com/posts"; 

  const payloads = [
    { title: "Title 1", body: "Body 1", userId: 1 },
    { title: "Title 2", body: "Body 2", userId: 2 },
    { title: "Title 3", body: "Body 3", userId: 3 },
    { title: "Title 4", body: "Body 4", userId: 4 },
  ];

  const requests = payloads.map(
    (payload) =>
      fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error(`Error: ${response.status}`);
          }
          return response.json();
        })
        .catch((error) => ({ error: error.message })) 
  );

  Promise.allSettled(requests)
    .then((results) => {
      const resultContainer = document.getElementById("result");
      resultContainer.innerHTML = ""; 
      results.forEach((result, index) => {
        const resultItem = document.createElement("div");
        if (result.status === "fulfilled") {
          resultItem.classList.add("success");
          resultItem.textContent = `Request ${
            index + 1
          } succeeded: ${JSON.stringify(result.value)}`;
        } else {
          resultItem.classList.add("error");
          resultItem.textContent = `Request ${index + 1} failed: ${
            result.reason
          }`;
        }
        resultContainer.appendChild(resultItem);
      });
    })
    .catch((error) => {
      console.error("Something went wrong:", error);
    });
}
