import axios from "axios"
import { useState } from "react"

function AuthorBook()
{
    const [form,setform]=useState("")
    const [result,setResult]=useState([])
    const submitform = async (e) =>
    {
             e.preventDefault()  
            const response = await axios.post(`http://localhost:9501/book/authorform/${form}`);

             setResult(response.data) 
    }
    const changedata = (e) =>
    {
             setform(e.target.value)
    }
    return(
        <>
         <h1>Add a book</h1>
         <form onSubmit={submitform}>
                   <input onChange={changedata} type="text" name="author"placeholder="enter author"/>
                   <button type="submit">see all</button>
         </form>
        {
               result.map(x =>(
                  <li>
                     {x.title}                 {x.author}                        {x.description}

                  </li>

            )
            )
        }
        </>
    )
}
export default AuthorBook