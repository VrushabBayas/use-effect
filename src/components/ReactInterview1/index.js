import React from "react";

export default function InterviewOne() {
  return (
    <div>
      <h1>React Interview 1</h1>
      <p>What is the output of the following code?</p>
      <pre>
        <code>
          {`
            const arr = [10, 12, 15, 21];
            for (var i = 0; i < arr.length; i++) {
              setTimeout(function() {
                console.log('Index: ' + i + ', element: ' + arr[i]);
              }, 3000);
            }
          `}
        </code>
      </pre>
      <p>
        <strong>A:</strong> Index: 0, element: 10
      </p>
      <p>
        <strong>B:</strong> Index: 1, element: 12
      </p>
      <p>
        <strong>C:</strong> Index: 2, element: 15
      </p>
      <p>
        <strong>D:</strong> Index: 3, element: 21
      </p>
      <p>
        <strong>E:</strong> Index: 4, element: undefined
      </p>
      <p>
        <strong>F:</strong> None of the above
      </p>
    </div>
  );
}
