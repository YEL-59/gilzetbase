import { Banknote, Trophy } from "lucide-react";

const ReceiveRewards = () => {
  return (
    <div className="w-full py-16 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <div className="border border-gray-200 rounded-xl p-8">
          {/* Receive your Rewards Section */}
          <div className="mb-10">
            <h2 className="text-2xl md:text-3xl font-normal text-gray-900 mb-6">
              Receive your Rewards
            </h2>

            <div className="space-y-5">
              {/* Cash Prizes */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[#FFF9F0] rounded-lg flex items-center justify-center flex-shrink-0">
                  <Banknote className="w-5 h-5 text-[#C4A24C]" />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-gray-900 mb-1">
                    Cash prizes via bank transfer
                  </h3>
                  <p className="text-sm text-gray-600">
                    Secure and fast payment processing
                  </p>
                </div>
              </div>

              {/* Trophies */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[#FFF9F0] rounded-lg flex items-center justify-center flex-shrink-0">
                  <Trophy className="w-5 h-5 text-[#C4A24C]" />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-gray-900 mb-1">
                    Trophies shipped to Premium winners
                  </h3>
                  <p className="text-sm text-gray-600">
                    Beautiful physical awards for Top 3
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Permanent Visibility Section */}
          <div>
            <h2 className="text-2xl md:text-3xl font-normal text-gray-900 mb-4">
              Permanent Visibility
            </h2>

            <ul className="space-y-2">
              <li className="flex items-start gap-3">
                <span className="text-gray-400 mt-1">•</span>
                <p className="text-sm text-gray-700">
                  Winning photos remain permanently in the official AVA archives
                </p>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gray-400 mt-1">•</span>
                <p className="text-sm text-gray-700">
                  Non-winning photos may be deleted anytime by the user
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReceiveRewards;
