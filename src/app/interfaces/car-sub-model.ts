import { Remote } from "./remote";
import { RemoteShell } from "../remote-shell";
import { KdRemote } from "./kd-remote";
import { XhorseRemote } from "./xhorse-remote";
import { WorkOnProducts } from "./work-on-products";

export interface CarSubModel {
    key: string;
    brand: string;
    model: string;
    submodel: string;
    typeofignition: string;
    profile: string;
    chipID: string;
    freq: string;
    updatedat: string;
    icon: string;
    startyear: number;
    endyear: number;
    compatibleremotes: Array<WorkOnProducts>;
    compatibleremoteshells: Array<WorkOnProducts>;
    compatibleKDRemotes: Array<WorkOnProducts>;
    compatibleXhorseRemote: Array<WorkOnProducts>;

}
