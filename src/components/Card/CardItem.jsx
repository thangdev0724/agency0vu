/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
function CardItem({ item }) {
  const navi = useNavigate();
  function onClickRead() {
    navi(`/blog/${item.id}`);
  }
  return (
    <div className="card bg-white dark:bg-gray-800 dark:border-gray-700">
      <div
        className="rounded-t-lg card--image"
        style={{
          backgroundImage: `url(${item.image})`,
        }}
      ></div>
      <div className="p-5">
        <span className="mb-2 text-[14px] text-blue-600 font-bold tracking-tight">
          {item.tag || "Digital Marketting"}
        </span>
        <div onClick={onClickRead}>
          <h5 className="card--link mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {item.title}
          </h5>
        </div>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 text-ellipsis overflow-hidden line-clamp">
          {item.shortDesc}
        </p>
        {/* <span className="text-[8px] font-bold text-gray-900">
          {item.author} - {item.date}
        </span> */}
      </div>
    </div>
  );
}

export default CardItem;
