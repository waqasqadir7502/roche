import Button from "./button";

const interests = [
  'Elecsys NfL Implementation',
  'Workflow-Beratung',
  'Schulung',
  'Portfolio-Übersicht',
  'Fachmaterialien',
];


export default function Contact() {
  return (
    <section id="contact" className="mx-auto grid max-w-[1440px] gap-14 px-6 py-[90px] sm:px-10 lg:grid-cols-[480px_1fr] lg:gap-[65px] lg:px-20 lg:py-[110px]">
      <div className="">
        <h2 className="text-[32px] leading-[1.15] tracking-[-0.45px] sm:text-[40px] lg:text-[40px] lg:leading-[58px]">Jetzt Kontakt aufnehmen</h2> 
        <img src="/assests/contactDoctor.png" alt="Kontakt Illustration" className="mx-auto mt-14 max-w-[383px] object-contain lg:mt-[100px]" />
      </div>

      <form  className="flex flex-col">
         <p className="mb-[100px] max-w-[546px] text-[18px] font-light leading-[1.25] lg:text-[20px] ">Wir unterstützen Sie bei der Integration von Serum-NfL in Ihren klinischen Workflow.</p>
        <div className="grid gap-6 sm:grid-cols-2">
          <Input label="Anrede" />
          <Input label="Akad. Titel" />
          <Input label="Vorname *" />
          <Input label="Nachname *" />
        </div>

        <div className="mt-6 space-y-6">
          <Input label="Institution / Klinik *" />
          <Input label="E-Mail *" type="email" />
          <Input label="Telefon" type="tel" />
        </div>

        <fieldset className="mt-6">
          <legend className="mb-4 text-[16px] font-light leading-[1.2]">Ich interessiere mich für</legend>
          <div className="space-y-2">
            {interests.map((item) => (
              <label key={item} className="flex items-center gap-4 text-[16px] font-light leading-[1.2]">
                <input type="checkbox" className="size-[14px] accent-[#0b41cd]" />
                {item}
              </label>
            ))}
          </div>
        </fieldset>

        <label className="mt-6 block text-[16px] font-light leading-[1.2]" htmlFor="message">Nachricht</label>
        <textarea id="message" className="mt-2 h-[99px] w-full resize-none border border-[#cccbcb] px-4 py-3 text-[16px] font-light outline-none focus:ring-2 focus:ring-[#0b41cd]" placeholder="Haben Sie spezifische Fragen oder Anliegen?" />
        <p className="mt-4 text-[14px] font-light leading-[1.2]">* Pflichtfelder</p>
        <Button className="mt-8 w-full sm:w-auto">Jetzt Kontakt aufnehmen</Button>
        <p className="mt-6 max-w-[626px] text-[14px] font-light leading-[1.2]">
          Mit dem Absenden bestätige ich, dass ich die <u>Datenschutzerklärung</u> gelesen habe und der Verarbeitung meiner Daten zur Kontaktaufnahme zustimme. Die Einwilligung kann jederzeit widerrufen werden.
        </p>
      </form>
    </section>
  );
}

export function Input({ label, type = 'text' }: { label: string; type?: string }) {
  return (
    <label className="block">
      <span className="sr-only">{label}</span>
      <input type={type} placeholder={label} className="h-[35px] w-full bg-[#e2e2e2] px-4 py-2 text-[16px] font-light outline-none placeholder:text-black focus:ring-2 focus:ring-[#0b41cd]" />
    </label>
  );
}