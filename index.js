const bodyElement = document.querySelector("body");
const headerElement = document.getElementById("header");
const createAndAppend = (tag, parent) => {
  const newElement = document.createElement(tag);
  parent.appendChild(newElement);
  return newElement;
};
const mainElement = createAndAppend("main", headerElement);
const aElement = createAndAppend("a", mainElement);

const imageElement = createAndAppend("img", aElement);

console.log(imageElement);

for (let i = 0; i < 5; i++) {
  const newSection = document.createElement("a"); // Skapar ett element
  newSection.innerText = "A nicer section"; // Läggger till en text i det nya elementet
  mainElement.appendChild(newSection); // Lägger till det nya elementet som sista child i det elementet vi lägger in det i.
}

const myTags = document.querySelectorAll("a");

myTags.forEach((element, i) => {
  //iterar igenom  listan med taggarna och sätter blå bakgrundsfärg på
  if (i % 2 === 1) {
    element.style.backgroundColor = "blue";
  }
});
