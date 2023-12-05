let arr = [8,34,35,36,78,45,32,37,38]

function value(arr){
        return `{Max:${Math.max(...arr)}, Min:${Math.min(...arr)}}` 
}

console.log(value(arr));