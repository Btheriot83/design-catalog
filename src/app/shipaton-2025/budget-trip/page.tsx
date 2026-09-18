import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import { PageHeader } from "@/components/PageHeader";
import { getShipaton2025 } from "@/lib/content";

export const metadata: Metadata = {
  title: "Budget trip mockups · Shipaton 2025",
  description:
    "Concept mockups for a budget-first travel + local get-out-of-house app. Not a shipped product. Craft patterns studied from Shipaton 2025 winners.",
};

function Phone({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <figure id={id} className="scroll-mt-24">
      <div className="mx-auto w-[min(100%,20rem)]">
        <div className="rounded-[1.75rem] border border-ink/20 bg-card p-2 press-shadow">
          <div className="overflow-hidden rounded-[1.35rem] border border-hairline bg-paper">
            <div className="flex items-center justify-between border-b border-hairline px-4 py-2">
              <span className="font-mono text-[10px] tracking-wide text-faint">9:41</span>
              <span className="h-1.5 w-12 rounded-full bg-ink/15" aria-hidden />
              <span className="font-mono text-[10px] text-faint">■■■</span>
            </div>
            <div className="min-h-[28rem] px-4 py-4">{children}</div>
          </div>
        </div>
      </div>
      <figcaption className="mt-4 text-center font-sans text-sm text-studio-ink">
        {title}
      </figcaption>
    </figure>
  );
}

function Chip({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-hairline bg-ghost px-2.5 py-1 font-sans text-[11px] text-ink">
      {children}
    </span>
  );
}

function SoftCard({
  eyebrow,
  title,
  meta,
  accent,
}: {
  eyebrow: string;
  title: string;
  meta: string;
  accent?: string;
}) {
  return (
    <div className="rounded-xl border border-hairline bg-card px-3 py-3">
      <div className="flex items-baseline justify-between gap-2">
        <p className="font-sans text-[10px] uppercase tracking-wide text-faint">{eyebrow}</p>
        {accent ? (
          <p className="font-mono text-[11px] text-ink">{accent}</p>
        ) : null}
      </div>
      <p className="mt-1 font-serif text-[15px] leading-snug text-ink">{title}</p>
      <p className="mt-1 font-sans text-[11px] leading-relaxed text-studio-ink">{meta}</p>
    </div>
  );
}

