
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { FeatureCard } from "@/components/FeatureCard";
import { Link } from "react-router-dom";
import { PageTransition, StaggerContainer, StaggerItem } from "@/components/Transitions";
import { Wallet, BarChart3, Shield, Zap, ArrowRight, Repeat, Users } from "lucide-react";
import { Button } from "../components/UI/button";

const Index = () => {
  return (
    <PageTransition>
      <Header />

      <main className="overflow-hidden">
        <Hero />

        {/* Features Section */}
        <section className="py-24 container" id="features">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-gradient">Why Choose</span> Our Platform
            </h2>
            <p className="text-muted-foreground text-lg">
              Our platform is designed with security, speed, and simplicity in mind, providing you with the best cryptocurrency trading experience.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <FeatureCard
              icon={<Shield className="w-6 h-6" />}
              title="Enhanced Security"
              description="Multi-layered security protocols and two-factor authentication to keep your assets safe."
              delay={0.1}
            />
            <FeatureCard
              icon={<Zap className="w-6 h-6" />}
              title="Lightning Fast"
              description="Execute transactions in seconds with our high-performance trading engine."
              delay={0.2}
            />
            <FeatureCard
              icon={<Wallet className="w-6 h-6" />}
              title="Multiple Wallets"
              description="Connect with MetaMask, Trust Wallet, and other popular Web3 wallets."
              delay={0.3}
            />
            <FeatureCard
              icon={<BarChart3 className="w-6 h-6" />}
              title="Advanced Analytics"
              description="Real-time market data and personalized insights to optimize your trading strategy."
              delay={0.4}
            />
            <FeatureCard
              icon={<Repeat className="w-6 h-6" />}
              title="Automated Trading"
              description="Set up recurring transfers or automatic buy/sell orders based on market conditions."
              delay={0.5}
            />
            <FeatureCard
              icon={<Users className="w-6 h-6" />}
              title="24/7 Support"
              description="Our dedicated support team is available around the clock to assist you."
              delay={0.6}
            />
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-secondary/50">
          <div className="container max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Start Your Trading Journey?
            </h2>
            <p className="text-muted-foreground text-lg mb-10 max-w-2xl mx-auto">
              Join thousands of traders who trust our platform for secure, fast, and reliable cryptocurrency transactions.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <Button
                asChild
                size="lg"
                className="text-base bg-primary hover:bg-primary/90"
              >
                <Link to="/signup">
                  Create Free Account
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="text-base"
              >
                <Link to="/login">
                  Login to Account
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 bg-background">
          <div className="container">
            <div className="border-t border-border pt-8 pb-6">
              <div className="flex flex-col md:flex-row justify-between items-center">
                <div className="mb-6 md:mb-0">
                  <Link to="/" className="flex items-center gap-2">
                    <span className="text-xl font-bold text-gradient">Neura pay</span>
                  </Link>
                  <p className="text-muted-foreground mt-2">Secure. Fast. Reliable.</p>
                </div>

                <nav className="flex flex-wrap justify-center gap-x-8 gap-y-4 mb-6 md:mb-0">
                  <Link to="/" className="text-sm hover:text-primary transition-colors">Home</Link>
                  <Link to="/login" className="text-sm hover:text-primary transition-colors">Login</Link>
                  <Link to="/signup" className="text-sm hover:text-primary transition-colors">Sign Up</Link>
                </nav>
              </div>

              <div className="border-t border-border mt-6 pt-6 flex flex-col md:flex-row justify-between items-center">
                <p className="text-sm text-muted-foreground mb-4 md:mb-0">
                  © {new Date().getFullYear()} Neura pay. All rights reserved.
                </p>
                <div className="flex gap-4">
                  <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Privacy Policy</a>
                  <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Terms of Service</a>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </PageTransition>
  );
};

export default Index;
