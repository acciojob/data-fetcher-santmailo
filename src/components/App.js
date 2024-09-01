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
        <h1>
          <pre>{JSON.stringify(data)}</pre>
        </h1>
      )}
    </div>
  );
};

export default App;
