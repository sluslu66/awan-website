function start() {
  window.location.href = "journal.html";
}

// save journal
function saveEntry() {
  let text = document.getElementById("entry").value;
  let entries = JSON.parse(localStorage.getItem("entries") || "[]");
  entries.push(text);
  localStorage.setItem("entries", JSON.stringify(entries));
  loadEntries();
}

// load entries
function loadEntries() {
  let entries = JSON.parse(localStorage.getItem("entries") || "[]");
  let html = "";
  entries.forEach(e => {
    html += `<p>${e}</p>`;
  });
  document.getElementById("entries").innerHTML = html;
}

if (document.getElementById("entries")) {
  loadEntries();
}

// load header
fetch("components/header.html")
  .then(res => res.text())
  .then(data => {
    document.getElementById("header").innerHTML = data;
  });
