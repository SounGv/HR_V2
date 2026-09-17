"use client";

import { useId, type ReactNode } from "react";

export type MenuGlyphId =
  | "house"
  | "checkBadge"
  | "people"
  | "person"
  | "personAdd"
  | "bars"
  | "calendar"
  | "calendarDate"
  | "clock"
  | "alarm"
  | "palm"
  | "bills"
  | "moneyBag"
  | "wingedDollar"
  | "scroll"
  | "heart"
  | "target"
  | "clipboard"
  | "clipboardStar"
  | "meeting"
  | "shield"
  | "org"
  | "floppy"
  | "sliders"
  | "building"
  | "pin"
  | "bell"
  | "star"
  | "shift"
  | "apps"
  | "generic";

/** MUTD HR object language → GV One menu ids (original SVGs, not emoji art). */
const MENU_ITEM_GLYPHS: Record<string, MenuGlyphId> = {
  checkin: "clock",
  timeedit: "alarm",
  shift: "calendar",
  calendar: "calendar",
  leave: "palm",
  overtime: "alarm",
  expense: "bills",
  benefits: "heart",
  kpi: "target",
  review: "clipboard",
  meeting: "meeting",
  emplist: "people",
  dailyemp: "person",
  addemp: "personAdd",
  orgchart: "org",
  access: "shield",
  approvals: "checkBadge",
  attendanceall: "bars",
  leaveall: "calendarDate",
  kpiorg: "target",
  export: "floppy",
  menusettings: "sliders",
  orgsettings: "building",
  onsite: "pin",
};

const NAV_GLYPHS: Record<string, MenuGlyphId> = {
  "/dashboard": "house",
  "/employees": "people",
  "/requests": "checkBadge",
  "/reports": "bars",
  "/profile": "person",
  "/calendar": "calendar",
  "/performance": "clipboardStar",
};

type GlyphProps = { size?: number };

function useMark(prefix: string) {
  return `${prefix}-${useId().replace(/:/g, "")}`;
}

function Frame({ size, children }: { size: number; children: ReactNode }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" aria-hidden className="shrink-0">
      {children}
    </svg>
  );
}

function SoftShadow({ id }: { id: string }) {
  return (
    <filter id={id} x="-20%" y="-10%" width="140%" height="150%">
      <feDropShadow dx="0" dy="1.6" stdDeviation="1.3" floodColor="#1a2a22" floodOpacity="0.22" />
    </filter>
  );
}

function House({ size = 40 }: GlyphProps) {
  const s = useMark("h");
  return (
    <Frame size={size}>
      <defs>
        <SoftShadow id={s} />
        <linearGradient id={`${s}-r`} x1="12" y1="10" x2="36" y2="24">
          <stop stopColor="#F4A24A" />
          <stop offset="1" stopColor="#D97706" />
        </linearGradient>
        <linearGradient id={`${s}-w`} x1="14" y1="22" x2="34" y2="42">
          <stop stopColor="#FFF6E8" />
          <stop offset="1" stopColor="#E8C9A0" />
        </linearGradient>
      </defs>
      <g filter={`url(#${s})`}>
        <path d="M7.5 22.8 L24 9.2 L40.5 22.8 V25 L24 11.6 L7.5 25 Z" fill={`url(#${s}-r)`} />
        <rect x="30.2" y="10.8" width="3.6" height="8" rx="0.7" fill="#B45309" />
        <path d="M10.5 23.2 H37.5 V40.6 C37.5 41.7 36.6 42.6 35.5 42.6 H12.5 C11.4 42.6 10.5 41.7 10.5 40.6 Z" fill={`url(#${s}-w)`} />
        <rect x="20.4" y="29.4" width="7.4" height="13.2" rx="1" fill="#8B5A2B" />
        <rect x="14" y="27" width="6.2" height="6.2" rx="1" fill="#7DD3FC" />
        <rect x="27.8" y="27" width="6.2" height="6.2" rx="1" fill="#7DD3FC" />
      </g>
    </Frame>
  );
}