export default function BudgetTripMockupsPage() {
  const { budgetTripMockups } = getShipaton2025();

  return (
    <div>
      <p className="mb-6 font-sans text-sm text-studio-ink">
        <Link
          href="/shipaton-2025"
          className="underline decoration-hairline hover:text-ink hover:decoration-ink"
        >
          ← Shipaton 2025
        </Link>
      </p>

      <PageHeader
        eyebrow="Concept mockups · not shipped"
        title="Budget trip mockups"
        description="Budget-first travel and local get-out-of-house. Enter spend + when you can leave → ranked trips and nearby experiences that fit. HTML frames only — craft cues from Dayloop clarity, Gurwi modules, Tomo itinerary, PitchLab confidence, ReadHim report cards. Brands not cloned."
      />

      <aside className="mb-12 border border-hairline bg-ghost/80 p-5 press-shadow">
        <p className="eyebrow text-ink">Working names</p>
        <ul className="mt-4 space-y-3">
          {budgetTripMockups.nameProposals.map((n) => (
            <li key={n.name}>
              <p className="font-serif text-lg text-ink">{n.name}</p>
              <p className="mt-0.5 font-sans text-sm text-studio-ink">{n.why}</p>
            </li>
          ))}
        </ul>
        <p className="mt-4 font-sans text-xs leading-relaxed text-faint">
          Mock product label in frames: <strong className="text-studio-ink">Nearfar</strong>{" "}
          (equal weight for near and far). Job: $budget + leave window → ranked trips AND local outings.
        </p>
      </aside>

      <nav className="mb-12 flex flex-wrap gap-x-4 gap-y-2 font-sans text-sm text-studio-ink">
        {budgetTripMockups.screens.map((s) => (
          <a
            key={s.id}
            href={`#${s.id}`}
            className="underline decoration-hairline hover:text-ink hover:decoration-ink"
          >
            {s.title}
          </a>
        ))}
      </nav>

      <div className="space-y-16">
        <Phone id="intake" title="1 · Budget + date intake">
          <p className="font-sans text-[10px] uppercase tracking-[0.14em] text-faint">Nearfar</p>
          <h3 className="mt-2 font-serif text-[1.65rem] leading-tight text-ink">
            How much, and when can you leave?
          </h3>
          <p className="mt-2 font-sans text-[12px] leading-relaxed text-studio-ink">
            One number. One window. We rank both trips and local outs that fit.
          </p>

          <label className="mt-6 block">
            <span className="font-sans text-[11px] text-faint">Spend ceiling</span>
            <div className="mt-1.5 flex items-baseline gap-1 rounded-xl border border-ink/25 bg-card px-3 py-3">
              <span className="font-serif text-2xl text-ink">$</span>
              <span className="font-serif text-3xl tracking-tight text-ink">1,500</span>
            </div>
          </label>

          <div className="mt-4">
            <span className="font-sans text-[11px] text-faint">Leave window</span>
            <div className="mt-1.5 flex flex-wrap gap-2">
              <Chip>This weekend</Chip>
              <Chip>In 1 week</Chip>
              <span className="inline-flex items-center rounded-full border border-ink bg-ink px-2.5 py-1 font-sans text-[11px] text-paper">
                In 2 weeks
              </span>
              <Chip>Flexible</Chip>
            </div>
          </div>

          <div className="mt-5 rounded-xl border border-dashed border-hairline bg-ghost/60 px-3 py-3">
            <p className="font-sans text-[11px] leading-relaxed text-studio-ink">
              Includes airfare-ish trips <em>and</em> under-$80 local days. Honesty first — we’ll show what’s cut.
            </p>
          </div>

          <button
            type="button"
            className="mt-6 w-full rounded-full border border-ink bg-ink py-3 font-sans text-sm text-paper"
          >
            Rank what fits
          </button>
        </Phone>

        <Phone id="results" title="2 · Results: trips vs local experiences">
          <div className="flex items-baseline justify-between">
            <p className="font-sans text-[10px] uppercase tracking-[0.14em] text-faint">Nearfar</p>
            <p className="font-mono text-[11px] text-ink">$1,500 · 2 wks</p>
          </div>
          <h3 className="mt-2 font-serif text-xl text-ink">What fits</h3>

          <div className="mt-4 flex gap-2">
            <span className="rounded-full border border-ink bg-ink px-3 py-1 font-sans text-[11px] text-paper">
              Trips 4
            </span>
            <span className="rounded-full border border-hairline bg-ghost px-3 py-1 font-sans text-[11px] text-ink">
              Local 6
            </span>
          </div>

          <div className="mt-4 space-y-2.5">
            <SoftCard
              eyebrow="Trip · overnight"
              title="Tucson desert loop"
              meta="Drive · 3 nights · midweek fares soft"
              accent="$1,180"
            />
            <SoftCard
              eyebrow="Trip · flight"
              title="CDMX long weekend"
              meta="Leave Fri · back Mon · hostel + metro"
              accent="$1,420"
            />
            <div className="my-3 flex items-center gap-2">
              <hr className="flex-1 border-hairline" />
              <span className="font-sans text-[10px] uppercase tracking-wide text-faint">Local</span>
              <hr className="flex-1 border-hairline" />
            </div>
            <SoftCard
              eyebrow="Local · half day"
              title="South Mountain sunrise + taco crawl"
              meta="Leave by 6:30a · no lodging"
              accent="$42"
            />
            <SoftCard
              eyebrow="Local · evening"
              title="First Friday + street gallery walk"
              meta="Transit + one gallery ticket"
              accent="$28"
            />
          </div>
        </Phone>

        <Phone id="trip-detail" title="3 · Trip detail">
          <p className="font-sans text-[10px] uppercase tracking-[0.14em] text-faint">Trip report</p>
          <h3 className="mt-2 font-serif text-[1.55rem] leading-tight text-ink">
            Tucson desert loop
          </h3>
          <p className="mt-1 font-mono text-[12px] text-ink">$1,180 of $1,500 · leaves room</p>

          <div className="mt-5 space-y-2">
            {[
              ["Fri", "Drive out · Saguaro West at golden hour"],
              ["Sat", "Mission · market · stargaze pull-off"],
              ["Sun", "Hike short · drive home before dusk"],
            ].map(([day, body]) => (
              <div key={day} className="grid grid-cols-[2.5rem_1fr] gap-2 rounded-lg border border-hairline px-3 py-2.5">
                <span className="font-mono text-[11px] text-faint">{day}</span>
                <span className="font-sans text-[12px] leading-snug text-ink">{body}</span>
              </div>
            ))}
          </div>

          <div className="mt-5 rounded-xl border border-hairline bg-ghost/70 px-3 py-3">
            <p className="font-sans text-[10px] uppercase tracking-wide text-faint">Confidence</p>
            <p className="mt-1 font-serif text-[15px] text-ink">Fits with $320 spare</p>
            <p className="mt-1 font-sans text-[11px] leading-relaxed text-studio-ink">
              Midweek motel hold + groceries over restaurants. Flight alternatives exceed budget this window.
            </p>
          </div>

          <button
            type="button"
            className="mt-5 w-full rounded-full border border-ink py-2.5 font-sans text-sm text-ink"
          >
            Open budget breakdown
          </button>
        </Phone>

        <Phone id="local-detail" title="4 · Local experience detail">
          <p className="font-sans text-[10px] uppercase tracking-[0.14em] text-faint">Local outing</p>
          <h3 className="mt-2 font-serif text-[1.55rem] leading-tight text-ink">
            South Mountain sunrise + taco crawl
          </h3>
          <p className="mt-1 font-mono text-[12px] text-ink">$42 · same city · out of the house</p>

          <div className="mt-5 space-y-3">
            <div className="rounded-xl border border-hairline px-3 py-3">
              <p className="font-sans text-[10px] text-faint">Module · get there</p>
              <p className="mt-1 font-sans text-[13px] text-ink">Bike or one rideshare up · walk the ridge</p>
            </div>
            <div className="rounded-xl border border-hairline px-3 py-3">
              <p className="font-sans text-[10px] text-faint">Module · the point</p>
              <p className="mt-1 font-sans text-[13px] text-ink">45 min light · phone on airplane · watch light move</p>
            </div>
            <div className="rounded-xl border border-hairline px-3 py-3">
              <p className="font-sans text-[10px] text-faint">Module · land soft</p>
              <p className="mt-1 font-sans text-[13px] text-ink">Two-stop taco crawl downtown · cash preferred</p>
            </div>
          </div>

          <div className="mt-5 flex flex-wrap gap-2">
            <Chip>Half day</Chip>
            <Chip>No booking</Chip>
            <Chip>Solo-friendly</Chip>
          </div>
        </Phone>

        <Phone id="breakdown" title="5 · Budget breakdown honesty">
          <p className="font-sans text-[10px] uppercase tracking-[0.14em] text-faint">Honesty sheet</p>
          <h3 className="mt-2 font-serif text-xl text-ink">Tucson · $1,180</h3>
          <p className="mt-1 font-sans text-[12px] text-studio-ink">
            Ceiling $1,500 · spare $320 · nothing hidden in “misc”
          </p>

          <ul className="mt-5 space-y-2">
            {[
              ["Gas round-trip", "$95"],
              ["Motel · 2 nights", "$240"],
              ["Groceries + 1 dinner out", "$160"],
              ["Park / day-use", "$35"],
              ["Buffer for heat / water / flats", "$50"],
              ["Contingency (explicit)", "$100"],
            ].map(([label, amt]) => (
              <li
                key={label}
                className="flex items-baseline justify-between gap-3 border-b border-hairline pb-2 font-sans text-[12px]"
              >
                <span className="text-studio-ink">{label}</span>
                <span className="font-mono text-ink">{amt}</span>
              </li>
            ))}
          </ul>

          <div className="mt-5 rounded-xl border border-ink/20 bg-card px-3 py-3">
            <p className="font-sans text-[11px] leading-relaxed text-ink">
              <strong className="font-medium">Cut to fit:</strong> we dropped a Sedona add-on (+$420) and a Friday flight to Vegas that blew the ceiling before lodging.
            </p>
          </div>

          <p className="mt-4 font-sans text-[10px] leading-relaxed text-faint">
            Report-card style: totals visible, cuts named, no AI gradient chrome.
          </p>
        </Phone>
      </div>

      <aside className="mt-16 border border-hairline bg-ghost/80 p-5">
        <p className="eyebrow text-ink">Craft notes</p>
        <ul className="mt-3 list-disc space-y-1 pl-5 font-sans text-sm leading-relaxed text-studio-ink">
          <li>Dayloop — calm hierarchy, one primary action</li>
          <li>Gurwi — short visual modules (local outing)</li>
          <li>Tomo — day-by-day itinerary blocks</li>
          <li>PitchLab — confidence / fit callout</li>
          <li>ReadHim — report-card honesty sheet</li>
        </ul>
        <p className="mt-3 font-sans text-xs text-faint">
          Mockups only. Not a Shipaton submission or shipped product.
        </p>
      </aside>
    </div>
  );
}
