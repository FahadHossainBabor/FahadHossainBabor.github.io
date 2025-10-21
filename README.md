# Fahad Hossain - Portfolio Website

A modern, responsive portfolio website showcasing my Computer Science projects with a focus on Machine Learning and AI.

## 🚀 Features

- **Responsive Design**: Fully optimized for mobile, tablet, and desktop
- **Dark/Light Mode**: Toggle between themes with persistent storage
- **Smooth Animations**: Fade-ins, slides, and hover effects
- **Project Showcase**: Featured ML/AI projects with live demos
- **Skills Section**: Filterable skill categories with progress indicators
- **Contact Form**: Get in touch section with form validation
- **SEO Optimized**: Meta tags and semantic HTML for better visibility

## 🛠️ Tech Stack

- **React** - UI library
- **TypeScript** - Type-safe code
- **Vite** - Fast build tool
- **Tailwind CSS** - Utility-first styling
- **shadcn/ui** - Beautiful UI components
- **Lucide React** - Icon library

## 📦 Installation & Setup

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Steps to Run Locally

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd <project-folder>
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```
   The app will run on `http://localhost:8080`

4. **Build for production**
   ```bash
   npm run build
   ```

## 📝 Customization Guide

### Update Personal Information

#### 1. Hero Section (`src/components/Hero.tsx`)
```typescript
// Update name, role, bio
<h1>Hi, I'm <span>Your Name</span></h1>
<p>Your Role/Title</p>
<p>Your bio description...</p>

// Update social links
href="mailto:your-email@example.com"
href="https://github.com/yourusername"
href="https://linkedin.com/in/yourusername"
```

#### 2. About Section (`src/components/About.tsx`)
- Replace profile image in `src/assets/profile.jpg`
- Update bio paragraphs with your story

#### 3. Skills Section (`src/components/Skills.tsx`)
```typescript
// Modify the skillCategories array
const skillCategories = [
  {
    category: "Your Category",
    skills: [
      { name: "Skill Name", level: 85, tags: ["tag"] },
      // Add more skills...
    ],
  },
];
```

#### 4. Projects Section (`src/components/Projects.tsx`)
```typescript
// Update projects array
const projects = [
  {
    title: "Project Name",
    description: "Project description...",
    image: projectImage,
    technologies: ["Tech1", "Tech2"],
    github: "https://github.com/...",
    demo: "https://...",
  },
];
```

#### 5. Contact Info (`src/components/Contact.tsx`)
```typescript
// Update contact information
const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    value: "your-email@example.com",
    link: "mailto:your-email@example.com",
  },
  {
    icon: MapPin,
    title: "Location",
    value: "Your City, Country",
    link: null,
  },
];
```

### Replace Images

1. Add your images to `src/assets/`
2. Update imports in components:
   ```typescript
   import yourImage from "@/assets/your-image.jpg";
   ```

### Customize Colors & Theme

Edit design tokens in `src/index.css`:
```css
:root {
  --primary: 235 70% 25%;    /* Main brand color */
  --accent: 190 95% 50%;     /* Accent color */
  --gradient-hero: ...;       /* Hero gradient */
}
```

## 📧 Contact Form Integration

The contact form currently shows a toast notification. To connect it to a real backend:

### Option 1: EmailJS (Recommended for frontend-only)

1. Sign up at [EmailJS](https://www.emailjs.com/)
2. Get your service ID, template ID, and public key
3. Install EmailJS:
   ```bash
   npm install @emailjs/browser
   ```
4. Update `src/components/Contact.tsx`:
   ```typescript
   import emailjs from '@emailjs/browser';
   
   const handleSubmit = async (e: React.FormEvent) => {
     e.preventDefault();
     setIsSubmitting(true);
     
     try {
       await emailjs.send(
         'YOUR_SERVICE_ID',
         'YOUR_TEMPLATE_ID',
         formData,
         'YOUR_PUBLIC_KEY'
       );
       toast({ title: "Message sent!" });
       setFormData({ name: "", email: "", message: "" });
     } catch (error) {
       toast({ 
         title: "Error", 
         description: "Failed to send message",
         variant: "destructive"
       });
     } finally {
       setIsSubmitting(false);
     }
   };
   ```

### Option 2: Netlify Forms

Add `data-netlify="true"` to your form tag and Netlify will handle it automatically.

### Option 3: Custom Backend API

Replace the `handleSubmit` function with a fetch/axios call to your backend endpoint.

## 🚀 Deployment

### Deploy to Netlify

1. Push code to GitHub
2. Connect repository to [Netlify](https://netlify.com)
3. Build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`

### Deploy to Vercel

1. Push code to GitHub
2. Import project on [Vercel](https://vercel.com)
3. Deploy automatically

### Deploy to GitHub Pages

1. Install gh-pages:
   ```bash
   npm install --save-dev gh-pages
   ```
2. Add to `package.json`:
   ```json
   "homepage": "https://yourusername.github.io/portfolio",
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```
3. Deploy:
   ```bash
   npm run deploy
   ```

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio!

---

Built with ❤️ by Fahad Hossain
