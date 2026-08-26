import cognitionLogo from "@/assets/logos/cognition.svg";
import nvidiaLogo from "@/assets/logos/nvidia.avif";
import anthropicLogo from "@/assets/logos/anthropic.avif";
import openaiLogo from "@/assets/logos/openai.avif";
import metaLogo from "@/assets/logos/meta.avif";
import mistralLogo from "@/assets/logos/mistral.avif";
import ycombinatorLogo from "@/assets/logos/ycombinator.avif";
import paloaltoLogo from "@/assets/logos/paloalto.avif";
import cerebrasLogo from "@/assets/logos/cerebras.svg";
import { ScrollMarquee, Reveal } from "@/components/motion/Primitives";

const companies = [
  { name: "Cognition", logo: cognitionLogo },
  { name: "NVIDIA", logo: nvidiaLogo },
  { name: "Anthropic", logo: anthropicLogo },
  { name: "OpenAI", logo: openaiLogo },
  { name: "Meta", logo: metaLogo },
  { name: "Mistral AI", logo: mistralLogo },
  { name: "Y Combinator", logo: ycombinatorLogo },
  { name: "Palo Alto", logo: paloaltoLogo },
  { name: "Cerebras", logo: cerebrasLogo },
];

function LogoTrack() {
  return (
    <div className="flex shrink-0 items-center">
      {companies.map((company) => (
        <div
          key={company.name}
          className="flex w-[180px] shrink-0 items-center justify-center px-6 md:w-[240px]"
        >
          <img
            src={company.logo}
            alt={`${company.name} logo`}
            loading="lazy"
            className="h-5 w-auto object-contain opacity-45 invert transition-opacity duration-500 hover:opacity-100 md:h-7"
          />
        </div>
      ))}
    </div>
  );
}

export function CompanyBanner() {
  return (
    <section className="border-y border-foreground/15 py-10 md:py-14">
      <div className="container-editorial mb-8 flex flex-wrap items-baseline justify-between gap-3">
        <Reveal>
          <p className="label-ink">The room they already trust</p>
        </Reveal>
        <Reveal delay={0.08}>
          <p className="label">Raise Summit alumni · 2024 – 2026</p>
        </Reveal>
      </div>

      <ScrollMarquee baseSpeed={26}>
        <LogoTrack />
      </ScrollMarquee>
    </section>
  );
}
