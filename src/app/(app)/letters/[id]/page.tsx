import type { Metadata } from "next";
import LetterEditor from "@/components/letter/LetterEditor";
import { LENGTHS, TONES } from "@/components/letter/constants";
import type { Length, Tone } from "@/components/letter/types";

export const metadata: Metadata = {
  title: "Cover letter — Hirable",
  description:
    "A cover letter built from your matched requirements, in the tone and length you choose.",
};

export default async function LetterPage({
  searchParams,
}: PageProps<"/letters/[id]">) {
  const { tone, length } = await searchParams;

  return (
    <LetterEditor
      initialTone={TONES.some((t) => t.key === tone) ? (tone as Tone) : "direct"}
      initialLength={
        LENGTHS.some((l) => l.key === length) ? (length as Length) : "standard"
      }
    />
  );
}
