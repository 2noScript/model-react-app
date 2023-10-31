import { useState } from "react";

function Home() {
  const [a, setA] = useState(0);
  return (
    <h1
      onClick={() => {
        setA((prev) => prev + 1);
      }}
    >
      {a}
    </h1>
  );
}
export default Home;
