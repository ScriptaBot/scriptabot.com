"use client";

import { Card as MCard } from "@mantine/core";

export const Card = MCard.withProps({
  withBorder: true,
  style: {
    borderColor: "var(--mantine-color-dark-7)",
    background: "transparent",
  },
  shadow: "md",
});

export default Card;
