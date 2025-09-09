"use client";
import React from "react";
import PageHeader from '../components/PageHeader';
import Footer from '../components/Footer';
import { 
  FAQsCard, 
  SubmitTicketCard, 
  CommunityCard, 
  GuidesCard, 
  StatusCard, 
  SearchBar, 
  CTASection 
} from './components';

export default function SupportPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Page Header (includes Navbar and OnlyDust banner) */}
      <PageHeader 
        title="Support Center"
        description="Need Help? We got you covered."
      />

      {/* Search Bar Section */}
      <section className="bg-black px-5 lg:px-[clamp(16px,5vw,100px)] py-8">
        <div className="max-w-4xl mx-auto">
          <SearchBar />
        </div>
      </section>

      {/* Support Cards Grid Section */}
      <section className="bg-black px-5 lg:px-[clamp(16px,5vw,100px)] py-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {/* First Row - 3 cards */}
            <FAQsCard />
            <SubmitTicketCard />
            <CommunityCard />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Second Row - 2 cards */}
            <GuidesCard />
            <StatusCard />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />

      {/* Footer */}
      <Footer />
    </div>
  );
}
