function convertFahrToCelsius(val){
    
    if(typeof val === "string" || typeof val ==="number"){
        var num = parseInt(val)
        var answer = ((num - 32) /1.8);
        var answerDec = answer.toFixed(4);
        return `'${answerDec}'`
    };
    if(Array.isArray(val)){return `[${val}] is not a valid number but a/an array.`};
    if(typeof val === "object"){
        var value = JSON.stringify(val);
        return  `${value} is not a valid number but a/an object.`}
};


console.log(convertFahrToCelsius(0));
console.log(convertFahrToCelsius("0"));
console.log(convertFahrToCelsius([1,2,3]));
console.log(convertFahrToCelsius({temp:0}));





function checkYuGiOh(n){
    var not;
     if (isNaN(n)==true){
        if (Array.isArray(n)==true){
            console.log("invalid parameter: " + JSON.stringify(n));
            return n;
         } else if (typeof(n)=="object"){
            console.log("invalid paramter: " + JSON.stringify(n));
            return n;
         } else {
            console.log("invalid paramter: " + JSON.stringify(n));
            return n;
         }
     }
     else {
         var ans;

         
         ans = create(n);

    
         function create(n){
            var n;
            var arr = [];
            for (i=1; i<=n; i++){
                if (i%2==0 && i%3==0 && i%5==0){
                   arr.push("yu-gi-oh");
                }else  if (i%2==0 && i%3==0){
                   arr.push("yu-gi");
                }else  if (i%2==0 && i%5==0){
                   arr.push("yu-oh");
                } else  if (i%3==0 && i%5==0){
                   arr.push("gi-oh");
                } else  if (i%5==0){
                   arr.push("oh");
                } else  if (i%3==0){
                   arr.push("gi");
                } else  if (i%2==0){
                   arr.push("yu");
                } 
                else{
                   arr.push(i);
                }
              console.log(arr);
            }
            return arr;
           }
           return ans;
     }}
checkYuGiOh(10);
checkYuGiOh("5");
checkYuGiOh("fizzbuzz is meh");
