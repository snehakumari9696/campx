import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Shell } from './components/Layout';
import Home from './pages/Home';
import { Platform, SystemPage, MedhaPage, NotFound } from './pages/Platform';
import { About, Enterprise, Blueprint, Security, Contact } from './pages/Company';
import { RoiCalculator, BookDemo } from './pages/Tools';
import { XpressHub, XpressSection, ArticleDetail } from './pages/Xpress';
import { Terms, PrivacyPolicy, ShippingPolicy } from './pages/Legal';

export default function App() {
  return (
    <Shell>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/platform" element={<Platform />} />
        <Route path="/platform/medha" element={<MedhaPage />} />
        <Route path="/platform/:slug" element={<SystemPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/enterprise" element={<Enterprise />} />
        <Route path="/blueprint" element={<Blueprint />} />
        <Route path="/security" element={<Security />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/roi-calculator" element={<RoiCalculator />} />
        <Route path="/book-demo" element={<BookDemo />} />
        <Route path="/book-a-demo" element={<Navigate to="/book-demo" replace />} />
        <Route path="/demo" element={<Navigate to="/book-demo" replace />} />
        <Route path="/xpress" element={<XpressHub />} />
        <Route path="/xpress/articles/:slug" element={<ArticleDetail />} />
        <Route path="/xpress/:section" element={<XpressSection />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/shipping-policy" element={<ShippingPolicy />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Shell>
  );
}
