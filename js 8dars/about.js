let container = document.querySelector(".container");
let searchInput = document.getElementById("searchInput");

function rendercard(rendered) {
  container.innerHTML = "";

  rendered.map((item) => {
    let card = document.createElement("div");
    card.classList.add("box");
    card.innerHTML = `
  <img src="${item.avatar}"/>
  <p>${item.brand}</p>
  <p>${item.price}</p>
  
  <button>Add</button>
  
  `;
    container.appendChild(card);
  });
}
rendercard(eats);

searchInput.addEventListener("input", function () {
  let searched = searchInput.value.trim().toLowerCase();

  let filteredsearch = eats.filter((item) => {
    return (
      item.brand.toLowerCase().includes(searched) ||
      item.price.toLowerCase().includes(searched)
    );
  });

  rendercard(filteredsearch);
});
