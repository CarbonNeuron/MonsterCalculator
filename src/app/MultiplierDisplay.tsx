import { DamageType } from "@/app/page";
import { List, ListItem, ListItemText } from "@mui/material";

interface MultiplierDisplayProps {
  multipliers: Map<DamageType, number>;
}
export default function MultiplierDisplay(props: MultiplierDisplayProps) {
  return (
    <List>
      {Array.from(props.multipliers.entries() ?? []).map(
        ([damageType, multiplayer]) => (
          <ListItem key={damageType}>
            <ListItemText
              primary={`${DamageType[damageType]}:`}
              secondary={multiplayer}
            />
          </ListItem>
        ),
      )}
    </List>
  );
}
