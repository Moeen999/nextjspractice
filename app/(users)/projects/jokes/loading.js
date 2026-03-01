"use client";
import { motion } from "framer-motion";

export default function Loader() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gradient-to-br from-purple-600 via-indigo-700 to-black z-50">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        className="backdrop-blur-lg bg-white/10 p-10 rounded-2xl shadow-2xl flex flex-col items-center"
      >
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
          className="w-20 h-20 border-4 border-transparent border-t-purple-400 border-r-indigo-400 rounded-full"
        />

        <motion.p
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="mt-6 text-white text-lg font-semibold tracking-wider"
        >
          Loading, please wait...
        </motion.p>
      </motion.div>
    </div>
  );
}
