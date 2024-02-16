const color = document.getElementById("color");
const code = document.getElementById("valueContainer");

color.addEventListener("input", function(){
    code.value = color.value;
    console.log(color,"oopoopo")
    document.body.style.backgroundColor = color.value;
})

code.addEventListener("click",function(){
    code.select()
    navigator.clipboard.writeText(code.value);
    alert("Copied the text: " + code.value);
})


