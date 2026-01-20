import ServicesGrid from '@/components/ServicesGrid';
import { Card, CardContent } from '@/components/ui/Card';
import { motion } from 'framer-motion';

const detailedServices = [
  {
    title: 'AI Development (40%)',
    icon: '🤖',
    features: ['Production ML Models', 'MLOps Pipelines', 'TensorFlow/PyTorch', 'Scalable Deployment'],
    clutchPercent: '40%'
  },
  {
    title: 'BI & Data Analytics (30%)',
    icon: '📊',
    features: ['PowerBI/Tableau Dashboards', 'Predictive Analytics', 'Data Pipelines', 'ROI Insights'],
    clutchPercent: '30%'
  },
  {
    title: 'Generative AI (20%)',
    icon: '✨',
    features: ['LLM Integration', 'Custom AI Agents', 'RAG Systems', 'GDPR Compliant'],
    clutchPercent: '20%'
  },
  {
    title: 'Custom Software (10%)',
    icon: '⚙️',
    features: ['Model Wrappers', 'APIs', 'Cloud Architecture', 'React/Next.js'],
    clutchPercent: '10%'
  }
];

export default function Services() {
  return (
    <div className="py-32 bg-gradient-to-b from-slate-800 to-slate-900/50">
      <div className="container mx-auto px-4">
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-6xl font-bold text-center mb-20 gradient-text"
        >
          Clutch Service Breakdown
        </motion.h1>
        
        <ServicesGrid />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-32">
          {detailedServices.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, x: i % 2 ? 50 : -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="group"
            >
              <Card className="h-full p-10 hover:shadow-orange-500/30 transition-all">
                <CardContent className="pt-0">
                  <div className="text-6xl mb-8">{service.icon}</div>
                  <div className="text-3xl font-bold mb-6 gradient-text">{service.title}</div>
                  <div className="text-xl opacity-80 mb-8">{service.clutchPercent}</div>
                  <ul className="space-y-3 mb-12">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-orange-500 rounded-full" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <p className="opacity-75 text-lg leading-relaxed">
                    US/UK clients trust our Clutch ranking. $25-49/hr. Min $5K projects.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
