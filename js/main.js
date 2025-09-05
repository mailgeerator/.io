const tools = [];

for (let i = 1; i <= 100; i++) {
  let category;
  if (i % 4 === 0) category = "seoTools";
  else if (i % 3 === 0) category = "imageTools";
  else if (i % 2 === 0) category = "calcTools";
  else category = "developerTools";

  tools.push({
    name: `Tool ${i}`,
    category: category,
    link: `tools/tool${i}.html`
  });
}

tools.unshift({ 
  name: "Temp Mail Generator", 
  category: "developerTools", 
  link: "tools/tempmail.html" 
});

function renderTools() {
  tools.forEach(tool => {
    const container = document.getElementById(tool.category);
    if (container) {
      container.innerHTML += `
        <div class="col-md-3 mb-3">
          <div class="card shadow-sm h-100">
            <div class="card-body">
              <h6 class="card-title">${tool.name}</h6>
              <a href="${tool.link}" class="btn btn-sm btn-primary">Open</a>
            </div>
          </div>
        </div>
      `;
    }
  });
}

function searchTools() {
  const query = document.getElementById("searchBar").value.toLowerCase();
  document.querySelectorAll(".card").forEach(card => {
    const text = card.innerText.toLowerCase();
    card.parentElement.style.display = text.includes(query) ? "" : "none";
  });
}

document.addEventListener("DOMContentLoaded", () => {
  renderTools();
  document.getElementById("searchBar").addEventListener("keyup", searchTools);
});