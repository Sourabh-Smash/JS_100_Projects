const filterData = document.querySelector("#filterInput");

const filterNames = () => {
  let filterValue = filterData.value.toUpperCase();
  let ul = document.querySelector("#names");
  let li = ul.querySelectorAll("li.collection-item");
  for (let i = 0; i < li.length; i++) {
    let a = li[i].querySelector("a");
    if (a.innerHTML.toUpperCase().indexOf(filterValue) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
};

filterData.addEventListener("keyup", filterNames);
