// import { useEffect, useState } from "react";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import { motion } from "framer-motion";

// export default function PaymentPage() {
//   const [cart, setCart] = useState<{ label: string; size: string; quantity: number; finalPrice: string }[]>([]);
//   const [cardholderName, setCardholderName] = useState("");
//   const [cardNumber, setCardNumber] = useState("");
//   const [expiryDate, setExpiryDate] = useState("");
//   const [cvv, setCvv] = useState("");

//   useEffect(() => {
//     AOS.init({ duration: 1000, easing: "ease-in-out" });

//     // Load cart data from localStorage
//     const savedCart = localStorage.getItem("cart");
//     if (savedCart) {
//       setCart(JSON.parse(savedCart));
//     }
//   }, []);

//   // Calculate total price dynamically
//   const totalPrice = cart.reduce((total, item) => total + parseFloat(item.finalPrice), 0).toFixed(2);

//   // Handle form submission
//   const handlePayment = (e: React.FormEvent) => {
//     e.preventDefault(); // Prevent page reload

//     // Clear the input fields
//     setCardholderName("");
//     setCardNumber("");
//     setExpiryDate("");
//     setCvv("");

//     // Display a confirmation message (optional)
//     alert("Payment successful!");
//   };

//   return (
//     <div
//       className="min-h-screen flex items-center justify-center p-6 bg-cover bg-center"
//       style={{ backgroundImage: "url('/img/payment.jpg')" }}
//     >
//       <motion.div
//         initial={{ opacity: 0, scale: 0.9 }}
//         animate={{ opacity: 1, scale: 1 }}
//         transition={{ duration: 0.5 }}
//         className="w-full max-w-md bg-black/50 backdrop-blur-lg p-6 rounded-3xl shadow-lg border border-white/40"
//         data-aos="fade-up"
//       >
//         <h2 className="text-2xl font-bold text-white mb-4 text-center" data-aos="fade-down">
//           Checkout
//         </h2>

//         {/* Order Summary */}
//         <div className="mb-6 p-4 bg-white/20 rounded-lg shadow-md" data-aos="flip-left">
//           {cart.length > 0 ? (
//             cart.map((item, index) => (
//               <div key={index} className="flex justify-between p-2 border-b">
//                 <span>
//                   {item.label} ({item.size}) x{item.quantity}
//                 </span>
//                 <span>${item.finalPrice}</span>
//               </div>
//             ))
//           ) : (
//             <p className="text-white text-center">No items in cart</p>
//           )}
//         </div>

//         {/* Payment Form */}
//         <form onSubmit={handlePayment} data-aos="zoom-in">
//           <div className="mb-4">
//             <label className="block text-white text-sm font-semibold mb-2">Cardholder Name</label>
//             <input
//               type="text"
//               value={cardholderName}
//               onChange={(e) => setCardholderName(e.target.value)}
//               className="w-full px-4 py-2 bg-white/40 text-white border border-white/30 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none transition-transform duration-300 ease-in-out transform focus:scale-105 placeholder:text-white/80"
//               placeholder="Enter name on card"
//             />
//           </div>
//           <div className="mb-4">
//             <label className="block text-white text-sm font-semibold mb-2">Card Number</label>
//             <input
//               type="text"
//               value={cardNumber}
//               onChange={(e) => setCardNumber(e.target.value)}
//               className="w-full px-4 py-2 bg-white/40 text-white border border-white/30 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none transition-transform duration-300 ease-in-out transform focus:scale-105 placeholder:text-white/80"
//               placeholder="XXXXXXXXXXXX"
//             />
//           </div>
//           <div className="flex space-x-4">
//             <div className="w-1/2">
//               <label className="block text-white text-sm font-semibold mb-2">Expiry Date</label>
//               <input
//                 type="text"
//                 value={expiryDate}
//                 onChange={(e) => setExpiryDate(e.target.value)}
//                 className="w-full px-4 py-2 bg-white/40 text-white border border-white/30 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none transition-transform duration-300 ease-in-out transform focus:scale-105 placeholder:text-white/80"
//                 placeholder="MM/YY"
//               />
//             </div>
//             <div className="w-1/2">
//               <label className="block text-white text-sm font-semibold mb-2">CVV</label>
//               <input
//                 type="text"
//                 value={cvv}
//                 onChange={(e) => setCvv(e.target.value)}
//                 className="w-full px-4 py-2 bg-white/40 text-white border border-white/30 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none transition-transform duration-300 ease-in-out transform focus:scale-105 placeholder:text-white/80"
//                 placeholder="XXX"
//               />
//             </div>
//           </div>

