import instance from './base';

export const fetchCommentList = async (boardId) => { // boardId 매개변수를 추가하여 동적으로 URL을 생성합니다.
  try {
    const response = await instance.get(`comments/${boardId}`); // 백틱(`)을 사용하여 동적으로 URL을 생성합니다.
    return response.data; // response.data를 반환하여 실제 데이터를 반환합니다.
  } catch (err) {
    console.error('Error fetching board:', err);
    return []; // 오류가 발생한 경우 null을 반환합니다.
  }
};

export async function deleteComment({ boardId }) {
  const response = await instance.delete(`/board/${boardId}`);
  return response.data;
}

