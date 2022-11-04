export const SEARCH_LOADING = "SEARCH_LOADING";
export const SEARCH_ERROR = "SEARCH_ERROR";
export const SEARCH_RESULT = "SEARCH_RESULT";

export const searhcLoding = (payload) => ({ type: SEARCH_LOADING, payload });
export const searchError = (payload) => ({ type: SEARCH_ERROR, payload });
export const searchResult = (payload) => ({ type: SEARCH_RESULT, payload });

import { PostRepository, UserRepository } from "@amityco/js-sdk";

async function queryAllUser(keyword) {
  const liveUserCollection = UserRepository.queryUsers({
    keyword: keyword,
  });

  let resultArr = [];
  liveUserCollection.on("dataUpdated", (models) => {
    resultArr = models;
  });
  return resultArr;
}
export const makeSearchApi = (search) => async (dispatch) => {
  searhcLoding(true);

  try {
    const liveUserCollection = UserRepository.queryUsers({
      keyword: search,
    });

    liveUserCollection.on("dataUpdated", (models) => {
      const mappedModel = models.map((model) => {
        return {
          _id: model.userId,
          name: model.displayName,
        };
      });

      dispatch(searchResult(mappedModel));
    });
  } catch (err) {
    dispatch(searchError(true));
    console.log(err.message);
  }
};
