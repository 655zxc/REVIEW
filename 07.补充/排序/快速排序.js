function fun(arr,low,high){
    let flag = arr[low]
    while(low<high){
        while(low<high && flag<arr[high]){
            high--
        }
        if(low<high){
            arr[low] = arr[high]
            low++
        }

        while(low<high && flag>arr[low]){
            low++
        }
        if(low<high){
            arr[high] = arr[low]
            high--
        }
    }
    arr[low] = flag 
    return low
}

function fun2(arr,low = 0,high = arr.length-1){
    if(low<high){
        let flag = fun(arr,low,high)
        fun2(arr,low,flag-1)
        fun2(arr,flag+1,high)
    }
}

let arr = [8,5,4,7,12,13,14,2,1,3]
fun2(arr)
console.log(arr);
