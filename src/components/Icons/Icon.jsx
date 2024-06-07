export const Icon = ({ name, width, height, fill, stroke, className }) => {
  return (
    <>
      <svg
        // className={`icon icon-${name} ${className}`}
        width={width}
        height={height}
        fill={fill}
        stroke={stroke}
        aria-hidden="true"
      >
        <use href={`../../../public/sprite.svg#icon-${name}`} />
      </svg>
    </>
  );
};
