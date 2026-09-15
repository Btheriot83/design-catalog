import { TextsReveal } from "./TextsReveal";

export function PageHeader({
  title,
  description,
  eyebrow,
}: {
  title: string;
  description?: string;
  eyebrow?: string;
}) {
  return (
    <TextsReveal as="header" className="mb-12">
      {eyebrow ? (
        <p className="eyebrow t-stagger-line t-stagger-line--1 mb-4">{eyebrow}</p>
      ) : null}
      <h1
        className={`max-w-2xl font-serif text-4xl leading-[1.1] tracking-tight text-ink sm:text-[2.75rem] t-stagger-line ${eyebrow ? "t-stagger-line--2" : "t-stagger-line--1"}`}
      >
        {title}
      </h1>
      <hr
        className={`rule-double mt-6 max-w-xs t-stagger-line ${eyebrow ? "t-stagger-line--3" : "t-stagger-line--2"}`}
      />
      {description ? (
        <p
          className={`mt-6 max-w-xl font-sans text-base leading-relaxed text-studio-ink t-stagger-line ${eyebrow ? "t-stagger-line--3" : "t-stagger-line--2"}`}
          style={
            eyebrow
              ? { transitionDelay: "calc(var(--stagger-stagger) * 2)" }
              : undefined
          }
        >
          {description}
        </p>
      ) : null}
    </TextsReveal>
  );
}
