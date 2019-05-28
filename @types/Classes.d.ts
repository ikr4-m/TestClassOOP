export interface Classes {
  run: (value: string, args?: string[]) => Promise<void> | void;
  help: {
    name: string,
    description: string,
    usage: string
  }
  conf: {
    aliases: string[];
    cooldown: number
  }
}