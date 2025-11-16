import { useState } from "react";
import { Users, AlertTriangle, TrendingUp, CheckCircle, Bell, Download, Search, Filter } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { LineChart, Line, PieChart, Pie, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell, Legend } from "recharts";

const CHART_COLORS = {
  primary: "hsl(217 91% 60%)",
  success: "hsl(142 71% 45%)",
  danger: "hsl(0 84% 60%)",
  warning: "hsl(38 92% 50%)",
  purple: "hsl(262 83% 58%)",
  cyan: "hsl(197 71% 52%)",
};

const mockTrendData = [
  { month: "Ιαν", moderate: 1050, high: 380 },
  { month: "Φεβ", moderate: 1020, high: 400 },
  { month: "Μαρ", moderate: 1040, high: 390 },
  { month: "Απρ", moderate: 1080, high: 410 },
  { month: "Μαί", moderate: 1100, high: 420 },
  { month: "Ιουν", moderate: 1206, high: 438 },
];

const mockPieData = [
  { name: "Απώλεια Εργασίας", value: 26, color: CHART_COLORS.primary },
  { name: "Άλλο", value: 7, color: CHART_COLORS.cyan },
  { name: "Οικογενειακά Θέματα", value: 18, color: CHART_COLORS.warning },
  { name: "Υγεία/Αναπηρία", value: 18, color: CHART_COLORS.purple },
  { name: "Στέγαση", value: 31, color: "#64748B" },
];

const mockBarData = [
  { area: "Κέντρο", count: 362 },
  { area: "Εξάρχεια", count: 268 },
  { area: "Κυψέλη", count: 411 },
  { area: "Παγκράτι", count: 205 },
  { area: "Πατήσια", count: 620 },
  { area: "Κολωνάκι", count: 158 },
  { area: "Γκάζι", count: 295 },
  { area: "Πετράλωνα", count: 228 },
];

const mockCitizens = [
  { id: "C-2024-001", area: "Κέντρο Αθήνας", age: 42, risk: "Υψηλός", cause: "Απώλεια Εργασίας", support: "Οικονομική Βοήθεια" },
  { id: "C-2024-002", area: "Εξάρχεια", age: 35, risk: "Μέτριος", cause: "Οικονομικά Προβλήματα", support: "Συμβουλευτική" },
  { id: "C-2024-003", area: "Κυψέλη", age: 58, risk: "Υψηλός", cause: "Υγεία/Αναπηρία", support: "Ιατρική Φροντίδα" },
  { id: "C-2024-004", area: "Παγκράτι", age: 29, risk: "Χαμηλός", cause: "Οικογενειακά Θέματα", support: "Στέγαση" },
  { id: "C-2024-005", area: "Πατήσια", age: 51, risk: "Υψηλός", cause: "Απώλεια Εργασίας", support: "Επαγγελματική Κατάρτιση" },
  { id: "C-2024-006", area: "Κολωνάκι", age: 38, risk: "Μέτριος", cause: "Οικονομικά Προβλήματα", support: "Οικονομική Βοήθεια" },
  { id: "C-2024-007", area: "Γκάζι", age: 45, risk: "Μέτριος", cause: "Απώλεια Εργασίας", support: "Συμβουλευτική" },
  { id: "C-2024-008", area: "Πετράλωνα", age: 33, risk: "Υψηλός", cause: "Στέγαση", support: "Κοινωνικό Παντοπωλείο" },
];

