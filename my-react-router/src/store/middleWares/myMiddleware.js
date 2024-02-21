const myMiddleware = (store) => (next) => (action) => {
  // 리듀서에 전달되기전 로직
  let result = next(action); //return 결과에 따라서 새로운 상태 update가 될 수 있다. 
  if (result === "Succcess") {
    store.dispatch({ //상태변화를 처음부터 간다는 것
      type: "todo/success", //dispatch안에는 action객체
      payload: {},
    });
  }else {
    store.dispatch({
      type: "todo/fail",
      payload: {},
    });
  }
}

//store.dispatch는 처음부터 다시

export function myMid(store) {
  console.log("store", store);
  return function (next) {
    console.log("next", next);
    return function (action) {
      console.log("action", action);
      return next(action);
    };
  };
}

/**
 * timeout
 */

//앞에서부터 middleware통과하고 timeout에 오게 된다.
//meta에 delay값이 있었다.
export const timeoutScheduler = (store) => (next) => (action) => {
  if (!action.meta || !action.meta.delay) {
    return next(action);
  }
  //delay 값이 있다면
  let timeoutId = setTimeout(() => {
    return next(action);
  }, action.meta.delay);

  return () => {
    console.log("Cancel");
    clearTimeout(timeoutId);
  };
};
