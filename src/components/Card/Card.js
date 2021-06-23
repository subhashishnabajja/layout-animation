import "./Card.scss";
import { motion } from "framer-motion";
import faker from "faker";
import { useState } from "react";
function Card() {
  const [image, setImage] = useState(faker.image.avatar());
  const [name, setName] = useState(faker.name.firstName());
  return (
    <motion.div className='card' layout>
      <div className='card__avatar'>
        <img src={image} />
      </div>
      <p className='card__username'>{name}</p>
    </motion.div>
  );
}

export default Card;
