import { Remote } from "../remote";
import { RemoteShell } from "../remote-shell";
import { KdRemote } from "./kd-remote";
import { XhorseRemote } from "./xhorse-remote";

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
    compatibleremotes: Array<Remote>;
    compatibleremoteshells: Array<RemoteShell>;
    compatibleKDRemotes: Array<KdRemote>;
    compatibleXhorseRemote: Array<XhorseRemote>;

}
