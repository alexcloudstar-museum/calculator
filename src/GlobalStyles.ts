import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
body {
  background-image: linear-gradient(
    to left top,
    #8c0dde,
    #ec009f,
    #ff0061,
    #ff662f,
    #eba012
  );
  height: 100vh;
  margin: 0;
  padding: 0;
}

.App {
  top: 50%;
  left: 50%;
  width: 300px;
  height: auto;
  font-size: 45px;
  position: absolute;
  border: 1px solid #f2274f;
  transform: translate(-50%, -50%);
  background: #fff;
  -webkit-box-shadow: 13px 13px 6px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 13px 13px 6px 0px rgba(0, 0, 0, 0.75);
  box-shadow: 13px 13px 6px 0px rgba(0, 0, 0, 0.75);
}

.btn:hover {
  cursor: pointer;
}

.text-right {
  text-align: right !important;
}

.text-center {
  text-align: center !important;
}

.Body {
  display: flex;
}

.left-side {
  width: 65%;
}

.left-side .row:nth-child(3) .btn {
  border-top: 0;
  border-bottom: 0;
}

.right-side {
  width: 35.5%;
}

.btn {
  padding: 0 20px;
  border: 1px solid #921029;
}

.right-side .btn {
  border-left: 0;
  border-right: 0;
  padding-top: 5px;
  color: #fff;
  background-color: #f2274f;
}

.right-side .btn:nth-child(even) {
  border-top: 0;
  border-bottom: 0;
}
.last-num .btn {
    width: 100%;
    padding: 0;
    display: inline-block;
    text-align: center;
    border-bottom: 0;
}
`;

export default GlobalStyles;
