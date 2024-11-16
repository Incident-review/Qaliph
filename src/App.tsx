import  { useEffect, useState } from 'react'
import { cards } from './cards/types/types'
import './main.css'
import AvaliableCards from './cards/avaliableCards'



function App() {
  const [avaliableCards, setAvaliableCards] = useState<cards[]>([])

  useEffect(() => {
   
  const getAvaliableCardData = async () => {
    try {
      const cardsJson = await import('./cards/avaliableCards.json');
      setAvaliableCards(cardsJson.default);
    } catch (error) {
      console.error('Error fetching available cards:', error);
    }
  };

  getAvaliableCardData();
  }, [])

  console.log('Available Cards:', avaliableCards);

  return (
    <div className='App'>
      <AvaliableCards cards={avaliableCards} />
    </div>
  )
}

export default App
