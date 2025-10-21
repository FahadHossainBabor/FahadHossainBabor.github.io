import { ExternalLink, Github } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";

const Projects = () => {
  const projects = [
    {
      title: "AI Image Classifier",
      description:
        "Deep learning model using CNN to classify images across multiple categories with 95% accuracy. Built with TensorFlow and deployed as a web app.",
      image: project1,
      technologies: ["Python", "TensorFlow", "Keras", "Flask", "React"],
      github: "https://github.com/yourusername/image-classifier",
      demo: "https://image-classifier-demo.com",
    },
    {
      title: "Sentiment Analyzer",
      description:
        "NLP-based sentiment analysis tool that processes customer reviews and social media data. Provides real-time insights with visualization dashboards.",
      image: project2,
      technologies: ["Python", "NLTK", "scikit-learn", "Pandas", "Plotly"],
      github: "https://github.com/yourusername/sentiment-analyzer",
      demo: "https://sentiment-analyzer-demo.com",
    },
    {
      title: "Smart Recommendation System",
      description:
        "Collaborative filtering recommendation engine for movies and products. Implements matrix factorization and content-based filtering techniques.",
      image: project3,
      technologies: ["Python", "PyTorch", "NumPy", "FastAPI", "Docker"],
      github: "https://github.com/yourusername/recommendation-system",
      demo: "https://recommendation-demo.com",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 animate-fade-in-up">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-center text-muted-foreground mb-12 animate-fade-in-up">
            Check out some of my recent ML/AI projects
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card
                key={project.title}
                className="overflow-hidden card-hover animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={`${project.title} - Machine Learning Project`}
                    className="w-full h-full object-cover transition-transform hover:scale-110 duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent opacity-60" />
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1"
                      asChild
                    >
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="mr-2 h-4 w-4" />
                        Code
                      </a>
                    </Button>
                    <Button
                      size="sm"
                      className="flex-1"
                      asChild
                    >
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Demo
                      </a>
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