function CheckBadge({ size = 40 }: GlyphProps) {
  const s = useMark("ck");
  return (
    <Frame size={size}>
      <defs>
        <SoftShadow id={s} />
        <linearGradient id={`${s}-g`} x1="10" y1="6" x2="38" y2="42">
          <stop stopColor="#4ADE80" />
          <stop offset="0.45" stopColor="#22C55E" />
          <stop offset="1" stopColor="#15803D" />
        </linearGradient>
      </defs>
      <g filter={`url(#${s})`}>
        <rect x="7" y="7" width="34" height="34" rx="8" fill={`url(#${s}-g)`} />
        <path d="M11 12 H37" stroke="#86EFAC" strokeWidth="3" strokeLinecap="round" opacity="0.55" />
        <path
          d="M15.5 24.8 L21.6 30.6 L33.2 17.6"
          stroke="#fff"
          strokeWidth="4.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </Frame>
  );
}

function People({ size = 40 }: GlyphProps) {
  const s = useMark("pp");
  return (
    <Frame size={size}>
      <defs>
        <SoftShadow id={s} />
        <linearGradient id={`${s}-a`} x1="8" y1="10" x2="28" y2="40">
          <stop stopColor="#5B9BFF" />
          <stop offset="1" stopColor="#2563EB" />
        </linearGradient>
        <linearGradient id={`${s}-b`} x1="22" y1="12" x2="42" y2="40">
          <stop stopColor="#93C5FD" />
          <stop offset="1" stopColor="#3B82F6" />
        </linearGradient>
      </defs>
      <g filter={`url(#${s})`}>
        <circle cx="30.5" cy="16.5" r="6.2" fill={`url(#${s}-b)`} />
        <path d="M21 38.5 C21 31.4 25.2 26.8 30.5 26.8 C35.8 26.8 40 31.4 40 38.5 Z" fill={`url(#${s}-b)`} />
        <circle cx="18" cy="16" r="7" fill={`url(#${s}-a)`} />
        <path d="M6.5 39 C6.5 30.8 11.4 25.4 18 25.4 C24.6 25.4 29.5 30.8 29.5 39 Z" fill={`url(#${s}-a)`} />
      </g>
    </Frame>
  );
}

function Person({ size = 40 }: GlyphProps) {
  const s = useMark("pr");
  return (
    <Frame size={size}>
      <defs>
        <SoftShadow id={s} />
        <linearGradient id={`${s}-g`} x1="12" y1="8" x2="36" y2="42">
          <stop stopColor="#60A5FA" />
          <stop offset="1" stopColor="#1D4ED8" />
        </linearGradient>
      </defs>
      <g filter={`url(#${s})`}>
        <circle cx="24" cy="16.5" r="8" fill={`url(#${s}-g)`} />
        <path d="M9 40.5 C9 31.2 15.2 25.2 24 25.2 C32.8 25.2 39 31.2 39 40.5 Z" fill={`url(#${s}-g)`} />
      </g>
    </Frame>
  );
}

function PersonAdd({ size = 40 }: GlyphProps) {
  const s = useMark("pa");
  return (
    <Frame size={size}>
      <defs>
        <SoftShadow id={s} />
      </defs>
      <g filter={`url(#${s})`}>
        <circle cx="20" cy="16" r="7.2" fill="#2563EB" />
        <path d="M8 39.5 C8 31.4 13.4 26 20 26 C26.6 26 32 31.4 32 39.5 Z" fill="#2563EB" />
        <circle cx="35" cy="15" r="8" fill="#22C55E" />
        <path d="M35 11.2 V18.8 M31.2 15 H38.8" stroke="#fff" strokeWidth="2.4" strokeLinecap="round" />
      </g>
    </Frame>
  );
}

function Bars({ size = 40 }: GlyphProps) {
  const s = useMark("br");
  return (
    <Frame size={size}>
      <defs>
        <SoftShadow id={s} />
      </defs>
      <g filter={`url(#${s})`}>
        <rect x="8.5" y="26.5" width="8" height="13.5" rx="1.4" fill="#4ADE80" />
        <rect x="20" y="16" width="8" height="24" rx="1.4" fill="#3B82F6" />
        <rect x="31.5" y="21.5" width="8" height="18.5" rx="1.4" fill="#F5C542" />
        <path d="M12.5 24.2 L24 15.6 L35.5 20.2" stroke="#2563EB" strokeWidth="2.1" fill="none" strokeLinejoin="round" />
        <circle cx="12.5" cy="24.2" r="2.05" fill="#2563EB" />
        <circle cx="24" cy="15.6" r="2.05" fill="#2563EB" />
        <circle cx="35.5" cy="20.2" r="2.05" fill="#2563EB" />
      </g>
    </Frame>
  );
}

