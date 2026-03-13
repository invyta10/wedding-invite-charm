import { Heart, Music, Sparkles, Church, PartyPopper } from "lucide-react";

const events = [
  { icon: Heart, title: "Engagement", date: "November 15, 2026", time: "5:00 PM", description: "An intimate celebration of love" },
  { icon: Sparkles, title: "Mehendi", date: "December 17, 2026", time: "11:00 AM", description: "Colors of joy and tradition" },
  { icon: Music, title: "Sangeet", date: "December 18, 2026", time: "7:00 PM", description: "A night of music and dance" },
  { icon: Church, title: "Wedding", date: "December 20, 2026", time: "4:00 PM", description: "The sacred union of two souls" },
  { icon: PartyPopper, title: "Reception", date: "December 20, 2026", time: "6:30 PM", description: "Dinner, dance, and celebration" },
];

const EventTimeline = () => {
  return (
    <section className="py-20 px-6 bg-card/30">
      <div className="max-w-3xl mx-auto text-center">
        <p className="font-script text-primary text-3xl md:text-4xl mb-2 animate-fade-in-up">Our Celebrations</p>
        <div className="w-20 h-px bg-primary/30 mx-auto mb-16 animate-fade-in-up animation-delay-200"></div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-primary/15 -translate-x-1/2 hidden md:block"></div>
          <div className="absolute left-6 top-0 bottom-0 w-px bg-primary/15 md:hidden"></div>

          <div className="space-y-12">
            {events.map((event, index) => {
              const Icon = event.icon;
              const isLeft = index % 2 === 0;
              return (
                <div
                  key={event.title}
                  className="animate-fade-in-up relative"
                  style={{ animationDelay: `${(index + 2) * 200}ms` }}
                >
                  {/* Desktop layout */}
                  <div className="hidden md:flex items-center">
                    <div className={`w-5/12 ${isLeft ? 'text-right pr-8' : 'order-3 text-left pl-8'}`}>
                      <h3 className="font-display text-lg tracking-wider text-foreground">{event.title}</h3>
                      <p className="font-body text-muted-foreground text-sm">{event.date}</p>
                      <p className="font-body text-muted-foreground text-sm">{event.time}</p>
                      <p className="font-body text-primary/60 text-sm italic mt-1">{event.description}</p>
                    </div>
                    <div className="w-2/12 flex justify-center order-2">
                      <div className="w-10 h-10 rounded-full bg-secondary/50 border border-primary/20 flex items-center justify-center z-10">
                        <Icon className="w-4 h-4 text-primary" />
                      </div>
                    </div>
                    <div className={`w-5/12 ${isLeft ? 'order-3' : ''}`}></div>
                  </div>

                  {/* Mobile layout */}
                  <div className="md:hidden flex items-start gap-4 pl-0">
                    <div className="shrink-0 w-12 flex justify-center">
                      <div className="w-10 h-10 rounded-full bg-secondary/50 border border-primary/20 flex items-center justify-center z-10">
                        <Icon className="w-4 h-4 text-primary" />
                      </div>
                    </div>
                    <div className="text-left pb-2">
                      <h3 className="font-display text-lg tracking-wider text-foreground">{event.title}</h3>
                      <p className="font-body text-muted-foreground text-sm">{event.date} · {event.time}</p>
                      <p className="font-body text-primary/60 text-sm italic mt-1">{event.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventTimeline;
