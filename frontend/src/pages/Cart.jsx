
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useCart } from "../context/CartContext";

export default function Cart() {
  const {
    cartItems,
    removeItem,
    updateQuantity,
    cartTotal,
  } = useCart();

  return (
    <div className="min-h-screen flex flex-col gap-8">
      <Navbar />

      <main className="px-8 md:px-16 py-8">
        <h1 className="text-3xl font-serif mb-8">
          YOUR CART ({cartItems.length})
        </h1>

        {cartItems.length === 0 ? (
          <p className="text-gray-500">
            Your cart is empty.
          </p>
        ) : (
          <div className="flex flex-col gap-6">
            {cartItems.map((item) => (
              <div
                key={`${item.productId}-${item.size}`}
                className="flex gap-6 border-b pb-6"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-32 h-40 object-cover rounded"
                />

                <div className="flex flex-col gap-3">
                  <h2 className="text-xl font-medium">
                    {item.title}
                  </h2>

                  <p>Size: {item.size}</p>

                  <p>Price: ${item.price}</p>

                  <div className="flex items-center gap-3">
                    <button
                      onClick={() =>
                        updateQuantity(
                          item.productId,
                          item.size,
                          item.quantity - 1
                        )
                      }
                      disabled={item.quantity <= 1}
                      className="border px-3 py-1"
                    >
                      -
                    </button>

                    <span>{item.quantity}</span>

                    <button
                      onClick={() =>
                        updateQuantity(
                          item.productId,
                          item.size,
                          item.quantity + 1
                        )
                      }
                      className="border px-3 py-1"
                    >
                      +
                    </button>
                  </div>

                  <p>
                    Subtotal: $
                    {(item.price * item.quantity).toFixed(2)}
                  </p>

                  <button
                    onClick={() =>
                      removeItem(item.productId, item.size)
                    }
                    className="text-red-600 underline text-left"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}

            <div className="text-right mt-4">
              <h2 className="text-2xl font-bold">
                Total: ${cartTotal.toFixed(2)}
              </h2>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}