//           <motion.button
//             whileHover={{ scale: 1.08, boxShadow: "0px 0px 10px rgba(255, 255, 255, 0.8)" }}
//             whileTap={{ scale: 0.95 }}
//             type="submit"
//             className="w-full bg-gradient-to-r from-white/40 to-black/10 text-white font-bold py-3 px-4 rounded-lg mt-4 transition-all duration-300 ease-in-out shadow-md hover:brightness-110 hover:shadow-lg"
//             data-aos="fade-up"
//           >
//             Pay ${totalPrice}
//           </motion.button>
//         </form>
//       </motion.div>
//     </div>
//   );
// }


import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";

export default function PaymentPage() {
  const [cart, setCart] = useState<{ label: string; size: string; quantity: number; finalPrice: string }[]>([]);
  const [cardholderName, setCardholderName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");

  useEffect(() => {
    AOS.init({ duration: 1000, easing: "ease-in-out" });

    // Load cart data from localStorage
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  // Calculate total price dynamically
  const totalPrice = cart.reduce((total, item) => total + parseFloat(item.finalPrice), 0).toFixed(2);

  // Handle form submission
  const handlePayment = (e: React.FormEvent) => {
    e.preventDefault(); // Prevent page reload

    // Clear the input fields
    setCardholderName("");
    setCardNumber("");
    setExpiryDate("");
    setCvv("");

    // Display a confirmation message (optional)
    alert("Payment successful!");
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center p-6 bg-cover bg-center"
      style={{ backgroundImage: "url('/img/payment.jpg')" }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md bg-black/50 backdrop-blur-lg p-6 rounded-3xl shadow-lg border border-white/40"
        data-aos="fade-up"
      >
        <h2 className="text-2xl font-bold text-white mb-4 text-center" data-aos="fade-down">
          Payment Method
        </h2>

        {/* Payment Form */}
        <form onSubmit={handlePayment} data-aos="zoom-in">
          <div className="mb-4">
            <label className="block text-white text-sm font-semibold mb-2">Cardholder Name</label>
            <input
              type="text"
              value={cardholderName}
              onChange={(e) => setCardholderName(e.target.value)}
              className="w-full px-4 py-2 bg-white/40 text-white border border-white/30 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none transition-transform duration-300 ease-in-out transform focus:scale-105 placeholder:text-white/80"
              placeholder="Enter name on card"
            />
          </div>
          <div className="mb-4">
            <label className="block text-white text-sm font-semibold mb-2">Card Number</label>
            <input
              type="text"
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value)}
              className="w-full px-4 py-2 bg-white/40 text-white border border-white/30 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none transition-transform duration-300 ease-in-out transform focus:scale-105 placeholder:text-white/80"
              placeholder="XXXXXXXXXXXX"
            />
          </div>
          <div className="flex space-x-4">
            <div className="w-1/2">
              <label className="block text-white text-sm font-semibold mb-2">Expiry Date</label>
              <input
                type="text"
                value={expiryDate}
                onChange={(e) => setExpiryDate(e.target.value)}
                className="w-full px-4 py-2 bg-white/40 text-white border border-white/30 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none transition-transform duration-300 ease-in-out transform focus:scale-105 placeholder:text-white/80"
                placeholder="MM/YY"
              />
            </div>
            <div className="w-1/2">
              <label className="block text-white text-sm font-semibold mb-2">CVV</label>
              <input
                type="text"
                value={cvv}
                onChange={(e) => setCvv(e.target.value)}
                className="w-full px-4 py-2 bg-white/40 text-white border border-white/30 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none transition-transform duration-300 ease-in-out transform focus:scale-105 placeholder:text-white/80"
                placeholder="XXX"
              />
            </div>
          </div>

          <motion.button
            whileHover={{ scale: 1.08, boxShadow: "0px 0px 10px rgba(255, 255, 255, 0.8)" }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full bg-gradient-to-r from-white/40 to-black/10 text-white font-bold py-3 px-4 rounded-lg mt-4 transition-all duration-300 ease-in-out shadow-md hover:brightness-110 hover:shadow-lg"
            data-aos="fade-up"
          >
            Pay ${totalPrice}
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
}
