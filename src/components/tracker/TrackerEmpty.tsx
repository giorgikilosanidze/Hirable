type Props = {
  message: string;
  className?: string;
};

/** Shown when a search or a status filter leaves the list with nothing. */
export default function TrackerEmpty({ message, className = "" }: Props) {
  return (
    <div
      className={`rounded-lg border border-dashed border-border-strong px-5 py-8 text-center ${className}`}
    >
      <div className="text-[13.5px] leading-[1.5] text-text-tertiary">{message}</div>
    </div>
  );
}
