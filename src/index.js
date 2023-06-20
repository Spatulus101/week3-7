import "./styles.css";

const table = document.getElementById("tablebody");

const getdata = async () => {
  const endpoint =
      "https://statfin.stat.fi/PxWeb/sq/4e244893-7761-4c4f-8e55-7a8d41d86eff",
    response = await fetch(endpoint),
    data = await response.json();

  const m = data.dataset.dimension.Alue.category.label;
  const n = data.dataset.value;

  const r = Object.values(m);

  const t = Object.values(n);

  r.forEach((x, y) => {
    const tr = table.insertRow(0);
    const td = tr.insertCell(0);
    const td2 = tr.insertCell();
    const i = t[y];

    td.innerText = x;
    td2.innerText = i;
  });
};
getdata();