function Calendar({ size = 40 }: GlyphProps) {
  const s = useMark("ca");
  return (
    <Frame size={size}>
      <defs>
        <SoftShadow id={s} />
        <linearGradient id={`${s}-p`} x1="10" y1="10" x2="38" y2="18">
          <stop stopColor="#F87171" />
          <stop offset="1" stopColor="#B91C1C" />
        </linearGradient>
      </defs>
      <g filter={`url(#${s})`}>
        <rect x="8" y="11.5" width="32" height="28.5" rx="5" fill="#FFFDF8" stroke="#E7D7C3" />
        <rect x="8" y="11.5" width="32" height="9.5" rx="5" fill={`url(#${s}-p)`} />
        <rect x="8" y="17" width="32" height="4" fill={`url(#${s}-p)`} />
        <circle cx="15.4" cy="11.5" r="2.15" fill="#7F1D1D" />
        <circle cx="32.6" cy="11.5" r="2.15" fill="#7F1D1D" />
        <rect x="13" y="24.2" width="4.8" height="4.8" rx="0.8" fill="#E5E7EB" />
        <rect x="21.6" y="24.2" width="4.8" height="4.8" rx="0.8" fill="#E5E7EB" />
        <rect x="30.2" y="24.2" width="4.8" height="4.8" rx="0.8" fill="#22C55E" />
        <rect x="13" y="31.4" width="4.8" height="4.8" rx="0.8" fill="#E5E7EB" />
        <rect x="21.6" y="31.4" width="4.8" height="4.8" rx="0.8" fill="#E5E7EB" />
        <rect x="30.2" y="31.4" width="4.8" height="4.8" rx="0.8" fill="#E5E7EB" />
      </g>
    </Frame>
  );
}

function CalendarDate({ size = 40 }: GlyphProps) {
  const s = useMark("cd");
  return (
    <Frame size={size}>
      <defs>
        <SoftShadow id={s} />
      </defs>
      <g filter={`url(#${s})`}>
        <rect x="9" y="8" width="30" height="33" rx="4" fill="#FFF" stroke="#E5E7EB" />
        <path d="M9 8 H39 V19 H9 Z" fill="#E11D2A" />
        <path d="M9 8 H39 V12 C39 9.8 37.2 8 35 8 H13 C10.8 8 9 9.8 9 12 Z" fill="#E11D2A" />
        <text
          x="24"
          y="16.4"
          textAnchor="middle"
          fontSize="6.4"
          fontWeight="800"
          fill="#fff"
          fontFamily="ui-sans-serif, system-ui"
        >
          July
        </text>
        <text
          x="24"
          y="36.6"
          textAnchor="middle"
          fontSize="16"
          fontWeight="800"
          fill="#1F2937"
          fontFamily="ui-sans-serif, system-ui"
        >
          17
        </text>
      </g>
    </Frame>
  );
}

function Clock({ size = 40 }: GlyphProps) {
  const s = useMark("cl");
  return (
    <Frame size={size}>
      <defs>
        <SoftShadow id={s} />
        <radialGradient id={`${s}-f`} cx="0.35" cy="0.3" r="0.8">
          <stop stopColor="#FFFFFF" />
          <stop offset="1" stopColor="#F1F5F9" />
        </radialGradient>
      </defs>
      <g filter={`url(#${s})`}>
        <circle cx="24" cy="24.8" r="15.6" fill="#D1D5DB" />
        <circle cx="24" cy="24.8" r="13.2" fill={`url(#${s}-f)`} />
        <g stroke="#111" strokeWidth="1.15" strokeLinecap="round">
          <path d="M24 13.2 V15.4" />
          <path d="M24 34.2 V36.4" />
          <path d="M13.2 24.8 H15.4" />
          <path d="M32.6 24.8 H34.8" />
          <path d="M16.4 17.2 L17.8 18.6" />
          <path d="M30.2 31 L31.6 32.4" />
          <path d="M16.4 32.4 L17.8 31" />
          <path d="M30.2 18.6 L31.6 17.2" />
        </g>
        <path d="M24 24.8 V16.2" stroke="#111" strokeWidth="2.4" strokeLinecap="round" />
        <path d="M24 24.8 L31.6 28.8" stroke="#111" strokeWidth="2.2" strokeLinecap="round" />
        <path d="M24 24.8 L34.4 24.8" stroke="#E11D2A" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="24" cy="24.8" r="1.8" fill="#111" />
      </g>
    </Frame>
  );
}

