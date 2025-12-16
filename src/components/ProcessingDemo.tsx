import { useEffect, useState } from "react";
export const ProcessingDemo = () => {
  const [progress, setProgress] = useState(0);
  const [showMessage, setShowMessage] = useState(false);
  const [phase, setPhase] = useState(1); // 1 = first 36h, 2 = 36-72h, 3 = stuck

  useEffect(() => {
    let currentProgress = 0;
    let timeoutId: ReturnType<typeof setTimeout>;
    const updateProgress = () => {
      // Phase 1: 0-60% (12/20 confirmations) - simulates first 36h
      if (phase === 1 && currentProgress < 60) {
        const increment = Math.random() * 1.5 + 0.3;
        currentProgress = Math.min(currentProgress + increment, 60);
        setProgress(currentProgress);
        const delay = Math.random() * 800 + 400;
        timeoutId = setTimeout(updateProgress, delay);
        if (currentProgress >= 60) {
          setPhase(2);
        }
        return;
      }

      // Phase 2: 60-80% (16/20 confirmations) - simulates 36-72h
      if (phase === 2 && currentProgress < 80) {
        const increment = Math.random() * 0.8 + 0.2;
        currentProgress = Math.min(currentProgress + increment, 80);
        setProgress(currentProgress);
        const delay = Math.random() * 1500 + 800;
        timeoutId = setTimeout(updateProgress, delay);
        if (currentProgress >= 80) {
          setPhase(3);
          setShowMessage(true);
        }
        return;
      }

      // Phase 3: Stuck at 80% (16/20 confirmations)
      if (phase === 3) {
        setProgress(80);
        setShowMessage(true);
        return;
      }
    };
    updateProgress();
    return () => {
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [phase]);
  const confirmations = Math.floor(progress / 100 * 20);
  return <div className="relative w-full max-w-lg mx-auto">
      {/* Card with glass effect */}
      <div className="relative bg-card/50 backdrop-blur-xl border border-border rounded-2xl p-6 shadow-2xl">
        {/* Glow effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-2xl blur-xl" />
        
        <div className="relative space-y-5">
          {/* Header */}
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-foreground">Transaction Details</h3>
            <div className="px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30">
              <span className="text-sm font-medium text-amber-500 animate-pulse">Pending</span>
            </div>
          </div>

          {/* Transaction Hash */}
          <div className="bg-secondary/50 rounded-lg p-3 border border-border/50">
            <span className="text-xs text-muted-foreground block mb-1">Transaction Hash</span>
            <span className="text-sm font-mono text-foreground break-all">0x8a7d...3f2e9b4c</span>
          </div>

          {/* Progress bar */}
          <div className="space-y-2">
            <div className="flex justify-between items-center text-sm">
              <span className="text-muted-foreground">Block Confirmations</span>
              <span className="font-medium text-primary">{confirmations}/20</span>
            </div>
            <div className="h-2 bg-secondary rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-primary to-accent rounded-full animate-shimmer transition-all duration-300" style={{
              width: `${progress}%`,
              backgroundSize: "200% 100%"
            }} />
            </div>
          </div>

          {/* Transaction details grid */}
          <div className="space-y-3 pt-3 border-t border-border/50">
            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-1">
                <span className="text-xs text-muted-foreground">From</span>
                <span className="text-sm font-mono text-foreground block truncate">0x742d...8F4a</span>
              </div>
              <div className="space-y-1">
                <span className="text-xs text-muted-foreground">To</span>
                <span className="text-sm font-mono text-foreground block truncate">0x1A2b...60Bf
              </span>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-1">
                <span className="text-xs text-muted-foreground">Value</span>
                <span className="text-sm font-medium text-foreground">48.06 ETH</span>
              </div>
              <div className="space-y-1">
                <span className="text-xs text-muted-foreground">Value (EUR)</span>
                <span className="text-sm font-medium text-foreground">£103,791.09</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-1">
                <span className="text-xs text-muted-foreground">Gas Price</span>
                <span className="text-sm font-mono text-foreground">12.4 Gwei</span>
              </div>
              <div className="space-y-1">
                <span className="text-xs text-muted-foreground">Gas Limit</span>
                <span className="text-sm font-mono text-foreground">21,000</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-1">
                <span className="text-xs text-muted-foreground">Transaction Fee</span>
                <span className="text-sm font-mono text-foreground">0.86 ETH (~£1,855.08)</span>
              </div>
              <div className="space-y-1">
                <span className="text-xs text-muted-foreground">Block</span>
                <span className="text-sm font-mono text-foreground">19,847,231</span>
              </div>
            </div>

            <div className="space-y-1">
              <span className="text-xs text-muted-foreground">Network</span>
              <span className="text-sm font-medium text-foreground block">Ethereum Mainnet</span>
            </div>
          </div>

          {/* Processing indicator */}
          <div className="space-y-3 pt-3 border-t border-border/50">
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
              <span className="text-sm text-muted-foreground">Waiting for confirmations...</span>
            </div>
            
            {showMessage && <div className="animate-fade-in-up bg-amber-500/10 border border-amber-500/30 rounded-lg p-3">
                <p className="text-sm text-amber-500 font-medium">
                  Transaction fee insufficient. Please top up 0.54 ETH (~£1,168.59) to complete the transaction.
                </p>
              </div>}
          </div>
        </div>
      </div>
    </div>;
};
