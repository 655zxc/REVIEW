function fun(str){
    let arr = str.split("")
    for(var p = 0 ;p<arr.length;p++){
        if(arr[p] == "(" && arr[p+1] == ")" || arr[p] == "[" && arr[p+1] == "]" || (arr[p] == "{" && arr[p+1] == "}")){
            p++
                if(p==arr.length-1){
                    console.log("true")
                    break
                }
        }
        else{
            console.log("false")
            break
        }
    }


    
}
fun("()[]{}")
fun("()")
fun("(]{}")
fun("()[}")
