import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Upload, Sparkles, TrendingUp, Award } from "lucide-react";
import aiMentorHero from "@/assets/ai-mentor-hero.jpg";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-hero opacity-10"></div>
      <div className="absolute inset-0 opacity-30" style={{
        backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%239C92AC' fillOpacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")"
      }}></div>
      
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left animate-fade-in">
            <Badge className="mb-6 bg-primary/20 text-primary border-primary/30">
              <Sparkles className="w-4 h-4 mr-2" />
              AI-Powered Career Growth
            </Badge>
            
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
              Transform Your 
              <span className="text-gradient-ai block">Career Journey</span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-xl">
              Get personalized AI mentoring, skill gap analysis, and blockchain-verified 
              certificates. Turn your career aspirations into achievements.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button variant="hero" size="xl" className="gap-3">
                <Upload className="w-5 h-5" />
                Upload Resume
              </Button>
              <Button variant="glass" size="xl" className="gap-3">
                <TrendingUp className="w-5 h-5" />
                View Demo
              </Button>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 max-w-md mx-auto lg:mx-0">
              <div className="text-center">
                <div className="text-2xl font-bold text-gradient-primary">95%</div>
                <div className="text-sm text-muted-foreground">Success Rate</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gradient-ai">10K+</div>
                <div className="text-sm text-muted-foreground">Careers Boosted</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gradient-success">500+</div>
                <div className="text-sm text-muted-foreground">Skills Tracked</div>
              </div>
            </div>
          </div>
          
          {/* Hero Image */}
          <div className="relative animate-float">
            <div className="relative">
              <img 
                src={aiMentorHero} 
                alt="AI Career Mentor" 
                className="rounded-3xl shadow-2xl w-full max-w-lg mx-auto hover-lift"
              />
              <div className="absolute -top-6 -right-6 glass-card p-4 animate-scale-in">
                <Award className="w-8 h-8 text-primary mb-2" />
                <div className="text-sm font-semibold">NFT Certificate</div>
                <div className="text-xs text-muted-foreground">Blockchain Verified</div>
              </div>
              <div className="absolute -bottom-6 -left-6 glass-card p-4 animate-scale-in" style={{animationDelay: '0.2s'}}>
                <div className="text-lg font-bold text-gradient-success">Level Up!</div>
                <div className="text-xs text-muted-foreground">+250 XP earned</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};