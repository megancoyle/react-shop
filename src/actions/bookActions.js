import * as actionTypes from './actionTypes';
import Axios from 'axios';

const apiUrl = 'http://58b889e9fe431512007d7ecf.mockapi.io/item';

// export const createBook = (book) => {
//   return {
//     type: actionTypes.CREATE_BOOK,
//     book
//   }
// };

export const fetchBooksSuccess = (books) => {
  return {
    type: actionTypes.FETCH_BOOKS_SUCCESS,
    books
  };
};

export const createBookSuccess = (book) => {
  return {
    type: actionTypes.CREATE_BOOK_SUCCESS,
    book
  };
};

export const fetchBookByIdSuccess = (book) => {
  return {
    type: actionTypes.FETCH_BOOK_BY_ID_SUCCESS,
    book
  };
};

export const fetchBooks = () => {
  return (dispatch) => {
    return Axios.get(apiUrl)
      .then(response => {
        dispatch(fetchBooksSuccess(response.data));
      })
      .catch(error => {
        throw(error);
      });
  };
};

export const createBook = (book) => {
  return (dispatch) => {
    return Axios.post(apiUrl, book)
      .then(response => {
        dispatch(createBookSuccess(response.data));
      })
      .catch(error => {
        throw(error);
      });
  };
};

export const fetchBookById = (bookId) => {
  return (dispatch) => {
    return Axios.get(apiUrl + '/' +bookId)
      .then(response => {

        dispatch(fetchBookByIdSuccess(response.data));
      })
      .catch(error => {
        throw(error);
      });
  };
};

export const addToCartSuccess = (item) => {
  return {
    type: actionTypes.ADD_TO_CART_SUCCESS,
    item
  };
};

export const addToCart = (item) => {
  return (dispatch) => {
    return Axios.post('http://58b889e9fe431512007d7ecf.mockapi.io/cart', item)
      .then(response => {
        dispatch(addToCartSuccess(response.data));
      })
      .catch(error => {
        throw(error);
      });
  };
};

export const fetchCartSuccess = (items) => {
  return {
    type: actionTypes.FETCH_CART_SUCCESS,
    items
  };
};

export const fetchCart = () => {
  return (dispatch) => {
    return Axios.get('http://58b889e9fe431512007d7ecf.mockapi.io/cart')
      .then(response => {
        dispatch(fetchCartSuccess(response.data));
      })
      .catch(error => {
        throw(error);
      });
  };
};
