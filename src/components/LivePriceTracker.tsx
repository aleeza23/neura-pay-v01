
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { TrendingUp, TrendingDown } from "lucide-react";

export const LivePriceTracker = () => {
  const [price, setPrice] = useState(1.00);
  const [change, setChange] = useState(0);
  const [isIncreasing, setIsIncreasing] = useState(true);

  useEffect(() => {
    // Simulate live price changes
    const interval = setInterval(() => {
      const fluctuation = (Math.random() * 0.01) - 0.005;
      const newPrice = Number((price + fluctuation).toFixed(4));
      setChange(Number((fluctuation * 100).toFixed(2)));
      setIsIncreasing(fluctuation > 0);
      setPrice(newPrice);
    }, 3000);

    return () => clearInterval(interval);
  }, [price]);

  return (
    <div className="flex items-center py-1 px-3 rounded-full bg-secondary text-sm">
      <span className="font-medium mr-2">USDT</span>
      <motion.span
        key={price}
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        className="font-bold"
      >
        ${price.toFixed(4)}
      </motion.span>
      <motion.div
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        className={`flex items-center ml-2 ${
          isIncreasing ? "text-green-500" : "text-red-500"
        }`}
      >
        {isIncreasing ? (
          <TrendingUp size={14} className="mr-1" />
        ) : (
          <TrendingDown size={14} className="mr-1" />
        )}
        <span className="text-xs">{change > 0 ? "+" : ""}{change}%</span>
      </motion.div>
    </div>
  );
};
