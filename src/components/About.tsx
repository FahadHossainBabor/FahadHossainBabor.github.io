import { Sparkles, Brain, Code2, Rocket } from "lucide-react";
import { Card } from "@/components/ui/card";
import profileImg from "@/assets/profile.jpg";

const About = () => {
  const highlights = [
    {
      icon: Brain,
      title: "Machine Learning",
      description: "Training models and implementing algorithms",
    },
    {
      icon: Code2,
      title: "Data Processing",
      description: "Preprocessing and feature engineering",
    },
    {
      icon: Sparkles,
      title: "Deep Learning",
      description: "Neural networks with TensorFlow/PyTorch",
    },
    {
      icon: Rocket,
      title: "Model Deployment",
      description: "Taking models from training to production",
    },
  ];

  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 animate-fade-in-up">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-center text-muted-foreground mb-12 animate-fade-in-up">
            Get to know more about my journey and expertise
          </p>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
            <div className="animate-slide-in-left">
              <div className="relative w-64 h-64 mx-auto">
                <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent rounded-full opacity-20 blur-2xl animate-glow" />
                <img
                  src={profileImg}
                  alt="Fahad Hossain - Computer Science Student"
                  className="relative w-full h-full object-cover rounded-full border-4 border-primary/20 shadow-lg"
                />
              </div>
            </div>

            <div className="animate-slide-in-right space-y-4">
              <h3 className="text-2xl font-semibold mb-4">Computer Science Student</h3>
              <p className="text-muted-foreground leading-relaxed">
                I am a Computer Science student with a strong passion for Machine Learning 
                and Artificial Intelligence. My journey involves building small to medium-sized 
                projects that help me practice and master various aspects of ML/AI development.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                From data preprocessing and algorithm implementation to model training and 
                deployment, I enjoy the entire process of creating intelligent systems that 
                can solve real-world problems.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                I'm constantly learning and exploring new techniques in deep learning, 
                natural language processing, and computer vision to expand my skill set 
                and build more sophisticated applications.
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((item, index) => (
              <Card
                key={index}
                className="p-6 text-center card-hover animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 mx-auto mb-4 bg-primary/10 rounded-lg flex items-center justify-center">
                  <item.icon className="h-6 w-6 text-primary" />
                </div>
                <h4 className="font-semibold mb-2">{item.title}</h4>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
