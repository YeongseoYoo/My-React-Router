import React, { useEffect, useState } from "react";
import { Badge, Button, Container, ListGroup } from "react-bootstrap";

import { fetchBoardList } from "~/store/reducers/board";
import { useSelector, useDispatch } from "react-redux";
import { Link, useSearchParams } from "react-router-dom";

const brand = "My-React-Board";

export default function BoardListPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const dispatch = useDispatch();
  const boardObj = useSelector((state) => state.board);
  console.log(searchParams);
  console.log(searchParams.getAll("where"));
  console.log(searchParams.getAll("query"));
  console.log(setSearchParams);

  const { loading, boards } = boardObj; //boardObj reducer 폴더내의 board.js에서 내가 선언한 initialState 에서 boards 배열을 꺼내놓은 것.

  useEffect(() => {
    const action = fetchBoardList();
    dispatch(action);
  }, [dispatch]);


  return (
    <Container className="min-vh-100">
      <h3>My Board</h3>
      <div className="d-flex mb-3 flex-row justify-content-between flex-wrap">
        <input
          type="text"
          onChange={(e) => {
            setSearchParams({
              query: e.target.value,
            });
          }}
        />
        <Button variant="success" as={Link} to="/board/write">
          작성
        </Button>
      </div>

      <ListGroup as="ul">
        {boards.map((item) => (
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
                  {item.commentCount}
                </Badge>
                <div>{item.author.nickname}</div>
              </div>
            </ListGroup.Item>
          </Link>
        ))}
      </ListGroup>

    </Container>
  );
}