
import { Trophy, Award, Medal } from "lucide-react";

const Achievements = () => {
    return (
        <section id="achievements" className="py-32 bg-secondary/30">
            <div className="container mx-auto px-6">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-20">
                        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                            Achievements & Certifications
                        </h2>
                        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                            Recognition of technical expertise and problem-solving skills.
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12 mb-20">

                        {/* Hackathons */}
                        <div className="bg-card p-10 rounded-[2.5rem] border border-border/50 shadow-sm hover:shadow-md transition-all">
                            <div className="flex items-center gap-6 mb-10">
                                <div className="w-16 h-16 bg-accent/10 rounded-3xl flex items-center justify-center">
                                    <Trophy className="w-8 h-8 text-accent" />
                                </div>
                                <h3 className="text-3xl font-bold text-foreground tracking-tight">Hackathons</h3>
                            </div>

                            <div className="space-y-8">
                                <div className="relative pl-8 border-l-2 border-border/50 space-y-6">
                                    <div className="relative">
                                        <div className="absolute -left-[37px] top-1.5 w-4 h-4 rounded-full bg-accent border-4 border-card"></div>
                                        <div className="bg-secondary/50 p-6 rounded-2xl">
                                            <h4 className="font-bold text-xl text-foreground mb-1">Baseline Global Hackathon</h4>
                                            <p className="text-base text-muted-foreground font-medium">Ranked Top 10% Global • Chrome</p>
                                            <p className="text-xs text-muted-foreground/70 mt-2 uppercase tracking-widest font-bold">Oct 2025</p>
                                        </div>
                                    </div>

                                    <div className="relative">
                                        <div className="absolute -left-[37px] top-1.5 w-4 h-4 rounded-full bg-accent border-4 border-card"></div>
                                        <div className="bg-secondary/50 p-6 rounded-2xl">
                                            <h4 className="font-bold text-xl text-foreground mb-1">DigiGreen Hackathon</h4>
                                            <p className="text-base text-muted-foreground font-medium">Top 50/500 • AI Driven Environmental Solution</p>
                                            <p className="text-xs text-muted-foreground/70 mt-2 uppercase tracking-widest font-bold">Aug 2025</p>
                                        </div>
                                    </div>

                                    <div className="relative">
                                        <div className="absolute -left-[37px] top-1.5 w-4 h-4 rounded-full bg-accent border-4 border-card"></div>
                                        <div className="bg-secondary/50 p-6 rounded-2xl">
                                            <h4 className="font-bold text-xl text-foreground mb-1">Zinnovatio Hackathon</h4>
                                            <p className="text-base text-muted-foreground font-medium">Finalist • Cloud Seeding Technology</p>
                                            <p className="text-xs text-muted-foreground/70 mt-2 uppercase tracking-widest font-bold">Oct 2025</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Certifications (Moved to take up space or full width if needed, but keeping 2 col for now) */}
                        <div className="bg-card p-10 rounded-[2.5rem] border border-border/50 shadow-sm hover:shadow-md transition-all flex flex-col justify-center">
                            <div className="flex items-center gap-6 mb-10 justify-center">
                                <div className="w-16 h-16 bg-blue-500/10 rounded-3xl flex items-center justify-center">
                                    <Award className="w-8 h-8 text-blue-500" />
                                </div>
                                <h3 className="text-3xl font-bold text-foreground tracking-tight">Certifications</h3>
                            </div>

                            <div className="flex flex-wrap justify-center gap-3">
                                {[
                                    "Introduction to Cyber Security",
                                    "Git and Github",
                                    "CCNA-Networking",
                                    "Introduction to MongoDB",
                                    "Blockchain Basics",
                                    "AI-ML Introduction",
                                    "Data Science and Data Analytics",
                                    "Full Stack Development",
                                    "Programming JavaScript and CSS",
                                    "Introduction to ML",
                                    "Data Engineering Mastery",
                                    "Platform Engineering"
                                ].map((cert, idx) => (
                                    <div
                                        key={idx}
                                        className="px-5 py-3 bg-secondary/50 border border-border/50 rounded-2xl text-sm font-semibold text-muted-foreground flex items-center gap-2 hover:bg-secondary hover:text-foreground transition-all cursor-default"
                                    >
                                        <Medal className="w-4 h-4 text-accent" />
                                        {cert}
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Achievements;
