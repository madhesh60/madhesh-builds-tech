import { GraduationCap, BookOpen, Calendar } from "lucide-react";

const Education = () => {
    return (
        <section id="education" className="py-24 bg-muted/50">
            <div className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                        Education
                    </h2>
                    <p className="text-xl text-muted-foreground">
                        Academic background and coursework.
                    </p>
                </div>

                <div className="max-w-4xl mx-auto bg-card rounded-3xl p-8 border border-border shadow-sm">
                    <div className="flex flex-col md:flex-row gap-6 items-start">
                        <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                            <GraduationCap className="w-8 h-8 text-accent" />
                        </div>

                        <div className="flex-grow space-y-4">
                            <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                                <div>
                                    <h3 className="text-2xl font-bold text-foreground">
                                        Bachelor of Technology in Information Technology
                                    </h3>
                                    <p className="text-lg text-muted-foreground font-medium">
                                        Chennai Institute of Technology
                                    </p>
                                </div>
                                <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground bg-secondary px-3 py-1 rounded-full">
                                    <Calendar className="w-4 h-4" />
                                    Sep 2024 – May 2028
                                </div>
                            </div>

                            <div className="flex items-center gap-2">
                                <span className="font-semibold text-foreground">•Cumulative Grade Point Average(CGPA):</span>
                                <span className="text-muted-foreground">8.4 / 10</span>
                            </div>

                            <div className="pt-4 border-t border-border/50">
                                <div className="flex items-center gap-2 mb-3">
                                    <BookOpen className="w-4 h-4 text-accent" />
                                    <span className="font-semibold text-foreground">Key Coursework</span>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {[
                                        "Software Engineering",
                                        "Computational Theory",
                                        "Web Frameworks",
                                        "DBMS",
                                        "Operating Systems",
                                        "Networking",
                                        "Algorithms",
                                        "Algorithm Design",
                                        "Fundamentals of Management"
                                    ].map((course, idx) => (
                                        <span
                                            key={idx}
                                            className="px-3 py-1 bg-background border border-border text-muted-foreground text-sm rounded-lg"
                                        >
                                            {course}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Education;