function Alarm({ size = 40 }: GlyphProps) {
  const s = useMark("al");
  return (
    <Frame size={size}>
      <defs>
        <SoftShadow id={s} />
        <linearGradient id={`${s}-r`} x1="12" y1="8" x2="36" y2="40">
          <stop stopColor="#F87171" />
          <stop offset="1" stopColor="#B91C1C" />
        </linearGradient>
      </defs>
      <g filter={`url(#${s})`}>
        <ellipse cx="14" cy="11.4" rx="5.3" ry="4.3" fill={`url(#${s}-r)`} />
        <ellipse cx="34" cy="11.4" rx="5.3" ry="4.3" fill={`url(#${s}-r)`} />
        <circle cx="24" cy="26.4" r="15.2" fill={`url(#${s}-r)`} />
        <circle cx="24" cy="26.4" r="11.5" fill="#FAFAFA" />
        <g stroke="#111" strokeWidth="1.25" strokeLinecap="round">
          <path d="M24 16.1 V17.9" />
          <path d="M24 34.9 V36.7" />
          <path d="M14.5 26.4 H16.3" />
          <path d="M31.7 26.4 H33.5" />
        </g>
        <path d="M24 26.4 V18.5" stroke="#111" strokeWidth="2.3" strokeLinecap="round" />
        <path d="M24 26.4 H31.5" stroke="#111" strokeWidth="2.1" strokeLinecap="round" />
        <path d="M24 26.4 L32.8 31.2" stroke="#E11D2A" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="24" cy="26.4" r="1.7" fill="#111" />
        <path d="M16 40.4 L13.2 43.6" stroke="#B91C1C" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M32 40.4 L34.8 43.6" stroke="#B91C1C" strokeWidth="2.5" strokeLinecap="round" />
      </g>
    </Frame>
  );
}

function Palm({ size = 40 }: GlyphProps) {
  const s = useMark("pm");
  return (
    <Frame size={size}>
      <defs>
        <SoftShadow id={s} />
      </defs>
      <g filter={`url(#${s})`}>
        <ellipse cx="24" cy="42" rx="11.5" ry="2.7" fill="#E8C98A" />
        <path d="M22.6 41 C21.4 30 22.2 20 24.4 13 C26.2 20 27 31 25.4 41 Z" fill="#A67C3D" />
        <path d="M24.2 15 C13 8 8 14 11 19 C16 14 22 16 24.2 17 Z" fill="#22C55E" />
        <path d="M24.2 15 C36 7 42 14 38 19 C33 14 27 16 24.2 17 Z" fill="#16A34A" />
        <path d="M24.2 16 C18 5 11 6 11 12 C17 11 22 15 24.2 17 Z" fill="#4ADE80" />
        <path d="M24.2 16 C31 5 38 6 38 12 C32 11 27 15 24.2 17 Z" fill="#22C55E" />
        <path d="M24.2 17 C24.2 8 20 7 20 12 C22 13 24 16 24.2 17 Z" fill="#15803D" />
      </g>
    </Frame>
  );
}

function Bills({ size = 40 }: GlyphProps) {
  const s = useMark("bi");
  return (
    <Frame size={size}>
      <defs>
        <SoftShadow id={s} />
      </defs>
      <g filter={`url(#${s})`}>
        <g transform="rotate(-18 24 24)">
          <rect x="10" y="10" width="28" height="16" rx="2.5" fill="#4ADE80" />
        </g>
        <g transform="rotate(-8 24 26)">
          <rect x="9" y="16" width="30" height="17" rx="2.5" fill="#22C55E" />
        </g>
        <rect x="8.5" y="21" width="31" height="17.5" rx="2.5" fill="#15803D" />
        <rect x="10.5" y="23.2" width="27" height="13.2" rx="1.6" fill="#86EFAC" />
        <text x="24" y="33.2" textAnchor="middle" fontSize="11" fontWeight="800" fill="#14532D" fontFamily="ui-sans-serif, system-ui">
          $
        </text>
      </g>
    </Frame>
  );
}

