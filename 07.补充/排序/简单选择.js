function fun(arr){
    for(let i=0;i<arr.length;i++){
        let min = i
        for(let j=i;j<arr.length;j++){
            if(arr[j]<arr[min])
            min = j
        }
        if(min!=i){
            let temp = arr[i]
            arr[i] = arr[min]
            arr[min] = temp
        }
    }
}

arr = [5,6,4,7,2,1,6,9,4]
fun(arr)
console.log(arr);