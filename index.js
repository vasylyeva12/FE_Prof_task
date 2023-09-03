const logoImage = document.createElement("img");
const wrapper = document.createElement("div");
const input = document.createElement("input");

logoImage.setAttribute("src", "../media/logo.png");
logoImage.setAttribute("alt", "Logo of Google");
input.setAttribute("type", "text");
input.setAttribute("placeholder", "Поиск имени меня");
input.setAttribute("class", "input-search");

const articles = [
  "aethathsarthsrthsrt",
  "aethathsarthsrthsrt",
  "aethathsarthsrthsrt",
  "aethathsarthsrthsrt",
  "yjxyjjyxyjxgtyjcgyj",
  "aethathsartxenzrsyjxhsrthsrt",
  "2323525246",
  "aeehathsrjsry",
];

input.addEventListener("click", () => {
  const existedDiv = document.querySelector(".search-items");
  if (!existedDiv) {
    const div = document.createElement("div");
    div.setAttribute("class", "search-items");
    articles.forEach((article) => {
      const p = document.createElement("p");
      p.innerText = article;
      div.append(p);
    });
    wrapper.append(div);
  }
});

input.addEventListener("input", () => {
  const searchPhrase = input.value;
  const existedDiv = document.querySelector(".search-items");
  if (existedDiv) {
    existedDiv.innerHTML = "";
  }

  const filteredList = articles.filter(article => article.includes(searchPhrase));

  filteredList.forEach((article) => {
    const p = document.createElement("p");
    p.innerText = article;
    existedDiv.append(p);
  });
});

wrapper.append(logoImage);
wrapper.append(input);
wrapper.classList.add("wrapper");

document.body.append(wrapper);
