import "./App.css";
import { Button } from "@/components/ui/button"

function App() {
  console.log("helo");

  const a:INavItems ={ title: "Hello", link: "abc" }
  return (
    <>
      <h1>Hello World</h1>
      <Button variant={"link"}> {a?.title} </Button>
    </>
  );
}

export default App;
