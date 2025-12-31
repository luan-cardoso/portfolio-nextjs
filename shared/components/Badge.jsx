export default function Badge({ children, bg }) {
  const bgValue = typeof bg === "function" ? bg() : bg;
  const style = bgValue ? { backgroundColor: bgValue } : {};

  return (
    <section
      className="flex flex-row items-center gap-x-2 px-3 border border-black/25 rounded-md h-8 cursor-pointer text-[#e6e6e6]"
      style={style}
    >
      {children}
    </section>
  );
}
