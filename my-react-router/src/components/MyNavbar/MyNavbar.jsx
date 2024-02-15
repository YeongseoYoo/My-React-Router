import React, { useState, useEffect } from "react";
import { Container, Nav, Navbar, Offcanvas } from "react-bootstrap";
import { NavLink, useLocation } from "react-router-dom";
import SignInPage from "../SignIn/SignIn";;

const EXPAND_BREAKPOINT = "md";

export default function MyNavbar({ brandTitle, offCanvasTitle }) {
  const [display, setDisplay] = useState("flex");
  // const [userNickname, setUserNickname] = useState('');

  useEffect(() => {
    let show = localStorage.getItem('signin');
    if (show !== null) {
      setDisplay(show);
    }
    // const nickname = localStorage.getItem("userNickname"); // 로컬 스토리지에서 사용자의 닉네임을 가져옴
    // if (nickname) {
    //   setUserNickname(nickname); // 가져온 닉네임을 상태에 저장
    // }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('signin'); // 로그인 상태 제거
    setDisplay("flex"); // Display 상태 변경
  };
  

  return (
    <Navbar
      expand={EXPAND_BREAKPOINT}
      className="mb-3"
      sticky="top"
      bg="dark"
      variant="dark"
    >
      <Container fluid>
        <Navbar.Brand href="/">{brandTitle}</Navbar.Brand>
        <Navbar.Toggle aria-controls={`Navbar-expand-${EXPAND_BREAKPOINT}`} />
        <Navbar.Offcanvas
          id={`Navbar-expand-${EXPAND_BREAKPOINT}`}
          aria-labelledby={`NavbarLabel-expand-${EXPAND_BREAKPOINT}`}
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id={`NavbarLabel-expand-${EXPAND_BREAKPOINT}`}>
              {offCanvasTitle || brandTitle}
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body className="flex-row-reverse">
            <Nav
              className={`justify-content-around flex-row pb-4 pb-${EXPAND_BREAKPOINT}-0`}
            >
              <div style={{ display: display, flexDirection: 'row' }}>
                <Nav.Link as={NavLink} to="/login" className="flex-grow-1 text-center border border-dark border-end-0">
                  로그인
                </Nav.Link>

                <Nav.Link as={NavLink} to="/signup" className="flex-grow-1 text-center border border-dark">
                  회원가입
                </Nav.Link>
              </div>
              <div style={{ display: display === "flex" ? "none" : "flex" }}>
                                <Nav.Link as={NavLink} to='/' className="text-decoration-none">
                                    <Nav.Link
                                        as="div"
                                        className='flex-grow-1 text-center border border-dark'
                                        onClick={handleLogout}>로그아웃</Nav.Link>
                                </Nav.Link>
                            </div>
            </Nav>
            <Nav className="justify-content-start flex-grow-1 pe-3">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/board">게시판</Nav.Link>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}

