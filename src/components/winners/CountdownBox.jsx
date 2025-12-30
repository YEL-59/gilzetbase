const CountdownBox = ({ value, label }) => (
  <div className="flex flex-col items-center">
    <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg px-6 py-4 min-w-[80px]">
      <span className="text-white text-4xl md:text-5xl font-bold">
        {String(value).padStart(2, "0")}
      </span>
    </div>
    <span className="text-white/80 text-sm mt-2 uppercase tracking-wider">
      {label}
    </span>
  </div>
);
export default CountdownBox;
