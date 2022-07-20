import React from "react";
import { useAppSelector } from "../hooks/redux";
import { useActions } from "../hooks/actions";

const FavouritesPage = () => {
  const { removeFavourites } = useActions();
  const { favourites } = useAppSelector((state) => state.github);

  const removeFromFavourite = (
    event: React.MouseEvent<HTMLButtonElement>,
    item: string
  ) => {
    event.preventDefault();
    removeFavourites(item);
  };

  return (
    <div className="flex justify-center pt-10 mx-auto h-screen w-screen">
      <ul>
        {!favourites.length ? <p>No favourites</p> : null}
        {favourites.map((item) => (
          <div
            key={item}
            className="border py-3 px-5 rounded mb-2 hover:shadow-md hover:bg-gray-100 transition-all"
          >
            <a href={item} target="_blank">
              <h2 className="text-lg font-bold">{item}</h2>
              <button
                onClick={(event) => removeFromFavourite(event, item)}
                className="py-2 px-4 bg-red-400 rounded hover:shadow-md transition-all"
              >
                Remove
              </button>
            </a>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default FavouritesPage;
