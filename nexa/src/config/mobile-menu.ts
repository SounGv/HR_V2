import type { LucideIcon } from "lucide-react";
import {
  ScanLine,
  FilePlus2,
  Timer,
  Clock3,
  CalendarClock,
  CalendarDays,
  Target,
  ClipboardCheck,
  CalendarPlus,
  Wallet,
  HeartPulse,
  SlidersHorizontal,
  UsersRound,
  UserRound,
  UserPlus,
  Network,
  Shield,
  MapPin,
  CalendarRange,
  BarChart3,
  Download,
  Settings2,
} from "lucide-react";

/** Every menu item uses the shared green icon-chip (bg-icon-chip-bg /
 * text-icon-chip-fg) — per-category colors (overtime/calendar/violet) were
 * retired in favor of the monochrome system action-center.tsx and the
 * dashboard KPI cards already use. "profile" is the one deliberate
 * exception: account/personal items stay neutral grey everywhere, the same
 * convention BambooHR/Personio/Deel use for profile avatars and menu rows. */
export type MenuIconTone = "profile";

export interface MobileMenuItem {
  id: string;
  label: string;
  /** One-line hint under the title on the 2-column mobile menu cards. */
  hint: string;
  href: string;
  icon: LucideIcon;
  permission: string;
  tone?: MenuIconTone;
}

export type MobileMenuTone = "primary" | "info" | "warning" | "success" | "destructive";

export interface MobileMenuGroup {
  title: string;
  /** Icon-chip color for every item in this group. Redesign spec: every
   * icon uses the same monochrome-green chip (see MobileMenuTileGrid's
   * TONE_CLASSES) — kept as a field for now so a future exception is a
   * one-line change, not a type change, but it no longer varies visually. */
  tone?: MobileMenuTone;
  items: MobileMenuItem[];
}

/**
 * Personal quick modules, grouped to match the redesign's category names
 * (เวลาทำงาน / การลาและคำขอ / ประเมินและพัฒนา) — everyone sees these.
 */
export const MOBILE_EMPLOYEE_GROUPS: MobileMenuGroup[] = [
  {
    title: "เวลาทำงาน",
    tone: "primary",
    items: [
      { id: "checkin", label: "เข้างาน / ออกงาน", hint: "ดูเวลาลงงาน", href: "/attendance", icon: ScanLine, permission: "attendance:read" },
      { id: "timeedit", label: "แก้เวลาเข้า-ออกงาน", hint: "แก้ไขรายการ", href: "/attendance/corrections/new", icon: Clock3, permission: "attendance:create" },
      { id: "shift", label: "ตารางกะ", hint: "แผนงาน & กะ", href: "/shifts", icon: CalendarClock, permission: "shift:read" },
      { id: "calendar", label: "ปฏิทินองค์กร", hint: "วันหยุด & นัด", href: "/calendar", icon: CalendarDays, permission: "calendar:read" },
    ],
  },
  {
    title: "การลาและคำขอ",
    tone: "primary",
    items: [
      { id: "leave", label: "ขอลา", hint: "คำขอลาทั้งหมด", href: "/leave/new", icon: FilePlus2, permission: "leave:read" },
      { id: "overtime", label: "ขอ OT", hint: "ขอและติดตาม", href: "/overtime/new", icon: Timer, permission: "overtime:read" },
      { id: "expense", label: "เบิกค่าใช้จ่าย", hint: "รายการทั้งหมด", href: "/expenses/new", icon: Wallet, permission: "expense:read" },
      { id: "benefits", label: "สวัสดิการ", hint: "รักษา / กู้", href: "/benefits", icon: HeartPulse, permission: "expense:read" },
    ],
  },
  {
    title: "ประเมินและพัฒนา",
    tone: "primary",
    items: [
      { id: "kpi", label: "KPI ส่วนตัว", hint: "เป้าหมายของฉัน", href: "/kpi", icon: Target, permission: "kpi:read" },
      { id: "review", label: "ประเมินผล", hint: "รอบประเมิน", href: "/performance", icon: ClipboardCheck, permission: "performance:read" },
      { id: "meeting", label: "นัดประชุม", hint: "นัดหมายทีม", href: "/meetings", icon: CalendarPlus, permission: "meeting:read" },
    ],
  },
];

/**
 * Manager/HR add-on modules, grouped to match the redesign's category names
 * (พนักงานและองค์กร / รายงานและสื่อสาร / ข้อมูลระบบ / ระบบ) — shown below a
 * divider, only for accounts with the relevant permissions.
 */
export const MOBILE_HR_GROUPS: MobileMenuGroup[] = [
  {
    title: "พนักงานและองค์กร",
    tone: "primary",
    items: [
      { id: "emplist", label: "รายชื่อพนักงาน", hint: "ข้อมูลทั้งหมด", href: "/employees", icon: UsersRound, permission: "employee:read" },
      { id: "dailyemp", label: "พนักงานรายวัน", hint: "แรงงานรายวัน", href: "/employees?employmentType=DAILY_WORKER", icon: UserRound, permission: "employee:read" },
      { id: "addemp", label: "เพิ่มพนักงาน", hint: "เพิ่มรายใหม่", href: "/employees/new", icon: UserPlus, permission: "employee:create" },
      { id: "orgchart", label: "โครงสร้างองค์กร", hint: "ผังหน่วยงาน", href: "/organization", icon: Network, permission: "employee:read" },
      { id: "access", label: "สิทธิ์การเข้าถึง", hint: "บทบาท & สิทธิ์", href: "/admin", icon: Shield, permission: "admin:read" },
    ],
  },
  {
    title: "รายงานและสื่อสาร",
    tone: "primary",
    items: [
      { id: "approvals", label: "อนุมัติเอกสาร", hint: "ลา OT และเบิก", href: "/workflows?tab=inbox", icon: ClipboardCheck, permission: "workflow:read" },
      { id: "attendanceall", label: "เข้างานทั้งบริษัท", hint: "สรุปทั้งบริษัท", href: "/reports?view=attendance", icon: BarChart3, permission: "report:read" },
      { id: "leaveall", label: "วันลาพนักงาน", hint: "ภาพรวมทีม", href: "/leave?view=overview", icon: CalendarRange, permission: "leave:approve" },
      { id: "kpiorg", label: "KPI องค์กร", hint: "สรุปองค์กร", href: "/kpi?view=org", icon: BarChart3, permission: "kpi:read" },
    ],
  },
  {
    title: "ข้อมูลระบบ",
    tone: "primary",
    items: [
      { id: "export", label: "ส่งออกรายงาน", hint: "ส่งออก CSV", href: "/reports", icon: Download, permission: "report:read" },
      { id: "menusettings", label: "ตั้งค่าเมนูของฉัน", hint: "ซ่อน / แสดงเมนู", href: "/services?view=menu-settings", icon: SlidersHorizontal, permission: "dashboard:read" },
    ],
  },
  {
    title: "ระบบ",
    tone: "primary",
    items: [
      { id: "orgsettings", label: "ตั้งค่าองค์กร", hint: "ข้อมูลบริษัท", href: "/company", icon: Settings2, permission: "admin:read" },
      { id: "onsite", label: "สิทธิ์นอกสถานที่", hint: "พื้นที่เช็คอิน", href: "/attendance/settings", icon: MapPin, permission: "attendance:update" },
    ],
  },
];
