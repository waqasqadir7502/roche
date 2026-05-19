const content = {
  box1 :{
    image:"/assests/wf1.png",
    imageMobile:"/assests/wfm1.png",
    number:"01",
    title:"Blutabnahme",
    descrip:` Venöse Blutentnahme
    (Serum oder EDTA-Plasma)`,
  },
  box2 :{
    image:"/assests/wf2.png",
    imageMobile:"/assests/wfm2.png",
    number:"02",
    title:"Präanalytik",
    descrip:`Standardisierte
                  Verarbeitung, stabil bei
                  Lagerung`,
  },
  box3 :{
    image:"/assests/wf3.png",
    imageMobile:"/assests/wfm3.png",
    number:"03",
    title:"Messung",
    descrip:` Hochsensitive
    Immunoassays – CE-IVDR
    Elecsys NfL`,
  },
  box4 : {
    image:"/assests/wf4.png",
    imageMobile:"/assests/wfm4.png",
    number:"04",
    title:"Auswertung",
    descrip:`  Perzentil-Berechnung
    anhand altersadaptierter
   Referenzkohorten`,
  },
  box5 :{ 
    image:"/assests/wf5.png",
    imageMobile:"/assests/wfm5.png",
    number:"05",
    title:"Befundintegration",
    descrip:` Klinische Interpretation in
   Zusammenspiel mit MRT,
   EDSS, Schubanamnese`,
  },
}



