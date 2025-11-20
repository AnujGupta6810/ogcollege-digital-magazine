import BlogCard from "./BlogCard";

const mockBlogs = [
  {
    id: "1",
    title: "The Future of Campus Culture: What Gen-Z Really Wants",
    excerpt: "An in-depth look at how the newest generation of students is reshaping college life, from mental health awareness to sustainable living.",
    category: "Culture",
    author: "Alex Rivera",
    date: "2 days ago",
    readTime: "5 min read",
    likes: 234,
    views: 1203,
    featured: true,
  },
  {
    id: "2",
    title: "Breaking Down the Digital Divide in Higher Education",
    excerpt: "Technology has transformed learning, but are all students getting equal access? We investigate.",
    category: "Technology",
    author: "Sam Chen",
    date: "3 days ago",
    readTime: "7 min read",
    likes: 189,
    views: 892,
  },
  {
    id: "3",
    title: "Coffee, Code, and Deadlines: A Developer's Journey",
    excerpt: "From all-nighters to breakthrough moments, one student shares their coding bootcamp experience.",
    category: "Life",
    author: "Jordan Taylor",
    date: "5 days ago",
    readTime: "4 min read",
    likes: 156,
    views: 743,
  },
  {
    id: "4",
    title: "Redefining Success: Beyond the GPA",
    excerpt: "Grades matter, but they're not everything. Students share what success really means to them.",
    category: "Opinion",
    author: "Morgan Lee",
    date: "1 week ago",
    readTime: "6 min read",
    likes: 298,
    views: 1456,
  },
  {
    id: "5",
    title: "The Rise of Micro-Credentials in Education",
    excerpt: "Traditional degrees are being challenged by bite-sized certifications. Here's what you need to know.",
    category: "Education",
    author: "Casey Morgan",
    date: "1 week ago",
    readTime: "8 min read",
    likes: 167,
    views: 678,
  },
];

interface BlogGridProps {
  title: string;
  subtitle?: string;
}

const BlogGrid = ({ title, subtitle }: BlogGridProps) => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center space-y-2">
          <h2 className="text-4xl md:text-5xl font-bold">{title}</h2>
          {subtitle && (
            <p className="text-lg text-muted-foreground">{subtitle}</p>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mockBlogs.map((blog) => (
            <BlogCard key={blog.id} {...blog} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogGrid;
