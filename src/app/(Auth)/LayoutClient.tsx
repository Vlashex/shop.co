"use client"
import { motion } from "framer-motion";
import Link from "next/link";
import { ReactElement } from "react";

export default function LayoutClient({ children }: { children: ReactElement }) {
  return (
    <motion.div
      className="flex items-center justify-center w-full h-[100vh]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }} // Появление layout
    >
      <Link href="/" className="bg-black bg-opacity-90 w-[100vw] h-[100vh] block absolute z-10" />
      <motion.div
        className="z-[100] block p-20"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }} // Появление и всплытие child
      >
        {children}
      </motion.div>
    </motion.div>
  );
}
