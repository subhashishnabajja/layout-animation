import Card from "./components/Card";
import { AnimateSharedLayout } from "framer-motion";
import React, { useEffect, useState } from "react";
import Controls from "./components/Controls";

function App() {
  const [columns, setColumns] = useState(1);

  const renderCards = (num) => {
    const array = [];

    for (var i = 1; i <= num; i++) {
      array.push(<Card />);
    }

    return array;
  };

  useEffect(() => {
    if (columns <= 1) {
      setColumns(1);
    }
  }, [columns]);

  return (
    <div className='App'>
      <Controls columns={columns} setColumns={setColumns} />
      <div
        className='container'
        style={{
          gridTemplateColumns: `repeat(${columns}, 20rem)`,
        }}>
        <AnimateSharedLayout>{renderCards(30)}</AnimateSharedLayout>
      </div>
    </div>
  );
}

export default App;
