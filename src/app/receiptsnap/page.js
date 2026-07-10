{/* Video Section */}
<section className="py-20 px-4 bg-white">
  <div className="max-w-4xl mx-auto">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-center mb-10"
    >
      <h2 className="text-3xl font-bold text-[#0a1628] mb-3">See It In Action</h2>
      <p className="text-gray-600">30 seconds from photo to organized data.</p>
    </motion.div>
    
    <div className="bg-[#0a1628] rounded-2xl overflow-hidden shadow-2xl aspect-video relative">
      <iframe 
        className="absolute inset-0 w-full h-full"
        src="https://www.youtube.com/embed/9H25AjnPQdA" 
        title="ReceiptSnap Demo — AI Receipt Tracker for South African Businesses"
        frameBorder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowFullScreen
      />
    </div>
    
    <div className="mt-6 text-center">
      <a 
        href="https://youtu.be/9H25AjnPQdA" 
        target="_blank" 
        rel="noopener noreferrer"
        className="text-sm text-gray-500 hover:text-[#D4AF37] transition-colors inline-flex items-center gap-2"
      >
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/></svg>
        Watch on YouTube
      </a>
    </div>
  </div>
</section>