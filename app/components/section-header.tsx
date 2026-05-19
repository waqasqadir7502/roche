export default function SectionHeader({
  title,
  eyebrow,
  description,
  blue = false,
}: {
  title: string;
  eyebrow?: string;
  description?: string;
  blue?: boolean;
}) {
  return (
    <div className="grid gap-8 lg:grid-cols-[407px_1fr] lg:items-start">
      {/* Mobile */}
      <div className="hidden">
        <h2
          className={`mb-10 text-[34px] leading-[1.15] tracking-[-0.45px] sm:text-[40px] lg:text-[45px] lg:leading-[58px] ${blue ? "text-[#0b41cd]" : "text-black"}`}
        >
          {title}
        </h2>
        {description && (
          <p className="max-w-[633px] text-[18px] font-light leading-[1.25] lg:text-[20px]">
            {description}
          </p>
        )}
        {eyebrow && (
          <p className="text-[26px] leading-[1.2] tracking-[-0.3px] text-[#0b41cd] lg:text-[30px]">
            {eyebrow}
          </p>
        )}
      </div>

      {/* Desktop */}
      <div className="lg:block">
        <h2
          className={`lg:mb-20 text-[34px] leading-[1.15] tracking-[-0.45px] sm:text-[40px] lg:text-[45px] lg:leading-[58px] ${blue ? "text-[#0b41cd]" : "text-black"} `}
        >
          {title}
        </h2>
      </div>
      {description && (
        <p className="max-w-[633px] text-[18px] font-light leading-[1.25] lg:text-[20px] ">
          {description}
        </p>
      )}
      {eyebrow && (
        <p className="mb-3 text-[26px] leading-[1.2] tracking-[-0.3px] text-[#0b41cd] lg:text-[30px]">
          {eyebrow}
        </p>
      )}
    </div>
  );
}
