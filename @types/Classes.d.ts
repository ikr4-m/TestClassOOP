export interface Classes {
  /**
   * Run this classes, like "static void main" in Java/C
   */
  run: (value: string, args?: string[]) => Promise<void> | void;

  /**
   * Help template from discord-template/commands/
   * https://github.com/skymunn/discord-ts-template/
   */
  help: {
    name: string,
    description: string,
    usage: string
  }

  /**
   * Config template from discord-template/commands/
   * https://github.com/skymunn/discord-ts-template/
   */
  conf: {
    aliases: string[];
    cooldown: number
  }
}