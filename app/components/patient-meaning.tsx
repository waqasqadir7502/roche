import Button from "./button";

export default function PatientMeaning() {
  return (
    <section className="bg-[linear-gradient(135deg,#fff7f5_28.8%,#ffe8de_99.3%)] py-[85px] lg:py-[90px]">
      <div className="mx-auto grid max-w-[1440px] items-center gap-14 px-6 sm:px-10 lg:grid-cols-[1fr_520px] lg:px-20">
        <div>
          <h2 className="text-[34px] leading-[1.15] tracking-[-0.45px] text-[#0b41cd] sm:text-[40px] lg:text-[45px] lg:leading-[58px]">Was das für Ihre Patient:innen bedeutet</h2>

          <div className="mt-12 space-y-8 text-[18px] font-light leading-[1.25] lg:space-y-10 lg:text-[20px]">
            <p className="flex gap-3"><img
                  src="/assests/pm1.svg"
                  alt=""
                  className="size-[40px]"
                /> Früher wissen, was passiert – nicht erst beim nächsten MRT</p>
            <p className="flex gap-3"><img
                  src="/assests/pm2.svg"
                  alt=""
                  className="size-[40px] "
                /> Minimalinvasiv – schnelle Ergebnisse ohne große Hürden</p>
            <p className="flex gap-3"><img
                  src="/assests/pm3.svg"
                  alt=""
                  className="size-[40px] "
                /> Leicht verfügbar – geringer Aufwand für Patient:innen und Praxis</p>
          </div>

        </div>

        <img src="/assests/patientIllustration.png" alt="Patient:innen Illustration" className="mx-auto w-full max-w-[576px] object-contain" />
      </div>
          <div className="mt-5 flex flex-col items-center justify-center">
          <p className=" max-w-[843px] text-center text-[24px] font-light leading-[1.25] lg:mt-20 lg:text-[18px]">Ihre Patient:innen verdienen mehr Gewissheit. Serum-NfL kann dazu beitragen, diese früher zu erhalten.</p>
            <Button className="mt-10">Jetzt Kontakt aufnehmen</Button>
            </div>
    </section>
  );
}
