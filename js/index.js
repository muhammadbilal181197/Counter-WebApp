let counter = document.getElementById("counter");
let btns = document.querySelectorAll(".btn");

let count = 0;

btns.forEach((item) => {
  item.addEventListener("click", (e) => {
    let style = e.currentTarget.classList;

    if (style.contains("increment")) {
      count++;
      console.log("hello");
    } else if (style.contains("decrement")) {
      count--;
      if (count < 0) {
        count = 0;
      }
    } else {
      count = 0;
    }

    if (count > 0) {
      counter.style.color = "green";
    }
    if (count === 0) {
      counter.style.color = "grey";
    }
    counter.innerText = count;
  });
});
