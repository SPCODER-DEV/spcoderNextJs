import Services from "@/components/Services";
import Specialties from "@/components/Specialties";
import Header from "@/components/Header";
import Location from "@/components/Location";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="container p-1">
      <Header />
      <Services />
      <Specialties/>
      <Location/>
      <Footer/>
    </main>
  );
}
