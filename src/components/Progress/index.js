import "./styles.css";
import useSignUpContext from "../../hooks/useSignUpContext";

const SideProgress = () => {
  const { page, steps } = useSignUpContext();
  const status = (page, index) => {
    if (index < page) return "completed";
    if (index === page) {
      return index === steps.length - 1 ? "completed" : "active";
    }
    return "";
  };
  return (
    <div className="side-progress">
      {steps.map((step, index) => (
        <Step
          key={index}
          index={index}
          info={step}
          status={status(page, index)}
        />
      ))}
    </div>
  );
};

const Step = ({ info: { title, subtitle }, status, index }) => {
  const { setPage } = useSignUpContext();
  return (
    <div className="side-step">
      <div className="step-title" onClick={() => setPage(index)}>
        <div className={`step-ball ${status}`}></div>
        <div className={`step-title__text ${status}`}>{title}</div>
      </div>
      <div className="step-label">
        <div className="step-label__text">{subtitle}</div>
      </div>
    </div>
  );
};

const BottomProgress = () => {
  const { page, setPage, steps } = useSignUpContext();
  return (
    <div className="progress-bar">
      {Array(steps.length)
        .fill(0)
        .map((_, index) => (
          <div
            key={index}
            className={`progress-item ${index === page ? "active" : ""}`}
            onClick={() => setPage(index)}
          ></div>
        ))}
    </div>
  );
};

export { SideProgress, BottomProgress };
