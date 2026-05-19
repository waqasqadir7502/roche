import Button from "./button";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[linear-gradient(133deg,#fff7f5_28.8%,#ffe8de_99.3%)]">
      <div className="mx-auto grid max-w-[1440px] grid-cols-1 lg:grid-cols-[596px_1fr]">
        <div className="order-2  relative h-[360px] overflow-hidden sm:h-[520px] lg:h-[773px]">
          {/* MOBILE IMAGE */}
          <img
            src="/assests/heroPhoto.png"
            alt="Ärztin im Gespräch"
            className="h-full w-full object-cover object-left lg:hidden"
          />

          {/* DESKTOP IMAGE */}
          <img
            src="/assests/heroPhoto2.png"
            alt="Ärztin im Gespräch"
            className="hidden h-full w-full object-cover object-[48%_50%] lg:block"
          />
        </div>

        <div className=" order-1  relative flex min-h-[560px] items-center px-6 py-14 sm:px-10 lg:min-h-[773px] lg:px-[30px] lg:order-2">
          <div className="relative z-10 max-w-[625px]">
            <p className="text-[25px] font-light leading-[1.15] sm:text-[34px] lg:text-[40px]">
              Neuer Weg im Schubmonitoring
            </p>
            <h1 className="mt-1 text-[42px] font-normal leading-[1.07] sm:text-[56px] lg:text-[70px] lg:leading-[1.2]">
              NfL im Blut:
              <br />
              Früher erkennen.
              <br />
              Früher handeln.
            </h1>
            <p className="mt-6 max-w-[621px] text-[17px] font-light leading-[1.25] sm:text-[19px] lg:text-[20px]">
              Serum-NfL ergänzt MRT und EDSS um einen quantitativen,
              blutbasierten Parameter zur Erfassung neuroaxonaler Schädigung
              durch Neuroinflammation bei schubhafter Multipler Sklerose – mit
              prognostischer Relevanz für Schubaktivität und
              Therapieansprechen.¹
            </p>
            <Button className="mt-8">Roche Diagnostics kontaktieren</Button>
          </div>

          <img
            src="/assests/heroRight.png"
            alt=""
            className="pointer-events-none absolute right-0 top-0 hidden h-full w-[387px] object-cover lg:block"
          />
        </div>
      </div>
    </section>
  );
}
