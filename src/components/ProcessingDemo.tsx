import { useEffect, useState } from "react";

export const ProcessingDemo = () => {
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowMessage(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative w-full max-w-md mx-auto">
      {/* Card with glass effect */}
      <div className="relative bg-card/50 backdrop-blur-xl border border-border rounded-2xl p-8 shadow-2xl">
        {/* Glow effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-2xl blur-xl" />
        
        <div className="relative space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-foreground">Processing Transaction</h3>
            <div className="px-3 py-1 rounded-full bg-primary/10 border border-primary/30">
              <span className="text-sm font-medium text-primary animate-pulse">Live</span>
            </div>
          </div>

          {/* Progress bar */}
          <div className="space-y-3">
            <div className="h-3 bg-secondary rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-primary to-accent rounded-full animate-shimmer"
                style={{ 
                  width: "98%",
                  backgroundSize: "200% 100%"
                }}
              />
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-muted-foreground">Progress</span>
              <span className="text-lg font-bold text-primary">98%</span>
            </div>
          </div>

          {/* Transaction details */}
          <div className="space-y-3 pt-4 border-t border-border/50">
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Amount</span>
              <span className="font-medium text-foreground">$1,234.56</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Network</span>
              <span className="font-medium text-foreground">Global</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Status</span>
              <span className="font-medium text-accent">Processing...</span>
            </div>
          </div>

          {/* Processing indicator */}
          <div className="space-y-3 pt-2">
            <div className="flex items-center gap-2">
              <div className="flex gap-1">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse" style={{ animationDelay: "0.2s" }} />
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse" style={{ animationDelay: "0.4s" }} />
              </div>
              <span className="text-sm text-muted-foreground">Verifying transaction...</span>
            </div>
            
            {showMessage && (
              <div className="animate-fade-in-up bg-accent/10 border border-accent/30 rounded-lg p-3">
                <p className="text-sm text-accent font-medium">
                  Wait, it will take a little longer
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
