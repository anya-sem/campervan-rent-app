import { CarCard } from '../CarCard/CarCard';
import { LoadMoreBtn } from '../LoadMoreBtn/LoadMoreBtn';

export const CarList = () => {
  return (
    <div>
      <ul>
        <li>
          <CarCard />
        </li>
      </ul>
      <LoadMoreBtn />
    </div>
  );
};
