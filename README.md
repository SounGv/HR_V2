# HR_V2

GV One mobile menu icons — illustrated objects (MUTD HR language) instead of monochrome Lucide strokes.

Drop these files onto `SounGv/GV-HR` at the same paths:

- `nexa/src/components/mobile/menu-glyphs.tsx`
- `nexa/src/components/mobile/mobile-menu-tile-grid.tsx`
- `nexa/src/components/mobile/mobile-dashboard-view.tsx`
- `nexa/src/components/mobile/index.ts`
- `nexa/src/components/mobile/modules/hr-modules.tsx`
- `nexa/src/config/mobile-menu.ts`
- `nexa/src/components/layout/mobile-bottom-nav.tsx`

Live catalog (public):

- https://html-preview.github.io/?url=https://raw.githubusercontent.com/SounGv/HR_V2/cursor/mobile-realistic-icons-dab3/preview/mobile-menu.html
- GitHub Pages (if the workflow succeeds): https://soungv.github.io/HR_V2/

This repo cannot push to `SounGv/GV-HR`, so https://gv-hr.vercel.app is unchanged until those drop-in files are merged there.

MUTD object → GV One menu:

| MUTD | Object | GV One |
| --- | --- | --- |
| รออนุมัติ | green check square | approvals |
| ค่าจ้าง | yellow money bag | moneyBag glyph (payroll tab when present) |
| ค้างจ่าย | red alarm clock | overtime / timeedit |
| รายงาน | bars + line | attendanceall / reports |
| พนักงาน | two people | emplist |
| บันทึกเวลา | analog clock | checkin |
| วันย | clipboard | review |
| ค่าใช้จ่าย | stacked bills | expense |
| เบิกล่วงหน้า | winged dollar | `wingedDollar` (no matching item yet) |
| ตารางงาน | calendar grid | calendar / shift |
| วันหยุด | July 17 calendar | leaveall |
| การลา | palm tree | leave |
| ประวัติแก้ไข | parchment scroll | `scroll` (no matching item yet) |
| สำรองข้อมูล | floppy disk | export |
