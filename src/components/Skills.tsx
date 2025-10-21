import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

const Skills = () => {
  const [filter, setFilter] = useState("all");

  const skillCategories = [
    {
      category: "Languages",
      skills: [
        { name: "Python", level: 90, tags: ["languages"] },
        { name: "JavaScript", level: 75, tags: ["languages"] },
        { name: "HTML/CSS", level: 80, tags: ["languages"] },
      ],
    },
    {
      category: "ML/AI Frameworks",
      skills: [
        { name: "TensorFlow", level: 85, tags: ["ml"] },
        { name: "PyTorch", level: 80, tags: ["ml"] },
        { name: "scikit-learn", level: 90, tags: ["ml"] },
        { name: "Keras", level: 85, tags: ["ml"] },
      ],
    },
    {
      category: "Data Science",
      skills: [
        { name: "NumPy", level: 90, tags: ["data"] },
        { name: "Pandas", level: 90, tags: ["data"] },
        { name: "Matplotlib", level: 80, tags: ["data"] },
        { name: "Seaborn", level: 75, tags: ["data"] },
      ],
    },
    {
      category: "Tools & Others",
      skills: [
        { name: "Git", level: 85, tags: ["tools"] },
        { name: "Jupyter", level: 90, tags: ["tools"] },
        { name: "Docker", level: 60, tags: ["tools"] },
        { name: "REST APIs", level: 70, tags: ["tools"] },
      ],
    },
  ];

  const filterOptions = [
    { value: "all", label: "All Skills" },
    { value: "languages", label: "Languages" },
    { value: "ml", label: "ML/AI" },
    { value: "data", label: "Data Science" },
    { value: "tools", label: "Tools" },
  ];

  const filteredSkills = skillCategories
    .map((category) => ({
      ...category,
      skills: category.skills.filter(
        (skill) => filter === "all" || skill.tags.includes(filter)
      ),
    }))
    .filter((category) => category.skills.length > 0);

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 animate-fade-in-up">
            My <span className="text-gradient">Skills</span>
          </h2>
          <p className="text-center text-muted-foreground mb-8 animate-fade-in-up">
            Technologies and tools I work with
          </p>

          <div className="flex flex-wrap gap-2 justify-center mb-12 animate-fade-in-up">
            {filterOptions.map((option) => (
              <Badge
                key={option.value}
                variant={filter === option.value ? "default" : "outline"}
                className="cursor-pointer px-4 py-2 transition-all hover:scale-105"
                onClick={() => setFilter(option.value)}
              >
                {option.label}
              </Badge>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {filteredSkills.map((category, categoryIndex) => (
              <Card
                key={category.category}
                className="p-6 card-hover animate-scale-in"
                style={{ animationDelay: `${categoryIndex * 0.1}s` }}
              >
                <h3 className="text-xl font-semibold mb-6 text-primary">
                  {category.category}
                </h3>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skill.name}
                      className="animate-fade-in-up"
                      style={{
                        animationDelay: `${(categoryIndex * 0.1 + skillIndex * 0.05)}s`,
                      }}
                    >
                      <div className="flex justify-between mb-2">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-muted-foreground">{skill.level}%</span>
                      </div>
                      <Progress value={skill.level} className="h-2" />
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
