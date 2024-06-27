import React from "react";


interface LoadingModalProps {
    message: string;    
}
const LoadingModal : React.FC<LoadingModalProps> = ({ message }) => {
  return (
    <dialog id="my_modal_1" className="modal">
      <div className="modal-box">
        <h3 className="font-bold text-lg text-center">
          Loading The {message} For You
        </h3>
        <p className="py-4 text-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="4em"
            height="4em"
            viewBox="0 0 24 24"
            className="text-center mx-auto"
          >
            <circle cx={12} cy={2} r={0} fill="#8c00ff">
              <animate
                attributeName="r"
                begin={0}
                calcMode="spline"
                dur="1s"
                keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8"
                repeatCount="indefinite"
                values="0;2;0;0"
              ></animate>
            </circle>
            <circle
              cx={12}
              cy={2}
              r={0}
              fill="#8c00ff"
              transform="rotate(45 12 12)"
            >
              <animate
                attributeName="r"
                begin="0.125s"
                calcMode="spline"
                dur="1s"
                keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8"
                repeatCount="indefinite"
                values="0;2;0;0"
              ></animate>
            </circle>
            <circle
              cx={12}
              cy={2}
              r={0}
              fill="#8c00ff"
              transform="rotate(90 12 12)"
            >
              <animate
                attributeName="r"
                begin="0.25s"
                calcMode="spline"
                dur="1s"
                keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8"
                repeatCount="indefinite"
                values="0;2;0;0"
              ></animate>
            </circle>
            <circle
              cx={12}
              cy={2}
              r={0}
              fill="#8c00ff"
              transform="rotate(135 12 12)"
            >
              <animate
                attributeName="r"
                begin="0.375s"
                calcMode="spline"
                dur="1s"
                keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8"
                repeatCount="indefinite"
                values="0;2;0;0"
              ></animate>
            </circle>
            <circle
              cx={12}
              cy={2}
              r={0}
              fill="#8c00ff"
              transform="rotate(180 12 12)"
            >
              <animate
                attributeName="r"
                begin="0.5s"
                calcMode="spline"
                dur="1s"
                keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8"
                repeatCount="indefinite"
                values="0;2;0;0"
              ></animate>
            </circle>
            <circle
              cx={12}
              cy={2}
              r={0}
              fill="#8c00ff"
              transform="rotate(225 12 12)"
            >
              <animate
                attributeName="r"
                begin="0.625s"
                calcMode="spline"
                dur="1s"
                keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8"
                repeatCount="indefinite"
                values="0;2;0;0"
              ></animate>
            </circle>
            <circle
              cx={12}
              cy={2}
              r={0}
              fill="#8c00ff"
              transform="rotate(270 12 12)"
            >
              <animate
                attributeName="r"
                begin="0.75s"
                calcMode="spline"
                dur="1s"
                keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8"
                repeatCount="indefinite"
                values="0;2;0;0"
              ></animate>
            </circle>
            <circle
              cx={12}
              cy={2}
              r={0}
              fill="#8c00ff"
              transform="rotate(315 12 12)"
            >
              <animate
                attributeName="r"
                begin="0.875s"
                calcMode="spline"
                dur="1s"
                keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8"
                repeatCount="indefinite"
                values="0;2;0;0"
              ></animate>
            </circle>
          </svg>
          <br />
          Thank You For Beeing Patient
        </p>
      </div>
    </dialog>
  );
};

export default LoadingModal;
