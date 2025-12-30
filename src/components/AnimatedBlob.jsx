import { motion } from "framer-motion";

export default function AnimatedBlob() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 0.08, scale: 1.1 }}
        transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
        className="pointer-events-none absolute -left-40 -top-40 w-96 h-96 rounded-full bg-linear-to-br from-indigo-600 to-purple-500 blur-3xl"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.06, scale: 1.05 }}
        transition={{ duration: 4, repeat: Infinity, repeatType: "reverse", delay: 1 }}
        className="pointer-events-none absolute right-10 -top-12 w-72 h-72 rounded-full bg-linear-to-br from-emerald-400 to-teal-500 blur-3xl"
      />
    </>
  );
}
