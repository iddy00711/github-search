
//to check input string
export default function stringCheck(str){
    if(str === ''){
        return 'No input'
    }
    else{
        const arr = str.split(' ')
        if(arr.length > 1){
            return 'string too large'
        }
        else{
            return 'string ok'
        }}

}
//to manage if no data is given from server

function emptyData(data){
    if(data.length === 0){
        return false
    }
    else{
        return true
    }
}

export {stringCheck, emptyData}