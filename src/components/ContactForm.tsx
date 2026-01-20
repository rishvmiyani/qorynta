'use client';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from './ui/Button';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';

const schema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  project: z.string().min(10),
});

type FormData = z.infer<typeof schema>;

export default function ContactForm() {
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    const res = await fetch('/api/contact', { // Vercel auto-handles
      method: 'POST',
      body: JSON.stringify(data),
    });
    if (res.ok) alert('Thanks! We\'ll reply in 2 hours (EST/GMT overlap).');
  };

  return (
    <motion.form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto space-y-6">
      <input {...register('name')} placeholder="Name" className="w-full p-4 rounded-xl bg-white/10 border border-orange-500/30 focus:border-orange-500" />
      {errors.name && <p className="text-red-400 text-sm">Name required</p>}
      <input {...register('email')} placeholder="Email" type="email" className="w-full p-4 rounded-xl bg-white/10 border border-orange-500/30 focus:border-orange-500" />
      {errors.email && <p className="text-red-400 text-sm">Valid email required</p>}
      <textarea {...register('project')} placeholder="Project details ($5K+ min)" rows={5} className="w-full p-4 rounded-xl bg-white/10 border border-orange-500/30 focus:border-orange-500" />
      {errors.project && <p className="text-red-400 text-sm">Details required</p>}
      <Button type="submit" disabled={isSubmitting} className="w-full px-6 py-3">
        {isSubmitting ? 'Sending...' : <>Send Inquiry <Send size={20} className="ml-2" /></>}
      </Button>
    </motion.form>
  );
}
