import React from "react";
import Container from "./Container";
import pranay from "../assets/pranay.jpg";
import { ContactIcon } from "./Icons";
import { FadeIn } from "./FadeIn";
import Socials from "./Socials";

function Home() {
  return (
    <Container id="home">
      <FadeIn>
        {/* Grid Principal: Hero & CTA */}
        <div className="grid gap-4 grid-cols-[1fr_0.7fr] max-mdd:grid-cols-1 my-4">
          
          {/* Box 1: Profile Info */}
          <div className="flex w-full flex-col items-start gap-8 bg-[#131315] px-12 py-10 rounded-3xl max-md:p-8 border border-white/5">
            <img
              src={pranay}
              alt="Mark H4ck"
              className="w-[180px] h-[180px] object-cover rounded-full grayscale hover:grayscale-0 transition-all duration-500"
            />
            <h1 className="text-5xl font-bold tracking-tight max-md:text-[40px] max-md:leading-tight">
              Mark H4ck
              <br />
              <span className="text-[#8a8a93] text-3xl max-md:text-2xl font-mono">
                reverse engineer who <span className="text-white/90">breaks</span> things for youtube ;)
              </span>
            </h1>
          </div>

          {/* Box 2: Call to Action (Discord) */}
          <div className="flex flex-col justify-between bg-[#131315] p-12 rounded-3xl max-md:p-8 border border-white/5">
            <div className="flex flex-col items-center gap-4 text-center">
              <ContactIcon className="w-24 h-24 text-[#ff5e1a]" />
              <h2 className="text-3xl font-semibold max-md:text-2xl">
                Únete al <br/> Reversing Hub
              </h2>
            </div>
            
            <a
              href="https://discord.gg/UFwYYs6Qw"
              className="flex items-center justify-center min-h-[80px] bg-[#ff5e1a] hover:bg-[#e14d0f] transition-colors duration-300 font-mono text-2xl font-bold px-6 rounded-2xl text-white mt-6"
            >
              start_reversing.exe
            </a>
          </div>
        </div>
      </FadeIn>

      <FadeIn>
        <Socials />
      </FadeIn>

      {/* About Section / Manifesto */}
      <FadeIn>
        <div className="w-full bg-[#131315] px-12 py-10 rounded-3xl max-md:p-8 border border-white/5">
          <h3 className="text-2xl leading-relaxed max-md:text-xl font-light">
            Analizando el binario, un byte a la vez. Me especializo en{" "}
            <span className="text-white font-medium italic">Reversing y Low-Level Programming</span>, 
            compartiendo laboratorios detallados con una audiencia de más de 4k apasionados por la tecnología.
            <br /><br />
            <span className="font-mono text-[#ff5e1a]">
              &gt; Si no puedes ver el Assembly, no conoces el programa.
            </span>
            <span className="block mt-4 text-[#8a8a93]">
              Únete a mi para empezar a descubrir cómo funcionan las cosas por dentro.
            </span>
          </h3>
        </div>
      </FadeIn>
    </Container>
  );
}

export default Home;