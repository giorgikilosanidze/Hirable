import Link from "next/link";
import type { ComponentPropsWithoutRef } from "react";
import { BUTTON_BASE, BUTTON_SIZES, BUTTON_VARIANTS } from "./constants";

type Props = ComponentPropsWithoutRef<typeof Link> & {
  variant?: keyof typeof BUTTON_VARIANTS;
  size?: keyof typeof BUTTON_SIZES;
};

/** A Button that navigates. Same styling contract as Button. */
export default function ButtonLink({
  variant = "primary",
  size = "md",
  className = "",
  ...props
}: Props) {
  return (
    <Link
      className={`${BUTTON_BASE} ${BUTTON_SIZES[size]} ${BUTTON_VARIANTS[variant]} no-underline hover:no-underline ${className}`}
      {...props}
    />
  );
}
