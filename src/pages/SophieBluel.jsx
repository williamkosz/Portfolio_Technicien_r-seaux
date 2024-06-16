import Navbar from "../components/Navbar"
import ProjectPages  from "../components/ProjectPages"
import ButtonBack from "../components/ButtonBack"
import { BLUEL_PROJECT } from "../constants/project"



const SophieBluel = () => {
  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased
     selection:bg-cyan-300 selection:text-cyan-900">
      <div className="fixed top-0 -z-10 h-full w-full">
      <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      </div>

          <div className="container mx-auto px-8">
            <Navbar />
            <ProjectPages  
              title={BLUEL_PROJECT[0].title}
              description={BLUEL_PROJECT[0].description}
              tech={BLUEL_PROJECT[0].tech}
              image= {BLUEL_PROJECT[0].image}
              url={BLUEL_PROJECT[0].url}
              />
            <ButtonBack />
          </div>
    </div>
  )
}

export default SophieBluel