var longestCommonPrefix = function(strs) {
    if(strs.length == 0) 
        return "";
        //如果为空
    let ans = strs[0];
        //标准初始化为第一个

        //遍历数组中1-n个
    for(let i =1;i<strs.length;i++) {
        let j=0;//let 定义在外面 不然后面用不了
        for(;j<ans.length && j < strs[i].length;j++) {
            //遍历当前字符串 限定规则 长度小于当前字符串以及ans
            if(ans[j] != strs[i][j])
                break;
            //如果不等于 则退出for
        }
        ans = ans.substr(0, j);
        // 更新ans的值
        if(ans === "")
            return ans;
    }
    return ans;
};

