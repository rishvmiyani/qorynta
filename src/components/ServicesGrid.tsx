import { Card, CardContent } from './ui/Card';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const services = [
  {
    title: 'AI Development',
    desc: '40% focus. Production-grade ML with MLOps, TensorFlow/PyTorch. Scale your models.',
    percent: '40%',
  },
  {
    title: 'Data Analytics',
    desc: '30% focus. Actionable insights via PowerBI/Tableau dashboards. ROI-driven.',
    percent: '30%',
  },
  {
    title: 'Generative AI',
    desc: '20% focus. LLMs & custom agents for 2026 trends. GDPR compliant.',
    percent: '20%',
  },
];

export default function ServicesGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {services.map((service, i) => (
        <motion.div
          key={service.title}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.1 }}
          whileHover={{ y: -10 }}
        >
          <Card className="h-full group hover:shadow-orange-500/25 transition-all duration-300 overflow-hidden">
            <CardContent className="p-8">
              <div className="text-5xl mb-6 gradient-text">{service.percent}</div>
              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              <p className="opacity-80 mb-8">{service.desc}</p>
              <Link href="/services" className="flex items-center gap-2 text-orange-400 hover:text-orange-300 group-hover:translate-x-2 transition-all">
                Learn More <ArrowRight size={20} />
              </Link>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  );
}
