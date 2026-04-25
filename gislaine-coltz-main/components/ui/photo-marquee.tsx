import { cn } from "@/lib/utils"

interface PhotoMarqueeProps {
    title: string
    description: string
    photos: string[]
    className?: string
}

export function PhotoMarquee({
    title,
    description,
    photos,
    className
}: PhotoMarqueeProps) {
    return (
        <section className={cn(
            "bg-gc-light text-gc-text",
            "py-12 sm:py-24 md:py-32 px-0",
            className
        )}>
            <div className="mx-auto flex max-w-container flex-col items-center gap-4 text-center sm:gap-16">
                <div className="flex flex-col items-center gap-4 px-4 sm:gap-8">
                    <h2 className="max-w-[720px] text-3xl font-bold leading-tight sm:text-5xl sm:leading-tight text-gc-dark">
                        {title}
                    </h2>
                    <p className="text-md max-w-[600px] font-medium text-gc-text/80 sm:text-xl">
                        {description}
                    </p>
                </div>

                <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
                    <div className="group flex overflow-hidden p-2 [--gap:1rem] [gap:var(--gap)] flex-row [--duration:40s]">
                        <div className="flex shrink-0 justify-around [gap:var(--gap)] animate-marquee flex-row group-hover:[animation-play-state:paused]">
                            {[...Array(2)].map((_, setIndex) => (
                                photos.map((photo, i) => (
                                    <div
                                        key={`a-${setIndex}-${i}`}
                                        className={cn(
                                            "flex flex-col overflow-hidden rounded-2xl border-2 border-gc-gold/30 bg-white shadow-xl",
                                            "w-[280px] sm:w-[350px] aspect-[3/4]",
                                            "transition-all hover:scale-105 hover:border-gc-gold hover:shadow-2xl duration-500",
                                            "filter brightness-95 hover:brightness-100"
                                        )}
                                    >
                                        <img
                                            src={photo}
                                            alt={`Photo ${i + 1}`}
                                            className="h-full w-full object-cover"
                                        />
                                    </div>
                                ))
                            ))}
                        </div>
                        <div aria-hidden="true" className="flex shrink-0 justify-around [gap:var(--gap)] animate-marquee flex-row group-hover:[animation-play-state:paused]">
                            {[...Array(2)].map((_, setIndex) => (
                                photos.map((photo, i) => (
                                    <div
                                        key={`b-${setIndex}-${i}`}
                                        className={cn(
                                            "flex flex-col overflow-hidden rounded-2xl border-2 border-gc-gold/30 bg-white shadow-xl",
                                            "w-[280px] sm:w-[350px] aspect-[3/4]",
                                            "transition-all hover:scale-105 hover:border-gc-gold hover:shadow-2xl duration-500",
                                            "filter brightness-95 hover:brightness-100"
                                        )}
                                    >
                                        <img
                                            src={photo}
                                            alt={`Photo ${i + 1}`}
                                            className="h-full w-full object-cover"
                                        />
                                    </div>
                                ))
                            ))}
                        </div>
                    </div>

                    <div className="pointer-events-none absolute inset-y-0 left-0 hidden w-1/5 bg-gradient-to-r from-gc-light via-gc-light/80 to-transparent sm:block" />
                    <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-1/5 bg-gradient-to-l from-gc-light via-gc-light/80 to-transparent sm:block" />
                </div>
            </div>
        </section>
    )
}
