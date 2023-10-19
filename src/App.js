
// import React, { useState, useEffect } from "react";
// import DropDown from "./component/DropDown";
// import "./App.css";
// import Filter from "./component/Filter";

// function App() {
//   const [tickets, setTickets] = useState([]);
//   const [dataIsLoaded, setDataIsLoaded] = useState(false);
//   const [groupOption, setGroupOption] = useState("status");
//   const [orderOption, setOrderOption] = useState("priority");

//   useEffect(() => {
//     fetch("https://api.quicksell.co/v1/internal/frontend-assignment")
//       .then((res) => res.json())
//       .then((json) => {
//         setTickets(json.tickets);
//         setDataIsLoaded(true);
//       })
//       .catch((error) => {
//         console.error("Error fetching data:", error);
//       });
//   }, []); 

//   return (
//     <>
//       {!dataIsLoaded && <div>Loading...</div>}
//       <div className="App">
//         <DropDown
//           className="nav"
//           groupOption={groupOption}
//           setGroupOption={setGroupOption}
//           orderOption={orderOption}
//           setOrderOption={setOrderOption}
//         />
//         <Filter tickets={tickets} groupOption={groupOption} orderOption={orderOption} />
//       </div>
//     </>
//   );
// }

// export default App;


import React, { useState, useEffect } from "react";
import DropDown from "./component/DropDown";
import "./App.css";
import Filter from "./component/Filter";

function App() {
  const [tickets, setTickets] = useState([]);
  const [dataIsLoaded, setDataIsLoaded] = useState(false);
  const [groupOption, setGroupOption] = useState("status");
  const [orderOption, setOrderOption] = useState("priority");

  useEffect(() => {
    fetch("https://api.quicksell.co/v1/internal/frontend-assignment")
      .then((res) => res.json())
      .then((json) => {
        setTickets(json.tickets);
        setDataIsLoaded(true);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []); // Empty dependency array to ensure the effect runs only once

  return (
    <>
      {!dataIsLoaded && <div>Loading...</div>}
      <div className="App">
        <DropDown
          className="nav"
          groupOption={groupOption}
          setGroupOption={setGroupOption}
          orderOption={orderOption}
          setOrderOption={setOrderOption}
        />
        <Filter tickets={tickets} groupOption={groupOption} orderOption={orderOption} />
      </div>
    </>
  );
}

export default App;

