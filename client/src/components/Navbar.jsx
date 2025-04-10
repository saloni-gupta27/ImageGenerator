import React from "react";
import styled from "styled-components";
import { AddRounded, ExploreRounded } from "@mui/icons-material";
import Button from "./button";
import { useLocation, useNavigate } from "react-router-dom";

const Container = styled.div`
  flex: 1;
  background: ${({ theme }) => theme.navbar};
  color: ${({ theme }) => theme.text_navbar};
  font-weight: bold;
  font-size: 22px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  padding: 10px 12px;
  @media only screen and (max-width: 600px) {
    padding: 10px 12px;
  }
`;

const Navbar = () => {
  const navigate = useNavigate();
  const loc = useLocation();
  const path = loc.pathname.split("/");
  return (
    <Container>
      GenAI
      {path[1] === "post" ? (
        <Button
          text="Explore posts"
          leftIcon={<ExploreRounded style={{ fontSize: "18px" }} />}
          onClick={() => navigate("/")}
          type="secondary"
        />
      ) : (
        <Button
          text="Create new post"
          leftIcon={<AddRounded style={{ fontSize: "18px" }} />}
          onClick={() => navigate("/post")}
        />
      )}
    </Container>
  );
};

export default Navbar;
