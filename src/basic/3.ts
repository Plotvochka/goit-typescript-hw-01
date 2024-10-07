let mixedType: string | number;
type OneOrTwoType = "enable" | "disable";

let value: OneOrTwoType;

mixedType = 1;
mixedType = "1";
value = "disable";
