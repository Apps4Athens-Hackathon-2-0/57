import { Building2, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-primary/10 flex items-center justify-center p-4">
      <div className="max-w-4xl w-full space-y-8">
        <div className="text-center space-y-4">
          <div className="inline-flex w-20 h-20 bg-primary rounded-2xl items-center justify-center mb-4">
            <Building2 className="w-10 h-10 text-primary-foreground" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground">
            Σύστημα Παρακολούθησης<br />Ευάλωτων Πολιτών
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Πρόληψη και υποστήριξη πολιτών σε κίνδυνο με χρήση τεχνητής νοημοσύνης και ανωνυμοποιημένα δεδομένα
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mt-12">
          <Card className="hover:shadow-lg transition-shadow cursor-pointer" onClick={() => navigate("/admin")}>
            <CardHeader>
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-3">
                <Building2 className="w-6 h-6 text-primary" />
              </div>
              <CardTitle>Πίνακας Διαχείρισης</CardTitle>
              <CardDescription>
                Για διαχειριστές του Δήμου Αθηναίων
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground mb-4">
                <li>• Παρακολούθηση στατιστικών και τάσεων</li>
                <li>• Αναλυτικά γραφήματα κινδύνου</li>
                <li>• Διαχείριση περιπτώσεων πολιτών</li>
                <li>• Εξαγωγή αναφορών</li>
              </ul>
              <Button className="w-full" onClick={() => navigate("/admin")}>
                Είσοδος στον Πίνακα
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow cursor-pointer" onClick={() => navigate("/app")}>
            <CardHeader>
              <div className="w-12 h-12 bg-success/10 rounded-xl flex items-center justify-center mb-3">
                <Smartphone className="w-6 h-6 text-success" />
              </div>
              <CardTitle>Εφαρμογή Πολίτη</CardTitle>
              <CardDescription>
                Για πολίτες του Δήμου Αθηναίων
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground mb-4">
                <li>• Λήψη ειδοποιήσεων για δράσεις</li>
                <li>• Καταχώριση διεύθυνσης κατοικίας</li>
                <li>• Πληροφορίες για κοινωνικά προγράμματα</li>
                <li>• Mobile-first εμπειρία</li>
              </ul>
              <Button className="w-full" variant="secondary" onClick={() => navigate("/app")}>
                Άνοιγμα Εφαρμογής
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="text-center pt-8">
          <p className="text-sm text-muted-foreground">
            Δήμος Αθηναίων • Σύστημα συμβατό με GDPR • Ανωνυμοποιημένα δεδομένα
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;
