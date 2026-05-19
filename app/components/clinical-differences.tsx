import Button from "./button";

const serumBenefits = [
  {
    icon: "/assests/monitoring.svg",
    title: "Flexibles Monitoring",
    body: "Engmaschigere Kontrolle bei Bedarf möglich",
  },
  {
    icon: "/assests/activate.svg",
    title:(
    <>
      Früherkennung von Aktivität
      <sup className="text-[12px]">1,2,4</sup>
    </>
  ),
    body: "Werte steigen oft vor MRT-Veränderungen",
  },
  {
    icon: "/assests/quantative.svg",
    title: "Quantitativ & objektivierbar",
    body: "Messbare Werte für Verlaufsbeobachtung",
  },
];
const traditionalMonitoring = [
  {icon: "/assests/month.svg", text:"MRT alle 6-12 Monate"},
  {icon: "/assests/retrospective.svg", text:"Retrospektive Beurteilung"},
  {icon: "/assests/score.svg", text:"EDSS-Score"},
];

export default function ClinicalDifference() {
  return (
    <section className="mx-auto max-w-[1440px] px-6 pb-[85px] sm:px-10 lg:px-20 lg:pb-[110px]">
      <h2 className="mb-12 text-[34px] leading-[1.15] sm:text-[40px] lg:mb-[88px] lg:text-[45px] lg:leading-[58px]">
        Der klinische Unterschied im Vergleich
      </h2>

      <div className="grid items-start gap-12 lg:grid-cols-[360px_437px_348px] lg:gap-[52px]">
        <div className="flex justify-center lg:block">
          <img
            src="/assests/comparisonBlue.png"
            alt="Vergleich Illustration"
            className="w-[300px] max-w-full lg:w-[360px]"
          />
        </div>

        <div>
          <h3 className="mb-[30px] text-[28px] leading-7 text-[#0b41cd] lg:text-[30px]">
            Mit Serum-NfL ergänzt
          </h3>
          <div className="flex flex-col gap-5">
            {serumBenefits.map((serum, index) => (
              <div key={index} className="flex gap-4">
                <img
                  src={serum.icon}
                  alt=""
                  className="size-[50px] object-contain"
                />
                <div>
                  <p className="text-[19px] leading-[1.2] tracking-[-0.31px] lg:text-[20px]">
                    {serum.title}
                  </p>
                  <p className="mt-1 text-[17px] font-light leading-[1.2] tracking-[-0.15px] text-[#544f4f] lg:text-[20px]">
                    {serum.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <Button className="mt-10">Roche Diagnostics kontaktieren</Button>
        </div>

        <div>
          <h3 className="mb-[30px] text-[28px] leading-7 text-[#544f4f] lg:text-[30px]">
            Traditionelles Monitoring
          </h3>
          <div className="flex flex-col gap-5">
            {traditionalMonitoring.map((trad) => (
              <div
                key={trad.text}
                className="flex items-center gap-4 text-[19px] leading-[1.2] tracking-[-0.31px] text-[#544f4f] lg:text-[20px]"
              >
              <img
                  src={trad.icon}
                  alt=""
                  className="size-[50px] object-contain"
                />
                <p>{trad.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function Icon({ children }: { children: React.ReactNode }) {
  return (
    <span className="flex size-[50px] shrink-0 items-center justify-center text-[26px] font-medium text-[#0b41cd]">
      {children}
    </span>
  );
}
