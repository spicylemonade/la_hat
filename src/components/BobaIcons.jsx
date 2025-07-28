// Custom Boba Tea Icons
export const BobaTeaIcon = ({ className, style }) => (
  <svg viewBox="0 0 24 24" className={className} style={style} fill="currentColor">
    {/* Cup */}
    <path d="M7 4h10c1 0 2 1 2 2v12c0 2-1 3-3 3H8c-2 0-3-1-3-3V6c0-1 1-2 2-2z" stroke="currentColor" strokeWidth="1.5" fill="none"/>
    {/* Straw */}
    <path d="M12 2v4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    {/* Boba pearls */}
    <circle cx="9" cy="16" r="1" fill="currentColor"/>
    <circle cx="12" cy="14" r="1" fill="currentColor"/>
    <circle cx="15" cy="17" r="1" fill="currentColor"/>
    <circle cx="10" cy="13" r="0.8" fill="currentColor"/>
    <circle cx="14" cy="15" r="0.8" fill="currentColor"/>
    {/* Liquid level */}
    <path d="M7 8h10" stroke="currentColor" strokeWidth="1" opacity="0.6"/>
  </svg>
)

export const BobaShakeIcon = ({ className, style }) => (
  <svg viewBox="0 0 24 24" className={className} style={style} fill="currentColor">
    {/* Cup outline */}
    <path d="M8 5h8c1.5 0 2.5 1 2.5 2.5v11c0 1.5-1 2.5-2.5 2.5H8c-1.5 0-2.5-1-2.5-2.5v-11C5.5 6 6.5 5 8 5z" stroke="currentColor" strokeWidth="1.5" fill="none"/>
    {/* Lid */}
    <ellipse cx="12" cy="5" rx="4" ry="1" fill="currentColor" opacity="0.3"/>
    {/* Straw */}
    <path d="M13 2v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    {/* Foam/cream layer */}
    <path d="M8 9c2-1 4-1 6 0s2 1 2 1v-2s-1-1-3-1-5 1-5 2z" fill="currentColor" opacity="0.4"/>
    {/* Boba pearls scattered */}
    <circle cx="9.5" cy="15" r="1.2" fill="currentColor"/>
    <circle cx="14" cy="17" r="1" fill="currentColor"/>
    <circle cx="11" cy="18" r="0.9" fill="currentColor"/>
    <circle cx="13" cy="13" r="0.8" fill="currentColor"/>
    <circle cx="10" cy="12" r="0.7" fill="currentColor"/>
  </svg>
)

export const MatchaBobaIcon = ({ className, style }) => (
  <svg viewBox="0 0 24 24" className={className} style={style} fill="currentColor">
    {/* Cup */}
    <path d="M7.5 4h9c1.2 0 2 0.8 2 2v12c0 1.8-0.8 3-2.5 3h-6c-1.7 0-2.5-1.2-2.5-3V6c0-1.2 0.8-2 2-2z" stroke="currentColor" strokeWidth="1.5" fill="none"/>
    {/* Matcha cream top */}
    <path d="M7.5 8c1-0.5 2.5-0.8 4.5-0.8s3.5 0.3 4.5 0.8c0 0.5-1 1-4.5 1s-4.5-0.5-4.5-1z" fill="currentColor" opacity="0.5"/>
    {/* Handle */}
    <path d="M17.5 10c1 0 1.5 0.5 1.5 1.5v2c0 1-0.5 1.5-1.5 1.5" stroke="currentColor" strokeWidth="1.2" fill="none"/>
    {/* Boba at bottom */}
    <circle cx="10" cy="17" r="1.1" fill="currentColor"/>
    <circle cx="13.5" cy="16.5" r="0.9" fill="currentColor"/>
    <circle cx="11.2" cy="15" r="0.8" fill="currentColor"/>
    <circle cx="9" cy="15" r="0.7" fill="currentColor"/>
    <circle cx="14" cy="18" r="0.8" fill="currentColor"/>
  </svg>
) 