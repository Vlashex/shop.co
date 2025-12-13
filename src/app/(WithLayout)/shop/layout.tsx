export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <section className="max-w-[1240px] mx-auto w-11/12">
      {children}
    </section>
  );
}
