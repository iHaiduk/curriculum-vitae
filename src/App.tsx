import {About} from "./about/About.tsx";
import {CareerSummary} from "./about/CareerSummary.tsx";
import {SearchableSkills} from "./about/SearchableSkills.tsx";
import {PdfHiddenText} from "./about/PdfHiddenText.tsx";
import {Experience} from "./experience/Experience.tsx";
import {Skills} from "./skills/Skills.tsx";
import {Education} from "./education/Education.tsx";

function App() {
  return (
    <main>
      <SearchableSkills />
      <PdfHiddenText />
      <About />
      <CareerSummary />
      <Skills />
      <Experience />
      <Education />
    </main>
  )
}

export default App
