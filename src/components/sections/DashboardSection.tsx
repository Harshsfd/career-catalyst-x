import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  TrendingUp, 
  Brain, 
  Target, 
  BookOpen, 
  Briefcase, 
  Award,
  MessageSquare,
  ChevronRight,
  Star,
  Trophy
} from "lucide-react";

export const DashboardSection = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Your Career Command Center</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            AI-powered insights, personalized learning paths, and real-time progress tracking
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-6">
          {/* Main Dashboard */}
          <div className="lg:col-span-8 space-y-6">
            {/* Progress Overview */}
            <Card className="glass-card hover-lift">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <TrendingUp className="w-6 h-6 text-primary" />
                  Career Progress Overview
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Technical Skills</span>
                      <span className="text-primary font-semibold">82%</span>
                    </div>
                    <Progress value={82} className="h-2" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Leadership</span>
                      <span className="text-success font-semibold">67%</span>
                    </div>
                    <Progress value={67} className="h-2" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Communication</span>
                      <span className="text-secondary font-semibold">91%</span>
                    </div>
                    <Progress value={91} className="h-2" />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* AI Insights */}
            <Card className="glass-card hover-lift">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Brain className="w-6 h-6 text-secondary" />
                  AI Insights & Recommendations
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="bg-primary/10 border border-primary/20 rounded-lg p-4">
                    <div className="flex items-start gap-3">
                      <Target className="w-5 h-5 text-primary mt-1" />
                      <div>
                        <h4 className="font-semibold mb-1">Skill Gap Identified</h4>
                        <p className="text-sm text-muted-foreground mb-3">
                          Your profile shows strong backend skills but could benefit from React expertise for full-stack roles.
                        </p>
                        <Button variant="outline" size="sm">
                          Start React Learning Path
                          <ChevronRight className="w-4 h-4 ml-1" />
                        </Button>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-success/10 border border-success/20 rounded-lg p-4">
                    <div className="flex items-start gap-3">
                      <Briefcase className="w-5 h-5 text-success mt-1" />
                      <div>
                        <h4 className="font-semibold mb-1">Job Match Found</h4>
                        <p className="text-sm text-muted-foreground mb-3">
                          3 new Senior Developer positions match your skillset (98% compatibility).
                        </p>
                        <Button variant="success" size="sm">
                          View Job Matches
                          <ChevronRight className="w-4 h-4 ml-1" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Learning Roadmap */}
            <Card className="glass-card hover-lift">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <BookOpen className="w-6 h-6 text-primary" />
                  Personalized Learning Roadmap
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { skill: "React Fundamentals", progress: 100, status: "completed" },
                    { skill: "TypeScript Advanced", progress: 75, status: "active" },
                    { skill: "System Design", progress: 30, status: "active" },
                    { skill: "AWS Certification", progress: 0, status: "upcoming" }
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-4 p-3 rounded-lg border border-border/50 hover:bg-accent/50 transition-colors">
                      <div className={`w-3 h-3 rounded-full ${
                        item.status === 'completed' ? 'bg-success' :
                        item.status === 'active' ? 'bg-primary' : 'bg-muted-foreground'
                      }`} />
                      <div className="flex-1">
                        <div className="flex justify-between items-center mb-1">
                          <span className="font-medium">{item.skill}</span>
                          <Badge variant={item.status === 'completed' ? 'default' : 'secondary'}>
                            {item.status}
                          </Badge>
                        </div>
                        <Progress value={item.progress} className="h-2" />
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4 space-y-6">
            {/* AI Mentor Chat */}
            <Card className="glass-card hover-lift">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <MessageSquare className="w-5 h-5 text-secondary" />
                  AI Mentor
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="bg-secondary/10 rounded-lg p-3">
                    <p className="text-sm">
                      "Ready to tackle that React learning path? I've prepared some interactive exercises for you!"
                    </p>
                  </div>
                  <Button variant="ai" size="sm" className="w-full">
                    <MessageSquare className="w-4 h-4" />
                    Continue Chat
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Recent Achievements */}
            <Card className="glass-card hover-lift">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Award className="w-5 h-5 text-success" />
                  Recent Achievements
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {[
                    { title: "React Master", type: "NFT Certificate", rarity: "rare" },
                    { title: "7 Day Streak", type: "Badge", rarity: "common" },
                    { title: "Code Review Expert", type: "Skill Badge", rarity: "epic" }
                  ].map((achievement, index) => (
                    <div key={index} className="flex items-center gap-3 p-2 rounded-lg hover:bg-accent/50 transition-colors">
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                        achievement.rarity === 'epic' ? 'bg-gradient-ai' :
                        achievement.rarity === 'rare' ? 'bg-gradient-success' : 'bg-gradient-primary'
                      }`}>
                        {achievement.type === 'NFT Certificate' ? (
                          <Award className="w-5 h-5 text-white" />
                        ) : (
                          <Star className="w-5 h-5 text-white" />
                        )}
                      </div>
                      <div className="flex-1">
                        <div className="font-medium text-sm">{achievement.title}</div>
                        <div className="text-xs text-muted-foreground">{achievement.type}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Leaderboard */}
            <Card className="glass-card hover-lift">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Trophy className="w-5 h-5 text-warning" />
                  Weekly Leaderboard
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {[
                    { name: "You", score: 2840, rank: 3 },
                    { name: "Alex Chen", score: 3200, rank: 1 },
                    { name: "Sarah Kim", score: 2950, rank: 2 },
                    { name: "Mike Johnson", score: 2650, rank: 4 }
                  ].sort((a, b) => a.rank - b.rank).map((user, index) => (
                    <div key={index} className={`flex items-center gap-3 p-2 rounded-lg ${
                      user.name === 'You' ? 'bg-primary/10 border border-primary/20' : 'hover:bg-accent/50'
                    } transition-colors`}>
                      <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                        user.rank === 1 ? 'bg-warning text-warning-foreground' :
                        user.rank === 2 ? 'bg-muted text-muted-foreground' :
                        user.rank === 3 ? 'bg-warning/60 text-warning-foreground' : 'bg-muted text-muted-foreground'
                      }`}>
                        {user.rank}
                      </div>
                      <div className="flex-1">
                        <div className="font-medium text-sm">{user.name}</div>
                        <div className="text-xs text-muted-foreground">{user.score} XP</div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};