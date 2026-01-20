import ContactForm from '@/components/ContactForm';

export default function Contact() {
  return (
    <section className="min-h-screen flex items-center justify-center py-20 px-4">
      <div className="max-w-2xl w-full">
        <h1 className="text-5xl font-bold text-center mb-12 gradient-text">Ready to Scale?</h1>
        <p className="text-xl text-center opacity-90 mb-16 max-w-lg mx-auto">
          2-hour response (EST/GMT overlap). Min project $5K. Clutch verified.
        </p>
        <ContactForm />
      </div>
    </section>
  );
}
