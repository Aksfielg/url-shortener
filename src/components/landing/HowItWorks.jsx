import { motion } from "framer-motion";
import { stagger, fadeUp } from "@/components/animations/motionVariants";

const Step = ({ title, desc }) => (
  <motion.div
    variants={fadeUp}
    className="glass floating rounded-2xl p-6 flex-1 text-center"
    whileHover={{ y: -6 }}
  >
    <div className="h-12 w-12 mx-auto rounded-full bg-white/6 flex items-center justify-center mb-4">🔗</div>
    <h4 className="font-semibold text-white">{title}</h4>
    <p className="mt-2 text-sm text-slate-200">{desc}</p>
  </motion.div>
);

export default function HowItWorks() {
  return (
    <section className="h-screen snap-start flex items-center justify-center bg-slate-900">
      <motion.div className="max-w-5xl w-full px-6" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={stagger}>
        <motion.h2 variants={fadeUp} className="text-3xl text-white font-bold text-center mb-8">How it works — 3 steps</motion.h2>

        <div className="flex flex-col md:flex-row gap-6">
          <Step title="Create Link" desc="Paste URL, customize slug, add password or expiry." />
          <Step title="Share" desc="Copy, QR code, or share to social in one click." />
          <Step title="Track" desc="View clicks, locations, and device types instantly." />
        </div>
      </motion.div>
    </section>
  );
}
