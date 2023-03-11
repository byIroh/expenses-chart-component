const data = [
  {
    day: "mon",
    amount: 17.45,
  },
  {
    day: "tue",
    amount: 34.91,
  },
  {
    day: "wed",
    amount: 52.36,
  },
  {
    day: "thu",
    amount: 31.07,
  },
  {
    day: "fri",
    amount: 23.39,
  },
  {
    day: "sat",
    amount: 43.28,
  },
  {
    day: "sun",
    amount: 25.48,
  }
];

const chartDiv = document.getElementById("chart");

function createChart(data) {
  const valueArray = []
  const barArray = [];

  data.forEach(({ day, amount }) => {
    const entry = document.createElement("div");
    const tag = document.createElement("div");
    const bar = document.createElement("div");
    const weekDay = document.createElement("p");

    valueArray.push(amount);
    barArray.push({
      bar: bar,
      amount: amount,
    });

    tag.classList.add("tag");
    tag.innerHTML = `$${amount}`;

    bar.style.height = `${amount / 6.25}rem`;
    bar.classList.add("bar");
    weekDay.innerHTML = day;
    weekDay.classList.add("chart-label");

    entry.classList.add("entry");
    entry.appendChild(tag);
    entry.appendChild(bar);
    entry.appendChild(weekDay);

    bar.addEventListener("mouseover", () => {
      tag.style.display = "block";
    });

    bar.addEventListener("mouseout", () => {
      tag.style.display = "none";
    });

    chartDiv.appendChild(entry);
  });

  const highestValue = Math.max(...valueArray);

  barArray.forEach(({ bar, amount }) => {
    if (amount >= highestValue) {
      bar.classList.add("highest-bar");
    }
  });

}

createChart(data);