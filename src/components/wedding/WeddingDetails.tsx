import { MapPin, Clock, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

const WeddingDetails = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <p className="font-script text-primary text-3xl md:text-4xl mb-2 animate-fade-in-up">Wedding Details</p>
        <div className="w-20 h-px bg-primary/30 mx-auto mb-12 animate-fade-in-up animation-delay-200"></div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Ceremony */}
          <div className="animate-fade-in-up animation-delay-400 border border-primary/15 rounded-xl p-8 bg-card/50 backdrop-blur-sm">
            <div className="w-12 h-12 rounded-full bg-secondary/50 flex items-center justify-center mx-auto mb-4">
              <Calendar className="w-5 h-5 text-primary" />
            </div>
            <h3 className="font-display text-lg tracking-wider uppercase text-foreground mb-4">The Ceremony</h3>
            <p className="font-body text-muted-foreground mb-1">Saturday, December 20, 2026</p>
            <div className="flex items-center justify-center gap-2 text-muted-foreground mb-4">
              <Clock className="w-4 h-4" />
              <span className="font-body">4:00 PM</span>
            </div>
            <div className="flex items-start justify-center gap-2 text-muted-foreground">
              <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
              <div>
                <p className="font-display text-foreground">The Grand Ballroom</p>
                <p className="font-body text-sm">123 Wedding Avenue, Beverly Hills, CA 90210</p>
              </div>
            </div>
          </div>

          {/* Reception */}
          <div className="animate-fade-in-up animation-delay-600 border border-primary/15 rounded-xl p-8 bg-card/50 backdrop-blur-sm">
            <div className="w-12 h-12 rounded-full bg-secondary/50 flex items-center justify-center mx-auto mb-4">
              <svg className="w-5 h-5 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M8 2v4M16 2v4M3 10h18M5 4h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V6a2 2 0 012-2z"/>
              </svg>
            </div>
            <h3 className="font-display text-lg tracking-wider uppercase text-foreground mb-4">The Reception</h3>
            <p className="font-body text-muted-foreground mb-1">Saturday, December 20, 2026</p>
            <div className="flex items-center justify-center gap-2 text-muted-foreground mb-4">
              <Clock className="w-4 h-4" />
              <span className="font-body">6:30 PM</span>
            </div>
            <div className="flex items-start justify-center gap-2 text-muted-foreground">
              <div>
              
                <p className="font-display text-foreground"><span><MapPin className="w-4 h-4 mt-0.5 shrink-0" /></span>The Garden Terrace</p>
                <p className="font-body text-sm">123 Wedding Avenue, Beverly Hills, CA 90210</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 animate-fade-in-up animation-delay-800">
          <Button
            variant="outline"
            className="font-display tracking-wider uppercase text-xs border-primary/30 hover:bg-primary/10"
            onClick={() => window.open('https://maps.google.com', '_blank')}
          >
            <MapPin className="w-4 h-4 mr-2" />
            View on Map
          </Button>
        </div>
      </div>
    </section>
  );
};

export default WeddingDetails;
