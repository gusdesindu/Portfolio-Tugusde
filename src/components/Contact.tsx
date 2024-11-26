import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Loader2 } from 'lucide-react';

export default function Contact() {
  const [showSuccess, setShowSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);

    try {
      const response = await fetch('https://formsubmit.co/ajax/ambaragusde72@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.get('name'),
          email: formData.get('email'),
          message: formData.get('message'),
          _subject: 'Pesan Baru dari Portfolio!',
          _template: 'table'
        })
      });

      const data = await response.json();

      if (data.success) {
        setShowSuccess(true);
        form.reset();
        setTimeout(() => {
          setShowSuccess(false);
        }, 5000);
      } else {
        throw new Error('Gagal mengirim pesan');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Maaf, terjadi kesalahan saat mengirim pesan. Silakan coba lagi.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">Hubungi Saya</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Tertarik untuk berkolaborasi? Silakan hubungi saya
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Informasi Kontak */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="flex items-start gap-4">
              <div className="p-3 bg-purple-100 rounded-lg">
                <Mail className="text-purple-600" size={24} />
              </div>
              <div>
                <h3 className="font-semibold mb-1">Email</h3>
                <p className="text-gray-600">ambaragusde72@gmail.com</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 bg-purple-100 rounded-lg">
                <Phone className="text-purple-600" size={24} />
              </div>
              <div>
                <h3 className="font-semibold mb-1">Phone</h3>
                <p className="text-gray-600">+62 895 037 05123</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 bg-purple-100 rounded-lg">
                <MapPin className="text-purple-600" size={24} />
              </div>
              <div>
                <h3 className="font-semibold mb-1">Location</h3>
                <p className="text-gray-600">Denpasar, BALI</p>
              </div>
            </div>
          </motion.div>

          {/* Form Kontak */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <form
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Nama
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  placeholder="Nama Anda"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  placeholder="email@anda.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Pesan
                </label>
                <textarea
                  name="message"
                  id="message"
                  required
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  placeholder="Tulis pesan Anda di sini"
                />
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className={`w-full px-6 py-3 bg-purple-600 text-white rounded-lg transition-all flex items-center justify-center gap-2
                  ${isLoading ? 'opacity-70 cursor-not-allowed' : 'hover:bg-purple-700'}`}
              >
                {isLoading ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    <span>Mengirim...</span>
                  </>
                ) : (
                  'Kirim Pesan'
                )}
              </button>
            </form>

            {/* Notifikasi Sukses dengan animasi yang lebih halus */}
            {showSuccess && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="absolute top-0 left-0 right-0 p-4 bg-green-100 text-green-700 rounded-lg shadow-md flex items-center justify-center gap-2"
              >
                <svg 
                  className="w-5 h-5 text-green-500" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M5 13l4 4L19 7" 
                  />
                </svg>
                Pesan berhasil dikirim! Terima kasih telah menghubungi saya.
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
