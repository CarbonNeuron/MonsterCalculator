import { Typography } from "@mui/material";

interface HealthDisplayProps {
  maxHealth: number;
  currentHealth: number;
}
export default function HealthDisplay(props: HealthDisplayProps) {
  const currentPercent = Math.max(props.currentHealth, 0) / props.maxHealth;
  let message = "Healthy";
  if (currentPercent <= 0.75) {
    message = "Hurt";
  }
  if (currentPercent <= 0.5) {
    message = "Bloody";
  }
  if (currentPercent <= 0.25) {
    message = "Very Bloody";
  }
  if (currentPercent <= 0) {
    message = "Dead";
  }

  return (
    <Typography>
      {props.currentHealth} / {props.maxHealth}
      <br />
      {Number(currentPercent).toLocaleString(undefined, {
        style: "percent",
        minimumFractionDigits: 0,
        maximumFractionDigits: 2,
      })}
      <br />
      {message}
    </Typography>
  );
}
