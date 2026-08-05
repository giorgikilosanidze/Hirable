type Props = {
  size?: number;
  radius?: number;
};

/**
 * The rotated indigo→teal chip that marks machine-generated content.
 * Appears next to every "Hirable AI" overline.
 */
export default function AiDiamond({ size = 9, radius = 1.5 }: Props) {
  return (
    <span
      aria-hidden
      className="ai-diamond inline-block flex-none"
      style={{ width: size, height: size, borderRadius: radius }}
    />
  );
}
