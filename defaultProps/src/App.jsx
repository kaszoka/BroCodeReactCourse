import Student from "./Student.jsx";

function App() {


  return (
  <>
  <Student/>
  <Student name="Spongebob" age={30} isStudent={true}/>
  <Student name="Patric" age={42} isStudent={false}/>
  <Student name="Krzysztof" age={20} isStudent={false}/>
  <Student name="Marek" age={18} isStudent={true}/>
  </>
  );
}

export default App
