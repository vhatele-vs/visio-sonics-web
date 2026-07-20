"use client";

import Link from "next/link";
import { forwardRef } from "react";
import type {
  ButtonHTMLAttributes,
  AnchorHTMLAttributes,
} from "react";

import { cn } from "@/lib/utils";

type ButtonVariant =
  | "primary"
  | "secondary"
  | "ghost";

type ButtonSize =
  | "sm"
  | "md"
  | "lg";


interface BaseButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  className?: string;
  children: React.ReactNode;
}


type ButtonLinkProps =
  BaseButtonProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & {
    href: string;
  };


type ButtonElementProps =
  BaseButtonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: never;
  };


type ButtonProps =
  | ButtonLinkProps
  | ButtonElementProps;


const variants = {
  primary: cn(
    "bg-[var(--vs-accent)]",
    "text-white",
    "hover:bg-[var(--vs-accent-hover)]",
    "hover:-translate-y-0.5"
  ),

  secondary: cn(
    "border border-white/15",
    "bg-white/[0.03]",
    "text-white",
    "hover:border-[var(--vs-accent)]",
    "hover:bg-white/[0.06]"
  ),

  ghost: cn(
    "text-white/80",
    "hover:text-[var(--vs-accent)]"
  ),
};


const sizes = {
  sm:
    "min-h-10 px-5 text-xs",

  md:
    "min-h-12 px-8 text-sm",

  lg:
    "min-h-14 px-10 text-sm",
};


const baseStyles = cn(
  "inline-flex",
  "items-center",
  "justify-center",
  "rounded-full",
  "font-medium",
  "uppercase",
  "tracking-[0.18em]",
  "transition-all",
  "duration-300"
);


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
  const styles = cn(
    baseStyles,
    variants[variant],
    sizes[size],
    fullWidth && "w-full",
    className
  );


  if (
    "href" in props &&
    typeof props.href === "string"
  ) {
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


  const {
    type = "button",
    ...buttonProps
  } = props;


  return (
    <button
      ref={ref as React.Ref<HTMLButtonElement>}
      type={type}
      className={styles}
      {...buttonProps}
    >
      {children}
    </button>
  );
});


Button.displayName = "Button";


export default Button;