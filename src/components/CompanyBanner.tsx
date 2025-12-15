import cognitionLogo from "@/assets/logos/cognition.svg";
import nvidiaLogo from "@/assets/logos/nvidia.avif";
import anthropicLogo from "@/assets/logos/anthropic.avif";
import openaiLogo from "@/assets/logos/openai.avif";
import metaLogo from "@/assets/logos/meta.avif";
import mistralLogo from "@/assets/logos/mistral.avif";
import ycombinatorLogo from "@/assets/logos/ycombinator.avif";
import paloaltoLogo from "@/assets/logos/paloalto.avif";
import cerebrasLogo from "@/assets/logos/cerebras.svg";

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

export function CompanyBanner() {
  return (
    <section className="py-12 md:py-16 overflow-hidden">
      <div className="container mx-auto px-6 mb-8">
        <h2 className="font-sans text-xl md:text-2xl lg:text-3xl">
          Meet the companies who trust <span className="italic opacity-60">RAISE</span>
        </h2>
      </div>
      
      <div className="logos-carousel">
        <div className="logos-container">
          {/* First set of logos */}
          <div className="logos-track">
            {companies.map((company) => (
              <div key={company.name} className="logos-block">
                <img
                  src={company.logo}
                  alt={`${company.name} logo`}
                  loading="lazy"
                  className="h-6 md:h-8 w-auto object-contain invert opacity-80"
                />
              </div>
            ))}
          </div>
          {/* Duplicate for seamless loop */}
          <div className="logos-track">
            {companies.map((company) => (
              <div key={`${company.name}-dup`} className="logos-block">
                <img
                  src={company.logo}
                  alt={`${company.name} logo`}
                  loading="lazy"
                  className="h-6 md:h-8 w-auto object-contain invert opacity-80"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
