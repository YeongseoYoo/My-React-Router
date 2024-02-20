import React, { useEffect, useState } from "react";
import { Button, Container, ListGroup, Badge } from "react-bootstrap";
import { useNavigate, useParams, Link } from "react-router-dom";

import { fetchABoard } from "~/lib/apis/board";
import { fetchCommentList } from "~/lib/apis/comment";


export default function BoardDetailPage() {
    const navigate = useNavigate();
    const params = useParams();
    const [commentList, setCommentList] = useState([]);
    useEffect(() => {
        fetchCommentList(params.boardId).then((data) => {
            setCommentList(data);
            console.log(data);
        });
    }, []);

    const [aBoard, setaBoard] = useState([]);

    useEffect(() => {
        fetchABoard(params.boardId).then((data) => {
            console.log(data);

            setaBoard(data);

        });
    }, []);


    return (
        <Container className="min-vh-100">
            <Button
                onClick={(e) => {
                    navigate(-1);
                }}
            >
                {"<"} 뒤로가기
            </Button>
            <h3>Detail Page</h3>
            {/* <Button
                onClick={(e) => {
                    navigate("/");
                }}
            >
                메인페이지로 이동
            </Button> */}
            <div className="card">
                <div className="card-header">
                    {aBoard.title} {/* 보드의 제목 표시 */}
                </div>
                <div className="card-body">
                    <blockquote className="blockquote mb-0">
                        <p>{aBoard.content}</p> {/* 보드의 내용 표시 */}
                        <footer className="blockquote-footer">Written by <cite title="Source Title">{aBoard.author && aBoard.author.nickname}</cite></footer>

                        <footer className="blockquote-footer">Created at: {new Date(aBoard.createdAt).toLocaleString()}</footer> {/* 작성일 표시 */}
                        <footer className="blockquote-footer">Last updated at: {new Date(aBoard.updatedAt).toLocaleString()}</footer> {/* 수정일 표시 */}
                    </blockquote>
                </div>
            </div>

            <br />

            <ListGroup as="ul">
                {commentList.map((item) => (
                    <Link
                        key={item._id}
                        to={`/board/${item._id}`}
                        className="text-decoration-none"
                    >
                        <ListGroup.Item
                            key={item._id}
                            as="li"
                            action
                            className="d-flex justify-content-between align-items-start"
                        >
                            <div className="ms-2 me-auto text-truncate">
                                <div className="fw-bold">{item.title}</div>
                                <div>{item.content}</div>
                            </div>
                            <div className="d-flex flex-column justify-content-center align-items-end">
                                <Badge bg="primary" pill>
                                    {/* 14 */}
                                    {item.commentCount}
                                </Badge>
                                <div>{item.author.nickname}</div>
                                {/* {item.createdAt} */}
                            </div>
                        </ListGroup.Item>
                    </Link>
                ))}




            </ListGroup>

        </Container>
    );
}

