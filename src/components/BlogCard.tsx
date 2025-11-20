import { Heart, Eye, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useState } from "react";

interface BlogCardProps {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  likes: number;
  views: number;
  image?: string;
  featured?: boolean;
}

const BlogCard = ({ 
  id, 
  title, 
  excerpt, 
  category, 
  author, 
  date, 
  readTime, 
  likes: initialLikes, 
  views,
  image,
  featured = false 
}: BlogCardProps) => {
  const [likes, setLikes] = useState(initialLikes);
  const [isLiked, setIsLiked] = useState(false);

  const handleLike = () => {
    setIsLiked(!isLiked);
    setLikes(isLiked ? likes - 1 : likes + 1);
  };

  return (
    <article className={`group hover-lift rounded-lg overflow-hidden bg-card shadow-soft ${featured ? 'md:col-span-2' : ''}`}>
      <Link to={`/blog/${id}`}>
        <div className="relative overflow-hidden aspect-video bg-muted">
          {image ? (
            <img 
              src={image} 
              alt={title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-primary/20 to-accent/20"></div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-smooth"></div>
        </div>
      </Link>

      <div className="p-6 space-y-4">
        <div className="flex items-center gap-2">
          <Badge variant="secondary">{category}</Badge>
          <span className="text-xs text-muted-foreground">{date}</span>
        </div>

        <Link to={`/blog/${id}`}>
          <h3 className="text-xl font-bold line-clamp-2 group-hover:text-primary transition-smooth">
            {title}
          </h3>
        </Link>

        <p className="text-muted-foreground line-clamp-3 text-sm">
          {excerpt}
        </p>

        <div className="flex items-center justify-between pt-4 border-t border-border">
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <span className="font-medium text-foreground">{author}</span>
            <div className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              {readTime}
            </div>
            <div className="flex items-center gap-1">
              <Eye className="h-4 w-4" />
              {views}
            </div>
          </div>

          <Button
            variant="ghost"
            size="sm"
            onClick={handleLike}
            className={`gap-1 ${isLiked ? 'text-primary' : ''}`}
          >
            <Heart className={`h-4 w-4 ${isLiked ? 'fill-current' : ''}`} />
            {likes}
          </Button>
        </div>
      </div>
    </article>
  );
};

export default BlogCard;
