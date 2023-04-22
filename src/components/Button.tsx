import React from "react";
import { motion } from "framer-motion";
type Props = {
  children?: React.ReactNode;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "danger" | "success";
};

export default function Button(props: Props) {
  const { children, onClick, variant = "primary" } = props;
  switch (variant) {
    case "primary":
      return (
        <motion.div whileTap={{ scale: 0.95 }}>
          <button
            className='py-2 px-4 bg-indigo-500 drop-shadow-md rounded text-white active:bg-indigo-600 transition-all font-semibold'
            onClick={onClick}
          >
            {children}
          </button>
        </motion.div>
      );
    case "secondary":
      return (
        <motion.div whileTap={{ scale: 0.95 }}>
          <button
            className='py-2 px-4 bg-slate-500 drop-shadow-md rounded text-white active:bg-slate-600 transition-all font-semibold'
            onClick={onClick}
          >
            {children}
          </button>
        </motion.div>
      );
    case "success":
      return (
        <motion.div whileTap={{ scale: 0.95 }}>
          <button
            className='py-2 px-4 bg-green-500 drop-shadow-md rounded text-white active:bg-green-600 transition-all font-semibold'
            onClick={onClick}
          >
            {children}
          </button>
        </motion.div>
      );
    case "danger":
      return (
        <motion.div whileTap={{ scale: 0.95 }}>
          <button
            className='py-2 px-4 bg-rose-500 drop-shadow-md rounded text-white active:bg-rose-600 transition-all font-semibold'
            onClick={onClick}
          >
            {children}
          </button>
        </motion.div>
      );
  }
}
