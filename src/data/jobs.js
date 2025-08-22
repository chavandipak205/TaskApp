export const jobs = [
  {
    id: "1",
    title: "Frontend Designer",
    company: "Info Corp",
    location: "New York, USA",
    level: "Senior",
    type: "Full Time",
    salary: "50k - 70k",
    tags: ["frontend", "react", "ui"],
    isSuggested: true,
    isRecommended: false,
    postedAt: Date.now() - 10 * 60 * 60 * 1000, // 10 hours
    logo: "🧩",
    about:
      "Info Corp builds intuitive user interfaces for enterprise apps across the globe.",
    description:
      "We are seeking a senior Frontend Designer with strong React skills to create pixel-perfect experiences. You will collaborate with product and design to build delightful, performant interfaces.",
    responsibilities: [
      "Craft accessible, responsive UI with React",
      "Collaborate with designers to implement scalable design systems",
      "Own features end-to-end with testing and monitoring",
      "Mentor junior engineers and review code"
    ]
  },
  {
    id: "2",
    title: "Python Developer",
    company: "Code INC",
    location: "Germany",
    level: "Senior",
    type: "Full Time",
    salary: "80k - 90k",
    work: "Remote",
    tags: ["python", "backend", "api", "remote"],
    isSuggested: false,
    isRecommended: true,
    postedAt: Date.now() - 2 * 24 * 60 * 60 * 1000, // 2 days
    logo: "🧠",
    about:
      "Code INC is a product-first company delivering developer tools and cloud services.",
    description:
      "As a Python Developer, you will build APIs and services powering our analytics platform. You will write clean, well-tested code and work closely with SRE to deploy and monitor services.",
    responsibilities: [
      "Design RESTful APIs using FastAPI/Django",
      "Write unit/integration tests",
      "Optimize queries and background jobs",
      "Participate in on-call and incident reviews"
    ]
  },
  {
    id: "3",
    title: "Product Engineer",
    company: "Cube Tech",
    location: "United Kingdom",
    level: "Senior",
    type: "Part Time",
    salary: "70k-90k",
     work: "Remote",
    tags: ["fullstack", "typescript", "remote"],
    isSuggested: false,
    isRecommended: true,
    postedAt: Date.now() - 5 * 24 * 60 * 60 * 1000, // 5 days
    logo: "🧊",
    about:
      "Cube Tech is a fast-growing startup building data tools for modern teams.",
    description:
      "Work across the stack to ship product features quickly. You are comfortable jumping between UI, API, and infra tasks.",
    responsibilities: [
      "Own end-user features across the stack",
      "Collaborate closely with design",
      "Improve developer experience and tooling"
    ]
  },
  
   {
      id:"4",
      title: "Backend Developer",
      company: "Tech Solutions",
      location: "Pune",
      level: "Mid",
      type: "Full Time",
      salary: "60k - 80k",
      tags: ["backend", "node", "api"],
      isSuggested: true,
      isRecommended: false,
      postedAt: Date.now() - 1 * 60 * 60 * 1000, // 1 hour
      logo: "🖥️",
      about:
        "Tech Solutions is a leading provider of innovative software solutions.",
      description:
        "We are looking for a Backend Developer with experience in Node.js to join our team.",
      responsibilities: [
        "Develop and maintain RESTful APIs",
        "Collaborate with frontend developers to integrate user-facing elements",
        "Optimize applications for maximum speed and scalability"
      ]
    },
    {
      "id": "5",
      "title": "Data Scientist",
      "company": "Data Corp",
      "location": "Bangalore",
      "level": "Senior",
      "type": "Full Time",
      "salary": "90k - 120k",
      "tags": ["data", "python", "ml"],
      "isSuggested": false,
      "isRecommended": true,
      "postedAt": Date.now() - 3 * 24 * 60 * 60 * 1000, // 3 days
      "logo": "📊",
      "about":
        "Data Corp is a leading provider of data analytics solutions.",
      "description":
        "We are looking for a Data Scientist with experience in machine learning to join our team.",
      "responsibilities": [
        "Develop and deploy machine learning models",
        "Collaborate with data engineers to optimize data pipelines",
        "Analyze large datasets to extract insights"
      ]
    }
];
