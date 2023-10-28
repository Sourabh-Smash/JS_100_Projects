const draggableList = document.querySelector("#draggable-list");
const check = document.querySelector(".check");
// console.log(draggableList, check);

const richestPersons = [
  "Elon Musk",
  "Bernard Arnault & family",
  "Jeff Bezos",
  "Warren Buffett",
  "Bill Gates",
  "Larry Page",
  "Mark Zuckerberg",
  "Steve Ballmer",
  "Sergey Brin",
];

// console.log(richestPersons);

const listItems = [];

updateList();

function updateList() {
  [...richestPersons]
    .map((a) => ({ value: a, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map((a) => a.value)
    .forEach((person, idx) => {
      // console.log(person);
      const listItem = document.createElement("li");

      // listItem.classList.add('over')
      listItem.setAttribute("data-index", idx);
      listItem.innerHTML = `
    <span class="number">${idx + 1}</span>
    <div class="draggable" draggable=true >
    <p class="person-name">${person}</p>
    <i class="fas fa-grip-lines"></i>
    </div>`;

      listItems.push(listItem);
      draggableList.appendChild(listItem);
    });
}
