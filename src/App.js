import Card from "./components/Card";
import { AnimateSharedLayout } from "framer-motion";
import React, { useEffect, useState } from "react";

function App() {
  const [columns, setColumns] = useState(1);

  useEffect(() => {
    if (columns <= 0) {
      setColumns(1);
    }
  }, [columns]);

  return (
    <>
      <div className='controls'>
        <button onClick={(e) => setColumns(columns + 1)}>+</button>
        <p>{columns}</p>
        <button onClick={(e) => setColumns(columns - 1)}>-</button>
      </div>
      <div
        className='container'
        style={{
          gridTemplateColumns: `repeat(${columns}, 20rem)`,
        }}>
        <AnimateSharedLayout>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </AnimateSharedLayout>
      </div>
    </>
  );
}

export default App;
