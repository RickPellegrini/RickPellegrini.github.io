export default function FirstTransition() {
  return (
    <div className="min-h-[40vh] flex items-center justify-between px-16 bg-amber-50">
      <div className="flex-1 flex justify-start">
        <p
          className="text-4xl text-green-950"
          style={{ fontFamily: "var(--font-poiret-one)" }}
        >
          23.5879° S
        </p>
      </div>

      <div className="flex-1 flex justify-end">
        <p
          className="text-4xl text-green-950"
          style={{ fontFamily: "var(--font-poiret-one)" }}
        >
          46.6578° W
        </p>
      </div>
    </div>
  );
}
