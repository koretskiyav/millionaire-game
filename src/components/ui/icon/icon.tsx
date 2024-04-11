import React from 'react';
import Image from 'next/image';

interface ButtonProps {
  name: string;
  onClick: () => void;
}

export default function Icon({ name, onClick }: ButtonProps) {
  return (
    <Image
      src={`/${name}.svg`}
      alt={name}
      priority
      width={24}
      height={24}
      onClick={onClick}
    />
  );
}
