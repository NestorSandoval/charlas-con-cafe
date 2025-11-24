"use client";
import { motion } from "framer-motion";
import CoffeeCute from "./coffee-cute"; // o CoffeeOutline

type Cup = {
  left?: string;
  right?: string;
  top?: string;
  bottom?: string;
  size: number;
  shadow?: string;
  rot?: number;
  drift?: number;
  period?: number;
};

const cupsTop: Cup[] = [
  {
    left: "9%",
    top: "7%",
    size: 42,
    shadow: "0 10px 18px rgba(0,0,0,.45)",
    rot: -2,
    drift: 10,
    period: 6.5,
  },
  {
    right: "10%",
    top: "9%",
    size: 44,
    shadow: "0 10px 18px rgba(0,0,0,.45)",
    rot: 2,
    drift: 12,
    period: 7.2,
  },
  {
    left: "24%",
    top: "11%",
    size: 38,
    shadow: "0 10px 18px rgba(0,0,0,.45)",
    rot: -1,
    drift: 8,
    period: 5.8,
  },
];

const cupsBottom: Cup[] = [
  {
    left: "12%",
    bottom: "10%",
    size: 40,
    shadow: "0 12px 22px rgba(0,0,0,.5)",
    rot: 1,
    drift: 10,
    period: 6.8,
  },
  {
    right: "14%",
    bottom: "9%",
    size: 42,
    shadow: "0 12px 22px rgba(0,0,0,.5)",
    rot: -2,
    drift: 12,
    period: 7.6,
  },
  {
    right: "28%",
    bottom: "13%",
    size: 36,
    shadow: "0 12px 22px rgba(0,0,0,.5)",
    rot: 0,
    drift: 9,
    period: 6.0,
  },
];

function CupFixed({ c }: { c: Cup }) {
  const {
    size,
    shadow = "0 10px 18px rgba(0,0,0,.5)",
    rot = 0,
    drift = 10,
    period = 6,
    ...anchor
  } = c;
  return (
    <motion.div
      className="absolute pointer-events-none will-change-transform"
      style={{ ...anchor, filter: `drop-shadow(${shadow})` }}
      initial={{ y: 0, rotate: rot }}
      animate={{
        y: [0, -drift, 0, drift, 0],
        rotate: [rot, rot + 1.6, rot, rot - 1.6, rot],
      }}
      transition={{ duration: period, repeat: Infinity, ease: "easeInOut" }}
    >
      <CoffeeCute size={size} />
      {/* Si prefieres outline: <CoffeeOutline size={size} className="text-white" /> */}
    </motion.div>
  );
}

export default function FloatingCoffee() {
  return (
    <div className="absolute inset-0 -z-0">
      {cupsTop.map((c, i) => (
        <CupFixed key={`t${i}`} c={c} />
      ))}
      {cupsBottom.map((c, i) => (
        <CupFixed key={`b${i}`} c={c} />
      ))}
    </div>
  );
}
