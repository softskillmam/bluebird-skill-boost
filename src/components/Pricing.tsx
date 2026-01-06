import { Button } from "@/components/ui/button";
import { Check, Sparkles } from "lucide-react";
import ParallaxSection from "./ParallaxSection";
import { useParallax } from "@/hooks/useParallax";

const plans = [
  {
    name: "Starter",
    price: "₹2,999",
    period: "/Year",
    description: "Perfect for beginners starting their soft skills journey",
    features: [
      "Access to 10 core modules",
      "Weekly live sessions",
      "Community forum access",
      "Basic assessments",
      "Email support",
    ],
    popular: false,
  },
  {
    name: "Professional",
    price: "₹5,999",
    period: "/Year",
    description: "Most popular choice for serious career growth",
    features: [
      "Access to all 50+ modules",
      "Daily live sessions",
      "1-on-1 mock interviews",
      "Personality assessment",
      "Certificate of completion",
      "Priority support",
      "Career counseling",
    ],
    popular: true,
  },
  {
    name: "Enterprise",
    price: "₹9,999",
    period: "/Year",
    description: "For teams and organizations seeking excellence",
    features: [
      "Everything in Professional",
      "Unlimited mock interviews",
      "Custom training modules",
      "Dedicated success manager",
      "Team analytics dashboard",
      "API access",
      "White-label options",
    ],
    popular: false,
  },
];

const Pricing = () => {
  const parallaxOffset = useParallax({ speed: 0.12 });

  return (
    <section id="pricing" className="py-20 lg:py-32 bg-popover relative overflow-hidden">
      {/* Parallax background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-primary/5 to-transparent rounded-full blur-3xl"
          style={{ transform: `translateY(${parallaxOffset * 0.3}px)` }}
        />
        <div 
          className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-accent/5 to-transparent rounded-full blur-3xl"
          style={{ transform: `translateY(${parallaxOffset * -0.2}px)` }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <ParallaxSection className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            Pricing Plans
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Invest in Your Future
            <br />
            <span className="text-gradient">Choose Your Plan</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Flexible pricing options designed to fit every budget and learning goal.
          </p>
        </ParallaxSection>

        {/* Pricing Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <ParallaxSection
              key={index}
              animation="reveal-scale"
              delay={index * 150}
            >
              <div
                className={`relative p-8 rounded-2xl border transition-all duration-300 hover-lift h-full flex flex-col ${
                  plan.popular
                    ? "bg-gradient-card border-primary shadow-glow"
                    : "bg-card border-border hover:border-primary/50"
                }`}
              >
                {/* Popular badge */}
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <div className="flex items-center gap-1 px-4 py-1.5 rounded-full bg-gradient-primary text-primary-foreground text-sm font-semibold">
                      <Sparkles className="w-4 h-4" />
                      Most Popular
                    </div>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-xl font-bold text-foreground mb-2">{plan.name}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                    <span className="text-muted-foreground">{plan.period}</span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8 flex-grow">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                        <Check className="w-3 h-3 text-primary" />
                      </div>
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  variant={plan.popular ? "hero" : "outline"}
                  size="lg"
                  className="w-full mt-auto"
                >
                  Get Started
                </Button>
              </div>
            </ParallaxSection>
          ))}
        </div>

        {/* Trust badges */}
        <ParallaxSection className="flex flex-wrap justify-center items-center gap-8 mt-16 text-muted-foreground text-sm" delay={400}>
          <div className="flex items-center gap-2">
            <Check className="w-5 h-5 text-primary" />
            <span>7-day free trial</span>
          </div>
          <div className="flex items-center gap-2">
            <Check className="w-5 h-5 text-primary" />
            <span>Cancel anytime</span>
          </div>
          <div className="flex items-center gap-2">
            <Check className="w-5 h-5 text-primary" />
            <span>Money-back guarantee</span>
          </div>
        </ParallaxSection>
      </div>
    </section>
  );
};

export default Pricing;