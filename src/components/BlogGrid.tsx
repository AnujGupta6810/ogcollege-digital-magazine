import BlogCard from "./BlogCard";
import { mockBlogs } from "@/data/mockBlogs";

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
