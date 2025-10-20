import { Award, Users, Target, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="font-poppins font-bold text-4xl sm:text-5xl text-foreground">
              About <span className="text-primary">SiliconBadi</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Founded on the principles of innovation, trust, and technical excellence
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <h3 className="font-poppins font-bold text-3xl text-foreground">Our Founder's Journey</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                With over <strong className="text-primary">10 years of experience</strong> in software engineering
                and architecture, our founder has been recognized with multiple awards for technical excellence and
                innovation.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Having worked with industry leaders like <strong>ING</strong>, and{" "}
                <strong>KLM</strong>, we bring world-class expertise combined with the warmth and dedication rooted in
                our Telugu heritage.
              </p>
              <div className="flex flex-wrap gap-3 pt-4">
                <span className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
                  Front-end
                </span>
                <span className="px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium">
                  Back-end
                </span>
                <span className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
                  DevOps
                </span>
              </div>
            </div>

            <div className="space-y-4">
              <Card className="gradient-card border-border shadow-soft">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Target className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-2">Agile Methodology</h4>
                      <p className="text-muted-foreground">
                        We embrace agile practices for iterative development, continuous feedback, and rapid delivery.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="gradient-card border-border shadow-soft">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <Zap className="w-6 h-6 text-accent" />
                    </div>
                    <div>                      
                      <h4 className="font-semibold text-lg mb-2">Enterprise-Grade Software Development</h4>
                      <p className="text-muted-foreground">
                        We deliver robust, secure, and high-performance solutions with enterprise experience, ensuring quality, scalability and end-to-end ownership from development to deployment.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="gradient-card border-border shadow-soft">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Users className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-2">Scalable Design</h4>
                      <p className="text-muted-foreground">
                        Every solution is architected to scale seamlessly as your business grows and evolves.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="text-center bg-gradient-to-br from-primary/5 via-accent/5 to-primary/5 rounded-3xl p-8 sm:p-12 border border-primary/10">
            <Award className="w-16 h-16 text-primary mx-auto mb-4" />
            <h3 className="font-poppins font-bold text-2xl sm:text-3xl mb-4">
              Recognized for Excellence
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Multiple industry awards for innovation, technical leadership, and exceptional project delivery.
              We're committed to exceeding expectations on every engagement.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
