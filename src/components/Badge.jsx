export default function Badge({ children }) {
  return (
    <section className="flex flex-row items-center gap-x-2 bg-[#1b1b1b] px-3 border border-[#252525] rounded-md h-8">
      {children}
    </section>
  );
}
