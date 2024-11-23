function Time() {
  let days_p = document.getElementById("days_p");
  let days_p2 = document.getElementById("days_p2");
  let time_p_hours = document.getElementById("time_p_hours");
  let time_p_minutes = document.getElementById("time_p_minutes");
  let AM_or_PM = document.getElementById("AM_or_PM");
  let weekday = ["Mon", "Tue", "Weds", "thu", "Fri", "Sat", "sun"];

  let date = new Date();

  let FormatedDate = date.getDate();
  days_p.textContent = FormatedDate;

  let FormatedDate2 = weekday[date.getDay() - 1];
  days_p2.textContent = FormatedDate2;

  let FormatedDate3 = date.getHours();
  time_p_hours.textContent = `${FormatedDate3}:`;

  let FormatedDate4 = date.getMinutes();
  time_p_minutes.textContent = FormatedDate4;

  if (FormatedDate3 >= 12) {
    AM_or_PM.textContent = "PM";
  } else {
    AM_or_PM.textContent = "Am";
  }
}
Time();
function CtreateBox() {
  let container_bottom_box = document.getElementById("container_bottom_box");
  let form = document.getElementById("form");
  let input = document.getElementById("input");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    let validation = input.value.trim();
    if (validation === "") {
      alert("შეავსეთ ველი!");
      return;
    }
    let inputText = input.value;
    let div1 = document.createElement("div");
    div1.classList.add("new_div");
    container_bottom_box.appendChild(div1);
    input.value = "";
    let box1 = document.createElement("div");
    box1.classList.add("box1");
    div1.appendChild(box1);
    let box2 = document.createElement("div");
    box2.classList.add("box2");
    div1.appendChild(box2);
    let p = document.createElement("P");
    p.textContent = inputText;
    p.classList.add("box1_p_dark");
    box1.appendChild(p);
    let p2 = document.createElement("P");
    p2.textContent = inputText;
    p2.classList.add("box1_p_light");
    box1.appendChild(p2);
    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    box2.appendChild(checkbox);
    let img = document.createElement("img");
    img.src = "./images/akar-icons_trash-can.svg";
    box2.appendChild(img);
    img.addEventListener("click", (event) => {
      event.preventDefault();
      div1.remove();
    });
  });
}
CtreateBox();