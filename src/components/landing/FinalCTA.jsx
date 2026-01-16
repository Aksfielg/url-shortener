import { motion } from "framer-motion";
import { fadeUp } from "@/components/animations/motionVariants";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export default function FinalCTA() {
  const navigate = useNavigate();
  const goAuth = () => navigate(`/auth`);

  return (
    <section className="h-screen snap-start flex items-center justify-center bg-slate-900">
      <motion.div 
        className="text-center px-6"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <h2 className="text-4xl sm:text-6xl font-extrabold text-white">Get started for free.</h2>
        <p className="mt-4 text-slate-200 text-lg sm:text-xl">No credit card required. Start creating short links today.</p>
        <div className="mt-8">
          <Button onClick={goAuth} className="px-8 py-4 text-lg btn-micro glass-cta">Sign Up Now</Button>
        </div>
      </motion.div>
    </section>
  );
}
