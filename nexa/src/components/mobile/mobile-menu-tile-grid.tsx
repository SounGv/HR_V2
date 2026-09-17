"use client";

import Link from "next/link";
import { Users } from "lucide-react";
import type { MobileMenuGroup } from "@/config/mobile-menu";
import { MenuGlyph } from "./menu-glyphs";

/**
 * Two-column object-icon cards — the mobile menu language of the MUTD HR
 * home grid (illustrated glyph on the left, title + hint on the right)
 * instead of the previous 4-column monochrome Lucide row.
 */
export function MobileMenuTileGrid({ groups, hrStartIndex }: { groups: MobileMenuGroup[]; hrStartIndex?: number }) {
  return (
    <>
      {groups.map((group, i) => (
        <section key={group.title}>
          {i === hrStartIndex && i > 0 && (
            <div className="mb-4 flex items-center gap-2 px-1 text-[11px] font-semibold text-muted-foreground">
              <Users className="size-3.5" />
              สำหรับหัวหน้างาน / ฝ่ายบุคคล
              <span className="h-px flex-1 bg-border" />
            </div>
          )}
          <h2 className="mb-3 flex items-center gap-2 px-1 text-[13px] font-bold text-foreground">
            <span className="h-3.5 w-1 shrink-0 rounded-full bg-icon-chip-fg" />
            {group.title}
          </h2>
          <div className="grid grid-cols-2 gap-2.5">
            {group.items.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                className="flex min-h-[76px] items-center gap-3 rounded-2xl bg-card px-3 py-3 shadow-sm ring-1 ring-black/5 transition active:scale-[0.98] active:bg-muted"
              >
                <MenuGlyph id={item.id} size={40} />
                <span className="min-w-0 flex-1">
                  <span className="block truncate text-[13.5px] font-bold leading-tight text-foreground">
                    {item.label}
                  </span>
                  <span className="mt-0.5 block truncate text-[11px] leading-snug text-muted-foreground">
                    {item.hint}
                  </span>
                </span>
              </Link>
            ))}
          </div>
        </section>
      ))}
    </>
  );
}
