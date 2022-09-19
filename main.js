const fd = document.getElementById('f-d')




fd.addEventListener('submit', function(e) {

    e.preventDefault();

    
const valorA = Number(document.getElementById('a').value)
const valorB= Number(document.getElementById('b').value)
    

if(valorB > valorA) {
    const mediumpurpleBg = document.getElementById('dashb').style.background = '#9370db'
    const whiteC = document.getElementById('dashb').style.color = '#fff'
    alert('Valor válido, você poderá financiar!')


 
   
}
else {

    alert('Valor Inválido')
}
   

}
)