"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

export default function NotFound() {
  const router = useRouter();

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden">

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_#3b82f6_0%,_transparent_45%)] opacity-20" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,_#9333ea_0%,_transparent_45%)] opacity-20" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-10 max-w-md w-full text-center shadow-[0_0_40px_rgba(59,130,246,0.2)]"
      >
        <motion.h1
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.6 }}
          className="text-7xl font-extrabold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
        >
          404
        </motion.h1>

        <p className="mt-4 text-xl text-white font-semibold">
          Page Not Found
        </p>

        <p className="mt-2 text-gray-400 text-sm">
          The page you are trying to access doesn’t exist or has been moved.
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <button
            onClick={() => router.back()}
            className="px-6 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium hover:scale-105 transition-transform shadow-lg"
          >
            Go Back
          </button>

          <Link
            href="/"
            className="px-6 py-2 rounded-lg border border-white/20 text-white hover:bg-white/10 transition"
          >
            Home
          </Link>
        </div>
      </motion.div>
    </div>
  );
}