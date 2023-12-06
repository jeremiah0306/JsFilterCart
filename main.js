const buttons = document.querySelectorAll(".btn");
const boxes = document.querySelectorAll(".box");
const search = document.querySelector("#search");

search.addEventListener("keyup", (e) => {
  const store = e.target.value.toLowerCase().trim();

  boxes.forEach((val) => {
    const show = val.dataset.item;
    if (show.includes(store)) {
      val.style.display = "block";
    } else {
      val.style.display = "none";
    }
  });
});

buttons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    const btnFilter = e.target.dataset.filter;

    boxes.forEach((v) => {
      if (btnFilter == "all") {
        v.style.display = "block";
      } else {
        const boxfilter = v.dataset.item;
        if (btnFilter == boxfilter) {
          v.style.display = "block";
        } else {
          v.style.display = "none";
        }
      }
    });
  });
});
