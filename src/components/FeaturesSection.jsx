import React from "react";

const FeaturesSection = () => {
  const features = [
    {
      icon: "💡",
      title: "Advanced Technology",
      description:
        "We leverage the latest tech to create powerful and efficient software solutions.",
    },
    {
      icon: "⚙️",
      title: "Custom Development",
      description:
        "Our expert team designs and builds scalable, high-performance applications.",
    },
    {
      icon: "🚀",
      title: "Seamless Deployment",
      description:
        "We ensure smooth integration and deployment for maximum efficiency.",
    },
  ];
  return (
    <section className="mx-w-7xl mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">
          Empowering Your Business with Technology
        </h2>
        <p className="text-gray-600">
          We deliver robust software solutions that drive growth and efficiency.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((feature, index) => {
          return (
            <div
              key={index}
              className="flex flex-col text-center items-center p-6"
            >
              <div
                className="w-24 h-24 rounded-full mb-6 flex items-center justify-center "
                style={{
                  backgroundColor:
                    index === 0
                      ? "#F1EFFD"
                      : index === 1
                      ? "#FEE7E7"
                      : "#FFF3E4",
                }}
              >
                <div>{feature.icon}</div>
              </div>
              <h3 className="text-2xl font-medium mb-3">{feature.title}</h3>
              <p className="text-gray-500 text-center">{feature.description}</p>
            </div>
          );
        })}
      </div>
      <div className="text-center mt-12">
        <button
          className="bg-amber-600 text-white cursor-pointer px-8 py-3 rounded-full 
        font-medium hover:bg-amber-700 transition-colors relative"
        >
          Get Started Today
          <div className="absolute -z-10 w-full h-full rounded-full bg-amber-600/50 blur-xl top-0 left-0"></div>
        </button>
      </div>
    </section>
  );
};

export default FeaturesSection;
