/* stylelint-disable property-no-vendor-prefix */
/* stylelint-disable value-no-vendor-prefix */
import styled from 'styled-components'

export const Wrapper = styled.div`
  margin-top: -6em;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const Spinner = styled.div`
  font-size: 0.625rem;
  margin: 0 auto;
  text-indent: -9999em;
  width: 6em;
  height: 6em;
  border-color: white;
  border-radius: 50%;
  background: ${({ theme }) => theme.pallete.lightBlueCash[300]};
  background: -moz-linear-gradient(
    left,
    ${({ theme }) => theme.pallete.lightBlueCash[300]} 10%,
    white 42%
  );
  background: -webkit-linear-gradient(
    left,
    ${({ theme }) => theme.pallete.lightBlueCash[300]} 10%,
    white 42%
  );
  background: -o-linear-gradient(
    left,
    ${({ theme }) => theme.pallete.lightBlueCash[300]} 10%,
    white 42%
  );
  background: -ms-linear-gradient(
    left,
    ${({ theme }) => theme.pallete.lightBlueCash[300]} 10%,
    white 42%
  );
  background: linear-gradient(
    to right,
    ${({ theme }) => theme.pallete.lightBlueCash[300]} 10%,
    white 42%
  );
  position: relative;
  -webkit-animation: load3 1.4s infinite linear;
  animation: load3 1.4s infinite linear;
  -webkit-transform: translateZ(0);
  -ms-transform: translateZ(0);
  transform: translateZ(0);

  &:before {
    width: 50%;
    height: 50%;
    background: ${({ theme }) => theme.pallete.lightBlueCash[300]};
    border-radius: 100% 0 0 0;
    position: absolute;
    top: 0;
    left: 0;
    content: '';
  }

  &:after {
    background: ${({ theme }) => theme.pallete.greyCash[100]};
    width: 75%;
    height: 75%;
    border-radius: 50%;
    content: '';
    margin: auto;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
  }

  @keyframes load3 {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
`
