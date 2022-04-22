import { useState, useEffect } from "react"
import { useParams, useLocation } from "react-router-dom"
import fetchSubmit from "../Api/api"
import '../Css/results-page.css'


function ResultsPage(props) {
    const {ResultsPage} = useParams()
    const location = useLocation()
    const searchString = location.state

    const [searchResults, updateSearchResults] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [pageNum, setPageNum] = useState(1)
   
    const pageArr = [...Array(10).keys()]

    useEffect(()=>{
        
        setIsLoading(true)
        fetchSubmit(searchString, pageNum)
        .then(res=>{
            updateSearchResults(res)
            setIsLoading(false)
            console.log(searchResults)
        })
        .catch(err=>{
            console.log(err)
        })
    }, [pageNum])  

    return (

        <div class='loading-container'>
            {isLoading?
            <div class='loading-text'>...Loading</div>
            :
            <div class='result-table'>
                <div class = 'titles'>
                    <div class='title'>Project Name</div>
                    <div class='title'>Author</div>
                    <div class='title'>Stars</div>
            </div>

                <div class='table-1'>

                    {searchResults.map((result, i)=>{
                            const {id, name} = result
                            return (
                                <div class='sub-table'  key={id}>
                            <li key={id *(i+1)*(Math.random()*10)} class='result'>{name}</li>
                                </div>)})      
                    }
                </div>
                <div class='table-2'>

                    {searchResults.map((result, i)=>{
                            const {id, login} = result
                            return (
                                <div class='sub-table'  key={id}>
                                   <li key={id*(i+2)*(Math.random()*10)} class='result'>{login}</li>
                                </div>)})
                    }
                </div>
                <div class='table-3'>

                    {searchResults.map((result, i)=>{
                            const {id,stargazers_count} = result
                            return (
                                <div class='sub-table'  key={id}>
                                    <li key={id*(i+3)*(Math.random()*10)} class='result'>{stargazers_count}</li>
                                </div>)})
                    }
                </div>

                <div class='pagination'>
                    {pageArr.map((_,i)=>{
                       return <div class='page-num' key={i*(Math.random()*10)} onClick={()=>{setPageNum(i+1)}}>{i+1}</div>
                    })}
                </div>
            </div>
            }
        </div>)
}

export default ResultsPage