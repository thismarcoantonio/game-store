export function GameCard({ id, title, description, image, onClick }) {
  const handleAddToCart = (id) => () => {
    onClick(id);
  };

  return (
    <article className="flex flex-col shadow-md rounded-lg h-full">
      <div className="h-96 lg:h-64 rounded-tl-lg rounded-tr-lg w-full overflow-hidden">
        <img data-testid="image" src={image} alt={title} title={title} className="object-cover w-full h-full" />
      </div>
      <div className="flex flex-1 flex-col items-center text-left p-3 pb-14 relative">
        <h1 data-testid="title" className="font-bold text-gray-800 text-lg w-full">{title}</h1>
        {description && <p data-testid="description" className="text-sm text-gray-500 w-full">{description}</p>}
        <button
          data-testid="addButton"
          onClick={handleAddToCart(id)}
          className="absolute shadow-lg text-white font-bold bg-green-500 hover:bg-green-600 rounded-full p-3 w-9/12 -bottom-5"
        >
          Add to cart
        </button>
      </div>
    </article>
  );
}
