


const fetchSubmit = async (searchString='', pageNum=1) =>{
    console.log('fetch')

    const dataArr = []
    
    const githubApi = `https://api.github.com/search/repositories?q=${searchString}+language:assembly&sort=stars&order=desc&per_page=25&page=${pageNum}`
    

    const res = await fetch(githubApi)
    .then(data =>{return data.json()})
    .then(
        res=>{
            const items = res.items
            items.map(responseData =>{
                let {id, name, owner:{login}, stargazers_count} = responseData
                let resObj = {
                    id,
                    name,
                    login,
                    stargazers_count
                }

                dataArr.push(resObj)
            }

            )
        }
    
    )
    .catch(err=> console.log(err))


    
return dataArr
    

}


export default fetchSubmit