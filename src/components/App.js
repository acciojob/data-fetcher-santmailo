import React, { useEffect } from "react";
import axios from "axios";
import "./../styles/App.css";

const App = () => {
  const [data, setData] = React.useState("");
  const [err, setErr] = React.useState("");
  const [loading, setLoading] = React.useState(true);

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products")
      .then((data) => {
        setData(data.data);
        setLoading(false);
      })
      .catch((err) => {
        setErr(err.message);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : err ? (
        <p>No data found</p>
      ) : (
        <div>
          <h1>Data Fetched from API</h1>
          <pre>{JSON.stringify(data)}</pre>
        </div>
      )}
    </div>
  );
};

export default App;
