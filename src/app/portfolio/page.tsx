import CaseStudyCard from '@/components/CaseStudyCard';

const caseStudies = [
  {
    title: 'Predictive Inventory Optimization',
    challenge: 'UK/US retailers losing £/$50K+ yearly on over/under-stocking & stockouts.',
    solution: 'XGBoost time-series forecasting + interactive PowerBI dashboard for 3-month demand prediction.',
    result: '15% waste reduction | 25% availability boost | $120K annual savings',
    image: '/images/inventory.jpg',  // Your ready image
    githubLink: 'https://github.com/rishvmiyani/fraud-detection-engine',
    clutchKeywords: ['MLOps', 'Time Series', 'Retail AI', 'PowerBI']
  },
  {
    title: 'Real-time Fraud Detection System',
    challenge: 'FinTech startups facing 8% chargeback rates eating into revenue.',
    solution: 'Deep Learning Autoencoder anomaly detection processing 10K+ transactions/sec <200ms latency.',
    result: '99.2% fraud detection | 50% false positive reduction | $250K saved',
    image: '/images/fraud.jpg',
    githubLink: 'https://github.com/rishvmiyani/railway-quantum-optimizer',
    clutchKeywords: ['Deep Learning', 'FinTech', 'Real-time AI', 'Anomaly Detection']
  },
  {
    title: 'Automated Diagnostic Assistance',
    challenge: 'NHS/private clinics with 2-week MRI/X-ray analysis backlogs.',
    solution: 'CNN model pre-screening abnormalities + doctor dashboard integration.',
    result: '40% faster reviews | 97% precision | 3K scans/month processed',
    image: '/images/medical.jpg',
    githubLink: 'https://github.com/rishvmiyani',  // Update later
    clutchKeywords: ['Computer Vision', 'Healthcare AI', 'CNN', 'Medical Imaging']
  }
];

export default function Portfolio() {
  return (
    <section className="py-32 bg-slate-900/20">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-32">
          <h1 className="text-6xl md:text-7xl font-bold mb-8 gradient-text">
            Clutch Case Studies
          </h1>
          <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto">
            Production-grade ML delivering measurable ROI for Western clients.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 md:gap-16">
          {caseStudies.map((cs, i) => (
            <CaseStudyCard key={i} {...cs} />
          ))}
        </div>
        
        <div className="text-center mt-32">
          <a href="https://clutch.co/profile/qorynta" target="_blank" className="inline-flex items-center gap-4 bg-gradient-to-r from-orange-500 to-orange-600 text-xl px-12 py-6 rounded-2xl font-bold hover:from-orange-600 hover:to-orange-700 transition-all shadow-2xl hover:shadow-orange-500/50">
            View Clutch Profile
          </a>
        </div>
      </div>
    </section>
  );
}
