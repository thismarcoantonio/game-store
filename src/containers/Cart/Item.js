export function Item({ title, description, image, name, price }) {
  return (
    <li className="flex w-full h-28 mb-3 lg:h-36">
      <div className="flex-shrink-0 w-20 h-full mr-3 rounded overflow-hidden lg:w-28">
        <img src={image} alt={title} className="object-cover w-full h-full" />
      </div>
      <div className="flex flex-col w-9/12">
        <p className="text-lg">{name}</p>
        <p className="text-gray-500 whitespace-nowrap w-full overflow-ellipsis overflow-hidden">{description}</p>
        <div className="mt-auto font-bold">${price}</div>
      </div>
    </li>
  );
}

export default Item;
