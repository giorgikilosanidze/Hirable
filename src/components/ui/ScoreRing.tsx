import type { ReactNode } from "react";
import { SCORE_RING_CIRCUMFERENCE } from "./constants";

type Props = {
  score: number;
  size: number;
  strokeWidth?: number;
  trackColor?: string;
  progressColor?: string;
  /** Draws a second, muted arc behind — what the score could become. */
  projectedScore?: number;
  projectedColor?: string;
  children: ReactNode;
};

/**
 * The product's score ring: an r=54 circle in a 132 viewBox, swept from
 * empty over 480ms on entrance. `children` is the centred readout.
 */
export default function ScoreRing({
  score,
  size,
  strokeWidth = 12,
  trackColor = "var(--bg-muted)",
  progressColor = "var(--accent)",
  projectedScore,
  projectedColor = "var(--accent-border)",
  children,
}: Props) {
  const offset = SCORE_RING_CIRCUMFERENCE * (1 - score / 100);

  return (
    <div className="relative flex-none" style={{ width: size, height: size }}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 132 132"
        aria-hidden
        className="-rotate-90"
      >
        <circle
          cx="66"
          cy="66"
          r="54"
          fill="none"
          stroke={trackColor}
          strokeWidth={strokeWidth}
        />
        {projectedScore !== undefined && (
          <circle
            cx="66"
            cy="66"
            r="54"
            fill="none"
            stroke={projectedColor}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeDasharray={SCORE_RING_CIRCUMFERENCE}
            strokeDashoffset={
              SCORE_RING_CIRCUMFERENCE * (1 - projectedScore / 100)
            }
          />
        )}
        <circle
          cx="66"
          cy="66"
          r="54"
          fill="none"
          stroke={progressColor}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeDasharray={SCORE_RING_CIRCUMFERENCE}
          strokeDashoffset={offset}
          className="animate-hb-ring"
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        {children}
      </div>
    </div>
  );
}
