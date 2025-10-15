// ContactSection.tsx
import { useState } from "react";
import { Button } from "@/components/v1/ui/button";
import { Input } from "@/components/v1/ui/input";
import { Textarea } from "@/components/v1/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/v1/ui/select";
import { Send, Sparkles } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogClose } from "@/components/v1/ui/dialog";

import { contactMethods, services, budgets, contactSectionHeader } from "d:/Study/freelancing/TheBuild/TheBuild/src/content/v1_content";

const ContactSection = () => {
  const [status, setStatus] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [callDialogOpen, setCallDialogOpen] = useState(false);
  const [mapDialogOpen, setMapDialogOpen] = useState(false);
  const [mapLocations, setMapLocations] = useState<{ name: string; link: string }[]>([]);

  const handleContactClick = (contact: typeof contactMethods[0]) => {
    switch (contact.type) {
      case "call":
        setCallDialogOpen(true);
        break;
      case "whatsapp":
        window.open(contact.link, "_blank");
        break;
      case "map":
        setMapLocations(contact.locations || []);
        setMapDialogOpen(true);
        break;
    }
  };

  const handleSendMessage = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus(null);
    setLoading(true);

    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);

    try {
      const response = await fetch("/mail.php", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();

      if (result.status === "success") {
        setDialogOpen(true);
        form.reset();
      } else {
        setStatus("Error: " + result.message);
      }
    } catch (error) {
      console.error(error);
      setStatus("Something went wrong while sending the message.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-16 gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* Left Content */}
          <div className="animate-fade-in">
            <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-6">
              <Sparkles className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium">Get In Touch</span>
            </div>

            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              {contactSectionHeader.title.split("Something Amazing")[0]}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Something Amazing
              </span>
            </h2>

            <p className="text-xl text-foreground/80 mb-8 leading-relaxed">
              {contactSectionHeader.subtitle}
            </p>

            {/* Contact Info */}
            <div className="space-y-6 mb-8">
              {contactMethods.map((contact) => (
                <div
                  key={contact.title}
                  className="flex items-center gap-4 group cursor-pointer"
                  onClick={() => handleContactClick(contact)}
                >
                  <div className="gradient-primary p-3 rounded-lg shadow-elegant group-hover:shadow-glow transition-smooth">
                    <contact.icon className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                      {contact.title}
                    </h4>
                    <p className="text-foreground/70 text-sm">{contact.info}</p>
                    <p className="text-primary text-xs">{contact.action}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Contact Form */}
          <div className="glass rounded-2xl p-8 animate-scale-in" style={{ animationDelay: "0.2s" }}>
            <h3 className="text-2xl font-bold mb-6 text-center">Start Your Project</h3>

            <form className="space-y-6" onSubmit={handleSendMessage}>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium mb-2">First Name</label>
                  <Input id="firstName" name="firstName" placeholder="John" className="transition-smooth focus:shadow-card" />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium mb-2">Last Name</label>
                  <Input id="lastName" name="lastName" placeholder="Doe" className="transition-smooth focus:shadow-card" />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">Email Address</label>
                <Input id="email" name="email" type="email" placeholder="john@example.com" className="transition-smooth focus:shadow-card" />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium mb-2">Phone Number</label>
                <Input id="phone" name="phone" type="tel" placeholder="+91 98765 43210" className="transition-smooth focus:shadow-card" />
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-medium mb-2">Service Type</label>
                <Select name="service">
                  <SelectTrigger className="transition-smooth focus:shadow-card">
                    <SelectValue placeholder="Select a service" />
                  </SelectTrigger>
                  <SelectContent>
                    {services.map((s) => (
                      <SelectItem key={s} value={s}>{s}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label htmlFor="budget" className="block text-sm font-medium mb-2">Project Budget</label>
                <Select name="budget">
                  <SelectTrigger className="transition-smooth focus:shadow-card">
                    <SelectValue placeholder="Select budget range" />
                  </SelectTrigger>
                  <SelectContent>
                    {budgets.map((b) => (
                      <SelectItem key={b.value} value={b.value}>{b.label}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">Project Description</label>
                <Textarea id="message" name="message" placeholder="Tell us about your project, goals, and timeline..." rows={4} className="transition-smooth focus:shadow-card" />
              </div>

              <Button variant="hero" size="lg" className="w-full group" type="submit" disabled={loading}>
                {loading ? "Sending..." : <>
                  <Send className="h-5 w-5" /> Send Message
                  <span className="ml-auto group-hover:translate-x-1 transition-transform">→</span>
                </>}
              </Button>

              {status && (
                <p className={`text-center mt-2 ${status.startsWith("Error") ? "text-red-500" : "text-green-500"}`}>
                  {status}
                </p>
              )}

              <p className="text-xs text-foreground/60 text-center">
                We'll get back to you within 24 hours. Usually much sooner! 🚀
              </p>
            </form>
          </div>
        </div>
      </div>

      {/* Success Dialog */}
      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent className="sm:max-w-sm">
          <DialogHeader>
            <DialogTitle>Message Sent Successfully!</DialogTitle>
            <DialogDescription>
              Thank you for contacting us. We will reach out to you soon. 🚀
            </DialogDescription>
          </DialogHeader>
          <DialogClose asChild>
            <Button className="mt-4 w-full" onClick={() => window.location.href = "/"}>Close</Button>
          </DialogClose>
        </DialogContent>
      </Dialog>

      {/* Call Dialog */}
      <Dialog open={callDialogOpen} onOpenChange={setCallDialogOpen}>
        <DialogContent className="sm:max-w-sm">
          <DialogHeader>
            <DialogTitle>Select a Number to Call</DialogTitle>
          </DialogHeader>
          <div className="space-y-3 mt-4">
            {contactMethods.find((c) => c.type === "call")?.info.split("|").map((num, idx) => (
              <Button key={idx} className="w-full" onClick={() => window.location.href = `tel:${num.trim()}`}>
                📞 {num.trim()}
              </Button>
            ))}
          </div>
          <DialogClose asChild>
            <Button variant="outline" className="mt-4 w-full">Cancel</Button>
          </DialogClose>
        </DialogContent>
      </Dialog>

      {/* Map Dialog */}
      <Dialog open={mapDialogOpen} onOpenChange={setMapDialogOpen}>
        <DialogContent className="sm:max-w-sm">
          <DialogHeader>
            <DialogTitle>Select a Location</DialogTitle>
          </DialogHeader>
          <div className="space-y-3 mt-4">
            {mapLocations.map((loc, idx) => (
              <Button
                key={idx}
                className="w-full"
                onClick={() => window.open(loc.link, "_blank")}
              >
                📍 {loc.name}
              </Button>
            ))}
          </div>
          <DialogClose asChild>
            <Button variant="outline" className="mt-4 w-full">Cancel</Button>
          </DialogClose>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default ContactSection;
