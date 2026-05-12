import Image from "next/image";

import type { ProductScreenshot } from "@/types/product";

export function ScreenshotGallery({
  screenshots,
}: {
  screenshots: ProductScreenshot[];
}) {
  if (!screenshots.length) {
    return (
      <div className="rounded-[28px] border border-dashed border-white/15 bg-white/4 p-10 text-center text-slate-300">

      </div>
    );
  }

  return (
    <div className="grid gap-6 lg:grid-cols-2">
      {screenshots.map((shot) => (
        <figure
          key={shot.src}
          className="overflow-hidden rounded-[28px] border border-white/10 bg-white/5"
        >
          <Image
            src={shot.src}
            alt={shot.alt}
            width={960}
            height={640}
            className="w-full"
          />
          <figcaption className="border-t border-white/10 px-5 py-4 text-sm text-slate-300">
            {shot.caption}
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
