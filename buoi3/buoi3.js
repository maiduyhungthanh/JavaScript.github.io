let grades = [
    {name: 'John', grade: 8, sex: 'M'},
    {name: 'Sarah', grade: 12, sex: 'F'},
    {name: 'Bob', grade: 16, sex: 'M'},
    {name: 'Johnny', grade: 2, sex: 'M'},
    {name: 'Ethan', grade: 4, sex: 'M'},
    {name: 'Paula', grade: 18, sex: 'F'},
    {name: 'Donald', grade: 5, sex: 'M'},
    {name: 'Jennifer', grade: 13, sex: 'F'},
    {name: 'Courtney', grade: 15, sex: 'F'},
    {name: 'Jane', grade: 9, sex: 'F'}
]

let isMale =  grades  => {
    return  grades.filter(ele => ele.sex == 'M')
}

let isFemale =  grades  => {
    return  grades.filter(ele => ele.sex == 'F')
}
let avgGrade = grades => {
    return grades.reduce((acc, curr) => (acc + curr.grade), 0) / grades.length
}
let isMax = grades => {
    return Math.max(...grades.map(std => std.grade))
}
let isMin = grades => {
    return Math.min(...grades.map(std => std.grade))
}

console.log('1.Tìm thứ hạng trung bình của cả lớp')
console.log(avgGrade(grades))

console.log('2.Tìm thứ hạng trung bình của nam trong lớp')
console.log(avgGrade(isMale(grades)))

console.log('3.Tìm thứ hạng trung bình của Nữ trong lớp')
console.log(avgGrade(isFemale(grades)))

console.log('4.Tìm thứ hạng cao nhất của Nam trong lớp')
console.log(isMax(isMale(grades)))

console.log('5.Tìm thứ hạng cao nhất của Nữ trong lớp')
console.log(isMax(isFemale(grades)))

console.log('6.Tìm thứ hạng thấp nhất của Nam trong lớp')
console.log(isMin(isMale(grades)))

console.log('7.Tìm thứ hạng thấp nhất của Nữ trong lớp')
console.log(isMin(isFemale(grades)))

console.log('8.Tìm thứ hạng cao nhất của cả lớp')
console.log(isMax(grades))

console.log(' 9.Tìm thứ hạng thấp nhất của cả lớp')
console.log(isMin(grades))

console.log(' 10.Lấy ra danh sách tất cả học viên nữ trong lớp')
console.log(isFemale(grades))




console.log('11.Sắp xếp tên học viên theo chiều tăng dần của bảng chữ cái')
let isSort = grades =>{
    return grades.sort((a, b) => a.name.localeCompare(b.name))
}
console.log(isSort(grades))

console.log('12.Sắp xếp thứ hạng học viên theo chiều giảm dần')
let sortGrade = grades =>{
    return grades.sort((a,b) => b.grade - a.grade)
}
console.log(sortGrade(grades))

console.log('13. Lấy ra học viên nữ có tên bắt đầu bằng "J"')
let famaleJ = grades =>{
    return grades.filter(ele => ele.name.charAt(0) === 'J')
}
console.log(famaleJ(isFemale(grades)))

console.log('14.Lấy ra top 5 người có thứ hạng cao nhất```')
let top5 = grades =>{
    return grades.sort((a,b) => a.grade - b.grade).slice(0, 5)
}
console.log(top5(grades))