function MoneyBag({ size = 40 }: GlyphProps) {
  const s = useMark("mb");
  return (
    <Frame size={size}>
      <defs>
        <SoftShadow id={s} />
        <linearGradient id={`${s}-g`} x1="14" y1="10" x2="34" y2="42">
          <stop stopColor="#FDE68A" />
          <stop offset="0.45" stopColor="#F5C542" />
          <stop offset="1" stopColor="#D97706" />
        </linearGradient>
      </defs>
      <g filter={`url(#${s})`}>
        <ellipse cx="24" cy="14.2" rx="3.3" ry="2.2" fill="#E8B230" />
        <path d="M18.5 16.5 C18.5 14.1 20.7 12.1 24 12.1 C27.3 12.1 29.5 14.1 29.5 16.5 V17.7 H32.7 C34.9 17.7 36.5 19.8 36.3 22.1 C35.7 30.3 31.7 38.7 24 41.7 C16.3 38.7 12.2 30.3 11.6 22.1 C11.4 19.8 13 17.7 15.2 17.7 H18.5 V16.5 Z" fill={`url(#${s}-g)`} />
        <path d="M18.5 17.8 H29.5" stroke="#C98912" strokeWidth="2.2" strokeLinecap="round" />
        <ellipse cx="20" cy="24" rx="3" ry="5" fill="#FFE9A0" opacity="0.45" />
        <text x="24" y="32.6" textAnchor="middle" fontSize="12" fontWeight="800" fill="#6B3F08" fontFamily="ui-sans-serif, system-ui">
          $
        </text>
      </g>
    </Frame>
  );
}

function WingedDollar({ size = 40 }: GlyphProps) {
  const s = useMark("wd");
  return (
    <Frame size={size}>
      <defs>
        <SoftShadow id={s} />
      </defs>
      <g filter={`url(#${s})`}>
        <path d="M11 20 C4 14 5 8 12 12 C8 16 10 19 12 20 Z" fill="#F8FAFC" stroke="#CBD5E1" />
        <path d="M37 20 C44 14 43 8 36 12 C40 16 38 19 36 20 Z" fill="#F8FAFC" stroke="#CBD5E1" />
        <path d="M11 30 C4 36 5 42 12 38 C8 34 10 31 12 30 Z" fill="#F1F5F9" stroke="#CBD5E1" />
        <path d="M37 30 C44 36 43 42 36 38 C40 34 38 31 36 30 Z" fill="#F1F5F9" stroke="#CBD5E1" />
        <rect x="12" y="18" width="24" height="14" rx="2.4" fill="#22C55E" />
        <rect x="14" y="20" width="20" height="10" rx="1.4" fill="#86EFAC" />
        <text x="24" y="28.2" textAnchor="middle" fontSize="9" fontWeight="800" fill="#14532D" fontFamily="ui-sans-serif, system-ui">
          $
        </text>
      </g>
    </Frame>
  );
}

function Scroll({ size = 40 }: GlyphProps) {
  const s = useMark("sc");
  return (
    <Frame size={size}>
      <defs>
        <SoftShadow id={s} />
        <linearGradient id={`${s}-p`} x1="14" y1="10" x2="34" y2="40">
          <stop stopColor="#FBF3D8" />
          <stop offset="1" stopColor="#E8C98A" />
        </linearGradient>
      </defs>
      <g filter={`url(#${s})`}>
        <path d="M14 12 H34 C36.4 12 38 13.6 38 15.6 V35.1 C38 37.1 36.4 38.7 34 38.7 H14 C11.6 38.7 10 37.1 10 35.1 V15.6 C10 13.6 11.6 12 14 12 Z" fill={`url(#${s}-p)`} />
        <path d="M10 14.2 C10 11.4 13.2 9.4 16.4 10.2 C19 10.8 20 13 20 15 V17 H14 C11.8 17 10 15.7 10 14.2 Z" fill="#E8C98A" />
        <ellipse cx="15.2" cy="13.4" rx="4.2" ry="3.4" fill="#F6E2B3" />
        <path d="M38 36.2 C38 39 34.8 41 31.6 40.2 C29 39.6 28 37.4 28 35.4 V33.4 H34 C36.2 33.4 38 34.7 38 36.2 Z" fill="#D4B078" />
        <ellipse cx="32.8" cy="36.6" rx="4.2" ry="3.4" fill="#E8C98A" />
        <rect x="16" y="20" width="16" height="1.6" rx="0.7" fill="#D6B56A" />
        <rect x="16" y="24.4" width="13" height="1.6" rx="0.7" fill="#D6B56A" />
        <rect x="16" y="28.8" width="15" height="1.6" rx="0.7" fill="#D6B56A" />
      </g>
    </Frame>
  );
}

