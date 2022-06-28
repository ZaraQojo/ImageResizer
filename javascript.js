function resize() {
  let url = document.getElementById("url").value;
  let height = document.getElementById("height").value;
  let width = document.getElementById("width").value;

  let lastIndexVar = url.lastIndexOf("/");
  let realUrl = url.substring(lastIndexVar);
  let newUrl = `https://source.unsplash.com${realUrl}/${width}x${height}`;

  let image1 = document.getElementById("image1");
  image1.src = `${newUrl}`;
  image1.style.display = "block";

  let urlVar = document.getElementById("new-url");
  urlVar.style.display = "inline-block";
  urlVar.innerHTML = `<i class="bi bi-clipboard"></i>  ${newUrl}`;
}
function handleCopy() {
  let text = document.getElementById("new-url").innerText;
  copyToClipboard(text);
}
function copyToClipboard(text) {
  navigator.clipboard.writeText(text).then(
    function () {
      console.log("Async: Copying to clipboard was successful!");
    },
    function (err) {
      console.error("Async: Could not copy text: ", err);
    }
  );
}
