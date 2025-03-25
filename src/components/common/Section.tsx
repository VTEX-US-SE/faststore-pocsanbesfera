export default function Section(
  props: React.PropsWithChildren<React.HTMLAttributes<HTMLElement>>
) {
  return (
    <section
      {...props}
      className={`section layout__section ${props.className}`}
    >
      {props.children}
    </section>
  )
}
