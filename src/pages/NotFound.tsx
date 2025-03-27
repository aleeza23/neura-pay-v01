
import { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { Button } from "../components/UI/button";
import { PageTransition } from "@/components/Transitions";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <PageTransition>
      <div className="min-h-screen flex flex-col items-center justify-center px-4 text-center">
        <div className="space-y-6 max-w-md">
          <h1 className="text-6xl font-bold text-gradient">404</h1>
          <p className="text-2xl font-medium">Page not found</p>
          <p className="text-muted-foreground">
            The page you are looking for doesn't exist or has been moved.
          </p>
          <Button asChild size="lg" className="mt-6">
            <Link to="/">Return to Home</Link>
          </Button>
        </div>
      </div>
    </PageTransition>
  );
};

export default NotFound;
