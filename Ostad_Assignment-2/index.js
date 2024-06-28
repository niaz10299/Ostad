function calculateSum(a,b){
    let sum= a+b
    return sum   
}
   let sum = calculateSum(20,30)
   console.log(sum)

   function isEven(num){
    if (num%2==0){
    return true
    }
    else{
    return false
    }
   }
   console.log(isEven(4))

   function findMax(Array){
    let largest = Math.max(...Array)
    return largest
   }
   console.log(findMax([1,2,3,4]))

      function reverseString(str){
        let reverse = ""
        for (i = str.length-1; i>=0; i--){
            reverse += str[i]
        }
        return reverse
      }
      console.log(reverseString('Hello')) 

    function filterOddNumbers(numbers) {
        let oddNumbers= []
        for(i=0; i<numbers.length; i++){
            if (numbers[i]%2 != 0){
                oddNumbers.push(numbers[i])
            }
        }
        return oddNumbers
    }
    console.log(filterOddNumbers([1, 2, 3, 4, 5,6])) 

    function sumArray(Array){
        let sum = 0
        for (i=0; i<Array.length;i++){
            sum += Array[i]
        }
        return sum

    }
    console.log(sumArray([-1, -2, -3, -4, -5]))
    console.log(sumArray([1,5,10,15])) 
    
    function sortArray(Array){
        return Array.sort((a,b)=> a-b)

    }
    console.log(sortArray([4,2,1,3,6])) 

    function capitalizeFirstLetter(string){
        return string [0].toUpperCase()+string.substring(1)
    }
    console.log(capitalizeFirstLetter("world"))


   
    



    



