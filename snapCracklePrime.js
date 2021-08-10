function is_prime(number){
    let counter = 0
    for (let i=number ; i>=1 ; i--){
        if (number%i===0){
            counter++
        }
    }
    if (counter>2){
        return false
    }
    else {
        return true
    }
}

function snapCracklePrime (maxValue){
    let string = ""   
    for (let i = 1; i <=maxValue; i++){
        if (i%2!=0){
            if (i===1){
                string = string + "SnapPrime"
            }
            else{
                string = string + ", Snap"
                if (i%5===0){
                    string = string + "Crackle"
                    if(is_prime(i)){
                        string = string + "Prime"
                    }
                }
                else if(is_prime(i)){
                    string = string + "Prime"
                }
            }
        }
        else if(i%5===0){
            string = string + ", Crackle"
        }
        else if(is_prime(i)){
            string = string + ", Prime"
        }
        else{
            string = string + ", " + i
        }
    }    
    return string
}
document.write("The snapCrackle Prime is: " + snapCracklePrime(15) + "/br>")