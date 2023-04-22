import React from "react";
import { AnimatePresence, motion } from "framer-motion";

type PropsType = {
  children?: React.ReactNode;
  header?: React.ReactNode;
  className?: string;
};

export default function Card(props: PropsType) {
  const { children, header, className } = props;
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <div
          className={`rounded relative transition-all bg-white h-full drop-shadow-md ${className}`}
        >
          <div className='p-2'>
            {header ? (
              <div className='w-full mb-5'>
                <p>{header}</p>
              </div>
            ) : null}
            <div className=''>{children}</div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
