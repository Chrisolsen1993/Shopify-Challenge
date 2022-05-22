import {React, useState} from 'react'

export default function FormComponent() {
    const [prompt, setData] = useState([]);
    const [loading, setLoading] = useState('false')
    console.log(process.env)
const handleSubmit=(e) =>{
    e.preventDefault()
    const data = {
        prompt: "",
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
        body: JSON.stringify(data),
       }).then(()=>{
           console.log("Succes")
           setLoading(false)
       });
}   

    return (
        <div>
              <h2> Let's have fun with AI</h2> <br/>
       <h5> Enter prompt</h5>
       <form onSubmit={handleSubmit}>
         <textarea
         value={prompt}
         onChange={(e)=>setData(e.target.value)}>   
         </textarea><br/>
         <button>Submit</button>
       </form>
        </div>
    )
}
