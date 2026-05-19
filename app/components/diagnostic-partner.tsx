import Button from "./button";

export default function DiagnosticsPartner() {
  return (
    <section
      id="portfolio"
      className="bg-[linear-gradient(127deg,#fff7f5_28.8%,#ffe8de_99.3%)] py-[92px]"
    >
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-20">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_520px]">
          <div>
            <h2 className="text-[34px] leading-[1.15] text-[#0b41cd] sm:text-[40px] lg:text-[45px] lg:leading-[58px]">
              Roche als Diagnostics-Partner
            </h2>
            <p className="mt-8 max-w-[651px] whitespace-pre-wrap text-[18px] font-light leading-[1.25] lg:text-[20px]">
              Roche versteht sich als Partner für die Weiterentwicklung der
              MS-Diagnostik –
              von der Forschung bis zur klinischen Routine.
            </p>
          </div>

          <div className="relative mx-auto h-[310px] w-full max-w-[520px] lg:h-[360px]">
            <img
              src="/assests/diagnosticsBrain.png"
              alt="Diagnostics brain"
              className="absolute inset-0 m-auto max-h-full max-w-full object-contain"
            />
          </div>
        </div>

        <div className="mt-12 grid gap-[29px] lg:grid-cols-2">
          <InfoBox
            title="Unsere Expertise"
            items={[
              "Langjährige Erfahrung in der Labordiagnostik",
              <>Automatisierte Lösungen auf <strong className="font-semibold">cobas</strong> e Modulen – Integration in bestehende Laborworkflows und IT</>,
              "Wachsendes Neurologieportfolio: von Liquor-Markern bis zu blutbasierten Biomarkern wie NfL",
            ]}
          />
          <InfoBox
            title="Was wir bieten"
            items={[
              "Beratung zur Präanalytik und Workflow-Optimierung",
              "Schulungen für Laborpersonal",
              "Wissenschaftlicher Support bei Fragen zu NfL und anderen Neuro-Parametern",
            ]}
          />
        </div>

        <div className="mt-12 text-center">
          <Button>Jetzt Kontakt aufnehmen</Button>
        </div>
      </div>
    </section>
  );
}

export function InfoBox({ title, items }: { title: string; items: React.ReactNode[]}) {
  return (
    <div className="min-h-[313px] border border-[#1482fa] px-6 py-10 sm:px-10 lg:px-[72px]">
      <h3 className="mb-6 text-center text-[18px] font-medium leading-[1.2] text-[#0b41cd]">
        {title}
      </h3>
      <ul className="space-y-4 text-[18px] font-light leading-[1.25] lg:text-[20px]">
        {items.map((item,index) => (
          <li key={index} className="flex gap-5 lg:gap-[30px]">
            <span className="mt-2 size-[11px] shrink-0 rounded-full bg-[#0b41cd]" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
