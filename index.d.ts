declare module "ainasepics" {
    export interface AinaseResult {
        url: string;
        animated: boolean;
    }
    export type AinaseNames = "baka"|"bite"|"blush"|"bored"|"bully"|"chase"|"cheer"|"cringe"|"cry"|"cuddle"|"dance"|"facepalm"|"glomp"|"handhold"|"happy"|"hi"|"highfive"|"hug"|"kiss"|"laugh"|"lick"|"love"|"nervous"|"nom"|"nope"|"panic"|"pat"|"poke"|"pout"|"punch"|"run"|"sad"|"shrug"|"slap"|"cat"|"dog"|"wolf"|"fox";

    export interface MultipleGetOptions {
        name: AinaseNames;
        limit: number;
    }
    export interface AinaseMultipleResult {
        results: AinaseResult[];
    }

    export async function get(name: AinaseNames): Promise<AinaseResult>;
    /**
     * 
     * @param options If string given, limit is 1
     */
    export async function getMultiple(options: AinaseNames | MultipleGetOptions): Promise<AinaseMultipleResult[]>;

    export = {
        get,
        getMultiple
    }
}