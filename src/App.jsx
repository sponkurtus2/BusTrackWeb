import { Accordion, AccordionItem } from "@nextui-org/react"
import FirestoreComponent from "./components/FirestoreComponent"

function App() {

  return (
    <>
      <FirestoreComponent />
      <Accordion>
      <AccordionItem key="1" aria-label="Accordion 1" title="Accordion 1">
        Hello World!
      </AccordionItem>
      <AccordionItem key="2" aria-label="Accordion 2" title="Accordion 2">
        Hello World!
      </AccordionItem>
      <AccordionItem key="3" aria-label="Accordion 3" title="Accordion 3">
        Hello World!
      </AccordionItem>
    </Accordion>
    </>
    
  )
}

export default App
