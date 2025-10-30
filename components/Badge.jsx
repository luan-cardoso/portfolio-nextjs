export default function Badge({ children }) {
  return (
    <section className="flex flex-row items-center gap-x-2 bg-[#1b1b1b] py-1 px-3 border border-[#252525] rounded-md h-10">
      {children}
    </section>
  );
}
