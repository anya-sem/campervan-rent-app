export const Icon = ({
  name,
  width = 32,
  height = 32,
  fill,
  stroke,
  strokeWidth,
  className,
}) => {
  const path =
    import.meta.env.MODE === 'production'
      ? `${import.meta.env.BASE_URL}/`
      : '/';
  return (
    <>
      <svg
        className={className}
        width={width}
        height={height}
        fill={fill}
        stroke={stroke}
        strokeWidth={strokeWidth}
        aria-hidden="true"
      >
        <use xlinkHref={`${path}sprite.svg#icon-${name}`} />
      </svg>
    </>
  );
};
