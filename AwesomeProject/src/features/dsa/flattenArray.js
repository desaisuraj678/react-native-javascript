
const arr = [[1,[4,56],2,3],[4,56,6],232,11,[111]]

function flattenArray(arr){
    let ans = []
    arr.forEach(element => {
        if(Array.isArray(element)){
            ans.push(...flattenArray(element))
        }  
        else{
            ans.push(element)
        }
    });
    return ans
}

console.log(flattenArray(arr))