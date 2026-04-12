import Image from "next/image";
import Link from "next/link";

type BrandMarkProps = {
  compact?: boolean;
};

export function BrandMark({ compact = false }: BrandMarkProps) {
  return (
    <Link href="/" className="inline-flex items-center gap-3 text-white">
      <Image
        src="/brand/ovrimo-mark.svg"
        alt="Ovrimo logo"
        width={44}
        height={44}
        className="h-11 w-11"
        priority
      />
      {!compact ? (
        <div className="leading-none">
          <div className="font-heading text-xl font-semibold tracking-[-0.03em]">
            Ovrimo
          </div>
          <div className="mt-1 text-xs text-slate-400">Thoughtful digital products</div>
        </div>
      ) : null}
    </Link>
  );
}
