export const Icon = ({
  name,
  width,
  height,
  fill,
  stroke,
  strokeWidth,
  className,
}) => {
  return (
    <>
      <svg
        // className={`icon icon-${name} ${className}`}
        width={width}
        height={height}
        fill={fill}
        aria-hidden="true"
      >
        <use
          href={`/sprite.svg#icon-${name}`}
          stroke={stroke}
          strokeWidth={strokeWidth}
        />
      </svg>
    </>
  );
};
