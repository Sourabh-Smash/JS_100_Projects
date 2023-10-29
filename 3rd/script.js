const draggableList = document.querySelector("#draggable-list");
const check = document.querySelector(".check");

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


const listItems = [];
let dragStartIndex;

updateList();

function updateList() {
  [...richestPersons]
    .map((a) => ({ value: a, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map((a) => a.value)
    .forEach((person, idx) => {
      const listItem = document.createElement("li");

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
  
  addEventListeners();
}
function dragStart() {
  dragStartIndex = +this.closest('li').getAttribute('data-index');
}
function dragOver(e) {
  e.preventDefault();
}
function dragDrop() {

  let dropIdx = +this.getAttribute('data-index')
  swapItem(dragStartIndex, dropIdx);
  this.classList.remove('over');
}
function swapItem(fromIdx, toIdx) {
  const first = listItems[fromIdx].querySelector('.draggable');
  const second = listItems[toIdx].querySelector(".draggable");
  listItems[fromIdx].appendChild(second)
  listItems[toIdx].appendChild(first)
}
function dragEnter() {
  this.classList.add('over')
}
function dragLeave() {
  this.classList.remove('over')
}

function checkList() {
  listItems.forEach((listItem, idx) => {
    const personName = listItem.querySelector('.draggable').innerText.trim();

    if (personName !== richestPersons[idx]) {
      listItem.classList.add('wrong');
    } else {
      listItem.classList.remove("wrong");
      listItem.classList.add("right");

      
    }
  })
}
function addEventListeners() {
  const draggables = document.querySelectorAll('.draggable')
  const draggableListItems = document.querySelectorAll('.draggable-list li')
  console.log(draggableListItems, draggables)
  
  draggables.forEach((draggable) => {
    draggable.addEventListener('dragstart', dragStart)
  })

  draggableListItems.forEach((item) => {
    item.addEventListener('dragover',dragOver)
    item.addEventListener('drop', dragDrop)
    item.addEventListener('dragenter', dragEnter)
    item.addEventListener('dragleave', dragLeave)
    
  })
}

check.addEventListener('click', checkList);