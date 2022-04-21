function stringCheck(str){
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
        }
    }

}

export default stringCheck