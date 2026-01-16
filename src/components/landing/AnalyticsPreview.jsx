import { motion } from "framer-motion";
import { fadeUp } from "@/components/animations/motionVariants";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

const lineChartData = [
  { name: 'Jan', clicks: 400 },
  { name: 'Feb', clicks: 300 },
  { name: 'Mar', clicks: 600 },
  { name: 'Apr', clicks: 800 },
  { name: 'May', clicks: 500 },
  { name: 'Jun', clicks: 700 },
];

const pieChartData = [
  { name: 'Mobile', value: 67 },
  { name: 'Desktop', value: 33 },
];

const COLORS = ['#60A5FA', '#3B82F6'];

export default function AnalyticsPreview() {
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
          Powerful, simple analytics.
        </motion.h2>
        <motion.div 
          className="glass rounded-2xl p-6 floating grid grid-cols-1 md:grid-cols-3 gap-6"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="md:col-span-2">
            <h3 className="text-white font-bold mb-4">Clicks Over Time</h3>
            <ResponsiveContainer width="100%" height={200}>
              <LineChart data={lineChartData}>
                <Line type="monotone" dataKey="clicks" stroke="#60A5FA" strokeWidth={2} />
                <XAxis dataKey="name" stroke="#94A3B8" fontSize={12} tickLine={false} axisLine={false} />
                <YAxis stroke="#94A3B8" fontSize={12} tickLine={false} axisLine={false} />
                <Tooltip contentStyle={{ backgroundColor: '#1E293B', border: 'none', borderRadius: '0.5rem' }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
          <div>
            <h3 className="text-white font-bold mb-4">Devices</h3>
            <ResponsiveContainer width="100%" height={200}>
              <PieChart>
                <Pie data={pieChartData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={80} fill="#8884d8">
                  {pieChartData.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)}
                </Pie>
                <Tooltip contentStyle={{ backgroundColor: '#1E293B', border: 'none', borderRadius: '0.5rem' }} />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
