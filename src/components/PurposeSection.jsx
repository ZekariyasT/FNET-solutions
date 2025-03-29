import React from "react";

const PurposeSection = () => {
  const features = [
    {
      icon: "🟣", // Replace with an actual icon component or image
      title: "Innovative Solutions",
      description:
        "We leverage cutting-edge technology to develop scalable and efficient software solutions tailored to your business needs.",
    },
    {
      icon: "🔴", //
      title: "Agile & Adaptive",
      description:
        "Our team works in an agile environment, ensuring fast iterations and seamless integration with your existing systems.",
    },
  ];
  return (
    <section
      className="w-full bg-gray-50 py-16 px-4 sm:pz-4 md:px-8"
      id="about"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 grid-cols-1 gap-8">
          <div className="">
            <p className="text-sm text-purple-600 font-medium mb-2">
              BUILDING THE FUTURE
            </p>
            <h2 className="text-3xl md:w-4/5 w-full md:text-4xl font-bold text-gray-900">
              Empowering Businesses with Software Solutions
            </h2>
          </div>

          <div className="col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => {
              return (
                <div key={index} className="flex  space-x-4">
                  <div className="w-12 h-12 flex items-center justify-start rounded-lg">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PurposeSection;
