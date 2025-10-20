import { Server, Cloud, Boxes, Layers, Code, Shield } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    icon: Layers,
    title: "Software Architecture",
    description:
      "Design robust, scalable architectures that grow with your business. We craft systems built for performance, maintainability, and future-proof innovation.",
  },
  {
    icon: Server,
    title: "DevOps Excellence",
    description:
      "Streamline your development pipeline with automated CI/CD, infrastructure as code, and continuous monitoring. Ship faster, deploy confidently.",
  },
  {
    icon: Shield,
    title: "Blockchain Solutions",
    description:
      "Unlock the power of decentralized technology. From smart contracts to distributed systems, we build secure and transparent blockchain applications.",
  },
  {
    icon: Cloud,
    title: "Cloud Engineering",
    description:
      "Migrate, optimize, and scale your applications in the cloud. We specialize in AWS, Azure, and GCP to maximize efficiency and minimize costs.",
  },
  {
    icon: Boxes,
    title: "Kubernetes & Containerization",
    description:
      "Master container orchestration with Kubernetes. We deploy, manage, and scale your microservices with enterprise-grade reliability.",
  },
  {
    icon: Code,
    title: "Go & Node.js Development",
    description:
      "Build high-performance backend systems with Go and Node.js. From APIs to real-time applications, we deliver fast, efficient, and maintainable code.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 relative">
      <div className="absolute inset-0 gradient-subtle" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="font-poppins font-bold text-4xl sm:text-5xl text-foreground">
            Our <span className="text-primary">Services</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Comprehensive consulting services designed to accelerate your digital transformation and technical excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="gradient-card border-border hover:shadow-hover hover-lift transition-all duration-300 group"
            >
              <CardHeader>
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-7 h-7 text-primary" />
                </div>
                <CardTitle className="text-2xl font-poppins">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
