"use client";

import ThemeSwitcher from "@/MUI/ThemeSwitcher";
import {
  Box,
  Container,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { PeopleDisplay } from "@/app/PeopleDisplay";
import { useState } from "react";

export enum DamageType {
  Slashing,
  Piercing,
  Bludgeoning,
}

export interface Person {
  name: string;
  hp: number;
  multipliers: Map<DamageType, number>;
}

function applySlashingDamage(person: Person, damageAmount: number) {
  return damageAmount * (person.multipliers.get(DamageType.Slashing) ?? 1);
}
function applyPiercingDamage(person: Person, damageAmount: number) {
  return damageAmount * (person.multipliers.get(DamageType.Piercing) ?? 1);
}
function applyBludgeoningDamage(person: Person, damageAmount: number) {
  console.log(person.multipliers.get(DamageType.Bludgeoning));
  return damageAmount * (person.multipliers.get(DamageType.Bludgeoning) ?? 1);
}

const damageActionMap: Map<
  DamageType,
  (person: Person, damageAmount: number) => number
> = new Map([
  [DamageType.Slashing, applySlashingDamage],
  [DamageType.Piercing, applyPiercingDamage],
  [DamageType.Bludgeoning, applyBludgeoningDamage],
]);

export function applyDamage(
  person: Person,
  damageAmount: number,
  damageType: DamageType,
) {
  const newPerson = { ...person };
  const actionFunc = damageActionMap.get(damageType);
  if (actionFunc) {
    newPerson.hp -= actionFunc(person, damageAmount);
  } else {
    console.log("Action not found.");
  }
  return newPerson;
}

const people: Person[] = [
  {
    name: "Jimmy",
    hp: 25,
    multipliers: new Map([
      [DamageType.Bludgeoning, 0.5],
      [DamageType.Slashing, 0],
    ]),
  },
  {
    name: "January",
    hp: 30,
    multipliers: new Map(),
  },
  {
    name: "February",
    hp: 25,
    multipliers: new Map(),
  },
];

export default function Home() {
  const [attackDamage, setAttackDamage] = useState<number>(10);
  const [damageType, setDamageType] = useState<DamageType>(DamageType.Piercing);
  const handleChange = (event: Event, newValue: number | number[]) => {
    setAttackDamage(newValue as number);
  };

  const handleChangeSelect = (event: SelectChangeEvent) => {
    setDamageType(event.target.value as DamageType);
  };
  return (
    <Container>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="h2" gutterBottom color="primary">
          Monster
        </Typography>

        <Box sx={{ alignSelf: "flex-start" }}>
          <ThemeSwitcher />
        </Box>
      </Box>
      <Stack gap={3}>
        <TextField
          value={attackDamage}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            setAttackDamage(event.target.value);
          }}
          aria-label="Default"
        />
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Damage Type</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            value={damageType}
            label="Damage Type"
            onChange={handleChangeSelect}
          >
            <MenuItem value={DamageType.Slashing}>Slashing</MenuItem>
            <MenuItem value={DamageType.Piercing}>Piercing</MenuItem>
            <MenuItem value={DamageType.Bludgeoning}>Bludgeoning</MenuItem>
          </Select>
        </FormControl>
        {people.map((person: Person, idx) => (
          <PeopleDisplay
            key={idx}
            damageType={damageType}
            AttackDamage={attackDamage}
            Person={person}
          />
        ))}
      </Stack>
    </Container>
  );
}
