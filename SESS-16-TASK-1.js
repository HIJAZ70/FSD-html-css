// task-1
// let number =[1,2,3,4,5,6,7,8,9,10,11,12,13,14,16,17,18,19,20];
// number.splice(2,1,'Fizz')
// number.splice(4,2,'Fizz','Buzz')
// number.splice(8,2,'Fizz','Buzz')
// number.splice(11,1,'Fizz')
// number.splice(14,1,'FizzBuzz')
// number.splice(17,1,'Fizz')
// number.splice(19,1,'Buzz')
// console.log(number);


for(let num =1 ;num <= 20; num++){
    if(num % 3 ===0){
        console.log('Fizz');
        
    }else if(num % 5 ===0){
        console.log('Buzz');
        
    }else if (num % 3 ==0 && num % 5==0){
        console.log('FizzBuzz');
        
    }else{
console.log(num);
    }

}
