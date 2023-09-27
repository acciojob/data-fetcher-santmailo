
import React, { useEffect } from "react";
import axios from "axios";
import './../styles/App.css';

const App = () => {
  const [data, setData] = React.useState("");

  useEffect(()=> {

    axios.get("https://dummyjson.com/products")
    .then((data)=> setData(data.data))
    .catch((err) => console.log(err));
  },[])

  return (
    <div>
        {/* Do not remove the main div */}
        <pre>
          {JSON.stringify(data)}
        </pre>
    </div>
  )
}

export default App
