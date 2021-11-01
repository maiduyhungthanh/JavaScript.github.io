// Bài 1: Highlight tất cả các từ có độ dài lớn hơn hoặc bằng 8 ký tự trong đoạn văn (background = "yellow")
const content = document.querySelector("body >p");
let st = content.innerHTML.split(' ');
for (let i = 0; i < st.length; i++) {
  if (st[i].replace(/[^a-zA-Z0-9 &&']/g, "").length >= 8) {
    st[i] = `<span style="color:yellow">${st[i]}</span>`
  }
}
let p = document.createElement('p')
p.innerHTML = st.join(' ')
console.log(p)
document.body.replaceChild(p, content)

// bài 2: Thêm link hiển thị text "facebook" link đến trang facebook.com ở sau thẻ p
const link = document.createElement('a')
link.innerText = "facebook.com"
link.href = "https://facebook.com"
link.target = "_blank"

p.insertAdjacentElement("afterend", link)

// bài 3. Đếm số từ có trong đoạn văn. Tạo 1 thẻ div để hiển thị số từ
const totalWord = document.createElement('div')
totalWord.innerText = "- Số từ của đoạn văn :" + st.length
console.log(totalWord)
link.insertAdjacentElement("afterend", totalWord)

//Bài 4: thay thế các ký hiệu ? => 🤔, ! => 😲
let paragraph = p.innerHTML.split('')
for (let i = 0; i < paragraph.length; i++) {
  if (paragraph[i]=='?'){
    paragraph[i] = '🤔'
  }
  if (paragraph[i]=='!'){
    paragraph[i] = '😲'
  }
}
let p2 = document.createElement('p')
p2.innerHTML = paragraph.join('')
totalWord.insertAdjacentElement("afterend", p2)