import SectionHeader from "./section-header";

const clinicalRows = [
  {
    icon: "/assests/cd1.svg",
    serum: "Einfacherer Zugang zur Diagnostik",
    method: "MRT",
    strength: "Räumliche Lokalisation",
    limitation:
      "Läsionsstadium retrospektiv, Intervalle 6–12 Monate, logistischer Aufwand, Kontrastmittel",
  },
  {
    icon: "/assests/cd2.svg",
    serum:
      "Quantitativ, objektivierbar, sensitiv für neuroinflammative Geschehen",
    method: "EDSS",
    strength: "Longitudinal vergleichbar, etabliert",
    limitation:
      "Subjektive Komponente, Floor-Effekt, geringe Frühsensitivität",
  },
  {
    icon: "/assests/cd3.svg",
    serum: "Selbe Aussagekraft, minimal invasiv",
    method: "Liquor-NfL",
    strength: "Hohe Konzentration, robuster Marker",
    limitation:
      "Lumbalpunktion erforderlich, für Monitoring nicht praktikabel",
  },
  {
    icon: "/assests/cd4.svg",
    serum: "Zeigt Aktivität auch ohne manifeste Symptome",
    method: "Schubdokumentation",
    strength: "Direkte klinische Relevanz",
    limitation: "Subklinische Aktivität wird nicht erfasst",
  },
];

export default function ClinicalClassification() {
  return (
    <section
      id="clinical"
      className="mx-auto max-w-[1440px] px-6 pb-[90px] sm:px-10 lg:px-20 lg:pb-[105px]"
      >
      <SectionHeader
        title="Klinische Einordnung"
        description="Serum-NfL ermöglicht eine frühere und präzisere Erfassung von MS-Aktivität 
        – messbar im Blut, bevor das MRT es zeigt. Erhöhte NfL-Werte korrelieren mit Gd+-Läsionen 
        – oft schon Wochen bevor diese im MRT sichtbar werden.²"
        eyebrow="Der Vorteil des Serummarkers"
      />
      

      {/* ================= MOBILE VERSION ================= */}
      <div className=" mt-10 space-y-4 lg:hidden">
        {clinicalRows.map((row) => (
          <div
            key={row.method}
            className=" p-[20px] border-solid border-2 border-[#1482FA] bg-white "
          >
            <p className="text-[#0b41cd] text-[18px]">Serum-NfL ergänzt</p>
            {/* TOP BLUE BLOCK */}
            <div className="flex items-center gap-3 bg-[#bde3ff] px-3 py-4">
              <img
                src={row.icon}
                alt=""
                className="size-[38px] shrink-0 object-contain"
              />

              <p className="text-[16px] leading-[1.2] tracking-[-0.1px] text-[#2a2a2a]">
                {row.serum}
              </p>
            </div>

            {/* CONTENT */}
            <div className="space-y-3  py-4">
              
              {/* METHOD */}
              <div>
                <p className="text-[18px] font-medium leading-none text-[#1482fa]">
                  Etablierte Methode
                </p>

                <p className="mt-1 text-[16px] leading-[1.2] text-[#2a2a2a]">
                  {row.method}
                </p>
              </div>

              {/* STRENGTH */}
              <div>
                <p className="text-[18px] font-medium leading-none text-[#1482fa]">
                  Stärke
                </p>

                <p className="mt-1 text-[16px] leading-[1.2] text-[#2a2a2a]">
                  {row.strength}
                </p>
              </div>

              {/* LIMITATION */}
              <div>
                <p className="text-[18px] font-medium leading-none text-[#1482fa]">
                  Limitation
                </p>

                <p className="mt-1 text-[16px] leading-[1.2] text-[#2a2a2a]">
                  {row.limitation}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ================= DESKTOP VERSION ================= */}
      <div className="mt-14 hidden overflow-x-auto pb-2 lg:block">
        <div className="min-w-[1080px]">
          
          {/* TABLE HEAD */}
          <div className="grid grid-cols-[452px_180px_226px_1fr] px-4 pb-5 text-[18px] font-medium leading-[1.2] text-[#1482fa]">
            <p className="text-[#0b41cd]">Serum-NfL ergänzt</p>
            <p>Etablierte Methode</p>
            <p>Stärke</p>
            <p>Limitation</p>
          </div>

          {/* TABLE ROWS */}
          <div className="space-y-4">
            {clinicalRows.map((row) => (
              <div
                key={row.method}
                className="grid min-h-[91px] grid-cols-[452px_180px_226px_1fr] bg-[rgba(0,0,0,0.05)] text-[16px] leading-[1.2] tracking-[-0.15px] text-[#2a2a2a]"
              >
                <div className="relative flex items-center gap-4 bg-[#bde3ff] px-4 py-5">
                  <img
                    src={row.icon}
                    alt=""
                    className="size-[50px] object-contain"
                  />

                  <p>{row.serum}</p>

                  <img
                    src="/assests/cdarrow.png"
                    alt=""
                    className="absolute right-[-10px] size-[25px]"
                  />
                </div>

                <p className="flex items-center px-8 font-medium">
                  {row.method}
                </p>

                <p className="flex items-center px-8">
                  {row.strength}
                </p>

                <p className="flex items-center px-8">
                  {row.limitation}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* BOTTOM CTA */}
      <div className="mt-10 border-y-2 border-[#0b41cd] py-7 text-center">
        
        <h3 className="flex items-center justify-center gap-3 text-left text-[20px] leading-[1.2] tracking-[-0.2px] text-[#0b41cd] sm:text-[24px] lg:text-[30px]">
          <img
            src="/assests/cdtick.png"
            alt=""
            className=" hidden size-[26px] shrink-0 lg:size-[30px] lg:block"
          />

          <span>
            Serum-NfL ist keine Alternative – es ist eine Ergänzung
          </span>
        </h3>

        <p className="mx-auto mt-4 max-w-[756px] text-left text-[14px] font-light leading-[1.35] text-[#2d2d2d] sm:text-[16px] lg:text-center lg:text-[20px] lg:leading-[1.25]">
          Jede etablierte Methode hat ihre Stärken. Serum-NfL erweitert Ihr
          diagnostisches Arsenal um einen quantitativen, flexibel einsetzbaren
          Biomarker für engmaschigeres MS-Monitoring.
        </p>
      </div>
    </section>
  );
}