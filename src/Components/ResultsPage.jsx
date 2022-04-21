import { useState, useEffect } from "react"
import { useParams, useLocation } from "react-router-dom"
import fetchSubmit from "../Api/api"
import '../Css/results-page.css'


function ResultsPage(props) {
    const {ResultsPage} = useParams()
    const location = useLocation()
    const text = location.state

     const [searchResults, updateSearchResults] = useState([])
     const [isLoading, setIsLoading] = useState(false)
    // const [currentPage, setCurrentPage] = useState(1)
    // const [postsPerPage, setPostsPerPage] = useState(25)

    useEffect(()=>{
        console.log('useff')
        setIsLoading(true)
        fetchSubmit(text)
        .then(res=>{
            updateSearchResults(res)
            setIsLoading(false)
            console.log(searchResults)
        })
        .catch(err=>{
            console.log(err)
        })
    }, [])

    // const indexOfLastPost = currentPage * postsPerPage
    // const indexOfFirstPost = indexOfLastPost = postsPerPage
    // const currentPosts = searchResults.slice(indexOfFirstPost, indexOfLastPost)

    // const paginate = (pageNumber) =>{setCurrentPage(pageNumber)}

    
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
                {
                    searchResults.map((result, i)=>{
                        const {id, name, login,stargazers_count} = result
                         return (
                             <div class='sub-table'  key={id}>
                         <li key={id *(i+1)} class='result'>{name}</li>
                         <li key={id*(i+2)} class='result'>{login}</li>
                         <li key={id*(i+2)} class='result'>{stargazers_count}</li>
                         </div>
                         )

                    }
                    )
                }
            </div>}
        </div>
        
    )
}

export default ResultsPage