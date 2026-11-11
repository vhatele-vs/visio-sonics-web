"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import { heroContent } from "./hero.data";

export default function HeroActions() {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}>
      <Button href={heroContent.primaryAction.href} size="lg">
        {heroContent.primaryAction.label}<span aria-hidden="true" className="ml-3">→</span>
      </Button>
    </motion.div>
  );
}
