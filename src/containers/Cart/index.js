import { useCart } from "contexts/Cart";
import { dataLayer } from "utils/analytics";
import { Item } from "./Item";
import faker from "faker";

export function Cart() {
  const { cart } = useCart();
  const hasItems = !!cart.length;

  const getFinalPrice = () => {
    return cart.reduce((total, { price }) => total + Number(price), 0);
  };

  const handlePurchase = () => {
    dataLayer.push({ ecommerce: null });
    dataLayer.push({
      event: "purchase",
      ecommerce: {
        transaction_id: faker.datatype.uuid(),
        affiliation: "Online Store",
        value: getFinalPrice(),
        tax: getFinalPrice() * 0.10,
        shipping: 5.99,
        currency: "USD",
        items: cart.map((item) => ({
          item_name: item.name,
          item_id: item.id,
          price: Number(item.price),
          item_brand: "EA",
          item_category: "Games",
          quantity: 1
        }))
      }
    });
  };

  return (
    <div className="lg:grid lg:grid-cols-6">
      <div className="lg:col-span-4">
        <h1 className="font-bold text-4xl text-gray-800">Cart items</h1>
        <p className="text-gray-500 mb-6">
          {hasItems ? `${cart.length} items in cart` : "No items added to your cart"}
        </p>
        {hasItems && (
          <ul>
            {cart.map((item) => <Item key={item.id} {...item} />)}
          </ul>
        )}
      </div>
      {hasItems && (
        <div className="lg:col-span-2">
          <div className="mt-10 bg-gray-100 rounded p-3">
            <h1 className="font-semibold text-xl text-gray-800">Finish your order</h1>
            <ul className="mt-4 px-2">
              {cart.map((item) => (
                <li key={item.id} className="font-mono border-b border-gray-300 mb-2 flex justify-between">
                  {item.name} <span>${item.price}</span>
                </li>
              ))}
              <li className="font-mono font-bold flex justify-between">Total <span>${getFinalPrice()}</span></li>
            </ul>
          </div>
          <button onClick={handlePurchase} className="mt-4 shadow-lg text-white font-bold bg-green-500 rounded-sm hover:bg-green-600 p-3 w-full">
            Finish purchase
          </button>
        </div>
      )}
    </div>
  );
}
