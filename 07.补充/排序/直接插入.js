function fun(arr){
    for(let i=1;i<arr.length;i++){
        let j = i-1
        let flag = arr[i] //提取出flag
        while(flag<arr[j]){
            arr[j+1] = arr[j]
            j--
        }
        arr[j+1] = flag//注意错误点 j指向的是当前比较的数字 不是插入的点
    }
}


let arr = [9,1,7,2,4,3,1,5,6]

fun(arr)

console.log(arr);