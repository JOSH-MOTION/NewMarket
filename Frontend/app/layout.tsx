import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Sidebar from './components/layout/Sidebar';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Local Market - Buy & Sell Locally with Escrow Protection',
  description: 'Ghana\'s trusted local marketplace with secure escrow payments. Buy and sell products safely in your community.',
  keywords: 'Ghana marketplace, local products, escrow payment, buy sell Ghana, Accra marketplace',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex min-h-screen bg-gray-50">
          {/* Sidebar */}
          <Sidebar />
          
          {/* Main Content Area */}
          <div className="flex-1 flex flex-col">
            {/* Navbar */}
            <Navbar />
            
            {/* Page Content */}
            <main className="flex-1">{children}</main>
            
            {/* Footer */}
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}