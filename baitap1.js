function processConfirm(){
    let answer = confirm("Do you want to play a nice game of chess?");
    let result;
    if(answer){
        result = "Excellent. We'll play a nice game of chess.";
    } else {
        result = "Maybe later then.";
    }
    return result;
}
console.log(processConfirm());