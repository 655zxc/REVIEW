function fun(arr){
    for(let i = 0;i<arr.length;i++){
        for(let j = 0;j<arr.length-i-1;j++){
            if(arr[j]>arr[j+1]){
                let temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp
            }
        }
    }
}

let arr = [9,1,7,2,4,3,1,5,6]

fun(arr)

console.log(arr);