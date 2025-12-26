export default function Badge({ children }) {
  return (
    <section className="flex flex-row items-center gap-x-2 bg-white/5 px-3 border border-white/10 rounded-md h-8 cursor-pointer duration-300">
      {children}
    </section>
  );
}
