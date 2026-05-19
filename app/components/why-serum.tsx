import SectionHeader from "./section-header";

const benefitCards = [
  {
    image: "/assests/earlyIllustration.png",
    title: 'Früher erkennen',
    body: 'Erhöhte NfL-Werte korrelieren mit Gd+-Läsionen – oft schon Wochen bevor diese im MRT sichtbar werden.²',
  },
  {
    image: "/assests/simpleIllustration.png",
    title: 'Einfacher durchführen',
    body: 'Venöse Blutabnahme für einen einfachen und engmaschigen Zugang und schnelle Ergebnisse für Patient:innen.¹',
  },
  {
    image: "/assests/brainIllustration.png",
    title: 'Objektiv messen',
    body: 'Quantitative, standardisierte und reproduzierbare Ergebnisse ermöglichen die klinikübergreifende und longitudinale Vergleichbarkeit.³',
  },
];

export default function WhySerum() {
  return (
    <section className="mx-auto max-w-[1440px] px-6 py-[80px] sm:px-10 lg:px-20 lg:py-[126px]">
      <SectionHeader title="Warum Serum-NfL?" description="Ein quantitativer Biomarker, 
      der neuroaxonale Schädigung bei schubförmig-remittierender MS erfasst – IVDR zertifiziert." />

      <div className="mt-14 grid gap-10 md:grid-cols-3 lg:mt-[70px] lg:gap-[29px]">
        {benefitCards.map((card) => (
          <article key={card.title} className="flex flex-col">
            <div className="mb-7 flex h-[220px] items-center justify-center lg:h-[265px]">
              <img src={card.image} alt="images" className="w-full max-h-full max-w-full object-contain" />
            </div>
            <h3 className="text-[27px] leading-[28px] text-[#0b41cd] lg:text-[30px]">{card.title}</h3>
            <p className="mt-4 text-[17px] font-light leading-[1.25] lg:text-[20px]">{card.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}