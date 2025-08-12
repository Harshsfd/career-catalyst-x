import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Upload, MessageSquare, TrendingUp, Sparkles } from "lucide-react";

export const CTASection = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-hero opacity-5"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <Badge className="mb-6 bg-primary/20 text-primary border-primary/30">
            <Sparkles className="w-4 h-4 mr-2" />
            Join 10,000+ Career Accelerators
          </Badge>
          
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            Ready to <span className="text-gradient-ai">Transform</span> Your Career?
          </h2>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Start your AI-powered career journey today. Upload your resume and get 
            personalized insights in minutes, not months.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button variant="hero" size="xl" className="gap-3">
              <Upload className="w-5 h-5" />
              Get Started Free
            </Button>
            <Button variant="glass" size="xl" className="gap-3">
              <MessageSquare className="w-5 h-5" />
              Talk to AI Mentor
            </Button>
          </div>
          
          {/* Trust Indicators */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="glass-card p-6">
              <div className="text-3xl font-bold text-gradient-primary mb-2">95%</div>
              <div className="text-sm text-muted-foreground">Success Rate</div>
              <div className="text-xs text-muted-foreground mt-1">Users achieve career goals</div>
            </div>
            <div className="glass-card p-6">
              <div className="text-3xl font-bold text-gradient-success mb-2">24/7</div>
              <div className="text-sm text-muted-foreground">AI Support</div>
              <div className="text-xs text-muted-foreground mt-1">Always available mentor</div>
            </div>
            <div className="glass-card p-6">
              <div className="text-3xl font-bold text-gradient-ai mb-2">∞</div>
              <div className="text-sm text-muted-foreground">Blockchain Verified</div>
              <div className="text-xs text-muted-foreground mt-1">Permanent certificates</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};