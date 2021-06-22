import "./Card.scss";
import { motion } from "framer-motion";
import faker from "faker";
function Card() {
  return (
    <motion.div className='card' layout>
      <div className='card__avatar'>
        <img src={faker.image.avatar()} />
      </div>
      <p className='card__username'>{faker.name.firstName()}</p>
    </motion.div>
  );
}

export default Card;
