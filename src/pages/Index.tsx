import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import BlogGrid from "@/components/BlogGrid";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
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
