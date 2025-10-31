import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { ProcessingDemo } from "./ProcessingDemo";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 pt-20">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-card" />
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-primary/5 rounded-full blur-3xl animate-float" />
        <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-accent/5 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left space-y-8 animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              <span className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Lightning-fast transactions
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-xl">
              Process millions per second with 99.99% uptime
            </p>
          </div>

          {/* Processing Demo */}
          <div className="animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <ProcessingDemo />
          </div>
        </div>
      </div>
    </section>
  );
};
