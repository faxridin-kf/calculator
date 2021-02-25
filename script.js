var a = document.querySelector('#birinchi')
var b = document.querySelector('#ikkinchi')
var btn1 = document.querySelector('.btn1')
var btn2 = document.querySelector('.btn2')
var btn4 = document.querySelector('.btn4')
var btn3 = document.querySelector('.btn3')
var result = document.querySelector('p')

btn1.onclick = () =>{

 console.log()
 var sum = Number(a.value) + Number(b.value)
 result.textContent = sum

}
btn2.onclick = () =>{
 console.log(Number(a.value) * Number(b.value));
 var sum = Number(a.value) * Number(b.value)
 result.textContent = sum
}
btn3.onclick = () =>{
 console.log(Number(a.value) / Number(b.value));
  var sum = Number(a.value) / Number(b.value)
 result.textContent = sum
}
btn4.onclick = () =>{
 console.log(Number(a.value) - Number(b.value));
  var sum = Number(a.value) - Number(b.value)
 result.textContent = sum
}