import { Card } from '@/components/ui/card';
import { Hospital } from 'lucide-react';
import { Button } from '../ui/button';
import { useRouter } from 'next/router';

export default function Navigation() {
  const router = useRouter();
  
  const handleLogin = () => {
    router.push('/authentication');
  };
  
  return (
    <div className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-sm shadow-sm">
      <div className="max-w-7xl mx-auto">
        <Card className="flex flex-row items-center justify-between h-16 md:h-20 px-4 md:px-6 border-none shadow-none">
          {/* Logo & Brand */}
          <div className="flex items-center gap-2">
            <Hospital className="h-6 w-6 text-teal-600" />
            <h2 className="text-xl font-bold text-gray-900">WellNova</h2>
          </div>
          
          {/* Navigation Links */}
          <nav className="hidden md:flex items-center">
            <ul className="flex space-x-8">
              {['Features', 'Testimonials', 'Contact'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase()}`} 
                    className="text-gray-600 hover:text-teal-600 font-medium transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          
          {/* Auth Buttons */}
          <div className="flex items-center gap-3">
            <Button 
              onClick={handleLogin} 
              variant="outline" 
              className="border-teal-600 text-teal-600 hover:bg-teal-50"
            >
              Login
            </Button>
            <Button 
              className="bg-teal-600 hover:bg-teal-700 text-white"
            >
              Sign Up
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
}