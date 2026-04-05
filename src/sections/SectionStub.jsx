const SectionStub = ({ id, eyebrow, title, copy }) => {
  return (
    <section
      id={id}
      className="relative px-5 py-24 sm:px-8 sm:py-28 lg:px-12 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">
        <div className="glass-panel max-w-3xl rounded-[2rem] p-8 sm:p-10">
          <p className="text-xs uppercase tracking-[0.3em] text-accent">{eyebrow}</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-[-0.05em] text-ink sm:text-5xl">
            {title}
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-8 text-ink-soft sm:text-lg">
            {copy}
          </p>
        </div>
      </div>
    </section>
  );
};

export default SectionStub;
