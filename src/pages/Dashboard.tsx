import { Header } from "@/components/Header";
import { PageTransition } from "@/components/Transitions";

const Dashboard = () => {
    return (
        <PageTransition>
            <Header />

            <main className="min-h-screen pt-24 pb-16">
                <div className="container max-w-7xl">
                    <div className="flex flex-col md:flex-row justify-between items-start gap-4 mb-8">
                        <div>
                            <h1 className="text-3xl font-bold">Dashboard</h1>
                            <p className="text-muted-foreground">
                                Manage your portfolio and transactions
                            </p>
                        </div>
                    </div>
                    <div className="my-10 text-center">Coming...</div>
                </div>
            </main>
        </PageTransition>
    );
};

export default Dashboard;
