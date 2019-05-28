import { Classes } from '../@types/Classes';

export default class Test1 implements Classes {
  async run(value: string, args?: string[]) {
    console.log('tes ' + value);
  }

  help = {
    name: "tes",
    description: "tes",
    usage: "tes"
  }

  conf = {
    aliases: ["a"],
    cooldown: 10
  }
}