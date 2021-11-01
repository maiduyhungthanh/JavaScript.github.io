  // Bài 1: Highlight tất cả các từ có độ dài lớn hơn hoặc bằng 8 ký tự trong đoạn văn (background = "yellow")
let content = document.querySelector("body >p");
let st = content.innerHTML.split(' ');
// .replace(/[^a-zA-Z0-9 &&']/g, "").replace(/\s+/g, ' ').trim()
console.log(st);
  //   let pTarget = document.querySelector("body > p")
//   let pString = pTarget.innerHTML
//   let arrString = pString.split(' ')
//   for(let i = 0 ; i < arrString.length ; i++) {
  
//      if((arrString[i].trim().length ==  8) && ((arrString[i].charAt(arrString[i].length-1) != "?") && (arrString[i].charAt(arrString[i].length-1) != "!") && (arrString[i].charAt(arrString[i].length-1) != ".") && (arrString[i].charAt(arrString[i].length-1) != ",") )) {
//           let x =  arrString[i]
//           arrString[i] = `<span style="color:yellow">${x}</span>` 
//      }
//      else if((arrString[i].trim().length >  8 ) ) {
//               let x =  arrString[i]
//               arrString[i] = `<span style="color:yellow">${x}</span>` 
//       }
//   }
//   let p1 =""
//   for(let i = 0 ; i < arrString.length; i++)
//   {
//      p1 += arrString[i] + " ";
//   }
//   let pReplace = document.createElement('p')
//   pReplace.innerHTML = p1
//   document.body.replaceChild(pReplace,pTarget)



//   // bài 2: Thêm link hiển thị text "facebook" link đến trang facebook.com ở sau thẻ p
//    let pTmp = document.querySelector("body > p")
//    pTmp.insertAdjacentHTML("afterend", '<a href="https://www.facebook.com/" target="_blank">Visit Facebook.com!</a>')
  

//   // bài 3. Đếm số từ có trong đoạn văn. Tạo 1 thẻ div để hiển thị số từ
//   let doDaiDoanVan = arrString.length
//   console.log(doDaiDoanVan)
  
//   let aTarget = document.querySelector("body > a")
//   aTarget.insertAdjacentHTML("afterend", `<div style = 'background-color:red'> so tu cua doan van ${doDaiDoanVan}</div>`)

//   // Bài 4: thay thế các ký hiệu ? => 🤔, ! => 😲
//   let pText = pReplace.innerHTML
//  // console.log(pText)
//   let charArr = pText.split('')
//   for(let i = 0 ; i < charArr.length ; i++ ) {
//       if(charArr[i] == '?') { 
//           charArr[i] =`<span>🤔</span>` 
//       }
//       else if(charArr[i] == '!') {
//           charArr[i] =`<span>😲</span>` 
//       }
//   }
//   let p2 = ""
//   for(let i = 0 ; i < charArr.length ; i++ ){
//      p2 += charArr[i]
//   }
//   console.log(p2)
//   let pReplace2 = document.createElement('p')
//   pReplace2.innerHTML = p2
//   document.body.replaceChild(pReplace2,pReplace)