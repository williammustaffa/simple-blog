export default function extractContentFromHTMLString(htmlString) {
  var span = document.createElement('div');
  span.innerHTML = htmlString;
  return span.textContent || span.innerText;
};