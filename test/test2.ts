import { Classes } from '../@types/Classes';

export default class Test2 implements Classes {
  async run(value: string, args?: string[]) {
    console.log('asiyap ' + value);
  }

  help = {
    name: "asiyap",
    description: "asiyap",
    usage: "asiyap"
  }

  conf = {
    aliases: ["a"],
    cooldown: 10
  }
}