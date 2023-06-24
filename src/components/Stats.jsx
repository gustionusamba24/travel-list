import React from "react";

export const Stats = ({ items }) => {
  if (!items.length)
    return (
      <p className="stats">
        <em>Start adding some items to your packing list</em>
      </p>
    );

  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const numPackedPercentage = Math.round(
    (numPacked / numItems) * 100
  );

  return (
    <footer className="stats">
      <em>
        {numPackedPercentage === 100
          ? `You got everything! Let's go ✈️`
          : `You have ${numItems} items on your list and you already packed
        ${numPacked} (${numPackedPercentage}%)`}
      </em>
    </footer>
  );
};
