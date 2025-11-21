import { useState } from "react";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import BlogGrid from "@/components/BlogGrid";
import SearchResults from "@/components/SearchResults";
import { mockBlogs } from "@/data/mockBlogs";

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<typeof mockBlogs>([]);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    if (query.trim() === "") {
      setSearchResults([]);
      return;
    }

    const filtered = mockBlogs
      .filter((blog) => {
        const searchLower = query.toLowerCase();
        return (
          blog.title.toLowerCase().includes(searchLower) ||
          blog.excerpt.toLowerCase().includes(searchLower) ||
          blog.category.toLowerCase().includes(searchLower) ||
          blog.author.toLowerCase().includes(searchLower)
        );
      })
      .slice(0, 10);

    setSearchResults(filtered);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation onSearch={handleSearch} />
      <Hero />
      
      {searchQuery && <SearchResults results={searchResults} query={searchQuery} />}
      
      <BlogGrid 
        title="Trending Now" 
        subtitle="The most-read stories this week"
      />
      <div className="bg-muted/30">
        <BlogGrid 
          title="Latest Stories" 
          subtitle="Fresh perspectives from our community"
        />
      </div>
    </div>
  );
};

export default Index;
