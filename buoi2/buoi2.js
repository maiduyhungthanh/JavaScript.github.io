function practice07(arr) {
    let newArr = []
    for (let i = 0; i < arr.length; i++) {
        newArr.push(arr[i] % 2)
    }
    return newArr
}
console.log(practice07([1, 2, 3, 4, 4]))

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

//bài 4
function capitalizeString(st){
    st = st.toLocaleLowerCase();
    
    let s=st.split(' ')
    for (let i=0;i<s.length;i++){
        s[i] = s[i][0].toUpperCase() + s[i].slice(1);
}
return s.join(" ");
}
console.log(capitalizeString('chÀo MừnG đẾn với techMaster'));

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
console.log(checkSymmetricString('Race car'))

