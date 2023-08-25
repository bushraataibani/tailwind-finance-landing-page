import React from "react";
import single from "../../assets/single.png";
import partnership from "../../assets/double.png";
import group from "../../assets/triple.png";

let cardsArr = [
  {
    icon: single,
    title: "Single User",
    price: "$149",
    storage: "500 GB",
    userAllowed: "1",
    sendUpTo: "20 GB",
  },
  {
    icon: partnership,
    title: "Partnership",
    price: "$199",
    storage: "1 TB",
    userAllowed: "3",
    sendUpTo: "10 GB",
  },
  {
    icon: group,
    title: "Group Account",
    price: "$299",
    storage: "5 TB",
    userAllowed: "10",
    sendUpTo: "20 GB",
  },
];

const Cards = () => {
  return (
    <div className="w-full bg-white py-[10rem] px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
        {cardsArr.map((card, index) => (
          <div
            className="w-full shadow-xl flex flex-col py-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300"
            key={index}
          >
            <img
              className={"w-20 mx-auto mt-[-3rem] bg-white"}
              src={card.icon}
              alt={card.title}
            />

            <h2 className={"text-2xl font-bold text-center py-8"}>
              {card.title}
            </h2>
            <p className={"text-4xl font-bold text-center"}>{card.price}</p>
            <div className={"text-center font-medium"}>
              <p className="py-2 border-b mx-8 mt-8">{card.storage} Storage</p>
              <p className="py-2 border-b mx-8 mt-8">
                {card.userAllowed} User Allowed
              </p>
              <p className="py-2 border-b mx-8 mt-8">
                Send up to {card.sendUpTo}
              </p>
            </div>
            <button className="text-black bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3">
              Start Trial
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;
