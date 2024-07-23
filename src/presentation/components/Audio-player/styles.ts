import styled from 'styled-components';

const Wrapper = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
`;

const Name = styled.div<{ $loadedState: 'unloaded' | 'loaded' }>`
    font-size: 20px;
    text-align: end;
    color: var(--color-accent);

    ${({ $loadedState }) => $loadedState === 'unloaded' && `
      margin-top: 30px;
  `}
    ${({ $loadedState }) => $loadedState === 'loaded' && `
      margin-top: 0px;
  `}

`;

const Track = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 18px;
`;

const Button = styled.button`
  width: 30px;
  height: 30px;
  background: transparent;
  border: none;
  margin-left: -2px;
  cursor: pointer;
`;
const Input = styled.div`
    position: relative;
    top: 0;
    z-index: 0;

    svg {
        position: absolute;
        top: 0;
        left: 0;
        pointer-events: none;
    }

    input[type='range'] {
        -webkit-appearance: none;
        width: 100%;
        height: 1px;
        outline: none;
        background: var(--color-accent);

        &::-webkit-slider-thumb {
            -webkit-appearance: none;
            width: 8px;
            height: 8px;
            background: var(--color-accent);
            border-radius: 0px;
            cursor: grab;
            margin-top: -1px;
            transition: transform 0.2s ease;

            &:hover {
                transform: scale(150%);
            }
        }
    }
`;

const Controls = styled.div`
    display: flex;
    gap: 10px;
`;
const ControlsContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const InputVolume = styled.div`
    position: relative;
    height: 20px;
    display: none;
    opacity: 0;

    svg {
        position: absolute;
        top: 0;
        left: 0;
        pointer-events: none;
    }

    input[type='range'] {
        -webkit-appearance: none;
        width: 100%;
        height: 1px;
        outline: none;
        background: var(--color-accent);

        &::-webkit-slider-thumb {
            -webkit-appearance: none;
            width: 8px;
            height: 8px;
            background: var(--color-accent);
            border-radius: 50%;
            cursor: grab;
            margin-top: -1px;
            transition: transform 0.2s ease;

            &:hover {
                transform: scale(150%);
            }
        }
    }
`;

const Volume = styled.div`
    display: flex;
    gap: 10px;

    &:hover ${InputVolume} {
      display: block;
      opacity: 1;
    }
    @media (max-width: 600px) {
      display: none;
  }
`;


const Loader = styled.div`
    display: block;
    --height-of-loader: 1px;
    --loader-color: #164DC4;
    width: 100%;
    height: var(--height-of-loader);
    border-radius: 30px;
    position: relative;

    &::before {
        content: "";
        position: absolute;
        background: var(--loader-color);
        top: 20px;
        left: 0;
        width: 0%;
        height: 100%;
        border-radius: 30px;
        animation: moving 1.5s ease-in-out infinite;
    }

    @keyframes moving {
        50% {
            width: 100%;
        }
        100% {
            width: 0;
            right: 0;
            left: unset;
        }
    }
`;

export const Styled = {
    Wrapper,
    Name,
    Track,
    Input,
    Controls,
    Volume,
    InputVolume,
    Loader,
    Button,
    ControlsContainer
};