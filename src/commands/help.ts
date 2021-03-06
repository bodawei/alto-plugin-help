import {Command, flags} from 'alto-command'

import {getHelpClass} from '..'

export default class HelpCommand extends Command {
  static description = 'display help for <%= config.bin %>'

  static flags: any = {
    all: flags.boolean({description: 'see all commands in CLI'}),
  }

  static args = [
    {name: 'command', required: false, description: 'command to show help for'},
  ]

  static strict = false

  async run() {
    const {flags, argv} = this.parse(HelpCommand)
    const Help = getHelpClass(this.config)
    const help = new Help(this.config, {all: (flags as any).all})
    help.showHelp(argv)
  }
}
