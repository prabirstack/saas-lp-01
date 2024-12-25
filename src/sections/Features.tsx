import EcosystemIcon from "@/components/EcosystemIcon";


const features = [
  {
    title: "Integration Ecosystem",
    description:
      "Enhance your productivity by connecting with your tools, keeping your essentials in one place.",
  },
  {
    title: "Goal Setting and Tracking",
    description:
      "Define and track your goals, breaking down objectives into achivable tasks to keep your targets in sight.",
  },
  {
    title: "Secure Data Encryption",
    description:
      "With end-to-end encryption, your data is securely stored and protected from unauthorized access.",
  },
];

export const Features = () => {
  return (
    <div className="text-white bg-black py-[72px] sm:py-24">
      <div className="container">
        <h2 className="text-5xl font-bold tracking-tight text-center sm:text-6xl">
          Everything you need
        </h2>
        <div className="max-w-xl mx-auto">
          <p className="mt-5 text-xl text-center text-white/70">
            Enjoy customizable lists, team work tools, and smart tracking all in
            one place. Set tasks, get reminders, and see your progress simply
            and quickly.
          </p>
        </div>
        <div className="flex flex-col gap-4 mt-16 sm:flex-row">
          {features.map(({ title, description }) => (
            <div
              key={title}
              className="px-5 py-10 text-center border border-white/30 rounded-xl sm:flex-1"
            >
              <div className="inline-flex items-center justify-center text-black bg-white rounded-lg h-14 w-14">
                <EcosystemIcon />
              </div>
              <h3 className="mt-6 font-bold">{title}</h3>
              <p className="mt-2 text-white/70">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
