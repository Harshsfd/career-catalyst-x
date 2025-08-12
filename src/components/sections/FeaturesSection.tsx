import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Brain, 
  FileSearch, 
  Target, 
  BookOpen, 
  Briefcase, 
  Award,
  Users,
  Zap,
  Shield
} from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "AI-Powered Analysis",
    description: "Advanced LangChain + OpenAI integration analyzes your resume and identifies personalized growth opportunities.",
    color: "text-secondary",
    bgColor: "bg-secondary/10",
    borderColor: "border-secondary/20"
  },
  {
    icon: FileSearch,
    title: "Skill Gap Detection",
    description: "Real-time market analysis identifies exactly what skills you need for your dream role.",
    color: "text-primary",
    bgColor: "bg-primary/10",
    borderColor: "border-primary/20"
  },
  {
    icon: Target,
    title: "Personalized Roadmaps",
    description: "Custom learning paths tailored to your goals, experience level, and industry requirements.",
    color: "text-success",
    bgColor: "bg-success/10",
    borderColor: "border-success/20"
  },
  {
    icon: Briefcase,
    title: "Real-Time Job Matching",
    description: "Live scraping of job postings with AI-powered compatibility scoring and application tracking.",
    color: "text-warning",
    bgColor: "bg-warning/10",
    borderColor: "border-warning/20"
  },
  {
    icon: Award,
    title: "Blockchain Certificates",
    description: "Mint NFT certificates on Polygon blockchain, stored on IPFS for permanent verification.",
    color: "text-secondary",
    bgColor: "bg-secondary/10",
    borderColor: "border-secondary/20"
  },
  {
    icon: Users,
    title: "Gamified Learning",
    description: "Compete on leaderboards, earn XP, unlock achievements, and track progress with friends.",
    color: "text-primary",
    bgColor: "bg-primary/10",
    borderColor: "border-primary/20"
  }
];

export const FeaturesSection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Powered by <span className="text-gradient-ai">Advanced AI</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Cutting-edge technology stack with LangChain, OpenAI, blockchain integration, 
            and real-time data processing for unprecedented career insights.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className={`glass-card hover-lift transition-all duration-300 ${feature.borderColor} border-2 group`}
            >
              <CardHeader>
                <div className={`w-16 h-16 rounded-2xl ${feature.bgColor} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className={`w-8 h-8 ${feature.color}`} />
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6">{feature.description}</p>
                <Button variant="outline" size="sm" className="group-hover:bg-accent transition-colors">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Tech Stack */}
        <div className="mt-20">
          <div className="glass-card p-8 text-center">
            <h3 className="text-2xl font-bold mb-6">Built with Modern Technology</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6 items-center">
              {[
                { name: "React 18", icon: "⚛️" },
                { name: "TypeScript", icon: "🔷" },
                { name: "OpenAI", icon: "🤖" },
                { name: "LangChain", icon: "🔗" },
                { name: "Polygon", icon: "⚡" },
                { name: "IPFS", icon: "🌐" },
                { name: "WebSocket", icon: "💬" },
                { name: "Supabase", icon: "🚀" }
              ].map((tech, index) => (
                <div key={index} className="flex flex-col items-center gap-2 hover-lift">
                  <div className="text-3xl">{tech.icon}</div>
                  <div className="text-sm font-medium">{tech.name}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};