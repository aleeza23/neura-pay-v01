import { useState } from "react";
import { Header } from "@/components/Header";
import { AuthCard } from "@/components/AuthCard";
import { PageTransition } from "@/components/Transitions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link } from "react-router-dom";
import { toast } from "sonner";
import Google from "/social-svg/google.svg";
import MetaMask from "/social-svg/metamask.svg";
import Twitter from "/social-svg/twitter.svg";
import Apple from "/social-svg/apple.svg";

const SignUp = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        // Simulate signup
        setTimeout(() => {
            setLoading(false);

            if (!email || !password || !confirmPassword) {
                toast.error("Please fill out all fields");
                return;
            }

            if (password !== confirmPassword) {
                toast.error("Passwords do not match");
                return;
            }

            toast.success(
                "Account created successfully! Redirecting to login..."
            );
        }, 1500);
    };

    return (
        <PageTransition>
            <Header />

            <main className="min-h-screen flex items-center justify-center px-4 py-24 relative">
                {/* Background Elements */}
                <div className="absolute inset-0 -z-10 overflow-hidden">
                    <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-primary/10 rounded-full filter blur-3xl opacity-70"></div>
                    <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full filter blur-3xl opacity-70"></div>
                </div>

                <AuthCard
                    title="Create an Account"
                    description="Sign up to start trading and managing your cryptocurrency"
                    footer={
                        <div className="text-center text-sm">
                            Already have an account?{" "}
                            <Link
                                to="/login"
                                className="text-primary font-medium hover:underline"
                            >
                                Log in
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
                            <Label htmlFor="password">Password</Label>
                            <Input
                                id="password"
                                type="password"
                                placeholder="••••••••"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                            <p className="text-xs text-muted-foreground">
                                Password must be at least 8 characters and
                                include a number and a symbol
                            </p>
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="confirmPassword">
                                Confirm Password
                            </Label>
                            <Input
                                id="confirmPassword"
                                type="password"
                                placeholder="••••••••"
                                value={confirmPassword}
                                onChange={(e) =>
                                    setConfirmPassword(e.target.value)
                                }
                                required
                            />
                        </div>

                        <Button
                            type="submit"
                            className="w-full bg-primary hover:bg-primary/90"
                            disabled={loading}
                        >
                            {loading ? "Creating account..." : "Create account"}
                        </Button>

                        <div className="relative my-6">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-border"></div>
                            </div>
                            <div className="relative flex justify-center text-xs text-muted-foreground uppercase">
                                <span className="bg-background px-2">
                                    Or sign up with
                                </span>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-6">
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

                        <p className="text-xs text-muted-foreground text-center mt-4">
                            By signing up, you agree to our{" "}
                            <Link
                                to="#"
                                className="text-primary hover:underline"
                            >
                                Terms of Service
                            </Link>{" "}
                            and{" "}
                            <Link
                                to="#"
                                className="text-primary hover:underline"
                            >
                                Privacy Policy
                            </Link>
                        </p>
                    </form>
                </AuthCard>
            </main>
        </PageTransition>
    );
};

export default SignUp;
