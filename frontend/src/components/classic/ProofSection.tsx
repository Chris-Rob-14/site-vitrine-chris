import { home, homeProofs } from "@/data/homepage";

export function ProofSection() {
  return (
    <section aria-labelledby="proof-title" className="py-12 border-t border-border/40">
      <div className="max-w-5xl mx-auto space-y-8">
        <h2 id="proof-title" className="text-2xl md:text-3xl font-bold text-center">{home.proofTitle}</h2>
        <dl className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {homeProofs.map((proof) => (
            <div key={proof.label} className="flex flex-col-reverse gap-3 p-6 rounded-2xl border border-border/50 bg-card/30 text-center">
              <dt className="text-sm text-muted-foreground leading-relaxed">{proof.label}</dt>
              <dd className="text-4xl font-black text-primary">{proof.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
