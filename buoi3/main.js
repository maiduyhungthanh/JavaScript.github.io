const heading = document.getElementById("heading");
console.log(heading);

const para2 = document.querySelector(".para");
console.log(para2)

const para3 = document.querySelector("p:nth-child(4)");
console.log(para3)

const ul2 = document.querySelector("body >ul")
console.log(ul2)

const ul1 = document.querySelector(".box ul")
const li1 = document.querySelector("body > ul li")
li1.innerText = "123456"
const paras = document.querySelectorAll("p")
Array.from(paras).map(n => console.log(n));

console.log(para3.previousElementSibling)

Array.from(paras).map(n=>{n.style.color = "red"});

paras.forEach(n=>{n.style.fontSize = "50px"})

const link = document.createElement("a")
console.log(link)
link.innerText = "Google"
link.href = "gooogle.com"
document.body.prepend(link)
document.body.append(link)
const boxel = document.querySelector(".box");
document.body.insertBefore (link,boxel);
//CHA.insertBefore.(CanCHen,ViTriBiChenLenTren)//
ul2.insertBefore(link,li1);

para2.insertAdjacentHTML("beforebegin","<button>login</button>")

const li = document.createElement("li")
li.innerText = "li moi"
ul2.insertAdjacentElement("afterbegin",li)
ul2.removeChild(link)
para2.parentElement.removeChild(para2)

const h2 = document.createElement("h2")
h2.innerText = "MOT HAI BA BON"
h2.style.fontSize = "52px";
heading.parentElement.replaceChild(h2,heading)
