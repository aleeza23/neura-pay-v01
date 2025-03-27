import { useState } from "react";
import { Header } from "@/components/Header";
import { AuthCard } from "@/components/AuthCard";
import { PageTransition } from "@/components/Transitions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link } from "react-router-dom";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "sonner";
import Google from "/social-svg/google.svg";
import MetaMask from "/social-svg/metamask.svg";
import Twitter from "/social-svg/twitter.svg";
import Apple from "/social-svg/apple.svg";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        // Simulate login
        setTimeout(() => {
            setLoading(false);

            if (email && password) {
                toast.success("Login successful! Redirecting to dashboard...");
                // Redirect would happen here in a real app
            } else {
                toast.error("Please enter both email and password");
            }
        }, 1500);
    };

    return (
        <PageTransition>
            <Header />

            <main className="min-h-screen flex items-center justify-center px-4 py-24 relative">
                <div className="absolute inset-0 -z-10 overflow-hidden">
                    <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-primary/10 rounded-full filter blur-3xl opacity-70"></div>
                    <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-accent/10 rounded-full filter blur-3xl opacity-70"></div>
                </div>

                <AuthCard
                    title="Welcome Back"
                    description="Enter your credentials to access your account"
                    footer={
                        <div className="text-center text-sm">
                            Don't have an account?{" "}
                            <Link
                                to="/signup"
                                className="text-primary font-medium hover:underline"
                            >
                                Sign up
                            </Link>
                        </div>
                    }
                >
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="email">Email</Label>
                            <Input
                                id="email"
                                type="email"
                                placeholder="name@example.com"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>

                        <div className="space-y-2">
                            <div className="flex items-center justify-between">
                                <Label htmlFor="password">Password</Label>
                                <Link
                                    to="#"
                                    className="text-sm text-primary hover:underline"
                                >
                                    Forgot password?
                                </Link>
                            </div>
                            <Input
                                id="password"
                                type="password"
                                placeholder="••••••••"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>

                        <div className="flex items-center space-x-2">
                            <Checkbox id="remember" />
                            <Label
                                htmlFor="remember"
                                className="text-sm font-normal"
                            >
                                Remember me for 30 days
                            </Label>
                        </div>

                        <Button
                            type="submit"
                            className="w-full bg-primary hover:bg-primary/90"
                            disabled={loading}
                        >
                            {loading ? "Logging in..." : "Log in"}
                        </Button>

                        <div className="relative my-6">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-border"></div>
                            </div>
                            <div className="relative flex justify-center text-xs text-muted-foreground uppercase">
                                <span className="bg-background px-2">
                                    Or continue with
                                </span>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-5">
                            <Button
                                variant="outline"
                                type="button"
                                className="w-full"
                            >
                                <img src={Google} width={20} height={20} />
                                Google
                            </Button>
                            <Button
                                variant="outline"
                                type="button"
                                className="w-full"
                            >
                                <img src={MetaMask} width={20} height={20} />
                                MetaMask
                            </Button>
                            <Button
                                variant="outline"
                                type="button"
                                className="w-full"
                            >
                                <img src={Twitter} width={20} height={20} />
                                Twitter
                            </Button>
                            <Button
                                variant="outline"
                                type="button"
                                className="w-full"
                            >
                                <img src={Apple} width={20} height={20} />
                                Apple
                            </Button>
                        </div>
                    </form>
                </AuthCard>
            </main>
        </PageTransition>
    );
};

export default Login;
