import { motion } from "framer-motion";
import { fadeUp } from "@/components/animations/motionVariants";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export default function Hero() {
  const navigate = useNavigate();

  const goCreate = () => navigate(`/auth?createNew=true`);
  const goDashboard = () => navigate(`/dashboard`);

  return (
    <section className="h-screen snap-start flex items-center justify-center bg-animated">
      <motion.div
        className="max-w-4xl text-center px-6"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
      >
        <h1 className="text-4xl sm:text-6xl font-extrabold text-white leading-tight">
          More than just shorter links
        </h1>
        <p className="mt-4 text-slate-200 text-lg sm:text-xl">
          Build and protect your brand with custom links, QR codes, and a powerful analytics dashboard.
        </p>

        <div className="mt-8 flex items-center justify-center gap-4">
          <Button onClick={goCreate} className="px-8 py-4 text-lg btn-micro glass-cta">Get Started</Button>
          <Button onClick={goDashboard} className="px-8 py-4 text-lg btn-micro" variant="ghost">View Dashboard</Button>
        </div>
      </motion.div>
      <motion.div className="absolute inset-0 pointer-events-none -z-10" aria-hidden>
        <motion.div animate={{ x: [0, -40, 0] }} transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }} className="absolute top-10 left-10 w-80 h-80 rounded-full bg-gradient-to-br from-indigo-600/30 to-sky-500/20 blur-3xl" />
        <motion.div animate={{ x: [0, 40, 0] }} transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }} className="absolute bottom-20 right-8 w-56 h-56 rounded-full bg-gradient-to-br from-pink-500/20 to-rose-400/10 blur-3xl" />
      </motion.div>
    </section>
  );
}
