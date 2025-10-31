import { Zap, Shield, Globe, BarChart3, Lock, Cpu } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Process thousands of transactions per second with sub-50ms latency globally.",
  },
  {
    icon: Shield,
    title: "Bank-Grade Security",
    description: "End-to-end encryption with PCI DSS Level 1 compliance and fraud detection.",
  },
  {
    icon: Globe,
    title: "Global Coverage",
    description: "Accept payments from 195+ countries with automatic currency conversion.",
  },
  {
    icon: BarChart3,
    title: "Real-time Analytics",
    description: "Monitor transactions, track metrics, and optimize performance instantly.",
  },
  {
    icon: Lock,
    title: "Secure by Default",
    description: "Multi-layer security with tokenization and advanced threat protection.",
  },
  {
    icon: Cpu,
    title: "AI-Powered",
    description: "Smart routing and machine learning-based fraud prevention built-in.",
  },
];

export const Features = () => {
  return (
    <section className="py-24 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            Built for modern
            <span className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              payment infrastructure
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need to accept payments, manage transactions, and scale globally.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
              
              {/* Hover effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity -z-10" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