function Heart({ size = 40 }: GlyphProps) {
  const s = useMark("ht");
  return (
    <Frame size={size}>
      <defs>
        <SoftShadow id={s} />
        <linearGradient id={`${s}-g`} x1="12" y1="12" x2="34" y2="38">
          <stop stopColor="#FB7185" />
          <stop offset="1" stopColor="#E11D48" />
        </linearGradient>
      </defs>
      <g filter={`url(#${s})`}>
        <path
          d="M24 39 C12 29 8 22 8 16.5 C8 11.5 12 8 16.5 8 C19.8 8 22.3 9.8 24 12.5 C25.7 9.8 28.2 8 31.5 8 C36 8 40 11.5 40 16.5 C40 22 36 29 24 39 Z"
          fill={`url(#${s}-g)`}
        />
      </g>
    </Frame>
  );
}

function Target({ size = 40 }: GlyphProps) {
  const s = useMark("tg");
  return (
    <Frame size={size}>
      <defs>
        <SoftShadow id={s} />
      </defs>
      <g filter={`url(#${s})`}>
        <circle cx="24" cy="24" r="16" fill="#FEE2E2" stroke="#F87171" strokeWidth="2" />
        <circle cx="24" cy="24" r="10.5" fill="#FECACA" />
        <circle cx="24" cy="24" r="5.5" fill="#EF4444" />
        <circle cx="24" cy="24" r="2" fill="#FFF" />
      </g>
    </Frame>
  );
}

function Clipboard({ size = 40 }: GlyphProps) {
  const s = useMark("cb");
  return (
    <Frame size={size}>
      <defs>
        <SoftShadow id={s} />
      </defs>
      <g filter={`url(#${s})`}>
        <rect x="13" y="11" width="22" height="29" rx="3" fill="#F6C453" />
        <rect x="15" y="14.5" width="18" height="23.5" rx="1.5" fill="#FEF9C3" />
        <rect x="17.5" y="7.2" width="13" height="8.2" rx="2.2" fill="#CBD5E1" />
        <rect x="19.2" y="9" width="9.6" height="4.4" rx="1.2" fill="#94A3B8" />
        <rect x="17.5" y="20" width="13" height="1.7" rx="0.8" fill="#E8D48B" />
        <rect x="17.5" y="24.2" width="11" height="1.7" rx="0.8" fill="#E8D48B" />
        <rect x="17.5" y="28.4" width="12" height="1.7" rx="0.8" fill="#E8D48B" />
      </g>
    </Frame>
  );
}

function ClipboardStar({ size = 40 }: GlyphProps) {
  const s = useMark("cs");
  return (
    <Frame size={size}>
      <defs>
        <SoftShadow id={s} />
      </defs>
      <g filter={`url(#${s})`}>
        <rect x="11" y="10" width="22" height="29" rx="4" fill="#EEF2FF" stroke="#A5B4FC" />
        <rect x="16" y="7" width="12" height="6.5" rx="2" fill="#6366F1" />
        <path d="M22 21.2 L23.6 25.2 L28 25.6 L24.7 28.4 L25.7 32.6 L22 30.4 L18.3 32.6 L19.3 28.4 L16 25.6 L20.4 25.2 Z" fill="#F59E0B" />
      </g>
    </Frame>
  );
}

function Meeting({ size = 40 }: GlyphProps) {
  const s = useMark("mt");
  return (
    <Frame size={size}>
      <defs>
        <SoftShadow id={s} />
      </defs>
      <g filter={`url(#${s})`}>
        <rect x="8" y="22" width="32" height="16" rx="3" fill="#CBD5E1" />
        <rect x="10" y="24" width="28" height="6" rx="1.5" fill="#F8FAFC" />
        <circle cx="17" cy="14" r="5" fill="#3B82F6" />
        <circle cx="31" cy="14" r="5" fill="#22C55E" />
      </g>
    </Frame>
  );
}

function Shield({ size = 40 }: GlyphProps) {
  const s = useMark("sh");
  return (
    <Frame size={size}>
      <defs>
        <SoftShadow id={s} />
        <linearGradient id={`${s}-g`} x1="14" y1="8" x2="34" y2="40">
          <stop stopColor="#38BDF8" />
          <stop offset="1" stopColor="#0369A1" />
        </linearGradient>
      </defs>
      <g filter={`url(#${s})`}>
        <path d="M24 7 L38 13 V24 C38 32 32 38 24 41 C16 38 10 32 10 24 V13 Z" fill={`url(#${s}-g)`} />
        <path d="M18 24.2 L22.2 28.3 L31 18.8" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      </g>
    </Frame>
  );
}

