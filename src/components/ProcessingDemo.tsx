import { useEffect, useState } from "react";
export const ProcessingDemo = () => {
  const [progress, setProgress] = useState(0);
  const [showMessage, setShowMessage] = useState(false);
  
  useEffect(() => {
    let currentProgress = 0;
    let timeoutId: ReturnType<typeof setTimeout>;
    
    const updateProgress = () => {
      if (currentProgress >= 98) {
        setProgress(98);
        setShowMessage(true);
        return;
      }
      
      // Variable speed: sometimes fast (0.5-2%), sometimes slow (0.1-0.3%)
      const isFast = Math.random() > 0.6;
      const increment = isFast 
        ? Math.random() * 1.5 + 0.5  // Fast: 0.5-2%
        : Math.random() * 0.2 + 0.1; // Slow: 0.1-0.3%
      
      currentProgress = Math.min(currentProgress + increment, 98);
      setProgress(currentProgress);
      
      // Variable interval: sometimes quick updates, sometimes delayed
      const delay = isFast 
        ? Math.random() * 500 + 200   // Fast: 200-700ms
        : Math.random() * 2000 + 1000; // Slow: 1-3 seconds
      
      timeoutId = setTimeout(updateProgress, delay);
    };
    
    updateProgress();
    
    return () => {
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, []);
  return <div className="relative w-full max-w-md mx-auto">
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
              <div className="h-full bg-gradient-to-r from-primary to-accent rounded-full animate-shimmer transition-all duration-300" style={{
              width: `${progress}%`,
              backgroundSize: "200% 100%"
            }} />
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-muted-foreground">Progress</span>
              <span className="text-lg font-bold text-primary">{Math.round(progress)}%</span>
            </div>
          </div>

          {/* Transaction details */}
          <div className="space-y-3 pt-4 border-t border-border/50">
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Amount</span>
              <span className="font-medium text-foreground">0.0352 ETH ~ €94.32</span>
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
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse" style={{
                animationDelay: "0.2s"
              }} />
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse" style={{
                animationDelay: "0.4s"
              }} />
              </div>
              <span className="text-sm text-muted-foreground">Verifying transaction...</span>
            </div>
            
            {showMessage && <div className="animate-fade-in-up bg-accent/10 border border-accent/30 rounded-lg p-3">
                <p className="text-sm text-accent font-medium">
                  Wait, it will take a little longer
                </p>
              </div>}
          </div>
        </div>
      </div>
    </div>;
};