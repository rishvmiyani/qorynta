import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ExternalLink } from 'lucide-react';

interface CaseStudyProps {
  title: string;
  challenge: string;
  solution: string;
  result: string;
  image: string;
  githubLink: string;
  clutchKeywords?: string[];
}

export default function CaseStudyCard({ 
  title, challenge, solution, result, image, githubLink, clutchKeywords 
}: CaseStudyProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -10, scale: 1.02 }}
      className="group cursor-pointer"
    >
      <div className="relative h-80 lg:h-96 mb-8 rounded-2xl overflow-hidden shadow-2xl shadow-orange-500/10 hover:shadow-orange-500/25 transition-all duration-500">
        <Image 
          src={image} 
          alt={title}
          fill 
          className="object-cover group-hover:scale-110 transition-transform duration-700"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300" />
        <div className="absolute bottom-6 left-6 right-6">
          <Link href={githubLink} target="_blank" className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-6 py-3 rounded-xl hover:bg-white/30 transition-all group-hover:translate-x-2">
            View Code <ExternalLink size={20} />
          </Link>
        </div>
      </div>
      
      <div className="bg-white/5 backdrop-blur-xl p-8 rounded-2xl border border-orange-500/30 group-hover:border-orange-500/50 transition-all">
        <h3 className="text-3xl font-bold mb-6 gradient-text">{title}</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div>
            <h4 className="font-semibold text-orange-400 mb-3">Challenge</h4>
            <p className="opacity-90">{challenge}</p>
          </div>
          <div>
            <h4 className="font-semibold text-orange-400 mb-3">Solution</h4>
            <p className="opacity-90">{solution}</p>
          </div>
        </div>
        
        <div className="bg-gradient-to-r from-orange-500/20 to-orange-600/20 p-6 rounded-xl border-l-4 border-orange-500 mb-8">
          <h4 className="font-bold text-xl mb-2">Result</h4>
          <p className="text-2xl font-bold gradient-text">{result}</p>
        </div>
        
        {clutchKeywords && (
          <div className="flex flex-wrap gap-2">
            {clutchKeywords.map((keyword) => (
              <span key={keyword} className="px-4 py-2 bg-white/10 rounded-full text-sm border border-white/20">
                {keyword}
              </span>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
}