function Org({ size = 40 }: GlyphProps) {
  const s = useMark("og");
  return (
    <Frame size={size}>
      <defs>
        <SoftShadow id={s} />
      </defs>
      <g filter={`url(#${s})`}>
        <rect x="18" y="7" width="12" height="10" rx="2.5" fill="#34D399" />
        <rect x="7" y="30" width="12" height="10" rx="2.5" fill="#60A5FA" />
        <rect x="29" y="30" width="12" height="10" rx="2.5" fill="#FBBF24" />
        <path d="M24 17 V24 M13 24 H35 M13 24 V30 M35 24 V30" stroke="#64748B" strokeWidth="2" />
      </g>
    </Frame>
  );
}

function Floppy({ size = 40 }: GlyphProps) {
  const s = useMark("fl");
  return (
    <Frame size={size}>
      <defs>
        <SoftShadow id={s} />
        <linearGradient id={`${s}-b`} x1="12" y1="8" x2="36" y2="40">
          <stop stopColor="#94A3B8" />
          <stop offset="1" stopColor="#334155" />
        </linearGradient>
      </defs>
      <g filter={`url(#${s})`}>
        <path d="M10 11.5 C10 9.6 11.6 8 13.5 8 H32.2 L38 14.2 V36.5 C38 38.4 36.4 40 34.5 40 H13.5 C11.6 40 10 38.4 10 36.5 Z" fill={`url(#${s}-b)`} />
        <rect x="12.5" y="8" width="16.8" height="12" fill="#1E293B" />
        <rect x="14" y="10" width="6" height="7" rx="1" fill="#94A3B8" />
        <rect x="13" y="24" width="22" height="13.5" rx="1.5" fill="#F8FAFC" />
        <rect x="15.5" y="26.5" width="17" height="2" rx="0.6" fill="#CBD5E1" />
        <rect x="15.5" y="30.5" width="12" height="2" rx="0.6" fill="#CBD5E1" />
      </g>
    </Frame>
  );
}

function Sliders({ size = 40 }: GlyphProps) {
  const s = useMark("sl");
  return (
    <Frame size={size}>
      <defs>
        <SoftShadow id={s} />
      </defs>
      <g filter={`url(#${s})`}>
        <rect x="9" y="12" width="30" height="6" rx="3" fill="#CBD5E1" />
        <rect x="9" y="30" width="30" height="6" rx="3" fill="#CBD5E1" />
        <circle cx="18" cy="15" r="6" fill="#22C55E" />
        <circle cx="30" cy="33" r="6" fill="#3B82F6" />
      </g>
    </Frame>
  );
}

function Building({ size = 40 }: GlyphProps) {
  const s = useMark("bd");
  return (
    <Frame size={size}>
      <defs>
        <SoftShadow id={s} />
      </defs>
      <g filter={`url(#${s})`}>
        <rect x="11" y="10" width="26" height="30" rx="2" fill="#94A3B8" />
        <rect x="15" y="14" width="6" height="6" rx="1" fill="#E0F2FE" />
        <rect x="27" y="14" width="6" height="6" rx="1" fill="#E0F2FE" />
        <rect x="15" y="23" width="6" height="6" rx="1" fill="#E0F2FE" />
        <rect x="27" y="23" width="6" height="6" rx="1" fill="#E0F2FE" />
        <rect x="20" y="31" width="8" height="9" fill="#1E293B" />
      </g>
    </Frame>
  );
}

function Pin({ size = 40 }: GlyphProps) {
  const s = useMark("pn");
  return (
    <Frame size={size}>
      <defs>
        <SoftShadow id={s} />
      </defs>
      <g filter={`url(#${s})`}>
        <path d="M24 8 C16 8 11 14 11 21 C11 30 24 42 24 42 C24 42 37 30 37 21 C37 14 32 8 24 8 Z" fill="#EF4444" />
        <circle cx="24" cy="20" r="6" fill="#FEE2E2" />
        <circle cx="24" cy="20" r="3" fill="#B91C1C" />
      </g>
    </Frame>
  );
}

