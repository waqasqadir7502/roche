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
  
  {/* TITLE */}
  <h2 className="mb-10 text-[32px] leading-[1.15] tracking-[-0.4px] sm:text-[38px] md:mb-12 lg:text-[45px] lg:leading-[58px] lg:tracking-[-0.8px]">
    Der klinische Unterschied im Vergleich
  </h2>

  {/* CONTENT GRID */}
  <div
    className="
      grid
      items-start
      gap-14

      md:grid-cols-2
      md:gap-12

      xl:grid-cols-[360px_437px_348px]
      xl:gap-[52px]
    "
  >
    
    {/* LEFT IMAGE */}
    <div
      className="
        flex
        justify-center

        md:col-span-2

        xl:col-span-1
        xl:block
      "
    >
      <img
        src="/assests/comparisonBlue.png"
        alt="Vergleich Illustration"
        className="
          w-[240px]
          max-w-full
          object-contain

          sm:w-[280px]

          lg:w-[320px]

          xl:w-[360px]
        "
      />
    </div>

    {/* SERUM COLUMN */}
    <div>
      <h3
        className="
          mb-7
          text-[24px]
          leading-[1.15]
          text-[#0b41cd]

          sm:text-[26px]

          xl:mb-[30px]
          xl:text-[30px]
        "
      >
        Mit Serum-NfL ergänzt
      </h3>

      <div className="flex flex-col gap-6">
        {serumBenefits.map((serum, index) => (
          <div key={index} className="flex items-start gap-4">
            
            <img
              src={serum.icon}
              alt=""
              className="
                mt-1
                size-[42px]
                shrink-0
                object-contain

                sm:size-[46px]

                xl:size-[50px]
              "
            />

            <div>
              <p
                className="
                  text-[17px]
                  leading-[1.2]
                  tracking-[-0.2px]

                  sm:text-[18px]

                  xl:text-[20px]
                  xl:tracking-[-0.31px]
                "
              >
                {serum.title}
              </p>

              <p
                className="
                  mt-1
                  text-[15px]
                  font-light
                  leading-[1.3]
                  tracking-[-0.1px]
                  text-[#544f4f]

                  sm:text-[16px]

                  xl:text-[20px]
                  xl:leading-[1.2]
                  xl:tracking-[-0.15px]
                "
              >
                {serum.body}
              </p>
            </div>
          </div>
        ))}
      </div>

      <Button className="mt-10 w-full sm:w-auto">
        Roche Diagnostics kontaktieren
      </Button>
    </div>

    {/* TRADITIONAL COLUMN */}
    <div>
      <h3
        className="
          mb-7
          text-[24px]
          leading-[1.15]
          text-[#544f4f]

          sm:text-[26px]

          xl:mb-[30px]
          xl:text-[30px]
        "
      >
        Traditionelles Monitoring
      </h3>

      <div className="flex flex-col gap-6">
        {traditionalMonitoring.map((trad) => (
          <div
            key={trad.text}
            className="
              flex
              items-start
              gap-4
              text-[#544f4f]
            "
          >
            
            <img
              src={trad.icon}
              alt=""
              className="
                mt-1
                size-[42px]
                shrink-0
                object-contain

                sm:size-[46px]

                xl:size-[50px]
              "
            />

            <p
              className="
                text-[17px]
                leading-[1.2]
                tracking-[-0.2px]

                sm:text-[18px]

                xl:text-[20px]
                xl:tracking-[-0.31px]
              "
            >
              {trad.text}
            </p>
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
