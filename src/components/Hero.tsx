
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { FadeIn, SlideUp, SlideIn } from "./Transitions";

export const Hero = () => {
  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden pt-24">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-primary/10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <FadeIn>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
              <span className="text-gradient">Secure & Fast</span> Crypto Transactions
            </h1>
          </FadeIn>
          
          <SlideUp delay={0.2}>
            <p className="text-lg md:text-xl text-muted-foreground max-w-lg">
              Experience seamless, secure cryptocurrency transactions with our platform. Send, receive, and trade USDT with zero delays.
            </p>
          </SlideUp>

          <SlideUp delay={0.4}>
            <div className="flex flex-wrap gap-4">
              <Button 
                asChild 
                size="lg" 
                className="text-base bg-primary hover:bg-primary/90"
              >
                <Link to="/signup">
                  Start Trading Now
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button 
                asChild 
                size="lg" 
                variant="outline"
                className="text-base"
              >
                <Link to="/wallet">
                  Explore Platform
                </Link>
              </Button>
            </div>
          </SlideUp>
          
          <SlideUp delay={0.6}>
            <div className="flex items-center gap-8 pt-6">
              <div className="text-center">
                <p className="text-3xl font-bold text-gradient">$0</p>
                <p className="text-sm text-muted-foreground mt-1">Transaction Fee</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-gradient">100%</p>
                <p className="text-sm text-muted-foreground mt-1">Secure</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-gradient">24/7</p>
                <p className="text-sm text-muted-foreground mt-1">Support</p>
              </div>
            </div>
          </SlideUp>
        </div>

        <SlideIn delay={0.3} direction="right">
          <div className="glassmorphism rounded-2xl p-6 sm:p-8 relative overflow-hidden card-hover">
            <div className="absolute top-0 right-0 w-40 h-40 bg-primary/10 rounded-full translate-x-1/2 -translate-y-1/2 filter blur-2xl"></div>
            
            <div className="relative space-y-6">
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-semibold">Live Wallet</h3>
                <span className="py-1 px-3 bg-green-100 dark:bg-green-900/40 text-green-700 dark:text-green-400 rounded-full text-xs font-medium">Active</span>
              </div>
              
              <div className="space-y-4">
                <div className="bg-white/50 dark:bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-border">
                  <p className="text-sm text-muted-foreground mb-1">Current Balance</p>
                  <p className="text-2xl font-bold">125,000.00 USDT</p>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/50 dark:bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-border">
                    <p className="text-sm text-muted-foreground mb-1">Today's Profit</p>
                    <p className="text-xl font-bold text-green-600 dark:text-green-400">+1,250.50 USDT</p>
                  </div>
                  <div className="bg-white/50 dark:bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-border">
                    <p className="text-sm text-muted-foreground mb-1">Pending</p>
                    <p className="text-xl font-bold">2,500.00 USDT</p>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <Button className="w-full bg-primary hover:bg-primary/90">Deposit</Button>
                <Button variant="outline" className="w-full">Withdraw</Button>
              </div>
              
              <div className="pt-4">
                <p className="text-sm text-muted-foreground mb-2">Recent Transaction</p>
                <div className="space-y-2">
                  <div className="flex items-center justify-between p-3 bg-white/50 dark:bg-white/5 backdrop-blur-sm rounded-lg border border-border">
                    <div className="flex items-center">
                      <div className="w-8 h-8 rounded-full bg-green-100 dark:bg-green-900/40 flex items-center justify-center mr-3">
                        <TrendingUp size={14} className="text-green-600 dark:text-green-400" />
                      </div>
                      <div>
                        <p className="text-sm font-medium">Received Payment</p>
                        <p className="text-xs text-muted-foreground">Today, 10:30 AM</p>
                      </div>
                    </div>
                    <p className="text-sm font-medium text-green-600 dark:text-green-400">+500 USDT</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SlideIn>
      </div>
    </section>
  );
};

const TrendingUp = ({ size = 24, className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
    <polyline points="17 6 23 6 23 12" />
  </svg>
);
