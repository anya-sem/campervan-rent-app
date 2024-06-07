import { Icon } from '../Icons/Icon';

export const CarCard = () => {
  return (
    <>
      <img src="" alt="" />
      <h2>name</h2>
      <p>price</p>
      <Icon
        name="heart"
        fill="none"
        stroke="currentColor"
        width="24"
        height="24"
      />
      <div>
        <p>rating(reviews)</p>
        <p>location</p>
      </div>
      <p>description</p>
      <div>
        <div>
          <p>adults</p>
        </div>
        <div>
          <p>transmission</p>
        </div>
        <div>
          <p>engine</p>
        </div>
        <div>
          <p>details.kitchen</p>
        </div>
        <div>
          <p>details.bed</p>
        </div>
        <div>
          <p>details.airConditioner</p>
        </div>
      </div>
    </>
  );
};
