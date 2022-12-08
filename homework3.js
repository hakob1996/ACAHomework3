// PART1

var arr1 = [2,12,15,28,64]
var arr2 = [-9, -4, -4, 3, 12, 4, 5]
var arr3 = [-9, -4, -4, 3, 4, 5, 19, 17]

function findIndOfViol(arr){
    for(var i=0; i<arr.length; i++){
        if (arr[i] > arr[i+1]) {
            return arr.indexOf(arr[i+1])
    }
}
    return -1
}

// console.log(findIndOfViol(arr3))

//PART2

var arr1 = [[3, 4, 5], [1, 0, 0], [4, 5, 4], [8, 8, -1]]
var arr2 = [[ 8, 35, 2], [8], [5, 6, -5 , -6], [1, 3, -9, 0, -1]]
var arr3 = [[1], [2], [3], [4]] 
var newArr = []

function sumOfArr(arr){
    var sum = 0;
    for (var i=0; i<arr.length; i++){
        for( var j = 0; j < arr[i].length; j++){
            sum += arr[i][j]
        }
            newArr.push(sum)
            sum = 0
    }
    console.log(newArr)
}

sumOfArr(arr1)

//PART3

var arr1 = [5, 4, 78, 0, -3, 7];
var arr2 = [2, 4, 6, 88];
var newArr = [];
var newArr2 = []

function oddMath(arr){
    for (var i=0; i<arr.length; i++){
        if(arr[i]%2 != 0){
            newArr.push(arr[i])
            
        }
    }
    newArr.forEach(function(a,b,c){
        d = a*c.length
        newArr2.push(d)
    })
    console.log(newArr2)
}

oddMath(arr2)

//PART4??? 

function mathWithStep(num1,num2,step){
    var temp
    var num
    var arr = [num1]
    for ( var i=0; i<num2; i++){
        num = num1 + step;
        temp = num;
        arr.push(num);
        num1 = temp
        if(num > num2){
            arr.pop()
        }
    }
    
    console.log(arr)
        
}

mathWithStep(10,100,20)

// PART5

var arr = [1, 1, 2, 2, 3]
var n =1



function arrMass(arr){
    for(var i =0; i<arr.length; i++){
        for(var j=i+1; j<arr.length; j++){
            if(arr[i] == arr[j]){
                n++;
                console.log(`${arr[j]}: ${n/arr.length}`)
                n = 1
            }
        }
    
    
    }
}

arrMass(arr)