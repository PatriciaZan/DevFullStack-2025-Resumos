const btn1 = document.getElementById("btn-1");
const btn2 = document.getElementById("btn-2");
const btn3 = document.getElementById("btn-3");

const ul = document.getElementById("ul");

const array1 = ["Página oficial (react.dev)", "Next.js", "React Native"];
const array2 = [
  "Componentes JSX e props",
  "Estado",
  "Hooks(ex.: useEffect())",
  "Renderização dinâmica",
];
const array3 = ["1", "2"];

btn1.addEventListener("click", (e) => {
  e.preventDefault();
  //console.log("aaaaaaaaaaa");
  criarLista(array1);
  alteraCorBtn("btn1");
});

btn2.addEventListener("click", (e) => {
  e.preventDefault();
  //console.log("aaaaaaaaaaa");
  criarLista(array2);
});

btn3.addEventListener("click", (e) => {
  e.preventDefault();
  criarLista(array3);
});

function criarLista(array) {
  ul.innerHTML = " ";

  array.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    ul.appendChild(li);
  });
}

function alteraCorBtn(btn) {
  btn.classList.add("active");
}
