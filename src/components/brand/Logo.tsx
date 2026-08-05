import Link from "next/link";

type Props = {
  size?: number;
  wordmarkSize?: number;
  gap?: number;
};

/**
 * The Hirable lockup: a rounded square holding an abstract "H" — two
 * vertical bars and a crossbar — beside the wordmark. Every dimension
 * scales off `size`, matching the ratios in the design system.
 */
export default function Logo({ size = 30, wordmarkSize = 17, gap = 10 }: Props) {
  const barWidth = size / 8;
  const barHeight = size * 0.4667;
  const inset = size * 0.2667;

  return (
    <Link
      href="/"
      className="flex flex-none items-center text-text-primary no-underline hover:no-underline"
      style={{ gap }}
      aria-label="Hirable home"
    >
      <span
        aria-hidden
        className="relative flex flex-none items-center justify-center bg-logo-bg"
        style={{ width: size, height: size, borderRadius: size * 0.3 }}
      >
        <span
          className="absolute rounded-[1.5px] bg-white"
          style={{ left: inset, width: barWidth, height: barHeight }}
        />
        <span
          className="absolute rounded-[1.5px] bg-indigo-400"
          style={{ right: inset, width: barWidth, height: barHeight }}
        />
        <span
          className="rounded-[1.5px] bg-indigo-400"
          style={{ width: barHeight, height: barWidth }}
        />
      </span>
      <span
        className="font-semibold tracking-[-.03em]"
        style={{ fontSize: wordmarkSize }}
      >
        Hirable
      </span>
    </Link>
  );
}
