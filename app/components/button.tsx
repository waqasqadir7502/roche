export default function Button({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <a
      href="#contact"
      className={`inline-flex min-h-[52px] items-center justify-center border border-[#0b41cd] bg-[#0b41cd] px-8 py-4 text-center text-[16px] leading-5 tracking-[0.2px] text-white transition hover:bg-[#0836aa] ${className}`}
    >
      {children}
    </a>
  );
}