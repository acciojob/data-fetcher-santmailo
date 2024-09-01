import React, { useEffect } from "react";
import axios from "axios";
import "./../styles/App.css";

const App = () => {
  const [data, setData] = React.useState("");
  const [err, setErr] = React.useState("");

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products")
      .then((data) => setData(data.data))
      .catch((err) => {
        // console.log(err.message);
        setErr(err.message);
      });
  }, []);

  return (
    <div>
      {/* Do not remove the main div */}

      {data.length == 0 ? <p>Loading...</p> : <pre>{JSON.stringify(data)}</pre>}
    </div>
  );
};

export default App;
