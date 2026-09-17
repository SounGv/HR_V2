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

const MENU_ITEM_GLYPHS: Record<string, MenuGlyphId> = {
  checkin: "clock",
  timeedit: "alarm",
  shift: "shift",
  calendar: "calendar",
  leave: "palm",
  overtime: "alarm",
  expense: "bills",
  benefits: "heart",
  kpi: "target",
  review: "clipboardStar",
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
        <linearGradient id={`${s}-r`} x1="12" y1="14" x2="36" y2="22">
          <stop stopColor="#F4A24A" />
          <stop offset="1" stopColor="#E07A2F" />
        </linearGradient>
        <linearGradient id={`${s}-w`} x1="14" y1="22" x2="34" y2="42">
          <stop stopColor="#FFF6E8" />
          <stop offset="1" stopColor="#F0D9B0" />
        </linearGradient>
      </defs>
      <g filter={`url(#${s})`}>
        <path d="M8 22.5 L24 9.5 L40 22.5 V24.5 L24 12 L8 24.5 Z" fill={`url(#${s}-r)`} />
        <path d="M11 23.5 H37 V40.5 C37 41.6 36.1 42.5 35 42.5 H13 C11.9 42.5 11 41.6 11 40.5 Z" fill={`url(#${s}-w)`} />
        <rect x="20.5" y="29" width="7" height="13.5" rx="1.2" fill="#8B5A2B" />
        <rect x="15" y="27" width="6.5" height="6.5" rx="1" fill="#7EC8E3" />
        <rect x="26.5" y="27" width="6.5" height="6.5" rx="1" fill="#7EC8E3" />
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
        <linearGradient id={`${s}-g`} x1="10" y1="8" x2="38" y2="40">
          <stop stopColor="#3DDC84" />
          <stop offset="1" stopColor="#16A34A" />
        </linearGradient>
      </defs>
      <g filter={`url(#${s})`}>
        <rect x="8" y="8" width="32" height="32" rx="10" fill={`url(#${s}-g)`} />
        <path
          d="M16.5 24.2 L21.4 29.1 L32.2 18.2"
          stroke="#fff"
          strokeWidth="3.6"
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
        <rect x="9" y="26" width="8" height="14" rx="2" fill="#60A5FA" />
        <rect x="20" y="16" width="8" height="24" rx="2" fill="#34D399" />
        <rect x="31" y="21" width="8" height="19" rx="2" fill="#FBBF24" />
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
          <stop offset="1" stopColor="#DC2626" />
        </linearGradient>
      </defs>
      <g filter={`url(#${s})`}>
        <rect x="8.5" y="11" width="31" height="28" rx="6" fill="#FFFDF8" stroke="#E7D7C3" />
        <rect x="8.5" y="11" width="31" height="10" rx="6" fill={`url(#${s}-p)`} />
        <rect x="8.5" y="17" width="31" height="4" fill={`url(#${s}-p)`} />
        <circle cx="16" cy="11" r="2.1" fill="#7F1D1D" />
        <circle cx="32" cy="11" r="2.1" fill="#7F1D1D" />
        <rect x="14" y="25.5" width="5" height="5" rx="1" fill="#E5E7EB" />
        <rect x="21.5" y="25.5" width="5" height="5" rx="1" fill="#E5E7EB" />
        <rect x="29" y="25.5" width="5" height="5" rx="1" fill="#16A34A" />
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
        <rect x="8.5" y="10" width="31" height="29" rx="6" fill="#FFFDF8" stroke="#E7D7C3" />
        <rect x="8.5" y="10" width="31" height="9" rx="6" fill="#EF4444" />
        <rect x="8.5" y="15" width="31" height="4" fill="#EF4444" />
        <text
          x="24"
          y="36"
          textAnchor="middle"
          fontSize="14"
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
          <stop offset="1" stopColor="#E5EEF5" />
        </radialGradient>
      </defs>
      <g filter={`url(#${s})`}>
        <circle cx="24" cy="25" r="15" fill={`url(#${s}-f)`} stroke="#94A3B8" strokeWidth="2" />
        <circle cx="24" cy="25" r="1.8" fill="#0F172A" />
        <path d="M24 25 L24 16.5" stroke="#0F172A" strokeWidth="2.4" strokeLinecap="round" />
        <path d="M24 25 L31 28" stroke="#DC2626" strokeWidth="2.2" strokeLinecap="round" />
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
      </defs>
      <g filter={`url(#${s})`}>
        <path d="M12 14 L6.5 9.5" stroke="#F87171" strokeWidth="3" strokeLinecap="round" />
        <path d="M36 14 L41.5 9.5" stroke="#F87171" strokeWidth="3" strokeLinecap="round" />
        <circle cx="24" cy="26" r="14" fill="#F8FAFC" stroke="#EF4444" strokeWidth="3.2" />
        <circle cx="24" cy="26" r="1.6" fill="#0F172A" />
        <path d="M24 26 L24 18" stroke="#0F172A" strokeWidth="2.2" strokeLinecap="round" />
        <path d="M24 26 L30 29.5" stroke="#EF4444" strokeWidth="2" strokeLinecap="round" />
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
        <ellipse cx="24" cy="41" rx="13" ry="3.2" fill="#E8D5A3" />
        <path d="M23 40 C21 28 22 18 24.5 12 C26.5 18 27.5 29 25.2 40 Z" fill="#C4A35A" />
        <path d="M24.5 14 C14 10 9 16 11 20 C16 16 22 16 24.5 16 Z" fill="#22C55E" />
        <path d="M24.5 14 C35 9 40 15 38 20 C33 16 27 16 24.5 16 Z" fill="#16A34A" />
        <path d="M24.5 15 C20 6 13 6 12 11 C17 11 22 14 24.5 16 Z" fill="#4ADE80" />
        <path d="M24.5 15 C29 6 36 6 37 11 C32 11 27 14 24.5 16 Z" fill="#22C55E" />
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
        <rect x="10" y="12" width="28" height="16" rx="3" fill="#86EFAC" transform="rotate(-8 24 20)" />
        <rect x="9" y="18" width="30" height="18" rx="3" fill="#BBF7D0" stroke="#16A34A" strokeWidth="1.4" />
        <circle cx="24" cy="27" r="5" fill="#FDE68A" stroke="#CA8A04" strokeWidth="1.2" />
        <text x="24" y="30.2" textAnchor="middle" fontSize="8" fontWeight="800" fill="#A16207">
          ฿
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
        <linearGradient id={`${s}-g`} x1="14" y1="12" x2="34" y2="42">
          <stop stopColor="#FCD34D" />
          <stop offset="1" stopColor="#D97706" />
        </linearGradient>
      </defs>
      <g filter={`url(#${s})`}>
        <path d="M19 15 C19 12.5 21 10.5 24 10.5 C27 10.5 29 12.5 29 15 V17 H32 C34.2 17 35.5 19 35.5 21.5 C35.5 30 31 38.5 24 42 C17 38.5 12.5 30 12.5 21.5 C12.5 19 13.8 17 16 17 H19 V15 Z" fill={`url(#${s}-g)`} />
        <path d="M19 17 H29" stroke="#B45309" strokeWidth="2" strokeLinecap="round" />
        <text x="24" y="32" textAnchor="middle" fontSize="11" fontWeight="800" fill="#78350F">
          $
        </text>
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
        <rect x="12" y="10" width="24" height="30" rx="4" fill="#FEF3C7" stroke="#D6B56A" />
        <rect x="17" y="7" width="14" height="7" rx="2.5" fill="#F59E0B" />
        <rect x="16" y="20" width="16" height="2.2" rx="1" fill="#D6B56A" />
        <rect x="16" y="25.5" width="12" height="2.2" rx="1" fill="#D6B56A" />
        <rect x="16" y="31" width="14" height="2.2" rx="1" fill="#D6B56A" />
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
      </defs>
      <g filter={`url(#${s})`}>
        <rect x="10" y="8" width="28" height="32" rx="4" fill="#64748B" />
        <rect x="14" y="8" width="16" height="12" rx="1.5" fill="#E2E8F0" />
        <rect x="14" y="24" width="20" height="12" rx="2" fill="#F8FAFC" />
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
