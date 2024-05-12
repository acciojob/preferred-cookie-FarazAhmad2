//your JS code here. If required.
onLoad();

const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const fontSize = document.getElementById("fontsize").value;
  const fontColor = document.getElementById("fontcolor").value;
  document.cookie = `fontsize=${fontSize}; path=/`;
  document.cookie = `fontcolor=${fontColor}; path=/`;
});

function onLoad() {
  const data = new Map(document.cookie.split("; ").map((item) => item.split("=")));
  document.getElementById("fontsize").value = data.get("fontsize");
  document.getElementById("fontcolor").value = data.get("fontcolor");
}