function Bell({ size = 40 }: GlyphProps) {
  const s = useMark("bn");
  return (
    <Frame size={size}>
      <defs>
        <SoftShadow id={s} />
      </defs>
      <g filter={`url(#${s})`}>
        <path d="M14 22 C14 16 18 12 24 12 C30 12 34 16 34 22 V28 L38 33 H10 L14 28 Z" fill="#FBBF24" />
        <path d="M20 35 C21 38 27 38 28 35" stroke="#D97706" strokeWidth="2.4" strokeLinecap="round" />
        <circle cx="24" cy="10" r="2.4" fill="#F59E0B" />
      </g>
    </Frame>
  );
}

function Star({ size = 40 }: GlyphProps) {
  const s = useMark("st");
  return (
    <Frame size={size}>
      <defs>
        <SoftShadow id={s} />
      </defs>
      <g filter={`url(#${s})`}>
        <path
          d="M24 8 L28.2 18.2 L39 19.4 L31 27 L33.2 38 L24 32.2 L14.8 38 L17 27 L9 19.4 L19.8 18.2 Z"
          fill="#F59E0B"
        />
      </g>
    </Frame>
  );
}

function Shift({ size = 40 }: GlyphProps) {
  const s = useMark("sf");
  return (
    <Frame size={size}>
      <defs>
        <SoftShadow id={s} />
      </defs>
      <g filter={`url(#${s})`}>
        <rect x="8" y="12" width="26" height="26" rx="5" fill="#FFF7ED" stroke="#FDBA74" />
        <rect x="8" y="12" width="26" height="8" fill="#F97316" />
        <circle cx="34" cy="34" r="9" fill="#F8FAFC" stroke="#0EA5E9" strokeWidth="2.4" />
        <path d="M34 29.5 V34 L37 36" stroke="#0F172A" strokeWidth="1.8" strokeLinecap="round" />
      </g>
    </Frame>
  );
}

function Apps({ size = 40 }: GlyphProps) {
  const s = useMark("ap");
  return (
    <Frame size={size}>
      <defs>
        <SoftShadow id={s} />
      </defs>
      <g filter={`url(#${s})`}>
        <rect x="8" y="8" width="14" height="14" rx="4" fill="#22C55E" />
        <rect x="26" y="8" width="14" height="14" rx="4" fill="#3B82F6" />
        <rect x="8" y="26" width="14" height="14" rx="4" fill="#F59E0B" />
        <rect x="26" y="26" width="14" height="14" rx="4" fill="#EF4444" />
      </g>
    </Frame>
  );
}

function Generic({ size = 40 }: GlyphProps) {
  const s = useMark("gn");
  return (
    <Frame size={size}>
      <defs>
        <SoftShadow id={s} />
      </defs>
      <g filter={`url(#${s})`}>
        <rect x="10" y="10" width="28" height="28" rx="8" fill="#22C55E" />
      </g>
    </Frame>
  );
}

const GLYPHS: Record<MenuGlyphId, (props: GlyphProps) => ReactNode> = {
  house: House,
  checkBadge: CheckBadge,
  people: People,
  person: Person,
  personAdd: PersonAdd,
  bars: Bars,
  calendar: Calendar,
  calendarDate: CalendarDate,
  clock: Clock,
  alarm: Alarm,
  palm: Palm,
  bills: Bills,
  moneyBag: MoneyBag,
  wingedDollar: WingedDollar,
  scroll: Scroll,
  heart: Heart,
  target: Target,
  clipboard: Clipboard,
  clipboardStar: ClipboardStar,
  meeting: Meeting,
  shield: Shield,
  org: Org,
  floppy: Floppy,
  sliders: Sliders,
  building: Building,
  pin: Pin,
  bell: Bell,
  star: Star,
  shift: Shift,
  apps: Apps,
  generic: Generic,
};

export function MenuGlyph({
  id,
  size = 40,
}: {
  id: MenuGlyphId | string;
  size?: number;
}) {
  const resolved: MenuGlyphId = (id in GLYPHS ? id : MENU_ITEM_GLYPHS[id] ?? "generic") as MenuGlyphId;
  const Glyph = GLYPHS[resolved] ?? Generic;
  return <Glyph size={size} />;
}

export function glyphForMenuItem(itemId: string): MenuGlyphId {
  return MENU_ITEM_GLYPHS[itemId] ?? "generic";
}

export function glyphForNavHref(href: string): MenuGlyphId {
  const path = href.split("?")[0];
  return NAV_GLYPHS[path] ?? "generic";
}
