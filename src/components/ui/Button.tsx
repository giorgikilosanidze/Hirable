import type { ComponentPropsWithoutRef } from "react";
import { BUTTON_BASE, BUTTON_SIZES, BUTTON_VARIANTS } from "./constants";

type Props = ComponentPropsWithoutRef<"button"> & {
  variant?: keyof typeof BUTTON_VARIANTS;
  size?: keyof typeof BUTTON_SIZES;
};

export default function Button({
  variant = "primary",
  size = "md",
  className = "",
  type = "button",
  ...props
}: Props) {
  return (
    <button
      type={type}
      className={`${BUTTON_BASE} ${BUTTON_SIZES[size]} ${BUTTON_VARIANTS[variant]} ${className}`}
      {...props}
    />
  );
}
