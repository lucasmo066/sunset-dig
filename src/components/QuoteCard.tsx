import Image from "next/image";

export function QuoteCard() {
  return (
    <div className="border-2 rounded shadow-md border-neutral-200 w-full flex flex-col bg-zinc-100 py-4 px-4 h-80 relative">
      {/* Quote */}
      <p className="text-4xl font-semibold text-black mb-auto">
        &quot;Very nice.&quot;
      </p>
      {/* Borat Sagdiyev */}
      <p className="text-md font-light text-black absolute bottom-6 left-6">
        - Borat Sagdiyev
      </p>
      {/* Image */}
      <div className="absolute bottom-1 right-10">
        <Image
          src="/boratnice.png"
          alt="Borat"
          height={270}
          width={270}
          loading="lazy"
          className="mx-auto object-cover"
        />
      </div>
    </div>
  );
}
