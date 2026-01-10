import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Calendar, ChevronLeft, ChevronRight } from "lucide-react";

// Images
import cardanoImage from "@/hackathonsAssets/cardanoImage1.jpeg";
import cardanoImage1 from "@/hackathonsAssets/cardanoImage.jpeg";
import retailImage from "@/hackathonsAssets/retailImage.png";
import retailImage1 from "@/hackathonsAssets/retailImage1.png";
import baselineImage from "@/hackathonsAssets/baselineImage.jpeg";
import baselineImage1 from "@/hackathonsAssets/baselineImage1.jpeg";

// Placeholder for handling missing images gracefully
// We use cardanoImage as a fallback for missing images to ensure the build passes

interface Hackathon {
    title: string;
    date: string;
    description: string;
    images: string[];
    tags: string[];
    achievement: string;
}

const hackathons: Hackathon[] = [
    {
        title: "Cardano Asia IBW Hackathon",
        date: "Nov 2025",
        description: "Built a ZkProof Lending Porotocol within 30 hours",
        images: [cardanoImage, cardanoImage1],
        tags: ["DeFi", "ZkProof", "Lending Protocol"],
        achievement: "Finalist [Top 200/3000+]"
    },
    {
        title: "Retail Hackathon",
        date: "Dec 2025",
        description: "Built a GenAI Retail Creative and Management System with retail guidelines",
        images: [retailImage, retailImage1],
        tags: ["GenAI", "OpenCV", "Image Processing"],
        achievement: "Finalist"
    },
    {
        title: "Google's Baseline Hackathon",
        date: "Oct 2025",
        description: "Ranked top 10% among global developers for the Baseline Extension project. Developed a browser extension scanning code for unsupported web features using MDN Baseline API.",
        images: [baselineImage,baselineImage1],
        tags: ["Chrome Extension", "JavaScript", "MDN API"],
        achievement: "Top 10% Global"
    }
];

const HackathonCard = ({ hack, index }: { hack: Hackathon; index: number }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const nextImage = (e: React.MouseEvent) => {
        e.stopPropagation(); // Prevent any parent clicks
        e.preventDefault();
        setCurrentImageIndex((prev) => (prev + 1) % hack.images.length);
    };

    const prevImage = (e: React.MouseEvent) => {
        e.stopPropagation();
        e.preventDefault();
        setCurrentImageIndex((prev) => (prev - 1 + hack.images.length) % hack.images.length);
    };

    return (
        <div
            className="group bg-card rounded-[2rem] overflow-hidden border border-border/50 hover:border-accent/50 transition-all duration-500 hover:shadow-lg flex flex-col"
        >
            <div className="relative h-64 overflow-hidden bg-muted/20">
                {hack.images.length > 0 ? (
                    <img
                        src={hack.images[currentImageIndex]}
                        alt={`${hack.title} - Image ${currentImageIndex + 1}`}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                ) : (
                    <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                        No Image
                    </div>
                )}

                <div className="absolute top-4 right-4 bg-background/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border border-border z-10">
                    {hack.achievement}
                </div>

                {hack.images.length > 1 && (
                    <>
                        <button
                            onClick={prevImage}
                            className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-1.5 rounded-full backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100 focus:opacity-100 z-20"
                            aria-label="Previous image"
                        >
                            <ChevronLeft className="w-4 h-4" />
                        </button>
                        <button
                            onClick={nextImage}
                            className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-1.5 rounded-full backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100 focus:opacity-100 z-20"
                            aria-label="Next image"
                        >
                            <ChevronRight className="w-4 h-4" />
                        </button>

                        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
                            {hack.images.map((_, idx) => (
                                <div
                                    key={idx}
                                    className={`h-1.5 rounded-full transition-all duration-300 ${idx === currentImageIndex
                                        ? 'w-4 bg-white'
                                        : 'w-1.5 bg-white/50 hover:bg-white/70'
                                        }`}
                                />
                            ))}
                        </div>
                    </>
                )}
            </div>

            <div className="p-8 flex flex-col flex-grow">
                <div className="flex items-center gap-2 text-sm text-muted-foreground font-medium mb-3">
                    <Calendar className="w-4 h-4" />
                    {hack.date}
                </div>

                <h2 className="text-2xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors">
                    {hack.title}
                </h2>

                <p className="text-muted-foreground leading-relaxed mb-6 flex-grow">
                    {hack.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto">
                    {hack.tags.map((tag, idx) => (
                        <span
                            key={idx}
                            className="px-3 py-1 bg-secondary rounded-lg text-xs font-semibold text-secondary-foreground"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
};

const Hackathons = () => {
    return (
        <div className="min-h-screen bg-background">
            <Navigation />

            <main className="pt-32 pb-24">
                <div className="container mx-auto px-6">
                    <div className="max-w-6xl mx-auto">
                        <div className="mb-16">
                            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-foreground mb-6">
                                Hackathon <br /> <span className="text-muted-foreground">Works</span>
                            </h1>
                            <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
                                Building intense prototypes, solving complex problems, and competing with the best minds in limited timeframes.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {hackathons.map((hack, index) => (
                                <HackathonCard key={index} hack={hack} index={index} />
                            ))}
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default Hackathons;
