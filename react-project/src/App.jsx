import { useEffect, useReducer } from 'react';
import './App.css'
import chef from "./images/chef.jpg";

function Header({ name, year }) {
  return (
    <header>
      <h1>{name}'s Kitchen</h1>
      <p>Copyright {year}</p>
    </header>
  )
}

const items = [
  'Macaroni and Cheese',
  'Chicken Alfredo',
  'Beef Stroganoff'
];

const dishObjects = items.map((item, i) => {
  return {
    id: i,
    title: item
  };
});

function Main({ dishes, openStatus, onStatus }) {
  return (
    <>
      <div>
        <button onClick={() => onStatus(true)}>
          I want to be open
        </button>
        <h2>
          Welcome to this beautiful restaurant!{" "}
          {openStatus ? "Open" : "Closed"}
        </h2>
      </div>

      <main>
        <img
          src={chef}
          height={200}
          alt='A photo of a smiling chef owner'
        />
        <ul>
          {dishes.map((dish) => {
            return <li key={dish.id} style={{ listStyleType: "none" }}>{dish.title}</li>
          })}
        </ul>
      </main>
    </>
  )
}

function App() {
  const [status, toggle] = useReducer(
    (status) => !status,
    true
  );

  useEffect(() => {
    console.log(`Restaurant is now ${status ? 'open' : 'closed'}`);
  });

  return (
    <>
      <h1>The restaurant is currently {status ? 'open' : 'closed'}.</h1>

      <button
        onClick={toggle}>
        {status ? 'Close' : 'Open'} restaurant
      </button>

      <Header
        name="Grant"
        year={new Date().getFullYear()}
      />

      <Main
        dishes={dishObjects}
        openStatus={status}
        onStatus={toggle}
      />
    </>
  )
}

export default App
