import { useState, useEffect } from "react";
import Description from "./components/Description.jsx";
import Feedback from "./components/Feedback.jsx";
import Options from "./components/Options.jsx";
import "./App.css";
import Notification from "./components/Notification.jsx";

export default function App() {
  const [feedback, setFeedback] = useState(() => {
    const saved = localStorage.getItem("feedbacks");
    return saved ? JSON.parse(saved) : { good: 0, neutral: 0, bad: 0 };
  });

  useEffect(() => {
    localStorage.setItem("feedbacks", JSON.stringify(feedback));
  }, [feedback]);

  const updateFeedback = (feedbackType) => {
    setFeedback((initialFeedback) => ({
      ...initialFeedback,
      [feedbackType]: initialFeedback[feedbackType] + 1,
    }));
  };

  const reset = () => {
    setFeedback({ good: 0, neutral: 0, bad: 0 });
  };

  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;

  const totalPositive = totalFeedback
    ? Math.round((feedback.good / totalFeedback) * 100)
    : 0;

  return (
    <>
      <Description />
      <Options
        leaveFeedback={updateFeedback}
        reset={reset}
        total={totalFeedback > 0}
      />
      {totalFeedback > 0 ? (
        <Feedback
          good={feedback.good}
          neutral={feedback.neutral}
          bad={feedback.bad}
          total={totalFeedback}
          positive={totalPositive}
        />
      ) : (
        <Notification text="No feedback yet" />
      )}
    </>
  );
}
