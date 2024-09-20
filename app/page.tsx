// app/page/
import { Button } from "@/components/ui/button"
import Link from 'next/link';

const Home = () => {
  return (
    <div className="relative">
      <img 
        className="w-full"
        src="https://warathepj.github.io/html-game-id/cat1.jpg" alt="" 
      />
      <Link 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        href="/product">

{/* //how to render app/page/ */}
        <Button>เลือกซื้อ ID เกมส์</Button>
      
        {/* on <img src="https://warathepj.github.io/html-game-id/cat1.jpg" alt="" /> */}
      </Link>
    </div>
  );
};

export default Home;
