// Array
//bài 1
function checkElementExist(n,nums){
    let mySet = new Set(nums);
    return mySet.has(n);
}
console.log(checkElementExist(5,[1,2,3,4]))

//bài 2
function max2Number (nums){
    if(nums.length<2)
    return null;
    nums.sort();
    let mySet = new Set(nums);
    let myNum = [];
    for(let n of mySet){
        myNum.push(n);
    }
    return myNum[myNum.length-2];
}
console.log(max2Number([1,2,3,5,5]))

//bài 3
function ramdomElement(arr){
    let n = arr[Math.floor(Math.random() * arr.length)];
    return n;
}
console.log(ramdomElement([1,2,3]));

//bài 4
function findMaxLengthElement(st){
    let maxChar = [];
    maxChar.push(st[0]);
    for (let i=1;i<st.length;i++){
        if(st[i].length>maxChar[0].length){
            maxChar.splice(0,maxChar.length);
            maxChar.push(st[i]);
            }else if(st[i].length=maxChar[0].length){
        maxChar.push(st[i]);
        }
    }
    
    return maxChar;
}
console.log(findMaxLengthElement(['aa','bb','ccc','ddd']))
//bài 5

function Similarity(arr1, arr2) {
	const result = [];
	arr1.forEach((n) => {
		if (arr2.includes(n)) {
			result.push(n);
		}
	});
	return result;
}
console.log(Similarity([1,2,3],[1,2,4]))
//bài 6
function removeDuplicate(arr) {
	const result = [];
	arr.forEach((n) => {
		if (!result.includes(n)) {
			result.push(n);
		}
	});
	return result;
}
console.log(removeDuplicate([1,2,2,2,3,3,4]));
//bài 7
function randomHexCode() {
    const letters = '0123456789abcdef';
    let color = '#';
    for (let i = 0; i < 6; i++) {
          color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
    }
console.log(randomHexCode());

//bài 8
function randomRgbCode(){
    const nums=[];
    for (let i=0;i<256;i++){
        nums.push(i);
    }
    let rgb1 = nums[Math.floor(Math.random() * 256)];
    let rgb2 = nums[Math.floor(Math.random() * 256)];
    let rgb3 = nums[Math.floor(Math.random() * 256)];
    return "rgb(" +rgb1+","+rgb2+","+rgb3+ ")";
}
console.log(randomRgbCode());

//String
//bài 1
function checkStringExist(str1,str2){
    for (let i=str2.length-1;i>=0;i--){
        if(str2.endsWith(str1,i+1)){
            return true;
        }
    }
    return false
}
console.log(checkStringExist('chào','xin chào mọi người'));

//bài 2
function shortenString(str){
    if(str.length<9)
    return str;
    let s = str.slice(0,8)
    return s+'...';
}
console.log(shortenString('xin chào mọi người'));

//bài 3
function capitalizeString(st){
    st = st.toLocaleLowerCase();
    
    let s=st.split(' ')
    for (let i=0;i<s.length;i++){
        s[i] = s[i][0].toUpperCase() + s[i].slice(1);
}
return s.join(" ");
}
console.log(capitalizeString('chÀo MừnG đẾn với techMaster'));

//bài 4
function repeatString(str,n){
    let s=[];
 for (let i=0;i<n;i++){
     s.push(str);
 }
 return s.join('-');
}
console.log(repeatString('a',5));

//bài 5
function reverseString(st){
    const s=st.split('')
    const str=s.reverse();
    st=str.join('')
    return st;
}
console.log(reverseString('Hello'))

//bài 6
function checkSymmetricString(st){
    st = st.toLocaleLowerCase();
    st = st.replace(/\s+/g, '');
    const s =st.split('');
    const str=s.reverse();
    st1=str.join('')
    if(st1 == st)
    return true;
    return false;
}
console.log(checkSymmetricString('Race car'));

//bài 7
function countNumberVowels(str){
    const s= ['a','o','e','u','i'];
    let count =0;
    let st =str.split('');
    st.forEach(element => {
        if (s.includes(element)) {
			count ++;
		}
    });
    return count;
}
console.log(countNumberVowels('hello hien'));

//bài 8
function confirmEnding(st1,st2){
   return st1.endsWith(st2);
}
console.log(confirmEnding('hello','lo'));

//bài 9
function getFirstLetter(st){
    const s= st.split(' ');
    let n = [];
    for (let i=0;i<s.length;i++){
        n.push(s[i][0]);
    }
    return n.join(' ');
}
console.log(getFirstLetter('xin chao moi nguoi'));

//bài 10
function  sortLetters(st) {
    st = st.replace(/\s+/g, '');
    const s= st.split('').sort();
    return s.join('');
}
console.log(sortLetters('xIn chaO mOi ngUoi'));

//bài 11
function getLetterNoRepeat(st){
    st =st.replace(/\s+/g, '');
    const s= st.split('');
    let myMap = new Map();
    let result = [];
    for (let i=0;i<s.length;i++){
        if(!myMap.has(s[i])){
            myMap.set(s[i],1);
        }else{
            let soLanLap = myMap.get(s[i]);
                soLanLap++;
                myMap.set(s[i], soLanLap);
        }
    }
    for (const [key, value] of myMap) {
       if (value ==1){
        result.push(key);
       }
      }
    return result.join();
}
console.log(getLetterNoRepeat('aaaabcdd'));
