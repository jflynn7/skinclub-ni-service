export function fetchData<T>(
  url: string,
  successHandler: (response: T) => void,
  errorHandler: (error: Error) => void,
) {
  fetch(url).then((res) => {
    handleResponse<T>(res, successHandler, errorHandler);
  });
}

export function postData<T>(
  url: string,
  data: T,
  successHandler: (response: T) => void,
  errorHandler: (error: Error) => void,
) {
  fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  }).then((res) => {
    handleResponse<T>(res, successHandler, errorHandler);
  });
}

function handleResponse<T>(res: Response, successHandler: (response: T) => void,
                                   errorHandler: (error: Error) => void,) {
  if (res.ok) {
    res.json().then((response) => {
      successHandler(response);
    });
  } else {
    res.json().then((error) => {
      errorHandler(error);
    });
  }
}
