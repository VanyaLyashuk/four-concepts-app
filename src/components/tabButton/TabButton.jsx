export default function TabButton(props) {
  const { children, isSelected, ...remainingProps } = props;

  return (
    <li>
      <button className={isSelected ? "active" : ""} {...remainingProps}>
        {children}
      </button>
    </li>
  );
}
