import React from 'react';
import { Button, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
export default function BoardDetailPage() {
    const navigate = useNavigate();
    return (
        <>
            <Container className='min-vh-100'>
                <Button
                    onClick={(e) => {
                        navigate(-1);
                    }}
                >
                    {"<"} 뒤로 가기
                </Button>
                <h3>게시글 상세</h3>
                <div
                    onClick={(e) => {
                        navigate("/");
                    }}
                > 메인페이지로 이동
                </div>
            </Container>
        </>
    );
}

