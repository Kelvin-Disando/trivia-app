import React from 'react';
import Lottie from 'react-lottie';

import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { gameOver } from '../../store/actions';

import * as animationData from '../../animations/timesup.json';

import QuestionStatusCard from '../../components/QuestionStatusCard';
import Content from '../../components/Content';
import Button from '../../components/Button/Button';

import './Timesup.scss';

const Timesup = ({ dispatch, question }) => {
  const history = useHistory();

  const animationOptions = {
    loop: false,
    animationData: animationData.default,
  };

  const onClick = () => {
    dispatch(gameOver());
    history.push('/');
  };

  return (
    <div className="timesup-page">
      <QuestionStatusCard
        questionCount={question.questionCount}
        questionIndex={question.currentIndex}
      />
      <Content>
        <div className="time-icon">
          <Lottie options={animationOptions} />
        </div>
        <div className="status">Time&apos;s up</div>
        <div className="description">
          <span>You are late, time’s up.</span>
          <span>Total: {question.points} points</span>
        </div>
        <Button onClick={onClick} variant="big">
          Main Menu
        </Button>
      </Content>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    question: state.question,
  };
};

export default connect(mapStateToProps)(Timesup);
