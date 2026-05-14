"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

type FadeInUpProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

export function FadeInUp({ children, className, delay = 0 }: FadeInUpProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, ease: "easeOut", delay }}
    >
      {children}
    </motion.div>
  );
}
