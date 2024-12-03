import { env } from "@/env";
import ThemeSwitcher from "@/MUI/ThemeSwitcher";
import {
  Typography,
  Box,
  List,
  ListItem,
  ListItemText,
  Container,
} from "@mui/material";

function EnvDisplay() {
  return (
    <List>
      {Object.keys(env)
        .filter((x) => x.startsWith("NEXT_PUBLIC"))
        .map((key) => (
          <ListItem key={key}>
            <ListItemText
              primary={`Key: '${key}'`}
              secondary={`Value: '${env[key as keyof typeof env]}'`}
            />
          </ListItem>
        ))}
    </List>
  );
}

export default function Home() {
  return (
    <Container>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="h2" gutterBottom color="primary">
          {env.NAME}
        </Typography>

        <Box sx={{ alignSelf: "flex-start" }}>
          <ThemeSwitcher />
        </Box>
      </Box>

      <Typography variant="h5">Configured Env Vars:</Typography>
      <EnvDisplay />
    </Container>
  );
}
