
import { cn } from "@/lib/utils";

interface AppHeaderProps {
  className?: string;
}

export const AppHeader = ({ className }: AppHeaderProps) => {
  return (
    <header className={cn("fixed top-0 right-0 z-50 p-4", className)}>
      <div className="flex items-center gap-2">
        {/* Theme toggle moved to main Header component */}
      </div>
    </header>
  );
};
