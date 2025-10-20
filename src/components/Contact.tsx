import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, MapPin, Phone } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 relative">
      <div className="absolute inset-0 gradient-subtle" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="font-poppins font-bold text-4xl sm:text-5xl text-foreground">
              Let's Build Something <span className="text-primary">Amazing</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Ready to transform your ideas into reality? Get in touch with us today.
            </p>
          </div>

          <Card className="gradient-card border-border shadow-hover">
            <CardContent className="p-8 sm:p-12">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <h3 className="font-poppins font-bold text-2xl mb-6">Contact Information</h3>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium mb-1">Email</p>
                      <a
                        href="mailto:contact@siliconbadi.com"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        contact@siliconbadi.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <p className="font-medium mb-1">Phone</p>
                      <a
                        href="tel:+31 686410689"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        +31 686410689
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium mb-1">Location</p>
                      <p className="text-muted-foreground">
                        Eindhoven, Netherlands
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <h3 className="font-poppins font-bold text-2xl mb-6">Ready to Start?</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Whether you're looking to build a new application, modernize your infrastructure, or need expert
                    consulting on your next big project, we're here to help.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Drop us an email and let's discuss how we can bring your vision to life with cutting-edge
                    technology and proven expertise.
                  </p>
                  <Button
                    size="lg"
                    className="w-full rounded-full text-lg shadow-hover hover:shadow-glow"
                    asChild
                  >
                    <a href="mailto:contact@siliconbadi.com">Send us an Email</a>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="mt-12 text-center">
            <p className="text-muted-foreground">
              Prefer a call? We are available Monday to Friday, 9 AM - 6 PM CET
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
