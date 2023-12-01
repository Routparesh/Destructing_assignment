let value = 'Hello World'

function wordCount(){
    let count = []
    for(char of value){
        if(/^[a-zA-Z]$/.test(char)){
            char = char.toLowerCase();
            count[char] = (count[char] || 0) + 1;
        }
    }

    return count;
}

console.log(wordCount())
