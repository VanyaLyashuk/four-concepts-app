export default function Section(props) {
  const { title, children, ...remainingProps } = props;

  return (
    <section {...remainingProps}>
      <h2>{title}</h2>
      {children}
    </section>
  );
}
