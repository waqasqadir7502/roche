
import Hero from "./components/hero";
import WhySerum from "./components/why-serum";
import ClinicalDifference from "./components/clinical-differences";
import ClinicalClassification from "./components/classification-table";
import PatientMeaning from "./components/patient-meaning";
import Workflow from "./components/workflow";
import DiagnosticsPartner from "./components/diagnostic-partner";
import Contact from "./components/contact-form";
import References from "./components/references";

export default function Home() {
  return (
    
    <div>
      <Hero />
      <WhySerum />
      <ClinicalDifference />
      <ClinicalClassification />
      <PatientMeaning />
      <Workflow />
      <DiagnosticsPartner />
      <Contact />
      <References />
    </div>
  );
}


