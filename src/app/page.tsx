
import { Copyright } from '@/components/Copyrigth';
import { Hero } from '@/components/Hero';
import { Signin } from '@/components/Signin';
import { Stripes } from '@/components/Stripes';
import { EmptyMemories } from '@/components/EmptyMemories';
import { Blur } from '@/components/Blur';
export default function Home() {
  return <main className="grid min-h-screen grid-cols-2 bg-[url(../assets/bg-stars.svg)] bg-cover ">
    {/*Left */}
    <div className="relative flex flex-col items-start justify-between overflow-hidden border-white/10 px-28 py-16 ">
      <Blur/>
      <Stripes/>
      <Signin/>
      <Hero/>
      <Copyright/>
    </div>
    
    {/* Right*/}
    <div className="flex flex-col p-16 bg-[url(../assets/bg-stars.svg)] bg-cover">
      <EmptyMemories/>
    </div>
  </main>
}
