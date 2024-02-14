import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { fetchBoardList } from "~/lib/apis/board";

export default function BoardListPage() {
    const [boards, setBoards] = useState([]);

    useEffect(() => {
        fetchBoards();
    }, []);

    const fetchBoards = async () => {
        try {
            let boardList = await fetchBoardList();
            setBoards(boardList);
        } catch (err) {
            console.error('Error fetching boards:', err);
        }
    };

    return (
        <>
            <h1>My Board</h1>
            <Container>
                <ol className="list-group list-group-numbered">
                    {boards.map(board => (
                        <div key={board.id}>
                            <li className="list-group-item d-flex justify-content-between align-items-start">
                                <div className="ms-2 me-auto">
                                    <div className="fw-bold">{board.title}</div>
                                    {board.content}
                                </div>
                                <span className="badge bg-primary rounded-pill">{board.likes}</span>
                            </li>
                        </div>
                    ))}
                </ol>
            </Container>
        </>
    );
}

