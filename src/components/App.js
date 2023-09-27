
import React, { useEffect } from "react";
import axios from "axios";
import './../styles/App.css';

const App = () => {
  const [data, setData] = React.useState("");
  const [err, setErr] = React.useState("");


  useEffect(()=> {

    axios.get("https://dummyjson.com/products")
    .then((data)=> setData(data.data))
    .catch((err) => {
      // console.log(err.message);
      setErr(err.message)
    });
  },[])

  return (
    <div>
        {/* Do not remove the main div */}

        {
          (err!="") ? <p>{err}</p> :
          <pre>
            <h1>Data Fetched from API</h1>
            {JSON.stringify(data)}
          </pre>
        }
    </div>
  )
}

export default App
