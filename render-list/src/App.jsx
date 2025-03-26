import List from "./List.jsx"

function App() {
            const fruits = [
                  {id: 1 , name:"banan", calories: 92}, 
                  {id: 2 ,name:"jablko", calories: 40},
                  {id: 3 ,name:"dragonfruit", calories: 20},
                  {id: 4 ,name:"winogrono", calories: 15}, 
                  {id: 5 ,name:"rodzynki", calories: 91}
            ];

              const vegetables = [
                  {id: 6 , name:"pomidor", calories: 150}, 
                  {id: 7 ,name:"celery", calories: 70},
                  {id: 8 ,name:"karotka", calories: 74},
                  {id: 9 ,name:"brokuly", calories: 90}, 
                  {id: 10 ,name:"kolba", calories: 91}
              ];
  return (
    <>
    {fruits.length > 0 && <List items={fruits} category="fruits"/>}
    {vegetables.length > 0 && <List items={vegetables} category="vegetables"/>}
    </>
  )
}

export default App
