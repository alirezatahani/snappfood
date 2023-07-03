import { put, takeLeading, all, select } from 'redux-saga/effects';
import apiClient from 'src/utils/apiClient';
import { fetchRestaurantsFail, fetchRestaurantsSuccess } from '../redux/index';

export function* fetchRestaurants() {
  try {
    const { page, coords } = yield select(
      (state: any) => state.restaurantsReducer
    );

    const { data } = yield apiClient({
      url: `restaurant/vendors-list?page=${page}&page_size=10&lat=${coords?.latitude}&long=${coords?.longitude}`,
      method: 'get',
    });

    let finalResult = [];
    let pageTitle = {};
    if (page > 0) {
      finalResult = data?.data?.finalResult.filter(
        (result: any) => result.type === 'VENDOR'
      );
    } else {
      pageTitle = data?.data?.finalResult[0];
      finalResult = data?.data?.finalResult.splice(1);
    }

    yield put(fetchRestaurantsSuccess(finalResult));
  } catch (e) {
    yield put(fetchRestaurantsFail(e));
  }
}

export function* fetchRestaurantAsync() {
  yield takeLeading('restaurants/fetchRestaurants', fetchRestaurants);
}
export function* fetchMoreRestaurantAsync() {
  yield takeLeading('restaurants/fetchMore', fetchRestaurants);
}

// notice how we now only export the rootSaga
// single entry point to start all Sagas at once
export default function* restaurantSaga() {
  yield all([fetchRestaurantAsync(), fetchMoreRestaurantAsync()]);
}
