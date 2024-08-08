function getArray(){

    const myArray = [];
    
    while(true){
        const input =(prompt('enter a number'))
        if(isNaN(Number(input))) continue
        if(!input){
           break
        }
        myArray.push(Number(input))
    
    }
    return myArray
}


const result = getArray()

