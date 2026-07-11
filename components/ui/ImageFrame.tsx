interface ImageFrameProps {
  children: React.ReactNode;
  className?: string;
}

export default function ImageFrame({
  children,
  className = "",
}: ImageFrameProps) {
  return <div className={className}>{children}</div>;
}