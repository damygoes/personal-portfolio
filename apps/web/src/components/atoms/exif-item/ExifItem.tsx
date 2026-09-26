export interface ExifItemProps {
  label: string;
  value: string;
}

function ExifItem({ label, value }: ExifItemProps) {
  return (
    <div data-slot="exif-item" className="flex flex-col gap-0.5">
      <dt className="text-xs tracking-wide text-muted-foreground uppercase">
        {label}
      </dt>
      <dd className="font-mono text-sm text-foreground">{value}</dd>
    </div>
  );
}

export { ExifItem };
