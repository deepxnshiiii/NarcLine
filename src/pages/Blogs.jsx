import BlogHero from "../Components/BlogHero";
import BlogSection from "../Components/BlogSection";

export default function Blogs() {
    return (
        <div className="px-16 flex flex-col gap-16">
            <BlogHero />
            <BlogSection />
        </div>
    );
}
