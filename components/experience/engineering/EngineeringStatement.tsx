export default function EngineeringStatement() {
  return (
    <div className="flex min-h-[75vh] items-center">
      <div className="mx-auto w-full max-w-[1400px] px-6 py-32 sm:px-10 lg:px-16">

        <div className="max-w-4xl">

          <p
            id="engineering-heading"
            className="
              max-w-3xl
              text-balance
              text-[clamp(2.25rem,4.5vw,5rem)]
              font-light
              leading-[0.98]
              tracking-[-0.04em]
              text-[var(--vs-text)]
            "
          >
            Effortless living is engineered.
          </p>

          <p
            className="
              mt-8
              max-w-2xl
              text-[clamp(1.75rem,3vw,3.25rem)]
              font-light
              leading-[1.05]
              tracking-[-0.035em]
              text-[var(--vs-text-muted)]
            "
          >
            The complexity should disappear.
          </p>

        </div>

      </div>
    </div>
  );
}