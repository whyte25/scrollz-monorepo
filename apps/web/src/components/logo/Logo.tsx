"use client";
import { icons } from "@/constants/icons";
import { paths } from "@/constants/paths";
import Image from "next/image";
import Link from "next/link";

export const Logo = ({
  variant = "orange",
  href = paths.public.home,
  className,
}: {
  variant?: "black" | "orange";
  href?: string;
  className?: string;
}) => {
  return (
    <Link href={href}>
      <Image
        src={
          variant === "orange"
            ? icons.LogoIcon1
            : variant === "black"
              ? icons.LogoIcon2
              : null
        }
        alt=""
        height={50}
        width={160}
        className={className}
      />
    </Link>
  );
};
