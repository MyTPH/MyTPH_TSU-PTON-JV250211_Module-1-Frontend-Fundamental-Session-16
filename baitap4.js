function isEven(number){
    return number % 2 === 0;
}
let userInput = prompt("Nhập vào một số nguyên bất kỳ:")
let number = parseInt(userInput);
if(isNaN(number)){
    alert("Vui lòng nhập một số nguyên hợp lệ.")
} else {
    let result = isEven(number);
    alert(`Kết quả là ${result}`)
}