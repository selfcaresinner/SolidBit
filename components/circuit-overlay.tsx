export function CircuitOverlay() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.05]" 
         style={{background: `radial-gradient(circle at 50% 50%, #00E5FF 0%, transparent 1%), repeating-linear-gradient(45deg, transparent, transparent 20px, #1F1F21 21px)`}}>
    </div>
  );
}
