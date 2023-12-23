const button = document.getElementsByClassName("ApiButton")[0];
const container = document.getElementsByClassName("text-container")[0];

async function fun() {
  const response = await fetch("http://localhost:3000/api/name");
  const json = await response.json();
  return json;
}

button.addEventListener("click", async () => {
  const data = await fun();
  container.innerText = data.name;
});
