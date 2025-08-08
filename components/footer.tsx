import { Github } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";

export default function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container max-w-7xl mx-auto px-4 py-6">
        <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:justify-between sm:space-y-0">
          {/* Copyright */}
          <div className="text-sm text-muted-foreground">
            © {new Date().getFullYear()}.
          </div>

          {/* GitHub Link */}
          <Button variant="ghost" size="sm" asChild>
            <Link
              href="https://github.com/Boboinna/room-color-palette-generator"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="h-4 w-4 mr-2" />
              See on GitHub
            </Link>
          </Button>
        </div>
      </div>
    </footer>
  );
}
