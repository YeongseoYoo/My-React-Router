
import instance from './base';

// 게시판 목록을 가져오는 함수
export const fetchBoardList = async () => {
    try {
        const response = await instance.get("board");
        console.log(response);
        return response
    } catch (err) {
        console.error('Error fetching board list:', err);
        return [];
    }
};

export const fetchABoard = async (boardId) => { // boardId 매개변수를 추가하여 동적으로 URL을 생성합니다.
    try {
        const response = await instance.get(`board/${boardId}`); // 백틱(`)을 사용하여 동적으로 URL을 생성합니다.
        console.log(response);
        return response; // response.data를 반환하여 실제 데이터를 반환합니다.
    } catch (err) {
        console.error('Error fetching board:', err);
        return []; // 오류가 발생한 경우 null을 반환합니다.
    }
};
