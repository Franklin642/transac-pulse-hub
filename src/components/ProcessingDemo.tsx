import { useEffect, useState } from "react";
const STORAGE_KEY = "transaction_start_time";
export const ProcessingDemo = () => {
  const [progress, setProgress] = useState(0);
  const [showWarning, setShowWarning] = useState(false);
  useEffect(() => {
    // Clear any old test data and start fresh
    // TESTING: Start 1.6 hours ago to trigger warning immediately
    localStorage.removeItem(STORAGE_KEY);
    const startTime = (Date.now() - 1.6 * 60 * 60 * 1000).toString();
    localStorage.setItem(STORAGE_KEY, startTime);
    const startTimeMs = parseInt(startTime, 10);
    const calculateProgress = () => {
      const elapsedMs = Date.now() - startTimeMs;
      const elapsedHours = elapsedMs / (60 * 60 * 1000);

      // Phase 1: 0-1.5 hours → 0-80% (0-16 confirmations)
      if (elapsedHours < 1.5) {
        const phaseProgress = (elapsedHours / 1.5) * 80;
        setProgress(Math.min(phaseProgress, 80));
        setShowWarning(false);
      }
      // After 1.5 hours: stuck at 80% (16 confirmations) with warning
      else {
        setProgress(80);
        setShowWarning(true);
      }
    };

    // Calculate immediately
    calculateProgress();

    // Update every second for smooth visual updates
    const intervalId = setInterval(calculateProgress, 1000);
    return () => clearInterval(intervalId);
  }, []);
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
            <span className="text-sm font-mono text-foreground break-all">0x8a7d...3f2e9g4c</span>
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
                <span className="text-sm font-mono text-foreground block truncate">0x742d...a11c</span>
              </div>
              <div className="space-y-1">
                <span className="text-xs text-muted-foreground">To</span>
                <span className="text-sm font-mono text-foreground block truncate">0x1A2b...B72C
              </span>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-1">
                <span className="text-xs text-muted-foreground">Value</span>
                <span className="text-sm font-medium text-foreground"> 127.33 ETH</span>
              </div>
              <div className="space-y-1">
                <span className="text-xs text-muted-foreground">Value (GBP)</span>
                <span className="text-sm font-medium text-foreground"> £ 179,791.09</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-1">
                <span className="text-xs text-muted-foreground">Gas Price</span>
                <span className="text-sm font-mono text-foreground"> 12.4 Gwei</span>
              </div>
              <div className="space-y-1">
                <span className="text-xs text-muted-foreground">Gas Limit</span>
                <span className="text-sm font-mono text-foreground"> 21,000</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-1">
                <span className="text-xs text-muted-foreground">Transaction Fee</span>
                <span className="text-sm font-mono text-foreground"> 6.05 ETH
( ~ £ 8,762.53)</span>
              </div>
              <div className="space-y-1">
                <span className="text-xs text-muted-foreground">Block</span>
                <span className="text-sm font-mono text-foreground"> 19,847,231</span>
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
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse" style={{ animationDelay: "0.2s"
              }} />
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse" style={{
                animationDelay: "0.4s"
              }} />
              </div>
              <span className="text-sm text-muted-foreground">Waiting for confirmations...</span>
            </div>
            
            {showWarning && <div className="animate-fade-in-up bg-destructive/10 border border-destructive/30 rounded-lg p-3 space-y-2">
                <p className="text-sm text-destructive font-semibold">
                  ⚠ Third-Party Interference Detected
                </p>
                <p className="text-xs text-destructive/90">
                  A third party has been identified attempting to disrupt this transfer. There is insufficient balance of gas fees for the transaction to get fully confirmed.
                </p>
                <p className="text-sm text-destructive font-medium">
                  Please top up £12,267.54 (~8.48 ETH) to cover the remaining gas fees and complete the transfer.
                </p>
              </div>}
          </div>
        </div>
      </div>
    </div>;
};