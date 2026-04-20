export function Blueprint() {
  return (
    <section className="py-24 px-6 bg-[#050505]">
      <div className="max-w-4xl mx-auto border border-[#1F1F21] p-12 bg-black">
        <h2 className="font-sans text-3xl mb-12 text-white">Visual Blueprint</h2>
        <svg viewBox="0 0 400 200" className="w-full h-auto text-white">
          <rect x="50" y="20" width="100" height="60" fill="none" stroke="currentColor" strokeWidth="1" />
          <line x1="150" y1="50" x2="250" y2="50" stroke="currentColor" strokeWidth="1" />
          <rect x="250" y="20" width="100" height="60" fill="none" stroke="currentColor" strokeWidth="1" />
          <path d="M100 80 L100 120 L300 120 L300 80" fill="none" stroke="currentColor" strokeWidth="1" />
        </svg>
      </div>
    </section>
  );
}
