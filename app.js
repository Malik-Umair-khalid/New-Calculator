
    function valueFinder(num){
    var myInput = document.getElementById("myInput")
    var lastChar = myInput.value.slice(-1)
    var operators = ['+','-','*','/','.']    

    if(operators.indexOf(lastChar) !== -1 && operators.indexOf(num) !== -1){
        myInput.value = myInput.value.toString().slice(0, -1) + num
    }
    else{
        myInput.value += num
    }    
}
function result(){
    var myInput = document.getElementById("myInput")
    var operatedValue = eval(myInput.value)
    myInput.value = operatedValue;
}
function AllClear(){
    var myInput = document.getElementById("myInput")
    myInput.value = ""
}
function dalete(){
    var myInput = document.getElementById("myInput")
    myInput.value = myInput.value.toString().slice(0, -1)
}

window.addEventListener("keyup" , (e)=>{
 console.log(e)
var myInput = document.getElementById("myInput")
if(e.keyCode >= 97 && e.keyCode <= 111){
if (e.keyCode == 106 && e.keyCode == 107 && e.keyCode == 109 && e.keyCode == 111){
    myInput.value = myInput.value.toString().slice(0, -1) + e.key
}
else{
    myInput.value += e.key;
}
}
else if (e.keyCode === 13){
myInput.value =
 eval(myInput.value)    
}
else if (e.keyCode === 8){
myInput.value = myInput.value.toString().slice(0,-1) 
}
else if(e.keyCode === 46){
myInput.value = ""; 
}
// if(e.keyCode === 97){
//     myInput.va
// }
})


















// function valueFinder(num){
//     var myInput = document.getElementById("myInput")
//     var lastChar = myInput.value.slice(-1)
//     var operators = ['+','-','*','/','.']    

//     if(operators.indexOf(lastChar) !== -1 && operators.indexOf(num) !== -1){
//         myInput.value = myInput.value.toString().slice(0, -1) + num
//     }
//     else{
//         myInput.value += num
//     }    
// } 
// function result(){
//     var myInput = document.getElementById("myInput")
//     var operatedValue = eval(myInput.value)
//     myInput.value = operatedValue;

// }
// function AllClear(){
//     var myInput = document.getElementById("myInput")
//     myInput.value = ""
// }
// function dalete(){
//     var myInput = document.getElementById("myInput")
//     myInput.value = myInput.value.toString().slice(0, -1)
// }
























