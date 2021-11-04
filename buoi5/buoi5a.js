const hide = document.getElementById('hide')
const list = document.getElementById('list')
const text = document.getElementById('textInput')
const add = document.getElementById('add')
const remove = document.getElementById('remove')

hide.addEventListener('click', function () {
    if (hide.innerText == 'Hide') {
        hide.innerText = 'Show'
        list.style.display = 'none'
        text.style.display = 'none'
        add.style.display = 'none'
        remove.style.display = 'none'

    } else if (hide.innerText == 'Show') {
        hide.innerText = 'Hide'
        list.style.display = ''
        text.style.display = ''
        add.style.display = ''
        remove.style.display = ''
    }
});

add.addEventListener('click', function () {
    const textAdd = document.createElement('li')
    if (text.value.replace(/\s+/g, '') == '') {
    } else {
        textAdd.innerText = text.value.trim()
        list.append(textAdd)
        text.value = ''
    }
})

remove.addEventListener('click',function(){
    const lastLi = document.querySelector('#list > li:last-child')
    list.removeChild(lastLi)
})