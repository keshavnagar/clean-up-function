import { useEffect } from "react";
import { useState } from "react";

const CleanUp = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const id = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(id);
  }, []);
  return (
    <>
      <h1>Count : {count}</h1>
    </>
  );
};
export default CleanUp;
