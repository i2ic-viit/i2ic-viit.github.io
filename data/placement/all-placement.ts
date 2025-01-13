import { PlacementStudent } from "@/data/placement/types";
import { placement19_20 } from "./2019-20";
import { placement20_21 } from "./2020-21";

export const placementData: { [x: string]: PlacementStudent[] } = {
    "2019-2020": placement19_20,
    "2020-2021": placement20_21,
}