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
            <div className="inline-block">
              <span className="px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium">
                ⚡ Lightning-fast processing
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Process transactions
              <span className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                at the speed of light
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-xl">
              Handle millions of transactions per second with 99.99% uptime. 
              Built for scale, designed for developers.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="space-y-1">
                <div className="text-3xl font-bold text-primary">99.9%</div>
                <div className="text-sm text-muted-foreground">Uptime</div>
              </div>
              <div className="space-y-1">
                <div className="text-3xl font-bold text-accent">50ms</div>
                <div className="text-sm text-muted-foreground">Avg Latency</div>
              </div>
              <div className="space-y-1">
                <div className="text-3xl font-bold text-foreground">24/7</div>
                <div className="text-sm text-muted-foreground">Support</div>
              </div>
            </div>
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
