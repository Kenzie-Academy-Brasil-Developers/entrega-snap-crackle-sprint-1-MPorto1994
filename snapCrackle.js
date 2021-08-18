function snapCrackle (maxValue){
    let string = ""   
    for (let i = 1 ; i <=maxValue ; i++){
        if (i%5===0){
            if (i%2!=0){
                string = string + ", SnapCrackle"
            }
            else{
                string = string + ", Crackle"

            }
        }
        else if(i%2 != 0){
            if (i===1){
                string = string + "Snap"
            }
            else{
            string = string + ", Snap"
            }
        }
        else{
            string = string +", "+i
        }

    }
    return string
}
document.write("The snapCrackle is: " + snapCrackle(15) + "/br>")
