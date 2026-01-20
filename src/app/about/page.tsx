export default function About() {
  return (
    <section className="py-32">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-5xl font-bold mb-12 gradient-text">Boutique AI Lab</h1>
        <p className="text-xl leading-relaxed mb-12 opacity-90">
          Precision-focused team specializing in ML for FinTech/Retail/Healthcare. 
          Overlap with US/UK hours via Slack/Teams. GDPR/CCPA ready.
        </p>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-6">Tech Stack</h3>
            <ul className="space-y-2 text-lg">
              <li>• Python, TensorFlow, PyTorch</li>
              <li>• AWS SageMaker, MLOps</li>
              <li>• PowerBI, Data Pipelines</li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-6">Clutch Focus</h3>
            <p>$25-49/hr | 50% AI Dev | Verified Reviews Priority</p>
          </div>
        </div>
      </div>
    </section>
  );
}
