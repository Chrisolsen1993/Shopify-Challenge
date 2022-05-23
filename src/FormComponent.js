import {React, useState} from 'react'

export default function FormComponent() {
    const [data, setData] = useState([]);
    const [response, setResponse] = useState([])
    const [loading, setLoading] = useState('false')
    console.log(process.env)
const handleSubmit=(e) =>{
    e.preventDefault()
    const data1 = {
        prompt: `${data}`,
        temperature: 0.5,
        max_tokens: 64,
        top_p: 1.0,
        frequency_penalty: 0.0,
        presence_penalty: 0.0,
       };
       setLoading(true)
      
       
        
       fetch("https://api.openai.com/v1/engines/text-curie-001/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
        },
        body: JSON.stringify(data1),
       }).then((response)=>{
           console.log (response)
           console.log("Succes")
           setData(data)
        setResponse(response.Response.choices[0].text)
       
           setLoading(false)
       });
}   

    return (
        <section>
              <h2> Let's have fun with AI</h2> <br/>
       <h5> Enter prompt</h5>
       <form onSubmit={handleSubmit}>
           
         <textarea
         type="text"
        
         placeholder="Enter Data"
       
         onChange={(e)=>setData(e.target.value)}
         value={data}
        >   
         </textarea><br/>
         <button type="submit">Submit</button>
       </form>
       <br/>
       <br/>
       <article>
           <h2>Responses</h2>
           <ul>
               <li>Prompt: {data}</li>
               <li>Response:{response}</li>
           </ul>

       </article>
        </section>
    )
}
