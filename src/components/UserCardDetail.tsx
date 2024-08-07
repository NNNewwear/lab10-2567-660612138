"use client";

import { IconMailForward, IconMapPins } from "@tabler/icons-react";
import { UserCardDetailProps } from "../libs/types";
export default function UserCardDetail({ email, address }: UserCardDetailProps) {
  return (
    <div className="text-center">
      <p>
        <IconMailForward /> {email}
      </p>
      <p>
        <IconMapPins /> {address}
      </p>
    </div>
  );
}
