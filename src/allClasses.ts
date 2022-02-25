import { Wizard } from "./magicalClasses";

export type Class = {
    name: string;
    canConvertTo?: Class[];
};

const Fighter: Class = {
    name: "fighter",
};

const Swordman: Class = {
    name: "swordman",
};

const Archer: Class = {
    name: "archer",
};

export const ClassesWithoutMagic: Class[] = [Fighter, Swordman, Archer];

export const AllClasses: Class[] = [...ClassesWithoutMagic, Wizard];
