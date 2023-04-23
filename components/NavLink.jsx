import Link from "next/link";

export function NavLink({ href, children, type = "link" }) {
  const classes =
    "inline-block rounded-lg py-1 px-2 text-sm text-slate-700 hover:bg-slate-100 hover:text-slate-900";
  return type === "link" ? (
    <Link href={href} className={classes}>
      {children}
    </Link>
  ) : (
    <a href={href} className={classes}>
      {children}
    </a>
  );
}
