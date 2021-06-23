import "./Controls.scss";
import { motion } from "framer-motion";
const Controls = (props) => {
  const { columns, setColumns } = props;
  return (
    <div className='controls'>
      <button onClick={(e) => setColumns(columns + 1)}>+</button>
      <p>{columns}</p>
      <button
        onClick={(e) =>
          columns <= 1 ? setColumns(1) : setColumns(columns - 1)
        }>
        -
      </button>
    </div>
  );
};
export default Controls;
