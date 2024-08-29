import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { ContactSales } from './contact-sales';

function App() {
  const [count, setCount] = useState(0);

  return <ContactSales></ContactSales>;
}

export default App;
