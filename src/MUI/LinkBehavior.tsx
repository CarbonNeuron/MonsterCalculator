import NextLink from "next/link";
import { ComponentPropsWithoutRef, forwardRef } from "react";

export const LinkBehavior = forwardRef<
  HTMLAnchorElement,
  ComponentPropsWithoutRef<typeof NextLink>
>((props, ref) => {
  const { href, ...other } = props;

  return <NextLink ref={ref} href={href} {...other} />;
});
LinkBehavior.displayName = "LinkBehavior";
