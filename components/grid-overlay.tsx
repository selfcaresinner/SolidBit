export function GridOverlay() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.05]" 
         style={{backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`, backgroundSize: '48px 48px'}}>
    </div>
  );
}