export default function Workflow() {
  return (
    <section id="workflow"className="bg-[#fffff] py-[70px] lg:py-[110px]">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-20">
        
        {/* HEADER */}
        <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:gap-10">
          <h2 className="text-[32px] leading-[1.1] tracking-[-1px] sm:text-[48px] lg:text-[64px] lg:tracking-[-2px]">
            Workflow-Integration
          </h2>

          <p className="text-[18px] text-[#3d3d3d] sm:text-[20px] lg:pt-2 lg:text-[22px]">
            Von der Probe zum klinischen Befund
          </p>
        </div>

        {/* SUBTITLE */}
        <h3 className="mt-[60px] text-[20px] leading-none tracking-[-0.5px] text-[#0b41cd] sm:text-[42px] lg:mt-[60px] lg:text-[36px] lg:tracking-[-1.5px]">
          Ablauf in der Praxis
        </h3>

        {/* ========================= */}
        {/* MOBILE VERSION */}
        {/* ========================= */}
        <div className="mt-[50px] flex flex-col justify-center item-center gap-5 lg:hidden">
          
          {/* ITEM 01 */}
          <div className="flex items-center justify-center gap-5">
            <img
              src={content.box1.imageMobile}
              alt=""
              className="w-[74px] shrink-1 object-contain"
            />

            <div>
              <h4 className="text-[18px] leading-[1.2] tracking-[-0.2px]">
                <span className="font-medium text-[#0b41cd]">{content.box1.number}</span>{" "}
                {content.box1.title}
              </h4>

              <p className="whitespace-pre-line mt-2 text-[16px] font-light leading-[1.3] text-[#6d6d6d]">
                {content.box1.descrip}
              </p>
            </div>
          </div>

          {/* ITEM 02 */}
          <div className="flex justify-center gap-5 ">
            <img
              src={content.box2.imageMobile}
              alt=""
              className="w-[74px] shrink-0 object-contain"
            />

            <div className="mr-[18px]">
              <h4 className="text-[18px] leading-[1.2] tracking-[-0.2px]">
                <span className="font-medium text-[#0b41cd]">{content.box2.number}</span>{" "}
                {content.box2.title}
              </h4>

              <p className=" whitespace-pre-line mt-2 text-[16px] font-light leading-[1.3] text-[#6d6d6d]">
                {content.box2.descrip}
              </p>
            </div>
          </div>

          {/* ITEM 03 */}
          <div className="flex items-center justify-center gap-5">
            <img
              src={content.box3.imageMobile}
              alt=""
              className="w-[74px] shrink-0 object-contain"
            />

            <div >
              <h4 className="text-[18px] leading-[1.2] tracking-[-0.2px]">
                <span className="font-medium text-[#0b41cd]">{content.box3.number}</span>{" "}
                {content.box3.title}
              </h4>

              <p className=" whitespace-pre-line mt-2 text-[16px] font-light leading-[1.3] text-[#6d6d6d]">
                 {content.box3.descrip}
              </p>
            </div>
          </div>

          {/* ITEM 04 */}
          <div className="flex items-center justify-center gap-5">
            <img
              src={content.box4.imageMobile}
              alt=""
              className="w-[74px] shrink-0 object-contain"
            />

            <div>
              <h4 className="text-[18px] leading-[1.2] tracking-[-0.2px]">
                <span className="font-medium text-[#0b41cd]">{content.box4.number}</span>{" "}
               {content.box5.title}
              </h4>

              <p className=" whitespace-pre-line mt-2 text-[16px] font-light leading-[1.3] text-[#6d6d6d]">
                {content.box4.descrip}
              </p>
            </div>
          </div>

          {/* ITEM 05 */}
          <div className="flex items-center justify-center gap-5">
            <img
              src={content.box5.imageMobile}
              alt=""
              className="w-[74px] shrink-0 object-contain"
            />

            <div>
              <h4 className="text-[18px] leading-[1.2] tracking-[-0.2px]">
                <span className="font-medium text-[#0b41cd]">{content.box5.number}</span>{" "}
                {content.box5.title}
              </h4>

              <p className="whitespace-pre-line mt-2 text-[16px] font-light leading-[1.3] text-[#6d6d6d]">
                {content.box5.descrip}
              </p>
            </div>
          </div>
        </div>

        {/* ========================= */}
        {/* DESKTOP VERSION */}
        {/* ========================= */}
        <div className="relative mt-[140px] hidden lg:block">
          
          {/* CENTER LINE */}
          <div className="absolute left-0 top-1/2 h-[2px] w-full -translate-y-1/2 bg-[#cfcfcf]" />

          {/* DOTS */}
          <div className="absolute left-0 top-1/2 flex w-full -translate-y-1/2 justify-between px-[120px]">
            <div className="size-[10px] rounded-full bg-[#bdbdbd]" />
            <div className="size-[10px] rounded-full bg-[#bdbdbd]" />
            <div className="size-[10px] rounded-full bg-[#bdbdbd]" />
            <div className="size-[10px] rounded-full bg-[#bdbdbd]" />
            <div className="size-[10px] rounded-full bg-[#bdbdbd]" />
          </div>

          {/* GRID */}
          <div className="grid h-[300px] grid-cols-5">
            
            {/* 01 */}
            <div className="flex flex-col items-center justify-between text-center">
              <img
                src={content.box1.image}
                alt=""
                className="w-[122px] object-contain"
              />

              <div>
                <h4 className="text-[20px] leading-[1.2] tracking-[-0.2px]">
                  <span className="font-medium text-[#0b41cd]">{content.box1.number}</span>{" "}
                 {content.box1.title}
                </h4>

                <p className=" mt-3 whitespace-pre-line text-[16px] font-light leading-[1.35] text-[#6d6d6d]">
                 {content.box1.descrip}
                </p>
              </div>
            </div>

            {/* 02 */}
            <div className="flex flex-col items-center justify-between text-center">
              <div>
                <h4 className="text-[20px] leading-[1.2] tracking-[-0.2px]">
                  <span className="font-medium text-[#0b41cd]">{content.box2.number}</span>{" "}
                 {content.box2.title}
                </h4>

                <p className=" mt-3 whitespace-pre-line text-[16px] font-light leading-[1.35] text-[#6d6d6d]">
                 {content.box2.descrip}
                </p>
              </div>

              <img
                src={content.box2.image}
                alt=""
                className="w-[122px] object-contain"
              />
            </div>

            {/* 03 */}
            <div className="flex flex-col items-center justify-between text-center">
              <img
                src={content.box3.image}
                alt=""
                className="w-[122px] object-contain"
              />

              <div>
                <h4 className="text-[20px] leading-[1.2] tracking-[-0.2px]">
                  <span className="font-medium text-[#0b41cd]">{content.box3.number}</span>{" "}
                  {content.box3.title}
                </h4>

                <p className=" mt-3 whitespace-pre-line text-[16px] font-light leading-[1.35] text-[#6d6d6d]">
                  {content.box3.descrip}
                </p>
              </div>
            </div>

            {/* 04 */}
            <div className="flex flex-col items-center justify-between text-center">
              <div>
                <h4 className="text-[20px] leading-[1.2] tracking-[-0.2px]">
                  <span className="font-medium text-[#0b41cd]">{content.box4.number}</span>{" "}
                  {content.box4.title}
                </h4>

                <p className="mt-3 whitespace-pre-line text-[16px] font-light leading-[1.35] text-[#6d6d6d]">
                 {content.box4.descrip}
                </p>
              </div>

              <img
                src={content.box4.image}
                alt=""
                className="w-[122px] object-contain"
              />
            </div>

            {/* 05 */}
            <div className="flex flex-col items-center justify-between text-center">
              <img
                src={content.box5.image}
                alt=""
                className="w-[122px] object-contain"
              />

              <div>
                <h4 className="text-[20px] leading-[1.2] tracking-[-0.2px]">
                  <span className="font-medium text-[#0b41cd]">{content.box5.number}</span>{" "}
                {content.box5.title}
                </h4>

                <p className="mt-3 whitespace-pre-line text-[16px] font-light leading-[1.35] text-[#6d6d6d]">
                 {content.box5.descrip}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM SECTION */}
        <div className="mt-[70px] flex items-center gap-5 lg:mt-[110px] lg:gap-10">
          
          {/* LINE */}
          <div className="relative h-[2px] w-[90px] shrink-0 bg-[#2450ff] lg:w-[260px]">
            <div className="absolute right-0 top-1/2 size-[20px] -translate-y-1/2 rounded-full border-2 border-[#2450ff] bg-[#bfe4ff] lg:size-[24px]" />
          </div>

          {/* TEXT */}
          <p className="text-[16px] font-light leading-[1.35] text-[#2d2d2d] sm:text-[18px] lg:text-[20px]">
            So wird NfL zur Routine – mit einem Partner, der die nötige
            Expertise, Technologie und Unterstützung mitbringt.
          </p>
        </div>
      </div>
    </section>
  );
}