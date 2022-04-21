import React, {useState} from 'react'
import {Link, Routes, Route, BrowserRouter} from 'react-router-dom'
import '../Css/search_page.css'
import stringCheck from '../Utlis/Utlis'
import pic from '../images/arrow.png'

function SearchPage() {

    const [text, changeText] = useState('')

    //console.log(stringCheck(text))

    const handleSubmit = (e)=>{
        e.preventDefault()



    }
    
    return (
        <div class='search-page'>
            
                <input class='search' type='text' onChange={e=> changeText(e.target.value)}></input>

               <div className='button-search' onClick={()=>handleSubmit}>
                    <img class='arrow' src= {pic} alt='arrow'/>
               </div>

                <div class='instructions'>

                    {stringCheck(text)=== 'No input'? 
                    <div class = 'search-text'>Please type in what you're searching for...</div>
                    :null}

                    {stringCheck(text) === 'string too large'?
                    <div class = 'search-text-error'>Only one word searches.</div>
                    :null}
                </div>
            
        </div>
        
    )
}


export default SearchPage