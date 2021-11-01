//bài 1:
const content = document.createElement('p')
content.id = 'text'
content.style.color = '#777'
content.style.fontSize = '2rem'
content.innerHTML = "Tôi có thể làm <em> bất cứ điều gì </em> tôi muốn với JavaScript."
// const body = document.querySelector("body")
// body.insertAdjacentElement("beforebegin", content)
document.body.prepend(content)

//bài 2
const liAll = document.getElementsByTagName("li")
for (let i = 0; i < liAll.length; i++) {
    liAll[i].style.color = 'blue'
}

//bài 3
const list = document.getElementById('list')
const li7 = document.querySelector(".list > li:last-child")
const li8 = document.createElement("li")
li8.innerText = "Item 8"
const li9 = document.createElement("li")
li9.innerText = "Item 9"
const li10 = document.createElement("li")
li10.innerText = "Item 10"
// list.insertBefore(li8, li7)
// list.insertBefore(li9, li7)
// list.insertBefore(li10, li7)
list.append(li8)
list.append(li9)
list.append(li10)

const liList = document.querySelectorAll("#list > li")
liList[0].style.color = 'red'
liList[2].style.backgroundColor = 'green'
list.removeChild(liList[3])
const li4new = document.createElement("li")
li4new.innerText = "New Item 4"
list.insertBefore(li4new, liList[4])