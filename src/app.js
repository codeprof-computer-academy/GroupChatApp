import "./app.css"
import { useState, useEffect } from "react"
import aboutImage from "./about_img.jpg"
export default function App(){
  
   let [data, setData] = useState("");
   let [count, setCount] = useState(0)

    function handleClick(){
      setCount(prevValue =>{
          return prevValue + 1
      })
    }


    console.log("component rendered")
  useEffect(()=>{
    // fetch('https://swapi.dev/api/people/2')
    // .then(res => res.json())
    // .then(res => setData(res))
    console.log("effect run successfully")
       
  }, [count])

 
    return(
        <div className="container">
                   
                   <header>
                    <h3>Logo</h3>
                    <nav>
                         <a>Home</a>
                         <a>About us</a>
                         <a>Subscribe</a>
                         
                    </nav>
                   </header>
                   <main>
                     <section className="banner">
                           <h1>Welcome to Codeprof Academy</h1>
                     </section>
                     <section className="about-us">
                                <h1>About us</h1>
                                <div>
                                       <img src={aboutImage} width="150" className="aboutImage"/>
                                       <p>
                                          The coming of the lord will come like a thief in the night. The coming of the lord will come like a thief in the night The coming of the lord will come like a thief in the night The coming of the lord will come like a thief in the night The coming of the lord will come like a thief in the night
                                       </p>
                                </div>
                     </section>
                     <section className="subscribe">
                           <h1>Sunscribe</h1>
                           <form>
                                <input type="email"  placeholder="Enter Email"/>
                                <button>Submit</button>
                           </form>
                     </section>

                     <section>
                            <h1>{count}</h1>
                         <button onClick={handleClick}>Increase Count</button>

                     </section>

                   </main>
                   <footer>
                      <p>&copy; Copyright 2023. All rights reserved.</p>
                   </footer>
        </div>
    )
}