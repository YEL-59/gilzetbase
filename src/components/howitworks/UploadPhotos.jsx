const UploadPhotos = () => {
  const guidelines = [
    "JPG format, 20 MB max",
    "Original photography (AI allowed if declared)",
    "Artistic nude permitted (non-pornographic)",
  ];

  return (
    <div className="w-full py-16 bg-white">
      <div className="max-w-3xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-4xl md:text-5xl font-normal text-gray-900 mb-3">
            Upload your Photos
          </h2>
          <p className="text-gray-600 text-base">Submit your best work</p>
        </div>

        {/* Guidelines Box */}
        <div className="bg-white border border-[#CAA844] rounded-xl p-8">
          {/* Guidelines List */}
          <div className="space-y-4 mb-6">
            {guidelines.map((guideline, index) => (
              <div
                key={index}
                className="flex items-start gap-3 border rounded-xl px-4"
              >
                <span className="text-gray-400 text-lg mt-0.5">•</span>
                <p className="text-gray-700 text-base leading-relaxed">
                  {guideline}
                </p>
              </div>
            ))}
          </div>

          {/* Footer Note */}
          <p className="text-gray-600 text-sm text-center pt-4 border-t border-gray-200">
            You may edit or replace your submissions until the deadline
          </p>
        </div>
      </div>
    </div>
  );
};

export default UploadPhotos;
