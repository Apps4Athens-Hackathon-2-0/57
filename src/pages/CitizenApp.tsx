import { useState } from "react";
import { Building2, MapPin, Send } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

const mockNotifications = [
  {
    id: 1,
    title: "Δήμος Αθηναίων",
    time: "τώρα",
    greeting: "Αγαπητέ πολίτη,",
    message: "Το κοινωνικό παντοπωλείο θα είναι στην περιοχή σας στις 20/11 ώρα 12:00-14:30",
    sender: "Δήμος Αθηναίων",
    action: "Απεγγραφή από ειδοποιήσεις"
  },
  {
    id: 2,
    title: "Δήμος Αθηναίων",
    time: "πριν 2 ώρες",
    message: "Υπενθύμιση: Η επόμενη συνάντηση με τον κοινωνικό λειτουργό είναι προγραμματισμένη για την Παρασκευή.",
    sender: "Δήμος Αθηναίων"
  }
];

const CitizenApp = () => {
  const [address, setAddress] = useState("");
  const { toast } = useToast();

  const handleSubmitAddress = (e: React.FormEvent) => {
    e.preventDefault();
    if (!address.trim()) {
      toast({
        title: "Σφάλμα",
        description: "Παρακαλώ εισάγετε τη διεύθυνσή σας",
        variant: "destructive"
      });
      return;
    }
    
    // Save to localStorage
    localStorage.setItem("citizenAddress", address);
    
    toast({
      title: "Επιτυχής αποθήκευση",
      description: "Η διεύθυνσή σας αποθηκεύτηκε επιτυχώς",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted">
      {/* Lock screen style header */}
      <div className="pt-16 pb-8 text-center">
        <div className="text-7xl font-light mb-2">9:41</div>
        <div className="text-muted-foreground">Τετάρτη, 16 Νοεμβρίου</div>
      </div>

      {/* Notifications */}
      <div className="px-4 space-y-4 max-w-md mx-auto">
        {mockNotifications.map((notification) => (
          <Card 
            key={notification.id} 
            className="backdrop-blur-xl bg-card/95 shadow-lg border-border/50"
          >
            <CardContent className="p-4">
              <div className="flex items-start gap-3 mb-3">
                <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center flex-shrink-0">
                  <Building2 className="w-5 h-5 text-primary-foreground" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-semibold text-sm">{notification.title}</span>
                    <span className="text-xs text-muted-foreground">{notification.time}</span>
                  </div>
                  {notification.greeting && (
                    <p className="text-sm mb-2">{notification.greeting}</p>
                  )}
                  <p className="text-sm text-foreground/90 mb-3 leading-relaxed">
                    {notification.message}
                  </p>
                  <div className="text-xs text-muted-foreground mb-2">
                    {notification.sender}
                  </div>
                  {notification.action && (
                    <button className="text-sm text-primary font-medium">
                      {notification.action}
                    </button>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}

        {/* Address Registration Card */}
        <Card className="backdrop-blur-xl bg-card/95 shadow-lg border-border/50 mt-8">
          <CardContent className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
                <MapPin className="w-5 h-5 text-primary-foreground" />
              </div>
              <div>
                <h3 className="font-semibold">Καταχώριση Διεύθυνσης</h3>
                <p className="text-xs text-muted-foreground">Για λήψη επιστολών και ειδοποιήσεων</p>
              </div>
            </div>

            <form onSubmit={handleSubmitAddress} className="space-y-4">
              <div>
                <Label htmlFor="address" className="text-sm">Διεύθυνση Κατοικίας</Label>
                <Input
                  id="address"
                  placeholder="π.χ. Σταδίου 10, Αθήνα"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  className="mt-1.5"
                />
              </div>
              <Button type="submit" className="w-full">
                <Send className="w-4 h-4 mr-2" />
                Αποθήκευση Διεύθυνσης
              </Button>
            </form>

            <p className="text-xs text-muted-foreground mt-4 text-center">
              Τα στοιχεία σας είναι ασφαλή και ανωνυμοποιημένα σύμφωνα με το GDPR
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Bottom padding */}
      <div className="h-20" />
    </div>
  );
};

export default CitizenApp;
