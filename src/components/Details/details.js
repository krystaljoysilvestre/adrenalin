import React, { useEffect } from 'react';

import * as D from './style.js';

const Details = props => {
  const { selectedArticle, onResetSelected } = props;

  useEffect(() => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }, []);

  return (
    <>
      <D.Wrapper>
        <D.Content>
          {selectedArticle && (
            <img
              className="animated bounceInLeft"
              src={selectedArticle.image}
              alt="image1"
            />
          )}
        </D.Content>
        <D.Content className="animated bounceInRight">
          <D.Title>{selectedArticle && selectedArticle.title}</D.Title>

          {selectedArticle &&
            selectedArticle.questions.map((question, index) => (
              <div key={index}>
                <D.Question>{question}</D.Question>
                <D.Answer>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt.t.
                </D.Answer>
              </div>
            ))}
        </D.Content>
      </D.Wrapper>
      <D.Back onClick={() => onResetSelected()}>Back</D.Back>
    </>
  );
};

export default Details;
