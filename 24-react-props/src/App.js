import './App.css';
import FuncComponent from './FuncComponent';
import FoodFavorite from './foodFavorite';
import Bestseller from './Bestseller';

function App() {
  return (
    <div className="App">
      <FuncComponent name={'코딩온'} />
      <FoodFavorite foodName={'라면'} recipe={'계란'} />
      <Bestseller
        title={'나의 하루는 4시 40분에 시작된다'}
        author={'김유진'}
        price={'13,500'}
        type={'자기개발서'}
      />
    </div>
  );
}

export default App;
