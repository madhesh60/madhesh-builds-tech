import { GraduationCap, BookOpen, Calendar } from "lucide-react";

const Education = () => {
    return (
        <section id="education" className="py-24 bg-muted/30">
            <div className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                        Education
                    </h2>
                    <p className="text-lg text-muted-foreground">
                        Academic background and coursework
                    </p>
                </div>

                <div className="max-w-4xl mx-auto bg-card rounded-2xl p-8 md:p-10 border border-border shadow-sm hover:shadow-md transition-shadow duration-300">
                    <div className="flex flex-col md:flex-row gap-6 items-start">
                        <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                            <GraduationCap className="w-7 h-7 text-accent" />
                        </div>

                        <div className="flex-grow space-y-6">
                            <div className="space-y-3">
                                <div>
                                    <h3 className="text-2xl font-bold text-foreground mb-2">
                                        Bachelor of Technology in Information Technology
                                    </h3>
                                    <p className="text-lg text-muted-foreground font-medium">
                                        Chennai Institute of Technology
                                    </p>
                                </div>
                                <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground bg-secondary/50 px-4 py-2 rounded-lg w-fit">
                                    <Calendar className="w-4 h-4" />
                                    <span>September 2024 – May 2028</span>
                                </div>
                            </div>

                            <div className="flex flex-col sm:flex-row sm:items-center gap-2 pt-2">
                                <span className="font-semibold text-foreground">Cumulative Grade Point Average (CGPA):</span>
                                <span className="text-muted-foreground font-medium text-lg">8.4 / 10</span>
                            </div>

                            <div className="pt-6 border-t border-border">
                                <div className="flex items-center gap-2 mb-4">
                                    <BookOpen className="w-5 h-5 text-accent" />
                                    <span className="font-semibold text-foreground text-lg">Key Coursework</span>
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
                                            className="px-3 py-1.5 bg-secondary/80 border border-border text-foreground text-sm rounded-lg font-medium hover:bg-secondary transition-colors"
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
