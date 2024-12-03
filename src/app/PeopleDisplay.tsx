"use client";

import { applyDamage, DamageType, Person } from "@/app/page";
import { Box, Button, Divider, Typography } from "@mui/material";
import { useState } from "react";
import HealthDisplay from "@/app/HealthDisplay";
import MultiplierDisplay from "@/app/MultiplierDisplay";

interface PeopleDisplayProps {
  Person: Person;
  AttackDamage: number;
  damageType: DamageType;
}

export function PeopleDisplay(props: PeopleDisplayProps) {
  const [person, setPerson] = useState<Person>(props.Person);
  const [originalPerson, setOriginalPerson] = useState<Person>(props.Person);
  return (
    <Box>
      <Typography variant={"h4"}>{person.name}:</Typography>
      <HealthDisplay maxHealth={originalPerson.hp} currentHealth={person.hp} />
      <MultiplierDisplay multipliers={person.multipliers} />
      <Divider />
      <Button
        onClick={() => {
          setPerson((prev) => {
            const newp = applyDamage(
              prev,
              props.AttackDamage,
              props.damageType,
            );
            return { ...prev, hp: newp.hp };
          });
        }}
      >
        Attack
      </Button>
    </Box>
  );
}