const Admin = () => {
  const [filter, setFilter] = useState("Όλοι");
  const [searchTerm, setSearchTerm] = useState("");

  const getRiskBadgeVariant = (risk: string) => {
    if (risk === "Υψηλός") return "destructive";
    if (risk === "Μέτριος") return "warning";
    return "success";
  };

  const filteredCitizens = mockCitizens.filter(citizen => {
    const matchesFilter = filter === "Όλοι" || citizen.risk === filter;
    const matchesSearch = citizen.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         citizen.area.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center p-8">
      {/* Desktop Monitor Frame */}
      <div className="relative w-full max-w-[1600px]">
        {/* Monitor Screen */}
        <div className="relative bg-slate-950 rounded-2xl border-[12px] border-slate-900 overflow-hidden shadow-2xl">
          {/* Thin camera notch */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-1 bg-slate-800 rounded-b-md z-50" />
          
          {/* Screen Content with aspect ratio */}
          <div className="bg-background overflow-y-auto" style={{ height: 'calc(100vh - 220px)', maxHeight: '920px' }}>
            <div className="p-4 md:p-8">
              <div className="max-w-[1400px] mx-auto space-y-8">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center">
              <Users className="w-6 h-6 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-foreground">Σύστημα Παρακολούθησης Ευάλωτων Πολιτών</h1>
              <p className="text-sm text-muted-foreground">Δήμος Αθηναίων</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon">
              <Bell className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <span className="text-lg">ΔΑ</span>
            </Button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Σύνολο Ατόμων σε Κίνδυνο</p>
                  <p className="text-3xl font-bold">2,847</p>
                  <p className="text-sm text-muted-foreground mt-1">
                    από <span className="text-status-high">+12%</span> τον προηγ. μήνα
                  </p>
                </div>
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                  <Users className="w-6 h-6 text-primary" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Περιοχές Υψηλού Κινδύνου</p>
                  <p className="text-3xl font-bold">8</p>
                  <p className="text-sm text-muted-foreground mt-1">
                    από <span className="text-status-high">+2</span> τον προηγ. μήνα
                  </p>
                </div>
                <div className="w-12 h-12 bg-status-high/10 rounded-xl flex items-center justify-center">
                  <AlertTriangle className="w-6 h-6 text-status-high" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Ενεργές Περιπτώσεις</p>
                  <p className="text-3xl font-bold">438</p>
                  <p className="text-sm text-muted-foreground mt-1">
                    από <span className="text-status-warning">+8%</span> τον προηγ. μήνα
                  </p>
                </div>
                <div className="w-12 h-12 bg-status-warning/10 rounded-xl flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-status-warning" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Ολοκληρωμένες Υποστηρίξεις</p>
                  <p className="text-3xl font-bold">1,206</p>
                  <p className="text-sm text-muted-foreground mt-1">
                    από <span className="text-status-low">+9%</span> τον προηγ. μήνα
                  </p>
                </div>
                <div className="w-12 h-12 bg-status-low/10 rounded-xl flex items-center justify-center">
                  <CheckCircle className="w-6 h-6 text-status-low" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Charts Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Trend Chart */}
          <Card>
            <CardHeader>
              <CardTitle>Τάση Ατόμων σε Κίνδυνο</CardTitle>
              <CardDescription>Εξέλιξη τελευταίων 6 μηνών</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex gap-4 mb-4">
                <Button variant="secondary" size="sm">Εβδ.</Button>
                <Button variant="ghost" size="sm">Μήνας</Button>
                <Button variant="ghost" size="sm">Έτος</Button>
              </div>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={mockTrendData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" />
                  <YAxis stroke="hsl(var(--muted-foreground))" />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: "hsl(var(--card))", 
                      border: "1px solid hsl(var(--border))",
                      borderRadius: "8px"
                    }} 
                  />
                  <Legend />
                  <Line 
                    type="monotone" 
                    dataKey="moderate" 
                    name="Μέτριος Κίνδυνος"
                    stroke={CHART_COLORS.warning} 
                    strokeWidth={2}
                    dot={{ fill: CHART_COLORS.warning }}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="high" 
                    name="Υψηλός Κίνδυνος"
                    stroke={CHART_COLORS.danger} 
                    strokeWidth={2}
                    dot={{ fill: CHART_COLORS.danger }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Pie Chart */}
          <Card>
            <CardHeader>
              <CardTitle>Αιτίες Κινδύνου</CardTitle>
              <CardDescription>Κατανομή κύριων αιτιών</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={mockPieData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                    outerRadius={100}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {mockPieData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        {/* Bar Chart */}
        <Card>
          <CardHeader>
            <CardTitle>Κατανομή Ατόμων Ανά Περιοχή</CardTitle>
            <CardDescription>Αριθμός ατόμων σε κίνδυνο ανά περιοχή του Δήμου</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={350}>
              <BarChart data={mockBarData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis dataKey="area" stroke="hsl(var(--muted-foreground))" />
                <YAxis stroke="hsl(var(--muted-foreground))" />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: "hsl(var(--card))", 
                    border: "1px solid hsl(var(--border))",
                    borderRadius: "8px"
                  }} 
                />
                <Bar dataKey="count" fill={CHART_COLORS.primary} radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Citizens Table */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle>Λίστα Περιοχών σε Κίνδυνο</CardTitle>
                <CardDescription>8 από 8 περιοχές</CardDescription>
              </div>
              <Button variant="default" size="sm">
                <Download className="w-4 h-4 mr-2" />
                Εξαγωγή
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex gap-4 mb-6">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input 
                  placeholder="Αναζήτηση με περιοχή ή κωδικό..." 
                  className="pl-10"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <Select value={filter} onValueChange={setFilter}>
                <SelectTrigger className="w-[180px]">
                  <Filter className="w-4 h-4 mr-2" />
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Όλοι">Όλοι</SelectItem>
                  <SelectItem value="Υψηλός">Υψηλός</SelectItem>
                  <SelectItem value="Μέτριος">Μέτριος</SelectItem>
                  <SelectItem value="Χαμηλός">Χαμηλός</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Κωδικός</th>
                    <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Περιοχή</th>
                    <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Άτομα</th>
                    <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Επίπεδο Κινδύνου</th>
                    <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Κύρια Αιτία</th>
                    <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Υποστήριξη</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredCitizens.map((citizen) => (
                    <tr key={citizen.id} className="border-b hover:bg-muted/50 transition-colors">
                      <td className="py-3 px-4 text-sm font-medium">{citizen.id}</td>
                      <td className="py-3 px-4 text-sm">{citizen.area}</td>
                      <td className="py-3 px-4 text-sm">{citizen.age}</td>
                      <td className="py-3 px-4">
                        <Badge variant={getRiskBadgeVariant(citizen.risk)}>
                          {citizen.risk}
                        </Badge>
                      </td>
                      <td className="py-3 px-4 text-sm">{citizen.cause}</td>
                      <td className="py-3 px-4 text-sm text-muted-foreground">{citizen.support}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
              </div>
            </div>
          </div>
        </div>
        
        {/* Monitor Stand Neck */}
        <div className="flex justify-center">
          <div className="w-32 h-16 bg-gradient-to-b from-slate-800 to-slate-700 relative">
            <div className="absolute inset-x-0 top-0 h-1 bg-slate-900" />
          </div>
        </div>
        
        {/* Monitor Base/Stand */}
        <div className="flex justify-center">
          <div className="w-96 h-8 bg-gradient-to-b from-slate-700 to-slate-600 rounded-full shadow-2xl relative">
            <div className="absolute inset-0 bg-gradient-to-t from-slate-800/30 to-transparent rounded-full" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
