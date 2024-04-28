'use client'

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

let interval: any;

type Card = {
  id: number;
  name: string;
  designation: string;
  content: React.ReactNode;
};

export const CardStack = ({
  items,
  offset,
  scaleFactor,
}: {
  items: Card[];
  offset?: number;
  scaleFactor?: number;
}) => {
  const CARD_OFFSET = offset || 10;
  const SCALE_FACTOR = scaleFactor || 0.06;
  const [cards, setCards] = useState<Card[]>(items);

  useEffect(() => {
    startFlipping();

    return () => clearInterval(interval);
  }, []);

  const startFlipping = () => {
    interval = setInterval(() => {
      setCards((prevCards: Card[]) => {
        const newArray = [...prevCards];
        newArray.unshift(newArray.pop()!);
        return newArray;
      });
    }, 5000);
  };

  return (
    <div className="relative w-full sm:w-auto h-80 md:h-80 md:w-3/4 mx-auto">
      {cards.map((card, index) => (
        <motion.div
          key={card.id}
          className="absolute dark:bg-neutral-900 bg-white h-60 w-full md:w-full rounded-3xl p-4 shadow-xl border border-neutral-200 dark:border-white/[0.1] shadow-black/[0.1] dark:shadow-white/[0.05] flex flex-col justify-between overflow-hidden"
          style={{
            transformOrigin: "top center",
          }}
          animate={{
            top: index * -CARD_OFFSET,
            scale: 1 - index * SCALE_FACTOR,
            zIndex: cards.length - index,
          }}
        >
          <div className="font-extralight text-neutral-700 dark:text-neutral-200 overflow-y-auto">
            {card.content}
          </div>
          <div>
            <p className="mt-2 text-neutral-500 font-extralight dark:text-white">
              {card.name}
            </p>
            <p className="text-primary font-semibold dark:text-primary">
              {card.designation}
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  );
};
