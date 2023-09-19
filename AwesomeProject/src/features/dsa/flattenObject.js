function flattenObj(obj,ans,key){
    if(typeof(obj)!='object'){
        ans[key] = obj
        return
    }
    Object.entries(obj).forEach(([newkey,value])=>{
        if(key!=null){
            key = key + '_' + newkey
        }
        else{
            key = newkey
        }
        
        flattenObj(value,ans,key)
    })
    return ans
}
const ans = {}
const obj = {
    a:{
        b:"c"
    },
    d:"e"
}
let key 
console.log(flattenObj(obj,ans,key))



