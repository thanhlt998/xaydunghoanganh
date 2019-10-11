import { combineReducers } from "redux";
import PagesReducer from './reducer_pages';
import ActivePage from './reducer_active_page';
import CarouselImages from './reducer_carousel_images';

const rootReducer = combineReducers({
  pages: PagesReducer,
  activePage: ActivePage,
  carouselImages: CarouselImages
});

export default rootReducer;
