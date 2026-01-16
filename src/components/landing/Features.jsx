import { motion } from "framer-motion";
import { fadeUp, floatIn } from "@/components/animations/motionVariants";
import { ShieldCheck, CalendarX, MapPin, QrCode, Link, ThumbsDown } from "lucide-react";

const features = [
  { icon: <ShieldCheck />, title: "Password Protected", note: "Add passwords to links for extra security." },
  { icon: <CalendarX />, title: "Expiring Links", note: "Set expiry dates so links stop working automatically." },
  { icon: <MapPin />, title: "Device & Location", note: "See where clicks come from and on which devices." },
  { icon: <QrCode />, title: "QR Codes", note: "Generate QR codes automatically for quick sharing." },
  { icon: <Link />, title: "Custom Slugs", note: "Brand your links with custom URLs." },
  { icon: <ThumbsDown />, title: "Rate Limits", note: "Protect redirects with rate-limiting options." },
];

const FeatureCard = ({ icon, title, note }) => (
  <motion.div
    variants={floatIn}
    className="glass floating p-6 transform-gpu hover:scale-[1.02]"
    whileHover={{ y: -6 }}
  >
    <div className="h-12 w-12 rounded-full bg-white/10 flex items-center justify-center mb-4 text-white">{icon}</div>
    <h4 className="text-white font-semibold">{title}</h4>
    <p className="mt-2 text-sm text-slate-200">{note}</p>
  </motion.div>
);

export default function Features() {
  return (
    <section className="h-screen snap-start flex items-center justify-center bg-slate-900">
      <div className="max-w-6xl w-full px-6">
        <motion.h2 
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-bold text-white text-center mb-12"
        >
          Everything you need. And then some.
        </motion.h2>
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {features.map((feature, i) => (
            <FeatureCard key={i} {...feature} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
