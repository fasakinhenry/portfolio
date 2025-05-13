const VerticalBoundaries = () => {
  return (
    <div className="fixed top-0 bottom-0 w-full pointer-events-none -z-0">
      <div className="relative mx-auto max-w-6xl h-full">
        <div className="absolute left-0 top-0 h-screen w-px bg-black/10" />
        <div className="absolute right-0 top-0 h-screen w-px bg-black/10" />
      </div>
    </div>
  );
};

export default VerticalBoundaries;
