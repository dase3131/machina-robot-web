import { useState } from "react";
import { Reveal } from "@/components/motion/Primitives";
import { useToast } from "@/hooks/use-toast";

const passes = [
  {
    name: "Delegate",
    price: "€890",
    note: "Early access rate",
    includes: ["All tracks & keynotes", "Demo floor", "Networking app"],
  },
  {
    name: "Executive",
    price: "€2,400",
    note: "Limited allocation",
    includes: ["CXO Summit access", "Curated roundtables", "Private lounge"],
  },
  {
    name: "Partner",
    price: "On request",
    note: "Sponsorship packages",
    includes: ["Stage & demo presence", "Branded roundtable", "Delegate pass block"],
  },
];

export function TicketsSection() {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", company: "" });
  const [sending, setSending] = useState(false);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    await new Promise((r) => setTimeout(r, 700));
    toast({
      title: "Thanks — we'll be in touch",
      description: "Our team will follow up with tickets and partnership details.",
    });
    setForm({ name: "", email: "", company: "" });
    setSending(false);
  };

  const field =
    "w-full border-b border-foreground/25 bg-transparent py-3 font-mono text-sm outline-none placeholder:text-muted-foreground focus:border-foreground";

  return (
    <section id="tickets" className="relative py-20 md:py-32">
      <div className="container-editorial">
        <div className="mb-12 flex flex-wrap items-baseline justify-between gap-3 border-t border-foreground/15 pt-4">
          <p className="label-ink">005 / Tickets &amp; Sponsorship</p>
          <p className="label">Paris · 2027</p>
        </div>

        <Reveal y={14}>
          <h2 className="display-xl mb-14 max-w-[16ch]">Join the room</h2>
        </Reveal>

        <div className="grid border-t border-foreground/15 md:grid-cols-3">
          {passes.map((p) => (
            <div
              key={p.name}
              className="border-b border-foreground/15 px-0 py-8 md:border-r md:px-6 md:last:border-r-0 md:first:pl-0"
            >
              <p className="label mb-4">{p.name}</p>
              <p className="display-lg mb-1">{p.price}</p>
              <p className="mb-6 font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                {p.note}
              </p>
              <ul className="space-y-2">
                {p.includes.map((i) => (
                  <li key={i} className="text-sm leading-relaxed">
                    {i}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Inquiry */}
        <div id="partner" className="mt-20 grid gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <h3 className="text-2xl leading-tight md:text-3xl">
              Tickets, group rates, or a sponsorship pack — leave your details.
            </h3>
          </div>

          <form onSubmit={submit} className="lg:col-span-7">
            <div className="grid gap-6 md:grid-cols-3">
              <input
                required
                placeholder="Name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className={field}
              />
              <input
                required
                type="email"
                placeholder="Email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className={field}
              />
              <input
                required
                placeholder="Company"
                value={form.company}
                onChange={(e) => setForm({ ...form, company: e.target.value })}
                className={field}
              />
            </div>
            <button
              type="submit"
              disabled={sending}
              className="mt-8 border border-foreground bg-foreground px-7 py-3 font-mono text-[11px] uppercase tracking-[0.22em] text-background transition-colors hover:bg-transparent hover:text-foreground disabled:opacity-50"
            >
              {sending ? "Sending…" : "Request details"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
