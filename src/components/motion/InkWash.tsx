/** Soft SVG turbulence wash — Quiet Folio ink, not shimmer. */
export function InkWash() {
  return (
    <div className="ink-wash" aria-hidden="true">
      <svg className="ink-wash-drift" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <filter id="ink-turb" x="-20%" y="-20%" width="140%" height="140%">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.65 0.8"
              numOctaves="3"
              seed="7"
              result="noise"
            />
            <feColorMatrix
              in="noise"
              type="matrix"
              values="0 0 0 0 0.133
                      0 0 0 0 0.110
                      0 0 0 0 0.141
                      0 0 0 0.55 0"
            />
          </filter>
        </defs>
        <rect width="100%" height="100%" filter="url(#ink-turb)" />
      </svg>
    </div>
  );
}
