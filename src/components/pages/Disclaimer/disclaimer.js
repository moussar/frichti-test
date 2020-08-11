import React, { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';

import Styled from './disclaimer.styled';

const Disclaimer = ({ onExerciseStartClicked }) => {
  const [countdown, setCountdown] = useState(4);

  useEffect(() => {
    let interval = null;
    if (countdown < 4) {
      interval = setInterval(() => setCountdown(countdown - 1), 1000);
    }
    if (countdown === 0) {
      onExerciseStartClicked();
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [countdown, onExerciseStartClicked]);

  const handleClick = useCallback(() => setCountdown(3), [setCountdown]);

  return (
    <Styled>
      <Styled.content>
        {countdown < 4
          ? <Styled.countdown>{countdown}</Styled.countdown>
          : (
            <>
              <figure>
                <Styled.logo
                  color="white"
                  icon="frichti-logo"
                  width={250}
                />
                <figcaption>
                  Following the&nbsp;
                  <Styled.code>README.md</Styled.code>
                  &nbsp;tasks,
                  <br />
                  complete each&nbsp;
                  <Styled.code>@todo</Styled.code>
                  &nbsp;you can find in this project.
                </figcaption>
              </figure>
              <Styled.start
                onClick={handleClick}
                type="button"
              >
                Start!
              </Styled.start>
            </>
          )}
      </Styled.content>
      <Styled.footer>
        <Styled.link
          href="https://frichti.co"
          target="_blank"
          rel="noopener noreferrer"
        >
          frichti.co
        </Styled.link>
      </Styled.footer>
    </Styled>
  );
};

Disclaimer.propTypes = {
  onExerciseStartClicked: PropTypes.func,
};

Disclaimer.defaultProps = {
  onExerciseStartClicked: () => {},
};

export default Disclaimer;
