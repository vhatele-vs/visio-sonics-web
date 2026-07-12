"use client";

import Link from "next/link";
import { forwardRef } from "react";
import type {
  ButtonHTMLAttributes,
  AnchorHTMLAttributes,
} from "react";

type ButtonVariant = "primary" | "secondary" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

interface BaseButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  className?: string;
  children: React.ReactNode;
}

type ButtonLinkProps = BaseButtonProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
  };

type ButtonElementProps = BaseButtonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: never;
  };

type ButtonProps = ButtonLinkProps | ButtonElementProps;

const variants = {
  primary:
    "bg-[var(--vs-accent)] text-black hover:bg-[var(--vs-accent-hover)]",

  secondary:
    "border border-white/15 bg-white/5 text-white hover:border-[var(--vs-accent)] hover:bg-white/10",

  ghost:
    "text-white hover:text-[var(--vs-accent)]",
};

const sizes = {
  sm: "h-10 px-5 text-sm",
  md: "h-12 px-7 text-sm",
  lg: "h-14 px-9 text-base",
};

const baseStyles =
  "inline-flex items-center justify-center rounded-full font-medium transition-all duration-300";

const Button = forwardRef<
  HTMLButtonElement | HTMLAnchorElement,
  ButtonProps
>(function Button(
  {
    variant = "primary",
    size = "md",
    fullWidth = false,
    className = "",
    children,
    ...props
  },
  ref
) {
  const styles = [
    baseStyles,
    variants[variant],
    sizes[size],
    fullWidth ? "w-full" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  if ("href" in props && typeof props.href === "string") {
    const {
      href,
      ...anchorProps
    } = props;

    return (
      <Link
        href={href}
        ref={ref as React.Ref<HTMLAnchorElement>}
        className={styles}
        {...anchorProps}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      ref={ref as React.Ref<HTMLButtonElement>}
      type="button"
      className={styles}
      {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {children}
    </button>
  );
});

Button.displayName = "Button";

export default Button;