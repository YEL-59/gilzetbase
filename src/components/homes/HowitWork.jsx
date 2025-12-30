import { UserPlus, UploadCloud, FileText, Trophy } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Register",
    description: "Create your free account in minutes. No credit card required.",
    icon: <UserPlus className="w-6 h-6 text-[#D4AF37]" />,
    bg: "bg-[#FFF9EA]",
  },
  {
    number: "02",
    title: "Submit your photo",
    description: "Submit your photo to participate in the showcase.",
    icon: <UploadCloud className="w-6 h-6 text-[#D4AF37]" />,
    bg: "bg-[#FFF9EA]",
  },
  {
    number: "03",
    title: "Reviewed by our jury",
    description: "Each submission is carefully evaluated by our professional jury.",
    icon: <FileText className="w-6 h-6 text-[#D4AF37]" />,
    bg: "bg-[#FFF9EA]",
  },
  {
    number: "04",
    title: "Awards, certificates, publication",
    description: "Winners receive prestigious awards, official certificates.",
    icon: <Trophy className="w-6 h-6 text-[#D4AF37]" />,
    bg: "bg-[#FFF9EA]",
  },
];

const HowitWork = () => {
  return (
    <div className="w-full py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif mb-4 uppercase tracking-wide">
            How it works
          </h2>
          <p className="text-muted-foreground text-sm md:text-base max-w-2xl mx-auto">
            Submit your work, get reviewed by our jury, and compete for awards and
            publication.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-card rounded-xl p-8 border border-border/50 hover:shadow-lg transition-all duration-300 group"
            >
              <div className="flex items-center gap-4 mb-6">
                <div
                  className={`w-12 h-12 rounded-full ${step.bg} flex items-center justify-center`}
                >
                  {step.icon}
                </div>
                <span className="text-2xl font-serif text-[#D4AF37]">
                  {step.number}
                </span>
              </div>

              <h3 className="text-lg font-semibold mb-3 group-hover:text-primary transition-colors">
                {step.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HowitWork;