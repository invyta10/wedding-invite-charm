import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const RSVPSection = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [guests, setGuests] = useState("1");
  const [attending, setAttending] = useState<boolean | null>(null);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // ✅ Validation
    if (!name || !phone || attending === null) {
      toast({
        title: "Please fill in all fields",
        variant: "destructive",
      });
      return;
    }

    try {
      await fetch(
        "https://script.google.com/macros/s/AKfycbw601Z9Wu0cIUEr2SWeMCEex7IGZsvKQ8Z5hGYNcE2pUmCNHiv2pC6BrYdX0XoAcdaI/exec",
        {
          method: "POST",
          mode: "no-cors",
          body: JSON.stringify({
            name,
            phone, // ✅ added
            guests,
            attending,
          }),
        }
      );

      toast({
        title: attending
          ? "We can't wait to see you! 🎉"
          : "We'll miss you! 💕",
        description: `Thank you for your response, ${name}.`,
      });

      // ✅ Reset form
      setName("");
      setPhone("");
      setGuests("1");
      setAttending(null);
    } catch (error) {
      toast({
        title: "Something went wrong",
        variant: "destructive",
      });
    }
  };

  return (
    <section className="py-20 px-6 bg-card/30">
      <div className="max-w-lg mx-auto text-center">
        <p className="font-script text-primary text-3xl md:text-4xl mb-2 animate-fade-in-up">
          RSVP
        </p>

        <div className="w-20 h-px bg-primary/30 mx-auto mb-4 animate-fade-in-up animation-delay-200"></div>

        <p className="font-body text-muted-foreground mb-10 animate-fade-in-up animation-delay-200">
          Kindly respond by November 30, 2026
        </p>

        <form
          onSubmit={handleSubmit}
          className="space-y-6 animate-fade-in-up animation-delay-400"
        >
          {/* Name */}
          <div className="text-left">
            <label className="font-display text-sm tracking-wider uppercase text-foreground/70 mb-2 block">
              Your Name
            </label>
            <Input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your full name"
              className="bg-background/50 border-primary/20 font-body focus:border-primary/40"
            />
          </div>

          {/* Phone */}
          <div className="text-left">
            <label className="font-display text-sm tracking-wider uppercase text-foreground/70 mb-2 block">
              Phone Number
            </label>
            <Input
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Enter your phone number"
              className="bg-background/50 border-primary/20 font-body focus:border-primary/40"
            />
          </div>

          {/* Guests */}
          <div className="text-left">
            <label className="font-display text-sm tracking-wider uppercase text-foreground/70 mb-2 block">
              Number of Guests
            </label>
            <select
              value={guests}
              onChange={(e) => setGuests(e.target.value)}
              className="flex h-10 w-full rounded-md border border-primary/20 bg-background/50 px-3 py-2 text-sm font-body focus:border-primary/40 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
            >
              {[1, 2, 3, 4, 5].map((n) => (
                <option key={n} value={n}>
                  {n} {n === 1 ? "Guest" : "Guests"}
                </option>
              ))}
            </select>
          </div>

          {/* Attendance */}
          <div>
            <label className="font-display text-sm tracking-wider uppercase text-foreground/70 mb-3 block">
              Will you attend?
            </label>

            <div className="flex gap-3 justify-center">
              <Button
                type="button"
                variant={attending === true ? "default" : "outline"}
                className={`flex-1 font-display tracking-wider ${
                  attending === true
                    ? "bg-primary"
                    : "border-primary/20 hover:bg-primary/10"
                }`}
                onClick={() => setAttending(true)}
              >
                Joyfully Accept
              </Button>

              <Button
                type="button"
                variant={attending === false ? "default" : "outline"}
                className={`flex-1 font-display tracking-wider ${
                  attending === false
                    ? "bg-primary"
                    : "border-primary/20 hover:bg-primary/10"
                }`}
                onClick={() => setAttending(false)}
              >
                Regretfully Decline
              </Button>
            </div>
          </div>

          {/* Submit */}
          <Button
            type="submit"
            className="w-full font-display tracking-[0.2em] uppercase bg-primary hover:bg-primary/90"
          >
            Send Response
          </Button>
        </form>
      </div>
    </section>
  );
};

export default RSVPSection;