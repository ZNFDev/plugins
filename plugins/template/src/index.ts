import { Plugin, SendCommandEvent, EventListener } from 'vendetta';

export default class HelloPlugin implements Plugin {

    initialize(): void {
        // Register event listener for command handling
        this.getEventManager().registerListener(SendCommandEvent, this.onSendCommand);
    }

    private onSendCommand: EventListener<SendCommandEvent> = (event) => {
        const args = event.command.split(' ');
        if (args.length > 0 && args[0].toLowerCase() === '/hello') {
            // Check if the command is /hello
            event.cancel(); // Cancel the original command execution
            event.client.getDisplay().sendMessage('Hello from Vendetta!'); // Send a custom message
        }
    };

    dispose(): void {
        // Clean-up code when plugin is disposed
    }
}
