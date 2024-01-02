import PropTypes from 'prop-types';

function FoodFavorite(props) {
  const { foodName, recipe } = props;
  return (
    <div>
      <p>
        제가 좋아하는 음식의 이름은 <b style={{ color: 'Red' }}>{foodName}</b>
        입니다.
      </p>
      <p>
        주 재료는 <b style={{ color: 'Red' }}>{recipe}</b>가 들어갑니다.
      </p>
    </div>
  );
}

FoodFavorite.defaultProps = {
  foodName: '김치볶은밥',
  recipe: '김치',
};

FoodFavorite.propTypes = {
  foodName: PropTypes.string,
  recipe: PropTypes.string,
};

export default FoodFavorite;
