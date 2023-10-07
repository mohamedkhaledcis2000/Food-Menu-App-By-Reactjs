import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavBar from './Components/Mynav';
import { Container } from 'react-bootstrap';
import Header from './Components/Header';
import CardItem from './Components/CardItem';
import { useState, useEffect } from 'react';
import Category from './Components/Category';
function App() {
  // my state
  const [food, setFood] = useState([]);


  // fetching data
  const fetchFoodData = () => {
    fetch("http://localhost:8000/products")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data)
        setFood(data);
      });
  };

  useEffect(()=>{
    fetchFoodData();

  },[])

  const allCategory = ['الكل',...new Set(food.map((i)=>i.category))]
  console.log(allCategory)
//filter by category
  const filterByCategory = (cat) => {
    if(cat ==="الكل")
    {
      fetchFoodData()
    }else{
      const newArr = food.filter((f)=>f.category === cat )
      setFood(newArr)
    }

  }
  //filter by Search
  const filterBySearch = (word) => {
    if(word !=="")
    {
      const newArr = food.filter((f)=>f.title === word )
      setFood(newArr)
    }

  }

 
 
  return (
    <>
      <NavBar filterBySearch={filterBySearch}/>
      
      <Container>
      <Header/>
      <Category filterByCategory={filterByCategory}  allCategory={allCategory}/>
      <CardItem food={food}/>
      </Container>
      </>
  );
}

export default App;
