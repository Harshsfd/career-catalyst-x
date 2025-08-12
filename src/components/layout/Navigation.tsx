import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Brain, User, Trophy, BookOpen, MessageSquare, FileText, Briefcase } from "lucide-react";

export const Navigation = () => {
  return (
    <nav className="glass-card border-0 border-b border-border/50 backdrop-blur-xl sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-ai rounded-xl flex items-center justify-center">
              <Brain className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gradient-ai">Career Catalyst X</h1>
              <p className="text-xs text-muted-foreground">AI-Powered Mentoring</p>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-6">
            <Button variant="ghost" size="sm" className="gap-2">
              <FileText className="w-4 h-4" />
              Resume
            </Button>
            <Button variant="ghost" size="sm" className="gap-2">
              <BookOpen className="w-4 h-4" />
              Learning
            </Button>
            <Button variant="ghost" size="sm" className="gap-2">
              <Briefcase className="w-4 h-4" />
              Jobs
            </Button>
            <Button variant="ghost" size="sm" className="gap-2">
              <Trophy className="w-4 h-4" />
              Progress
            </Button>
            <Button variant="ghost" size="sm" className="gap-2">
              <MessageSquare className="w-4 h-4" />
              AI Mentor
            </Button>
          </div>

          {/* User Profile */}
          <div className="flex items-center gap-3">
            <Badge variant="secondary" className="bg-success/20 text-success">
              Level 5
            </Badge>
            <Button variant="ghost" size="icon">
              <User className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};