
export default function Footer() {
  return (
    <footer className="border-t-2 border-[#0b41cd] bg-[linear-gradient(136deg,#fff_35%,#fff7f5_58%,#bde3ff_100%)] px-6 py-16 sm:px-10 lg:px-20">
      <div className="mx-auto max-w-[1280px]">
        <div className="grid gap-12 border-b border-[#c2bab5] pb-16 lg:grid-cols-[294px_1fr] lg:gap-[130px]">
          <div className="space-y-8 text-[20px] leading-[30px] text-[#544f4f]">
            {['Kontakt', 'Weltweit', 'Medien'].map((item) => (
              <a key={item} href="#" className="flex justify-between border-b border-[#544f4f] pb-4">
                <span>{item}</span>
                <span>›</span>
              </a>
            ))}
          </div>

          <div>
            <p className="mb-4 text-[16px] font-light leading-[22px] text-[#544f4f]">Hilfreiche Links</p>
            <div className="grid gap-4 text-[20px] leading-[30px] text-[#544f4f]">
              {['Unsere Medikamente', 'Diagnostische Lösungen', 'Karriere', 'Geschäftsethik', 'Barrierefreiheitserklärung'].map((item) => (
                <a key={item} href="#">{item}</a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-wrap items-center justify-between gap-8 text-[16px] font-light leading-[22px] text-[#544f4f]">
          <div className="flex gap-8">in f X ◎ ▶</div>
          <div className="flex flex-wrap gap-8">
            <span>Datenschutzerklärung</span>
            <span>Rechtliche Hinweise</span>
            <span>Pharmakovigilanz</span>
            <span>Impressum</span>
            <span>Cookies</span>
          </div>
        </div>

        <p className="mt-14 text-[16px] font-light leading-[22px] text-[#544f4f]">© 2026 F. Hoffmann-La Roche Ltd 7/4/2026</p>
      </div>
    </footer>
  );
}