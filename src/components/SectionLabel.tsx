interface SectionLabelProps {
  children: React.ReactNode;
}

const SectionLabel = ({ children }: SectionLabelProps) => (
  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
    {children}
  </span>
);

export default SectionLabel;
