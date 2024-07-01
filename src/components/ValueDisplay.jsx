import React, { useEffect, useRef } from "react";

export default function ValueDisplay({ value }) {
  const prevValueRef = useRef(value);

  useEffect(() => {
    prevValueRef.current = value;
  }, [value]);

  const prevValue = prevValueRef.current;

  return (
    <div>
      <p>Current Value: {value}</p>
      <br />
      <p>Previous Value: {prevValue}</p>
    </div>
  );
}
